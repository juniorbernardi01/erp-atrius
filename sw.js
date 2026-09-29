/* ERP Atrius: só o necessário para instalar no tablet. Não guarda nada em
   cache: toda vez busca a versão nova do site, para ninguém ficar com tela velha. */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
