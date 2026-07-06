// カモのことだまクエスト service worker — offline play.
// Core files: network-first (updates land immediately when online).
// assets/: cache-first (immutable art/audio, ~30MB over time).
const CACHE = "kamo-v1";
const CORE = ["index.html", "data.js", "quests.js", "assets.js", "game.js", "manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  const isAsset = url.pathname.includes("/assets/");
  e.respondWith(caches.open(CACHE).then(async c => {
    if (isAsset) { // cache-first
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    }
    try { // network-first for core
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    } catch (err) {
      return (await c.match(e.request)) || (await c.match("index.html"));
    }
  }));
});
