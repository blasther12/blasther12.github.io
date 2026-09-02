const CACHE='rafael-hub-v1';
const SHELL=['/','/index.html','/spaces.json','/manifest.webmanifest','/assets/images/portal-mark.svg','/assets/images/portal-icon-192.png','/assets/images/portal-icon-512.png','/assets/images/portal-apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==location.origin)return;
  const allowed=url.pathname==='/'||url.pathname==='/index.html'||url.pathname==='/spaces.json'||url.pathname==='/manifest.webmanifest'||url.pathname.startsWith('/assets/images/portal-');
  if(!allowed)return;
  event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));
});