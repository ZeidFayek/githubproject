
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/githubproject"
  }
],
  assets: new Map([
['index.csr.html', {size: 5708, hash: '02845b00341a9b30654a2cf013d6e7945a829b7f092f9f5f0e3e295fc6c4974d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1206, hash: '15313cc8e5291e4fc2052ce67df36bfdad78286f1d8e07938267bf2964256e1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 62613, hash: 'b79909a09a5d8892b3a8cbda05f7892b0b80f53d2c4ddfe3a6287ac1c1a61235', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
