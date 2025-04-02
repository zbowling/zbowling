import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_DedjiBy8.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/zbowling/Projects/landingsite/","cacheDir":"file:///Users/zbowling/Projects/landingsite/node_modules/.astro/","outDir":"file:///Users/zbowling/Projects/landingsite/dist/","srcDir":"file:///Users/zbowling/Projects/landingsite/src/","publicDir":"file:///Users/zbowling/Projects/landingsite/public/","buildClientDir":"file:///Users/zbowling/Projects/landingsite/dist/","buildServerDir":"file:///Users/zbowling/Projects/landingsite/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pagefind/pagefind.js","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pagefind/pagefind.js","isIndex":false,"type":"endpoint","pattern":"^\\/pagefind\\/pagefind\\.js\\/?$","segments":[[{"content":"pagefind","dynamic":false,"spread":false}],[{"content":"pagefind.js","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pagefind/pagefind.js.ts","pathname":"/pagefind/pagefind.js","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/styles/giscus","isIndex":false,"type":"endpoint","pattern":"^\\/styles\\/giscus\\/?$","segments":[[{"content":"styles","dynamic":false,"spread":false}],[{"content":"giscus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/styles/giscus.ts","pathname":"/styles/giscus","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://zacbowling.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/blog/[post].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[post]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/projects/[project].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[project]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/zbowling/Projects/landingsite/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"pages/blog/_post_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/pagefind/pagefind.js@_@ts":"pages/pagefind/pagefind.js.astro.mjs","\u0000@astro-page:src/pages/projects/[project]@_@astro":"pages/projects/_project_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/styles/giscus@_@ts":"pages/styles/giscus.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DShQLGKU.mjs","/Users/zbowling/Projects/landingsite/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dqxs7jtd.mjs","/Users/zbowling/Projects/landingsite/.astro/content-assets.mjs":"chunks/content-assets_BTjrI7Aq.mjs","/Users/zbowling/Projects/landingsite/.astro/content-modules.mjs":"chunks/content-modules_CC7bg9y7.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CUIOKxH2.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/advocacy.mdx?astroPropagatedAssets":"chunks/advocacy_D1fm-SX5.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/funfacts.mdx?astroPropagatedAssets":"chunks/funfacts_D9dAK42k.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/media.mdx?astroPropagatedAssets":"chunks/media_CxKXxyiZ.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/patents.mdx?astroPropagatedAssets":"chunks/patents_DJpF06wE.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/tech.mdx?astroPropagatedAssets":"chunks/tech_LCmnBfeS.mjs","/Users/zbowling/Projects/landingsite/src/content/projects/tiktok.mdx?astroPropagatedAssets":"chunks/tiktok_BphO-I5q.mjs","/Users/zbowling/Projects/landingsite/src/content/other/about.mdx?astroPropagatedAssets":"chunks/about_BRMpGkoz.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/advocacy.mdx":"chunks/advocacy_DVck1CyL.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/funfacts.mdx":"chunks/funfacts_x3Ms0FfV.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/media.mdx":"chunks/media_7XY21m16.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/patents.mdx":"chunks/patents_DNHbSqse.mjs","/Users/zbowling/Projects/landingsite/src/content/cards/tech.mdx":"chunks/tech_Dl99pMfh.mjs","/Users/zbowling/Projects/landingsite/src/content/projects/tiktok.mdx":"chunks/tiktok_jQo-mnoW.mjs","/Users/zbowling/Projects/landingsite/src/content/other/about.mdx":"chunks/about_BZulOS7N.mjs","/Users/zbowling/Projects/landingsite/src/pages/blog/[post].astro?astro&type=script&index=0&lang.ts":"_astro/_post_.astro_astro_type_script_index_0_lang.BPdbWwJH.js","/Users/zbowling/Projects/landingsite/src/pages/blog.astro?astro&type=script&index=0&lang.ts":"_astro/blog.astro_astro_type_script_index_0_lang.DxCLUhVc.js","/Users/zbowling/Projects/landingsite/src/components/Background.astro?astro&type=script&index=0&lang.ts":"_astro/Background.astro_astro_type_script_index_0_lang.Cl_PlrnR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/zbowling/Projects/landingsite/src/pages/blog/[post].astro?astro&type=script&index=0&lang.ts","const s=document.querySelectorAll(\".toc-li a\"),c=document.querySelectorAll(\"#_top, article h1, article h2, article h3, article h4\"),n=new Map;for(const t of s){const e=t.href.split(\"#\")[1],o=document.getElementById(e);o&&n.set(o,t)}function l(t){const e=t.getBoundingClientRect(),o=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-o>=0)}const r=new IntersectionObserver(()=>{let t=null;for(const e of c){const o=l(e),i=n.get(e);if(o){i&&i.classList.add(\"active\"),t||(t=e);break}}if(t){for(const e of n.keys())if(e!==t){const o=n.get(e);o&&o.classList.remove(\"active\")}}},{threshold:0,root:null,rootMargin:\"0px\"});for(const t of c)r.observe(t);"],["/Users/zbowling/Projects/landingsite/src/pages/blog.astro?astro&type=script&index=0&lang.ts","const l=document.querySelectorAll(\".blog-tag\"),o=new URL(window.location.href),e=o.searchParams.get(\"tags\")?.split(\",\").filter(t=>t.length>0),n=document.querySelectorAll(\".post-container\");l.forEach(t=>{let s=!1;e?.includes(t.dataset.tag)&&(t.classList.add(\"active\"),s=!0),s?t.href=`/blog?tags=${e?.filter(a=>a!==t.dataset.tag).join(\",\")}`:t.href=`/blog?tags=${e?[...e,t.dataset.tag].join(\",\"):t.dataset.tag}`});n.forEach(t=>{const s=t.dataset.tags.split(\",\");e&&e.length>0&&!e.every(a=>s.includes(a))&&(t.style.display=\"none\")});"]],"assets":["/_astro/ec.cyjis.css","/_astro/ec.8zarh.js","/_astro/pfp.CVXgIlLU.png","/_astro/yimbytiktok.DJBM3imx.png","/_astro/blog.DpxrrzEr.css","/favicon.svg","/site.webmanifest","/_astro/Background.astro_astro_type_script_index_0_lang.Cl_PlrnR.js","/fonts/Geist.woff2","/fonts/GeistMono.woff2","/img/lighthouse.png","/img/og.png","/404.html","/blog/index.html","/pagefind/pagefind.js","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jcFxodqZWNUVHtbcMsbu8RolgxmpRvvUnqD8OPbbD6o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
