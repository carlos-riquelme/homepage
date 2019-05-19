// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/carlos/QuiloBytes/proyectosweb/quilobytes/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/carlos/QuiloBytes/proyectosweb/quilobytes/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/carlos/QuiloBytes/proyectosweb/quilobytes/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/carlos/QuiloBytes/proyectosweb/quilobytes/.cache/data.json")

