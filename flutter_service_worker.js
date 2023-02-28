'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e478b845d044f881af00071e46f9e5e2",
".git/config": "63bd0a937754d50065638461d5591f7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1388a126c2c470cc6ee822476c2b0289",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c302b3587e2c0b6fb1a9d50d3c7853e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12f988a1f6a28526928c4fed70d6fc2c",
".git/logs/refs/heads/main": "12f988a1f6a28526928c4fed70d6fc2c",
".git/logs/refs/remotes/origin/HEAD": "2bc63b877f05a7fa10a3c1228ae3dde6",
".git/logs/refs/remotes/origin/main": "9cec52a2b8adfa848f22f26fcafead3f",
".git/objects/10/b6fc506b7920be170c13f319de3d5c5fb318ba": "c11c67cbb6f77af0733cc9d42722896a",
".git/objects/14/74dd87e08848998ef57e10835fe87587edf2de": "0d53eab1044defb7af83ba832c89bdf9",
".git/objects/20/8aaed2db97052827db3630bfcddbff6cf05fbe": "8e69de8187a85407c3c3f7a15e53d781",
".git/objects/39/4d4b51372274c5b4eca02996834e567e20add8": "dc8f27240e181ab735585ead389cc642",
".git/objects/3e/a3be87e75ba73a224ab98eddec45f971a08877": "04feeb16b2cda82c01e73f943e2f6356",
".git/objects/44/6ffb3a41617d17695a0dc7c7e2ebf6b06eeb8f": "1a35da9138219f304c38be90e38baaf3",
".git/objects/51/3b087cf5df00cd4d795a8a427b308bb1ca8c28": "8b4301f3a7482c7a1254aa286185d064",
".git/objects/57/407d12837279d08a6a54800a2afd6fc6e4a90a": "7898dbde8e7dc22671a045052234ed01",
".git/objects/5c/d13e446f974ba29ab0f032f99a1a4b46befbe9": "6d8eb09f682b512c80353a5fb3bc8af1",
".git/objects/62/9a4cf3f42a801e1aa2276f82dfbe334485565e": "7654f81e38546ca2ff573c8c635d8f0b",
".git/objects/67/9f7fd289bf581b13b1833153c66add0bbcb827": "cc78a799041e9934ba06a296d3663ebd",
".git/objects/79/8442b549a0b649add065a84d30167d36aa8f37": "5a2031053acc1f5bfb22a766c99d8bd1",
".git/objects/7c/96b429ece3471ace43ceadbfbe3a574e50b951": "743e53b671c33447e7008a2cd766030c",
".git/objects/8a/8255360179014482385027dead71c5eabd9f50": "aae8c8b77345e3cf2e36cf757b9560e6",
".git/objects/b1/08d6570a2582de91d563a93777866dacdfe89b": "d2d3090f46137f036c05201aa16e3e37",
".git/objects/b2/63ac121c6dd1a930ea59f385959ff432bbac2f": "62593196040eb2b0e3de8972c87691b9",
".git/objects/b7/224c87ea6c3d47316f24676dcd99e662e0e1bf": "dcf5b7a81cdacea35b238db944f10cbe",
".git/objects/c6/322881bbace09d8e159eac34f185794fde91c8": "82b3abc620f295761fbd77bb26d9ae75",
".git/objects/d1/bb7ef3a5036dcc825d44594211ff5b064c9568": "6b0b03dc8033de71db65f91cca412dae",
".git/objects/d2/7e82a01eb948a3a4a2ff95c6d317cc7d2600d0": "394d009781d27ae0a0c79712c6e01268",
".git/objects/d2/edcbd0d8de01298fa532d18ac6698b024d9d2f": "e47daaf6e919b824bc87cfc07dc99f8d",
".git/objects/d6/b41952fba095d1dfd77247194de7a7658cab8e": "1816d50f8aabb1e2ae358c1272bc5dd4",
".git/objects/de/04387811bd13524ab30762d6e9f3b3dc1039a5": "2c84179d7227b31bbedd7d28c4e3e7bd",
".git/objects/pack/pack-06d24929fa50d7cb328425c4bb13ad9bb184a3de.idx": "0b7617c8f15b05a1aa054496ebfe8141",
".git/objects/pack/pack-06d24929fa50d7cb328425c4bb13ad9bb184a3de.pack": "ac751076ae618bf6a4d49335d77546d6",
".git/ORIG_HEAD": "4077af13af584c92d428cd1006d9d0f4",
".git/packed-refs": "0cb7a07ed896769d359a3e4b3ffd6f0e",
".git/refs/heads/main": "852fcc6401f0b012e5d771781317569a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "852fcc6401f0b012e5d771781317569a",
"assets/AssetManifest.json": "70799cd4650230d8ba815fa41240414d",
"assets/assets/images/abs.png": "17fd13f0bd9434a831eee9a1c6aa87ee",
"assets/assets/images/arms.png": "27d36c362b72b5448dd49a4ec622dba5",
"assets/assets/images/back.png": "a0bc6773daa5bac4b5f06d15462e5b87",
"assets/assets/images/chest.png": "586bac3e715fd7f47a785a6541571e62",
"assets/assets/images/legs.png": "0529b1d1b2f8ace0b3f2df5e6ae6f542",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "61e7cb29895115ad3ace928e942ca0e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c27ef672fbb63f94b4c156d5a970f8e6",
"/": "c27ef672fbb63f94b4c156d5a970f8e6",
"main.dart.js": "e0f0c0f032b5a4e167250656dbd8c96f",
"manifest.json": "fa9065f22383c7fa8dc820b3568553b4",
"README.md": "9de009a35b47251f8414fb2807433b9e",
"version.json": "ae021c5ba489b85fe1aa5784c5e430ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
