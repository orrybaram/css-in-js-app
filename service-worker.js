"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","a85341b19a09a1cdb2bfdc26c21c5b22"],["static/css/main.016c5175.css","16436faeb394c3a32ea967f69ed65cbf"],["static/js/0.55c65771.chunk.js","17b86aacc4c129f018da03ac674712f5"],["static/js/1.a7007f30.chunk.js","e16392735420d304a2e2edf62edb1855"],["static/js/10.d65da8d6.chunk.js","ef328a78d094c5b4c6e6d0d96c6d7b1c"],["static/js/11.753a2c1a.chunk.js","a30ddee8e8d0810b17217e19887a30ba"],["static/js/2.77b05234.chunk.js","08f8a225f7928b6bea741b62a6a89d76"],["static/js/3.a63e2a0c.chunk.js","1963c2d5052c60fd70e41209b28ac419"],["static/js/4.ccccd17a.chunk.js","738fdfd9e843c537eeac4a3916e0f183"],["static/js/5.9de787c3.chunk.js","dac4b5111d9ceac99fe39b8b853d3c31"],["static/js/6.4216bb46.chunk.js","861d361521febbf7bdc4bc814134b621"],["static/js/7.c1d316b8.chunk.js","abbff74e59fdee01e7403e8164baa99d"],["static/js/8.ab97d5a5.chunk.js","a97b85181fd02f88e6841cfd8ec20319"],["static/js/9.9bcecb32.chunk.js","1008ca23474281497ce2fec2e89aac7d"],["static/js/main.35bd522c.js","6fbc6776df8a05a6f621332fa748c15b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/css-in-js-app/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});