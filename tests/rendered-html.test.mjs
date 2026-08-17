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
    ["/resources", /Generative AI tools for writing instruction/],
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

test("server-renders every partner organization profile", async () => {
  for (const [path, expected] of [
    ["/organizations/uc-irvine-digital-learning-lab", /Digital Learning Lab/],
    ["/organizations/mdrc", /Center for Data Insights/i],
    ["/organizations/american-council-on-education", /Global Data Consortium/i],
    ["/organizations/california-community-colleges-foothill-de-anza", /Digital Center for Innovation, Transformation and Equity/i],
    ["/organizations/virginia-community-college-system", /network of 23 community colleges/i],
    ["/organizations/houston-community-college", /open-admission, public institution/i],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});

test("server-renders the newly completed people profiles", async () => {
  for (const [path, expected] of [
    ["/people/renzhe-yu", /AEQUITAS Lab/],
    ["/people/ryan-baker", /Adelaide University/],
    ["/people/charles-macarthur", /Supporting Strategic Writers/],
    ["/people/michael-hebert", /Writing Project at UC Irvine/],
    ["/people/jory-hadsell", /Strategic Technology Initiatives/],
    ["/people/justin-schultz", /Common Cloud Data Platform/],
    ["/people/di-xu", /Online Learning Research Center/],
    ["/people/alexander-mayer", /National Rural Higher Education Research Center/],
    ["/people/richard-hendra", /State IMPACT Collaborative/],
    ["/people/hironao-okahana", /Managing Researcher and Chief of Planning and Impact/],
    ["/people/penelope-collins", /linguistically diverse backgrounds/],
    ["/people/kristi-werry", /Software Engineer, Digital Learning Lab/],
    ["/people/steve-graham", /Regents and Warner Professor/],
    ["/people/anna-mills", /AI and College Writing/],
    ["/people/danielle-mcnamara", /Learning Engineering Institute/],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});
