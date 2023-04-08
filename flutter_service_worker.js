'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "61b972d777a7cb2101e4a43b8501d792",
".git/config": "63bd0a937754d50065638461d5591f7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd7a951e5d58532fb3b0946d31de3401",
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
".git/index": "210e248a8a48240b4a8dc6af19f4bbf8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79f55df4ef13ba37e771f33787a4e30e",
".git/logs/refs/heads/main": "79f55df4ef13ba37e771f33787a4e30e",
".git/logs/refs/remotes/origin/HEAD": "ea563d110b0e142106979fd61bd634f3",
".git/logs/refs/remotes/origin/main": "9265d64540d51aabfff3dca7629bfb8f",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/d50288b739e2775ca8beba8ab3e2ec9ba48e50": "dd8c768df436d1fae73ef490fc39e54a",
".git/objects/05/7a788e820a54f7791f8a5914b4892320011d33": "9433db7b210f2221eb2b9a664f766899",
".git/objects/07/65e85e9b8e867ed20e3d57a668e5e006e5d150": "40684c2262d0214c7d4b43373efbf4be",
".git/objects/0d/f0b23d85b6ae40ac27951cd47e443915873790": "a5354fd77d439224e10ebbc64b2123dc",
".git/objects/11/b2fc5b391408be195819f324eecba04c8e1d81": "c756c6fe58012aa04d9fb2e9eef1b14f",
".git/objects/13/d1cb29e90b805b2fe3d3fda41941a02da05ba2": "af79afcf11699bd7975b06263ec929bb",
".git/objects/15/76b8cafedd31a1865e3b53d2e0134e9fd3ca51": "0f213af756d712dcef40c7af76f1f439",
".git/objects/1c/e82c620f8576aebe05e1302ff8b0b4aabc22ab": "c2645204c9e2366e5b926f4ca9409874",
".git/objects/21/0e2fd9be70f8e9448580673671c9172ab00c5d": "63a748a66a3333451dcdec3c879393ba",
".git/objects/26/a4b28edb0e032aa69bd88dcea11047a11e2103": "75375790fe6b8b10d0cef25865d9a343",
".git/objects/28/70b832779f629b458cdca0c70bcbf9c0edf06e": "cfb864c2de80d8f7a557ffcda58a411d",
".git/objects/2d/6b695fbcd6f26181cc02f487b1313c1618a4d6": "fc2f762b00276d6b72c8081127164b12",
".git/objects/2d/b605f542c4ee36203d1f7a160ca0e35ad9981e": "816b4075e37002afe0136215ef28613a",
".git/objects/2e/385d5f6ed2090aa5e4bcd5ed82cbeedfb4c3d5": "cc5293c80ef145df8a040cd922b517fe",
".git/objects/2e/82b1b917eb4aef38829a413fdf84efdf0795d8": "15f097846f106da32511b09e749e988c",
".git/objects/2e/b5e2ffa65537c4fa8652ad68e0bbe8e45df173": "f7d8b0944741723bdc25c8fc29a36fed",
".git/objects/31/f54ee3b477f2b8c18a1fa60346d36ea7a1e8b7": "011732f0164fe77503c9a6fb7436840f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/36/2e01f58685b273ed47ad2fc3f52d399e640fcc": "db73618e52a97422248bf9f7be776618",
".git/objects/38/ed4b9638222c0eaba3ac2c20218cc684f25de9": "07bef60d2f710dba5111f9dff25538fc",
".git/objects/3c/0d36e23a8f371fe30df01ee03bc2fd92b178e2": "af02a092f0c1f94b1b8d0404fdb812e4",
".git/objects/3f/5a46c702a9021564f8773147d3748a8682f616": "50f10cadd5e7651f941111788bdc0bd9",
".git/objects/40/f69c5a4eb2087fc60f084b0d968f1c13e18ee8": "2631ac65ae6dcf91b363e565f29a8569",
".git/objects/43/aa1e5a47bfc8fe905948511a5658ad58d7f874": "c62fc89515d4ca18c643a293f6b740f9",
".git/objects/45/b79596c21f07e5a148e424dbbe2bf1d6bb3fd9": "28b9fe3a132389f4e9df72916eb5506a",
".git/objects/49/dab360c3a95d115973cf6f7634c3d16c700575": "c747d6ab2a2e8306d783e4e83bb16aac",
".git/objects/4a/74f5a96a131488b2dc3edf96cc44b5d45e8db1": "b552982aff0d220db36c2c77c7d090d0",
".git/objects/4a/a1ab68bcd6109401fe3c4e47182509547feabd": "a1d491a7e365da41156dc5a3f5608ec7",
".git/objects/4c/41ebf99aed252bc04fdea9dec59d8dd4db8a5d": "b1bd4722e2c31225c75e0e02c70ca569",
".git/objects/4f/c6751e7b8fac2acb7247680f965e15a07e0c93": "4ff536bcb492d87770f1e8b396326b24",
".git/objects/50/76bc146b5c00986fabf0a90976a5ae4ef09495": "5710f8f1ab3e0d9400ecb1a02fc98269",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/51/5bc31407cbad531e26fe08a68a650f3171e1fc": "ff670bb7ef7757a6fdec227d8bd67411",
".git/objects/51/cfc53dac8476d3ce578bdc0b17b7ce006c6d50": "5e1ef2c850f621ff99cce0aeffbea8ea",
".git/objects/58/84b9f7373f3706db831f368e7e78b46c0eb968": "8e64b1ce8d50a4a25e1f905abec8a5c0",
".git/objects/5a/b5c19d072b51dd264738370ee73fbab5f6cd74": "8f32ba27ee312ec49c01271332242b02",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/68/000eeda1362d7c60556c1945b5f8431809ff29": "339f266f482c34178d91462269fa652a",
".git/objects/69/12ed605e6006879773dbfc5c75b27a2e557858": "80f47c86f20da3718fcdbf157671d810",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/71/4107711a66e95cf39cd502665e4e6bbcc3ef4d": "c17aaf1fffe5a6900b4606f6f62ccbe2",
".git/objects/77/2bc23a87811394e3993968899cb691112024e0": "1a56ff723dafefb28bc7a5db88bdcdd5",
".git/objects/7b/250dd7f2feb2d22466beb06d9bf64db7717ffd": "12ceae0f2cdb90b5a2d87471704e0a5c",
".git/objects/83/72c588e999af16244a13834ab021b1dec55236": "1fb15fb7dbd4fea37cf7c384f8fc253e",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/86/00b95579585927ad852079f5fcb0b9e067b2df": "0782cbbd49f80375299b74da271b0969",
".git/objects/87/20ad3e8b1198d1e7166a89f5f758714cf439cf": "89cc5247bf3fc03a4310212022ce38d5",
".git/objects/8b/67c53f8cb4d6bbe76c1f8e3f72e42dff1a155e": "fa8f0e5eefcc50f289c1797b1ff3762e",
".git/objects/8c/fd76f6c5a855987634da879545b59ad0c3a1b2": "9578fee5ee4ebda0b3bbcd7baefae515",
".git/objects/90/b4a0c76ca480b12c84b7a662ea393dac581e99": "a90e0787cbd88b6a3cf29e5fa0ec62cc",
".git/objects/95/1e24c7d0137075663893c9c7493be072a0e844": "4b3708332f79f53b84b004561e9b3876",
".git/objects/95/c2e8c49ba2b04458a0b8a169d1db4fff1d4de2": "6c41c1fdb5c9401450f8ad0bb2a4e2fe",
".git/objects/9a/c782c987a16ef06500d9ffcba8caf5d5ee361c": "20742623d596a58bf17b4b5e31077ccf",
".git/objects/9b/5f95b8591846e1b096813de5c1311e15a1b27d": "e14d45b459d6c244b713bc9a31a7dc39",
".git/objects/9e/8a9a7b7d6854948e4be1817b40d7a291c3900a": "976790b069fe6964353be15e614807c0",
".git/objects/9e/c6963c309d59d63ad7a33957dfeac55bf6ab14": "e284ad666c74cdbecec84d0cadaefb2a",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/64b721138dde6e4496f7c3fcf130ae3a8c8741": "c7247c5983bbe19f766229afe878da6d",
".git/objects/a6/6f551f97001bc6935fe6b385c7f45b69b8793c": "886381b252e8853502f91493f03436b8",
".git/objects/a8/9fed6b4ccd740b85cf694ece67b5d81d778c03": "14b5e226ea4449492d7e925d3a0122b1",
".git/objects/a8/ba9cda778ff62dd6cb52743844a177d74d5c98": "770f65aab085af6924829db2ceaf5409",
".git/objects/ad/cedd953342188ef97383da4b32282bd4afd0c9": "95b0734b26040e9c5eb779d62329d6cd",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b7/8b0d4cd10289906ac86ba325f7cddf72b6e28d": "b227e81a8323b8b3a933e3cacb289495",
".git/objects/bb/42e6293cdb71b8ac99aff09056101708a6d746": "9ab387fc800f663f96f8675847c9fc19",
".git/objects/bd/97da264f6f26ccabc9425f1147dfa588cc12eb": "024cbcd1f805f76c61a721491088445d",
".git/objects/bf/4ef66c3ea4ff493f45c06c2f03d329d4c2df6c": "d876565ccb5b0033dc89c8cc97487cc4",
".git/objects/c2/a64fa896f8f40c7159a73b289a520af757d94b": "fa03a37db38aace1c84fa6320c4b1fe1",
".git/objects/c3/5d63927b148fd3266f8d6b64376bed2830194a": "544e7f10788c9600bc2016b8380a25fb",
".git/objects/cc/1f3a60c5c21e44921d6a3f3cf0aa8fc550e514": "adba2a5788aecc9d741303d30ea5fec5",
".git/objects/d1/e6fa76db311bd9856a90d1021807b7b90f0666": "ddfe8b539c01b62116c03cd1d8fb4e8a",
".git/objects/d3/a36e27d35820dae8e2f8ec2bf30987a791cb01": "705f17a2bfa28062c1079e1440c52356",
".git/objects/d4/6964c848661ca6e0e06e560945b82bce641708": "4bd97a56bfaeddf7212556b154c90712",
".git/objects/d5/e1c81fa42c928bd8682307fe2c9476d45f6c9c": "f592cea7f78fbff12ec10b151cc9fbaf",
".git/objects/d7/5c8811d9547229be5fc644bd7b5331f4e8bf8b": "6b3722036139fb407f29ff2a55769fab",
".git/objects/d7/a0d273e6157ad5c5bc4e2975325c061593dbdf": "0de05b2d5a84865accd55f7d2a41afd9",
".git/objects/db/73558cf4ca53d949f691f755bcfe5a591e0435": "b4c0153dedac9c9db566eef9e37e7e5e",
".git/objects/db/cfdd7bdabe18a33e5b69419778e645aeb4014d": "9276dc4852c3241b84ee1e51c83b021f",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/de/52cc87231451aa363c42ca45c95f83f57bb733": "8d76408abc1ccd1c37164f03ee759746",
".git/objects/de/c2761258e9ffdab12d7919af13844e2edb3603": "3c03985f19d31133a3deba8dc6f00ceb",
".git/objects/df/3bed4593d5aa532de9d7a8e9a9df175681f46c": "962e6a267e69472733206be273efca08",
".git/objects/e0/a655683c6e486146571c12380cddde442f0cae": "ed499df3452fb594c9328274374c38c2",
".git/objects/e5/863a0b457399edfe383dc364eb366b9c145cdc": "b277fbaf71c8247e9d9b4b9737a60c0e",
".git/objects/e6/6059adac9193a226f553ae7aafe3c91ca69044": "63dc716cc563825158c84d5dd0413f84",
".git/objects/ea/4b14760a107d6acc1eada605785ae26661b2e9": "dde098c81b0d1872b6e98e0b1bfbf14b",
".git/objects/eb/352eb01811493df58c2cd74e615659758e53e3": "d45c1e0cb0d131535ef502d7acc91124",
".git/objects/ed/040552bfe946840a79bc2c68c568d180aad54a": "981f0e3a73add8e66db8d2942ec2f96b",
".git/objects/ed/04570c5dfc36df1a16a86b4f8ddd71ce949243": "1a882385d2baeebc4a17e4a98cfddc83",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f0/e61a8a63f43123f0cf98c85f2e090b733c665a": "690e709a1153ddbbacce13841d31f346",
".git/objects/f0/ef0fa075af960025221f897a96e162457b66a3": "6f8b108d1ccd1349099f652ad30a3c7a",
".git/objects/f3/ab1d1146fcd52bc09280fd5aa179d3a70cfea3": "549bdb97123916d59ab1f54adfb5f501",
".git/objects/f4/e298b2a12c1d1a1ef1f77848c7d473c1f16ae6": "fdaa5b83206730490166ad4b4e46488e",
".git/objects/ff/a602ffe20b8dbebf86e51ac6fd73dc028e5fed": "cef202e24c5cad13b9a6f0de1c164639",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.idx": "6b7c923b30425f21faa56d7bfabfbbd0",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.pack": "ab4cc2e11fc63e87aa7c15fe3bebfeb5",
".git/ORIG_HEAD": "de113aa617192a62b5af8c8804cf7aaf",
".git/packed-refs": "7172c103c4f3691f7da87a580657c424",
".git/refs/heads/main": "de113aa617192a62b5af8c8804cf7aaf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "de113aa617192a62b5af8c8804cf7aaf",
"assets/AssetManifest.json": "58e1b609b04d99b1f183e5964c853b90",
"assets/assets/images/abs.png": "17fd13f0bd9434a831eee9a1c6aa87ee",
"assets/assets/images/applogo.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"assets/assets/images/applogo_small.png": "0cfdf450624e33166b241e230231e2c9",
"assets/assets/images/arms.png": "27d36c362b72b5448dd49a4ec622dba5",
"assets/assets/images/back.png": "a0bc6773daa5bac4b5f06d15462e5b87",
"assets/assets/images/chest.png": "586bac3e715fd7f47a785a6541571e62",
"assets/assets/images/fullbody.png": "2d96c207cf40f901eb29e008522ac1ba",
"assets/assets/images/legs.png": "894589c01cd805a6ef200dfb576930c4",
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
"index.html": "a7e36e89d53809fc97f3862052807852",
"/": "a7e36e89d53809fc97f3862052807852",
"main.dart.js": "5fc97479458c5c960e1f36cbdf3b2e62",
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
