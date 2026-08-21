const baseUrl = new URL(process.argv[2] ?? "https://write-ai-website.writeaicenter.workers.dev/");

const seedPaths = [
  "/",
  "/about",
  "/research",
  "/resources",
  "/people",
  "/news",
  "/training-events",
  "/contact",
  "/papyrus-ai",
  "/ai-tools",
  "/newsletter/fall-2026-issue-01",
];

const pending = seedPaths.map((path) => new URL(path, baseUrl).href);
const checked = new Map();
const discoveredFrom = new Map(pending.map((url) => [url, "seed route"]));
const failures = [];

function enqueue(rawUrl, parentUrl) {
  if (!rawUrl || /^(?:mailto:|tel:|javascript:|data:|#)/i.test(rawUrl)) return;

  let url;
  try {
    url = new URL(rawUrl, parentUrl);
  } catch {
    return;
  }

  if (url.origin !== baseUrl.origin) return;
  url.hash = "";
  if (!checked.has(url.href) && !pending.includes(url.href)) {
    discoveredFrom.set(url.href, parentUrl);
    pending.push(url.href);
  }
}

function discoverHtml(html, parentUrl) {
  for (const match of html.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/gi)) {
    enqueue(match[1], parentUrl);
  }

  for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(",")) enqueue(candidate.trim().split(/\s+/)[0], parentUrl);
  }
}

function discoverCss(css, parentUrl) {
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    enqueue(match[1], parentUrl);
  }
}

while (pending.length > 0) {
  const url = pending.shift();
  if (checked.has(url)) continue;

  try {
    const response = await fetch(url, { redirect: "follow" });
    const contentType = response.headers.get("content-type") ?? "";
    checked.set(url, response.status);

    if (!response.ok) {
      failures.push(`${response.status} ${url} (referenced by ${discoveredFrom.get(url)})`);
      continue;
    }

    if (contentType.includes("text/html")) discoverHtml(await response.text(), url);
    else if (contentType.includes("text/css")) discoverCss(await response.text(), url);
  } catch (error) {
    checked.set(url, "ERROR");
    failures.push(`ERROR ${url}: ${error.message} (referenced by ${discoveredFrom.get(url)})`);
  }
}

const counts = [...checked.values()].reduce((result, status) => {
  result[status] = (result[status] ?? 0) + 1;
  return result;
}, {});

console.log(`Checked ${checked.size} internal pages and assets at ${baseUrl.origin}`);
console.log(Object.entries(counts).map(([status, count]) => `${status}: ${count}`).join(", "));

if (failures.length > 0) {
  console.error("\nFailures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
}
