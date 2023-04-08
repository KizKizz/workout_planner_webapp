'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "63bd0a937754d50065638461d5591f7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "88d4ca5ddf1ebf3315aa8e31462f84b3",
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
".git/index": "6156a1f9c7b7a1a94bcd1ce6536569ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2893d48ea4915595007b39f984d942f7",
".git/logs/refs/heads/main": "aa5110a2107666a5bcbd89abadcdde5f",
".git/logs/refs/remotes/origin/HEAD": "ec6c5d4875fef4114d929dbab77a48f4",
".git/logs/refs/remotes/origin/main": "0d43bf4a06d1816802d6a387d301ecc6",
".git/objects/00/b3da8be1f7e818846a3013cd4378cc8a9fc1a9": "4955ac0b5b9737b88fddb8c681ec149f",
".git/objects/07/b08380693cbdfe5cac1d99efd3f155f38fa7a7": "6d732d3bd59653e21e01d058a89e483b",
".git/objects/08/ca45ab4d09cf28ba1f5a8936065e943e102758": "8964a18adf4e2db8a594beb3372da581",
".git/objects/10/ac96519a219c6a9f385c8b2451ff6c753cab32": "7f92243354a3670cc27fd0cb8d37ede8",
".git/objects/11/471ea64efa0317aa76d2714e3b0f28c2fcf253": "1ad841609a2d862564fe1f774f79b27e",
".git/objects/17/ac1c3ba7205723e6e3341e37cfc70cba17e9e0": "6099005d67c9217bfc1f57fd9f8ea70f",
".git/objects/19/3634502885481e9bd7f96b7f4b2984675c121b": "0920a7f0f595c4496bb11bfa0f3eb8e8",
".git/objects/23/330a7ef85f1e4ceb50a51682ce3bbbcb14ab72": "2cadbe51e8cdde14991b134dfd93a6ef",
".git/objects/2e/b1ba6fd8590ccb7c13b5c8b4c73e40ef6de4be": "c367e873ce7634cd873f1874991d0189",
".git/objects/2f/72e3f2187007db88547e246f8ce78c4fdfa4e3": "7dab05aff187a752ee61831ad5cdf3ad",
".git/objects/31/50e45dd0e8f40db2bfdb0b3e1d01afb5838e0d": "b9140967b1ecc8f49df01ef2e873a262",
".git/objects/32/b247879327d869861962f20788e01f84876c57": "ca92cc4c8b60681697af374c4c1533a1",
".git/objects/34/51277ad9c9b08ba4fa3fe5ef19f988c337d2fa": "2a0a4ebc05c6e26937738b1156494065",
".git/objects/41/b5a3d9584701909dde7f4cf7ae32e7216d0f3c": "10d6f89fb1eeadbab528c2465d3fc614",
".git/objects/46/4718694b59169c4ce5cee28390887ba877c75b": "cf79f68d2ee13c904a9626e4c5ace8e4",
".git/objects/48/eb0733b946b85db4d9757ad7d731e1c4ca76c4": "7a9982c66a4a53104f88b7ffcce9496b",
".git/objects/4c/01d72933b37c19039f873dd0a5ca2167a53845": "3bb773f1ff874d05ce4167fa1790b289",
".git/objects/4d/37180b5eb41c18d0f73b51800e684292d31b92": "6884f559830dc89d160fa800e6d8e599",
".git/objects/58/208def0ebbdaa3414b859920e9be83f0e41844": "0cea64c62f5fa5940f1c75f45f90bd6d",
".git/objects/60/7069fedf7a6b6723fde32e3bba400bbc30abfe": "b54a477b3cafb837709dc6943dc37f08",
".git/objects/60/b393165e42d3f41dff390e5a03479183c58a87": "ea3ff0635659b75cf3df6da9a32f7d98",
".git/objects/62/07a6a5a84d5774ab85a8747051dac613f9b56f": "382bfe2336181369b93cf1581021028d",
".git/objects/63/6db30f99607cd8faea7ae7788997222c216bf7": "55ee62d264cc9d2eb19b8acf99861ad7",
".git/objects/69/5b6a18eef9251e144411fb288472e76c86948c": "2b7c8a05412ef3326139939b7a94aaa7",
".git/objects/6a/1a835f84221d9da27b9d468ab50b437ffb6551": "ca0a8df48ff9dec4d31eec36477f48f2",
".git/objects/6e/3891d661b8d6318b0ab5daa0e6f15486fc505d": "09c9c453eefb652c3149f1c772c55fe2",
".git/objects/74/d839b4fc922f6ab9b808ade5e1f9485db6c735": "114049f317f8cc2f205aa4c4177e15f1",
".git/objects/7d/c95584342f60370ac699298f313ae5634bc565": "33dfceb2ae3a0d0ebffc3262b8a49946",
".git/objects/80/408574a8c3036d1d70d44e7eced8a3cf1e0354": "3a6f12c5473b3cec45c97bbc89aefcb1",
".git/objects/82/0d1b23ac569f91745a2078312a8d5a94a1715e": "3310f89e45aa04e02aeb3ab9955b2ae8",
".git/objects/83/8f85e6e4a58d1cf3b6addb1719683ae32a8640": "ddd52f91ac62dd4a4082cba0eeb7f632",
".git/objects/86/00b95579585927ad852079f5fcb0b9e067b2df": "0782cbbd49f80375299b74da271b0969",
".git/objects/8b/67c53f8cb4d6bbe76c1f8e3f72e42dff1a155e": "fa8f0e5eefcc50f289c1797b1ff3762e",
".git/objects/97/47b96b177382904630db46f2a3b7762fb4505a": "6e457c4e91fc9628a790f97b516beaf9",
".git/objects/9c/eecc0c58d8af8b3dcec514f3faf465329e1035": "6c7ddd9e10fc12d7d4967e1dd1fca256",
".git/objects/a1/1b53e2bcd8155e50e8ac7dc507b9e33186e9e2": "b185f36cc984b319d9b2d731c6b949f8",
".git/objects/aa/2388cc7dc6b577cbb3b8d829473708186220de": "f51cfac9df1c3a7d9217d084e90f9b3e",
".git/objects/ad/5ba9e9635bbae7308708cf4126812406ffcbd2": "35af06cd2ca7ffe7bb392f4be7972801",
".git/objects/c2/fcabbf0c60f2530804966fe791c8dfd25a4d78": "395ebec8799e504c7ad9f2f5c92d3ea2",
".git/objects/ca/a5eb8a71b962064dc99c9bf2fcea8aa0cbba2a": "a946d7f075d490928bc78ae5d65afabf",
".git/objects/db/02c2c30a0866f4c37404c2f866012d480c0688": "3f8dbc1c08ddb19f9020f0be6349b952",
".git/objects/de/cbd6e084f6843855bf68d7d692fa0953bd1ddc": "a4a35f336c2e9dc0ab743c49c151f08f",
".git/objects/f5/52b28986a538a6f9b105495169e3924b004021": "06598ce0076fb309ee6d68c02e8afd15",
".git/objects/f8/719b0bd909201f2667cd52930b0d4b0d609b43": "a968d3d67ac9f7f317e2a31793c989e0",
".git/objects/f9/0ea22a288bfcc697c7c35235ecbfeccebdf3ff": "d22d5b119817b38027403132fb74f7fb",
".git/objects/f9/528249811bac2cf8da3f4cdf8f30c2e5ee95bb": "b178f5f12d2530a1d8f702c0e158af92",
".git/objects/pack/pack-23aa09ad078a600cb8a264f865daf9e0cf491c9e.idx": "cc9157aa44170efb9d6cce5067a931a2",
".git/objects/pack/pack-23aa09ad078a600cb8a264f865daf9e0cf491c9e.pack": "cb2a540d3dd2515d13137ea1384c2135",
".git/objects/pack/pack-b126ea8ff417f6eb0658f1d6c0287b5cbe0da2fe.idx": "d5cbc9ce0bc96152ffbd989dd43ead67",
".git/objects/pack/pack-b126ea8ff417f6eb0658f1d6c0287b5cbe0da2fe.pack": "a64d020cdf6fb577743f86e6b0012c2e",
".git/ORIG_HEAD": "186cd7ec51d0fb34264c3ea7236a7aa0",
".git/packed-refs": "168bf09661d6e64f9b3ca07b800c3753",
".git/refs/heads/main": "283076da33ba42030b6015e33d9b37c7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "283076da33ba42030b6015e33d9b37c7",
"assets/AssetManifest.json": "d66c60abb7e6ad54a7fedbd547d8c3cc",
"assets/assets/images/abs.png": "17fd13f0bd9434a831eee9a1c6aa87ee",
"assets/assets/images/applogo.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"assets/assets/images/arms.png": "27d36c362b72b5448dd49a4ec622dba5",
"assets/assets/images/back.png": "a0bc6773daa5bac4b5f06d15462e5b87",
"assets/assets/images/chest.png": "586bac3e715fd7f47a785a6541571e62",
"assets/assets/images/fullbody.png": "2d96c207cf40f901eb29e008522ac1ba",
"assets/assets/images/legs.png": "0529b1d1b2f8ace0b3f2df5e6ae6f542",
"assets/assets/workout_instructions/abs_bm_ne.txt": "df4b52c3fec6bf89f93ae19700e7998d",
"assets/assets/workout_instructions/abs_bm_we.txt": "10179173374af5051525b9c48fcbce20",
"assets/assets/workout_instructions/abs_lw_ne.txt": "5136afc72956f598e65a92d093e9c863",
"assets/assets/workout_instructions/abs_lw_we.txt": "1dc3e6699b6f98c7885f1f94892de50a",
"assets/assets/workout_instructions/arm_bm_ne.txt": "2f647f5182e1808c222f274cfadaa957",
"assets/assets/workout_instructions/arm_bm_we.txt": "f7d09243dcd9b187da85d88c82388603",
"assets/assets/workout_instructions/arm_lw_ne.txt": "ef48b8d4085c6b5e846de4588dc500b4",
"assets/assets/workout_instructions/arm_lw_we.txt": "ff2486264221d0e763bb3ea6fec684ec",
"assets/assets/workout_instructions/back_bm_ne.txt": "6e3bd56b99edfb7bdddb2c259156a49a",
"assets/assets/workout_instructions/back_bm_we.txt": "6e548cbca42d4535d10395ff2e4fc297",
"assets/assets/workout_instructions/back_lw_ne.txt": "3e2f7d88f08b5fb7893bff137be1b1b3",
"assets/assets/workout_instructions/back_lw_we.txt": "f77570055c2fbabfaa9e8d4f7e9943e7",
"assets/assets/workout_instructions/chest_bm_ne.txt": "5a3f30f6eb6f97889f54fe6036c2f0e3",
"assets/assets/workout_instructions/chest_bm_we.txt": "d962e963afb12bb48453caaa7aad652e",
"assets/assets/workout_instructions/chest_lw_ne.txt": "5749877fc1a1880cfd2a10551ce526c1",
"assets/assets/workout_instructions/chest_lw_we.txt": "98ba4ebf7a725721636b87e9a43ff990",
"assets/assets/workout_instructions/fullbody_bm_ne.txt": "f1a961cd8088a7abe1ef2c30153e6878",
"assets/assets/workout_instructions/fullbody_bm_we.txt": "e6229d647655b58fd291987b9b1e3cd8",
"assets/assets/workout_instructions/fullbody_lw_ne.txt": "5749877fc1a1880cfd2a10551ce526c1",
"assets/assets/workout_instructions/fullbody_lw_we.txt": "6fa379df452c5c4e7812f5524863162a",
"assets/assets/workout_instructions/leg_bm_ne.txt": "de15b0982a30556861976e09829597c9",
"assets/assets/workout_instructions/leg_bm_we.txt": "57cd454b77ceab1d2a3ebca32bd4e710",
"assets/assets/workout_instructions/leg_lw_ne.txt": "4052eeab6ec590242055e6ae4ff044b3",
"assets/assets/workout_instructions/leg_lw_we.txt": "d614682f181a869ee37933ea2e501d52",
"assets/FontManifest.json": "87e04ddd47dc3c85e29dd1916b289700",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5090393473bac29eb59ddd36e56109fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-512.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-maskable-192.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-maskable-512.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"index.html": "8730a55807918d8b2735ad88f8e1a50f",
"/": "8730a55807918d8b2735ad88f8e1a50f",
"main.dart.js": "d1dfb2caa03664c3fa5e97635a45f8c9",
"manifest.json": "fa9065f22383c7fa8dc820b3568553b4",
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
