/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e72bc30071d335cdce0dfc6fc7522434"
  },
  {
    "url": "alipay.png",
    "revision": "6971af0f5eb2cd0e864aaf6a95ab43c9"
  },
  {
    "url": "archives/index.html",
    "revision": "8343231826b5e2cbd2b6fa3a1a05f40d"
  },
  {
    "url": "assets/css/0.styles.60963b5c.css",
    "revision": "c151159b78b1f26c7ec73f5cc438c450"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57fb051f.js",
    "revision": "09df27ab9139f1943ef36ba53d57788a"
  },
  {
    "url": "assets/js/11.54ccf1d7.js",
    "revision": "88398824774825117ca4f1d68d115747"
  },
  {
    "url": "assets/js/12.78f75088.js",
    "revision": "c8a9973fd22fecb88798d87edf706b62"
  },
  {
    "url": "assets/js/13.8fd70713.js",
    "revision": "55a482181843561fd930d79a44b54754"
  },
  {
    "url": "assets/js/14.9cd28107.js",
    "revision": "6f9cf8448c63cf746f19bd5b084cd815"
  },
  {
    "url": "assets/js/15.5ddd7ff5.js",
    "revision": "64c29858e7fde8348df793cac0f928d5"
  },
  {
    "url": "assets/js/16.038febde.js",
    "revision": "9a4356fda280ba0591fd7fd856019fb6"
  },
  {
    "url": "assets/js/17.e3f0d6a6.js",
    "revision": "305fd9128b45efed860c2e880081becb"
  },
  {
    "url": "assets/js/18.d970ba5d.js",
    "revision": "c5584fb085cbfdb05627e7c565398d44"
  },
  {
    "url": "assets/js/19.ee0b5466.js",
    "revision": "2831d6c3d893aa9a5b5399c2eff4275b"
  },
  {
    "url": "assets/js/20.07b64df2.js",
    "revision": "5517e902bfbf6ee123a461c5a710153d"
  },
  {
    "url": "assets/js/21.f9c5199c.js",
    "revision": "33426db5a758bbfd70af3b857fe22fa2"
  },
  {
    "url": "assets/js/22.b11b23a4.js",
    "revision": "184f15e007203c08ef582949bbd19b9a"
  },
  {
    "url": "assets/js/23.ef10013e.js",
    "revision": "457afdcad0e512c999d52399f69f1545"
  },
  {
    "url": "assets/js/24.61506bc6.js",
    "revision": "e1c39d69ef82c791be3ad2fb85a2face"
  },
  {
    "url": "assets/js/25.6b2f9146.js",
    "revision": "52a56b04f4b95c9ea51fcc3afc71b47f"
  },
  {
    "url": "assets/js/26.6c3f8dbf.js",
    "revision": "6acf0168757f4fba612eb8f5d3f755cb"
  },
  {
    "url": "assets/js/27.fee9496e.js",
    "revision": "d6f2ad27ffbc9c1311253f7a58a00982"
  },
  {
    "url": "assets/js/28.e73c1dcc.js",
    "revision": "0688b5f8d9b74424f165e37299064d72"
  },
  {
    "url": "assets/js/29.24106775.js",
    "revision": "a119dd19e7959d39d66d70ba75e549cb"
  },
  {
    "url": "assets/js/30.e94cc0ea.js",
    "revision": "c85e3c25bdddb7d042e9b61b29c69024"
  },
  {
    "url": "assets/js/31.fd88fe4b.js",
    "revision": "152ac9ab7697063f9b9d97d65d99efc2"
  },
  {
    "url": "assets/js/32.7f12029e.js",
    "revision": "e153f592d486bb9139c391276f33b606"
  },
  {
    "url": "assets/js/33.e92ee6a4.js",
    "revision": "a5818536a006290aab2cfd00385a0402"
  },
  {
    "url": "assets/js/34.fb2d407c.js",
    "revision": "f8a582d16644772ac8aa66f307be4e40"
  },
  {
    "url": "assets/js/35.ddb9db04.js",
    "revision": "de41df2c46eb7726437987084b561544"
  },
  {
    "url": "assets/js/4.f9cf82f8.js",
    "revision": "bf44a0a766054f2ab3920b519f9b66df"
  },
  {
    "url": "assets/js/5.b4f15c52.js",
    "revision": "ae8f5100fe3f63d47ff0d8fb8239bf84"
  },
  {
    "url": "assets/js/6.3d8463e2.js",
    "revision": "56629bc2e8bcee475ea8f4f653e1cb05"
  },
  {
    "url": "assets/js/7.db2130eb.js",
    "revision": "c9e5a0feb85400e422bff4d33e39b189"
  },
  {
    "url": "assets/js/8.3ccdc843.js",
    "revision": "55aac33e98710575faf654385e77f5c5"
  },
  {
    "url": "assets/js/9.c3cd6268.js",
    "revision": "620a263cd8ca10f05cc97b8cb1b9f983"
  },
  {
    "url": "assets/js/app.f24e89ee.js",
    "revision": "fef211f276f7856f97d843bfb1bffd32"
  },
  {
    "url": "assets/js/vendors~flowchart.bd779e31.js",
    "revision": "04edf14f5c2d2b57c98edaa281bb529f"
  },
  {
    "url": "assets/js/vuejs-paginate.b89ce8e5.js",
    "revision": "4afab9e377c9635d0b11d9ff4e706bfd"
  },
  {
    "url": "avatar.jpg",
    "revision": "7d66bec655f81955f6a4435c8d9b8a66"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "9ff428d2bcf501c7f9fa529ed3835de9"
  },
  {
    "url": "categories/daily life/index.html",
    "revision": "03bb68450a43b36a9ef64b49e6f544a9"
  },
  {
    "url": "categories/efficient/index.html",
    "revision": "5d58bd5aced2e0af3ebcc26f1abfb71b"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "c63b4641dcec2a4e607ec17d5061c647"
  },
  {
    "url": "categories/git/index.html",
    "revision": "415e67651ce2770ef56eb57f51963173"
  },
  {
    "url": "categories/index.html",
    "revision": "ef8c883878ee353b8f0edbad61a820bc"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "61cde734be822180a40a7b8cd389f9a6"
  },
  {
    "url": "categories/screen/index.html",
    "revision": "61336ad7e07fc007d0419f91d2b9a1b1"
  },
  {
    "url": "categories/study/index.html",
    "revision": "9b973c789bf8e4367a44481d2c7f6a00"
  },
  {
    "url": "cursor03.png",
    "revision": "5c82d7557e929e8f2874a681a9183a36"
  },
  {
    "url": "index.html",
    "revision": "4d756f7e90d4c68de34911a5ea6a6134"
  },
  {
    "url": "page/2/index.html",
    "revision": "518ce92ec82bda6b7c5decd9bb56cc2a"
  },
  {
    "url": "page/3/index.html",
    "revision": "8658cd19e693dde72557bf7c2d64ea3f"
  },
  {
    "url": "post/2021/07/12/study-ps.html",
    "revision": "1ec6ab203b6b6fb42fe2844182c757c6"
  },
  {
    "url": "post/2022/03/18/study-blender.html",
    "revision": "163b79ab4fd7c51633e11a70ec77d67c"
  },
  {
    "url": "post/2022/05/02/experience-qrcode.html",
    "revision": "6afe99b009b4e8c580d97b5f6182818e"
  },
  {
    "url": "post/2022/05/11/experience-scroll-text.html",
    "revision": "5880140fe97db0576c7f5f7a74983c75"
  },
  {
    "url": "post/2022/06/02/screen-echart01.html",
    "revision": "6def0728e3d9196fe749572b358f13e2"
  },
  {
    "url": "post/2022/08/03/efficient-vscode-config.html",
    "revision": "f2be6fbe8fa5bb8101b21a8dd41e51d6"
  },
  {
    "url": "post/2022/08/11/efficient-vscode-vim.html",
    "revision": "d2c57fcbb1c0273f45170114df019ef9"
  },
  {
    "url": "post/2022/09/02/screen-echart02.html",
    "revision": "78a4c34b16e3838575883d825ca8c194"
  },
  {
    "url": "post/2022/10/11/experience-false.html",
    "revision": "b9e9116ee518f5c2c7e50105e754072d"
  },
  {
    "url": "post/2022/10/14/efficient-keyboard-man.html",
    "revision": "bef9914d88b2dc68b6a5272cf7ab9ef6"
  },
  {
    "url": "post/2022/11/06/algorithm-001.html",
    "revision": "c6e8fcf508a13d9c995e3cbb61377572"
  },
  {
    "url": "post/2022/11/18/study-001.html",
    "revision": "01e8f2ffd52e35d6097a0338f52fdd6f"
  },
  {
    "url": "post/2022/12/11/study-002.html",
    "revision": "4d41f43eec06d36c48f2959779989ed3"
  },
  {
    "url": "post/2023/02/01/screen-config-params.html",
    "revision": "6e7ea9437bbd2300b19c0ea1ab6642c2"
  },
  {
    "url": "post/2023/03/20/notes-001.html",
    "revision": "a3a00a540126570edcd3eb536cb7b4c0"
  },
  {
    "url": "post/2023/03/23/experience-print.html",
    "revision": "6f38321fa9412d9d65acb4429cfc0d0d"
  },
  {
    "url": "post/2023/03/26/notes-002.html",
    "revision": "e0c8518f159abf295812f97460aec112"
  },
  {
    "url": "post/2023/04/01/notes-003.html",
    "revision": "ae70c1e631ced56a5888d3b4652e294f"
  },
  {
    "url": "post/2023/06/01/daily-life-001.html",
    "revision": "3d539860bc35db957fd48af92d7db1ad"
  },
  {
    "url": "post/2023/06/03/git-001.html",
    "revision": "e571d7fe0407d28ce75874791ab4c43c"
  },
  {
    "url": "post/2023/06/04/vuepress.html",
    "revision": "a8a3481e7121039e9b0973ac849fbe8e"
  },
  {
    "url": "screen/performance/001.html",
    "revision": "56d383ae1cdf0d71cf64f9af45ecd74d"
  },
  {
    "url": "screen/scroll-list.html",
    "revision": "4a7d439ae4443da94674540b3413da68"
  },
  {
    "url": "screen/scroll-text.html",
    "revision": "f1543bf9837b73c9a5d3154b939bb7ce"
  },
  {
    "url": "tags/algorithm/index.html",
    "revision": "bd70bbb28cd82f8590cca23af65a8ae9"
  },
  {
    "url": "tags/Blender/index.html",
    "revision": "706595b831445755a782c72af41aa683"
  },
  {
    "url": "tags/cook/index.html",
    "revision": "25358255f75cab575f2c161d0d3bcc43"
  },
  {
    "url": "tags/echart/index.html",
    "revision": "e9d152edffbf033e504a74c4a300bae8"
  },
  {
    "url": "tags/git/index.html",
    "revision": "79979154ee2d88c773e329092e44689e"
  },
  {
    "url": "tags/index.html",
    "revision": "4b9c5540c8ae83a210d78876a1007d78"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "a50990d67cdd2a9e77be2773e447453a"
  },
  {
    "url": "tags/ps/index.html",
    "revision": "6f454d16cf55d297a9848672cda1a00d"
  },
  {
    "url": "tags/screen project/index.html",
    "revision": "bef8fcd1ce1cf4138e55c7c6a62f4717"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "91a527de1eaec5786dcc087656d22f5a"
  },
  {
    "url": "tags/threejs/index.html",
    "revision": "02b45714d76107ab34b39ef7886f1b37"
  },
  {
    "url": "tags/vim/index.html",
    "revision": "b8e74cd6614a3305c7ddcdb9b7ba73f3"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "d4b1d1f747f1ee4a9718e68e8f7d6a97"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "26d3225d5d429fa7f4585d2066669b6e"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "5e6028794584f0bd57e8b94f759907ca"
  },
  {
    "url": "tags/window/index.html",
    "revision": "f6a5b71fa99c554094c23d923e316cf0"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "e1e3a0790f9428e5d0bdd415b85ec21b"
  },
  {
    "url": "wechat.png",
    "revision": "96774464ea8b589235c0dd50d1c32fe1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
