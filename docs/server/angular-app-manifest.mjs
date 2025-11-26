
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
    'index.csr.html': {size: 750, hash: '8dfab8d6af1d7c9f55d9c0f683abebd0e30b3a2370419d071a1ca3d08fb5b361', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '50202c5d69c58046e6fe2a80cde8fb8455737f599e658bf8cb165d4a06336560', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3812, hash: '79270b06f4427ef63b95ea1fa6babd1e001b30fdc4c161e277c31c0d92fdab02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VUZTMRM.css': {size: 243, hash: 'jBlxkBHUZho', text: () => import('./assets-chunks/styles-4VUZTMRM_css.mjs').then(m => m.default)}
  },
};
