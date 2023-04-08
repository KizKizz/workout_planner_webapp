'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b065068b02553178ff8a8cb55e6c72e1",
".git/config": "63bd0a937754d50065638461d5591f7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3ad8428a0df4085359a82639378762b9",
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
".git/index": "7456f48e55b1bff24bfc78bc3603c628",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc89476280f2a255c1d372327d1c45f9",
".git/logs/refs/heads/main": "bc89476280f2a255c1d372327d1c45f9",
".git/logs/refs/remotes/origin/HEAD": "0aa04247a1f33f84d62efff92489ca1b",
".git/logs/refs/remotes/origin/main": "994b2bc0c33a71c52f3bb271c0977408",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/d50288b739e2775ca8beba8ab3e2ec9ba48e50": "dd8c768df436d1fae73ef490fc39e54a",
".git/objects/05/7a788e820a54f7791f8a5914b4892320011d33": "9433db7b210f2221eb2b9a664f766899",
".git/objects/0d/f0b23d85b6ae40ac27951cd47e443915873790": "a5354fd77d439224e10ebbc64b2123dc",
".git/objects/15/76b8cafedd31a1865e3b53d2e0134e9fd3ca51": "0f213af756d712dcef40c7af76f1f439",
".git/objects/1c/e82c620f8576aebe05e1302ff8b0b4aabc22ab": "c2645204c9e2366e5b926f4ca9409874",
".git/objects/28/70b832779f629b458cdca0c70bcbf9c0edf06e": "cfb864c2de80d8f7a557ffcda58a411d",
".git/objects/2d/6b695fbcd6f26181cc02f487b1313c1618a4d6": "fc2f762b00276d6b72c8081127164b12",
".git/objects/2d/b605f542c4ee36203d1f7a160ca0e35ad9981e": "816b4075e37002afe0136215ef28613a",
".git/objects/2e/82b1b917eb4aef38829a413fdf84efdf0795d8": "15f097846f106da32511b09e749e988c",
".git/objects/2e/b5e2ffa65537c4fa8652ad68e0bbe8e45df173": "f7d8b0944741723bdc25c8fc29a36fed",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/36/2e01f58685b273ed47ad2fc3f52d399e640fcc": "db73618e52a97422248bf9f7be776618",
".git/objects/38/ed4b9638222c0eaba3ac2c20218cc684f25de9": "07bef60d2f710dba5111f9dff25538fc",
".git/objects/3c/0d36e23a8f371fe30df01ee03bc2fd92b178e2": "af02a092f0c1f94b1b8d0404fdb812e4",
".git/objects/3f/5a46c702a9021564f8773147d3748a8682f616": "50f10cadd5e7651f941111788bdc0bd9",
".git/objects/45/b79596c21f07e5a148e424dbbe2bf1d6bb3fd9": "28b9fe3a132389f4e9df72916eb5506a",
".git/objects/46/4718694b59169c4ce5cee28390887ba877c75b": "cf79f68d2ee13c904a9626e4c5ace8e4",
".git/objects/48/eb0733b946b85db4d9757ad7d731e1c4ca76c4": "7a9982c66a4a53104f88b7ffcce9496b",
".git/objects/4a/a1ab68bcd6109401fe3c4e47182509547feabd": "a1d491a7e365da41156dc5a3f5608ec7",
<<<<<<< HEAD
".git/objects/4c/41ebf99aed252bc04fdea9dec59d8dd4db8a5d": "b1bd4722e2c31225c75e0e02c70ca569",
=======
".git/objects/4c/01d72933b37c19039f873dd0a5ca2167a53845": "3bb773f1ff874d05ce4167fa1790b289",
".git/objects/4c/41ebf99aed252bc04fdea9dec59d8dd4db8a5d": "b1bd4722e2c31225c75e0e02c70ca569",
".git/objects/4d/37180b5eb41c18d0f73b51800e684292d31b92": "6884f559830dc89d160fa800e6d8e599",
>>>>>>> 5ab5c19d072b51dd264738370ee73fbab5f6cd74
".git/objects/50/76bc146b5c00986fabf0a90976a5ae4ef09495": "5710f8f1ab3e0d9400ecb1a02fc98269",
".git/objects/51/cfc53dac8476d3ce578bdc0b17b7ce006c6d50": "5e1ef2c850f621ff99cce0aeffbea8ea",
".git/objects/58/208def0ebbdaa3414b859920e9be83f0e41844": "0cea64c62f5fa5940f1c75f45f90bd6d",
".git/objects/58/84b9f7373f3706db831f368e7e78b46c0eb968": "8e64b1ce8d50a4a25e1f905abec8a5c0",
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
<<<<<<< HEAD
".git/objects/8c/fd76f6c5a855987634da879545b59ad0c3a1b2": "9578fee5ee4ebda0b3bbcd7baefae515",
".git/objects/95/1e24c7d0137075663893c9c7493be072a0e844": "4b3708332f79f53b84b004561e9b3876",
".git/objects/9b/5f95b8591846e1b096813de5c1311e15a1b27d": "e14d45b459d6c244b713bc9a31a7dc39",
".git/objects/9e/c6963c309d59d63ad7a33957dfeac55bf6ab14": "e284ad666c74cdbecec84d0cadaefb2a",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/64b721138dde6e4496f7c3fcf130ae3a8c8741": "c7247c5983bbe19f766229afe878da6d",
".git/objects/a8/9fed6b4ccd740b85cf694ece67b5d81d778c03": "14b5e226ea4449492d7e925d3a0122b1",
".git/objects/a8/ba9cda778ff62dd6cb52743844a177d74d5c98": "770f65aab085af6924829db2ceaf5409",
".git/objects/ad/cedd953342188ef97383da4b32282bd4afd0c9": "95b0734b26040e9c5eb779d62329d6cd",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
=======
".git/objects/95/1e24c7d0137075663893c9c7493be072a0e844": "4b3708332f79f53b84b004561e9b3876",
".git/objects/97/47b96b177382904630db46f2a3b7762fb4505a": "6e457c4e91fc9628a790f97b516beaf9",
".git/objects/9c/eecc0c58d8af8b3dcec514f3faf465329e1035": "6c7ddd9e10fc12d7d4967e1dd1fca256",
".git/objects/a1/1b53e2bcd8155e50e8ac7dc507b9e33186e9e2": "b185f36cc984b319d9b2d731c6b949f8",
".git/objects/aa/2388cc7dc6b577cbb3b8d829473708186220de": "f51cfac9df1c3a7d9217d084e90f9b3e",
".git/objects/ad/5ba9e9635bbae7308708cf4126812406ffcbd2": "35af06cd2ca7ffe7bb392f4be7972801",
>>>>>>> 5ab5c19d072b51dd264738370ee73fbab5f6cd74
".git/objects/b7/8b0d4cd10289906ac86ba325f7cddf72b6e28d": "b227e81a8323b8b3a933e3cacb289495",
".git/objects/bb/42e6293cdb71b8ac99aff09056101708a6d746": "9ab387fc800f663f96f8675847c9fc19",
".git/objects/c2/fcabbf0c60f2530804966fe791c8dfd25a4d78": "395ebec8799e504c7ad9f2f5c92d3ea2",
".git/objects/ca/a5eb8a71b962064dc99c9bf2fcea8aa0cbba2a": "a946d7f075d490928bc78ae5d65afabf",
".git/objects/d3/a36e27d35820dae8e2f8ec2bf30987a791cb01": "705f17a2bfa28062c1079e1440c52356",
".git/objects/db/02c2c30a0866f4c37404c2f866012d480c0688": "3f8dbc1c08ddb19f9020f0be6349b952",
".git/objects/db/cfdd7bdabe18a33e5b69419778e645aeb4014d": "9276dc4852c3241b84ee1e51c83b021f",
".git/objects/de/cbd6e084f6843855bf68d7d692fa0953bd1ddc": "a4a35f336c2e9dc0ab743c49c151f08f",
".git/objects/e0/a655683c6e486146571c12380cddde442f0cae": "ed499df3452fb594c9328274374c38c2",
".git/objects/eb/352eb01811493df58c2cd74e615659758e53e3": "d45c1e0cb0d131535ef502d7acc91124",
<<<<<<< HEAD
".git/objects/ed/040552bfe946840a79bc2c68c568d180aad54a": "981f0e3a73add8e66db8d2942ec2f96b",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.idx": "6b7c923b30425f21faa56d7bfabfbbd0",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.pack": "ab4cc2e11fc63e87aa7c15fe3bebfeb5",
".git/ORIG_HEAD": "87310ba9bbdac215537e0a544d9f88bd",
".git/packed-refs": "7172c103c4f3691f7da87a580657c424",
=======
".git/objects/f5/52b28986a538a6f9b105495169e3924b004021": "06598ce0076fb309ee6d68c02e8afd15",
".git/objects/f8/719b0bd909201f2667cd52930b0d4b0d609b43": "a968d3d67ac9f7f317e2a31793c989e0",
".git/objects/f9/0ea22a288bfcc697c7c35235ecbfeccebdf3ff": "d22d5b119817b38027403132fb74f7fb",
".git/objects/f9/528249811bac2cf8da3f4cdf8f30c2e5ee95bb": "b178f5f12d2530a1d8f702c0e158af92",
".git/objects/pack/pack-23aa09ad078a600cb8a264f865daf9e0cf491c9e.idx": "cc9157aa44170efb9d6cce5067a931a2",
".git/objects/pack/pack-23aa09ad078a600cb8a264f865daf9e0cf491c9e.pack": "cb2a540d3dd2515d13137ea1384c2135",
".git/objects/pack/pack-b126ea8ff417f6eb0658f1d6c0287b5cbe0da2fe.idx": "d5cbc9ce0bc96152ffbd989dd43ead67",
".git/objects/pack/pack-b126ea8ff417f6eb0658f1d6c0287b5cbe0da2fe.pack": "a64d020cdf6fb577743f86e6b0012c2e",
".git/ORIG_HEAD": "1ffb7c947535611556c38fc00956a86a",
".git/packed-refs": "168bf09661d6e64f9b3ca07b800c3753",
>>>>>>> 5ab5c19d072b51dd264738370ee73fbab5f6cd74
".git/refs/heads/main": "239d7a5c5b42a30d59057789fa4b4ee3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "239d7a5c5b42a30d59057789fa4b4ee3",
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
"assets/NOTICES": "7539e8719f6ec710d1928762a29d3824",
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
<<<<<<< HEAD
"index.html": "6a033dc3e3a6c7efd1319887ad5cb206",
"/": "6a033dc3e3a6c7efd1319887ad5cb206",
"main.dart.js": "073da40491cbae66e5bd43a71e829563",
=======
"index.html": "cb918f71bac877d1b7ab37e03cf1190a",
"/": "cb918f71bac877d1b7ab37e03cf1190a",
"main.dart.js": "eca9aa3b5314367553b35a2bf26983ed",
>>>>>>> 5ab5c19d072b51dd264738370ee73fbab5f6cd74
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
