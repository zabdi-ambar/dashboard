
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 659, hash: 'd6de3731e5371df2e0e6f95d2fa0cc1fe26b87b66b65cd4cf4cf94ea4721908b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'da9732fedeeab8c82f373ceec8e5cab603b5feed50c9beb23319901c41adf8bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3724, hash: '5cb9ac50bd1ec9b4a169b3a46761a9cf0c0f276f1b944e12df66ad3d11c18505', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VUZTMRM.css': {size: 243, hash: 'jBlxkBHUZho', text: () => import('./assets-chunks/styles-4VUZTMRM_css.mjs').then(m => m.default)}
  },
};
