if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const o=e=>n(e,f),t={module:{uri:f},exports:c,require:o};i[f]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C_agR8py.js",revision:null},{url:"index.html",revision:"818f0415e619eff823d7c67a02b68585"},{url:"registerSW.js",revision:"48ce790aabaef11cf8fd2c367d769392"},{url:"favicon.ico",revision:"a51cfa2e9f6096ebfff9b7dc248c605a"},{url:"pwa-192x192.png",revision:"b1741cef2462cf8159e9136f8bc8e6e1"},{url:"pwa-512x512.png",revision:"dd4c7b793974f5aa62bac030fccef6bc"},{url:"manifest.webmanifest",revision:"14b9e9439ef57b27a5e3e548601dcf71"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
