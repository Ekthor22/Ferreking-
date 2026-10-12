/* Service worker del Catálogo Ferreking.
   - index.html: red primero (revalida con GitHub; si no cambió, responde 304 sin descargar los 5 MB). Sin internet usa la copia guardada.
   - íconos/manifest: caché primero.
   - fuentes y JSZip (CDN): usa la copia guardada y la refresca en segundo plano.
   - WhatsApp, Apps Script y demás: pasan directo, no se tocan. */
var V = 'fk-v1';
var SHELL = ['./', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
var CDN = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(V).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== V; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

function put(req, res){
  if (res && (res.ok || res.type === 'opaque')){ var cp = res.clone(); caches.open(V).then(function(c){ c.put(req, cp); }); }
  return res;
}

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  if (req.mode === 'navigate' && url.origin === location.origin){
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(function(res){ return put('./', res); })
        .catch(function(){ return caches.match('./', { ignoreSearch: true }); })
    );
    return;
  }
  if (url.origin === location.origin){
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(function(hit){
      return hit || fetch(req).then(function(res){ return put(req, res); });
    }));
    return;
  }
  if (CDN.indexOf(url.hostname) >= 0){
    e.respondWith(caches.match(req).then(function(hit){
      var net = fetch(req).then(function(res){ return put(req, res); }).catch(function(){ return hit; });
      return hit || net;
    }));
  }
});
