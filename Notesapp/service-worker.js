const CACHE_NAME='my-cache';
const urlstoadd=[
    '/',
    'index.html',
    'main.js',
    'style.css'
];

self.addEventListener('install',(event)=>{

    event.waitUntil(caches.open(CACHE_NAME).then(
        (cache)=>cache.addAll(urlstoadd)
    ));

});

self.addEventListener('fetch',(event)=>{

    event.respondWith(
        caches.match(event.request).then(
            (response)=>response||fetch(event.request)
        )
    );

});