import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) }, DB: {} },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the WRITE AI homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /WRITE AI/);
  assert.match(html, /Improving Writing Education in the Age of AI/);
  assert.match(html, /Explore our research/i);
  assert.match(html, /PapyrusAI/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders primary public routes", async () => {
  for (const [path, expected] of [
    ["/about", /About WRITE AI/],
    ["/research", /What generative AI tools are colleges using/],
    ["/papyrus-ai", /What Is PapyrusAI/i],
    ["/ai-tools", /Explore AI tools/],
    ["/resources", /Practical resources for writing and AI/],
    ["/training-events", /WRITE AI Fellows Program/],
    ["/people", /Mark Warschauer/],
    ["/people/mark-warschauer", /Role in the center/],
    ["/contact", /Stay Informed/],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});
