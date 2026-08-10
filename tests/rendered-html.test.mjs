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
  assert.match(html, /Better writing starts with better questions/);
  assert.match(html, /Explore our research/i);
  assert.match(html, /AI Tools Database/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders primary public routes", async () => {
  for (const [path, expected] of [
    ["/about", /Writing still matters/],
    ["/research", /Building an evidence base/],
    ["/papyrus-ai", /helps students write/],
    ["/ai-tools", /Explore AI tools/],
    ["/resources", /Evidence made useful/],
    ["/people", /many kinds of expertise/],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});
