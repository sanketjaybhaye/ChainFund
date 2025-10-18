module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/campaign/[id]/requests/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./lib/getETHPrice.js":
/*!****************************!*\
  !*** ./lib/getETHPrice.js ***!
  \****************************/
/*! exports provided: getETHPrice, getWEIPriceInUSD, getETHPriceInUSD, convertWeiToETH, getETHPriceINR, getWEIPriceInINR, getETHPriceInINR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPrice", function() { return getETHPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWEIPriceInUSD", function() { return getWEIPriceInUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPriceInUSD", function() { return getETHPriceInUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertWeiToETH", function() { return convertWeiToETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPriceINR", function() { return getETHPriceINR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWEIPriceInINR", function() { return getWEIPriceInINR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPriceInINR", function() { return getETHPriceInINR; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const getETHPrice = async () => {
  try {
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum");
    const data = await response.json();
    const ethPrice = data[0].current_price;
    return parseFloat(parseFloat(ethPrice).toFixed(2));
  } catch (error) {
    console.log(error);
  }
};
const getWEIPriceInUSD = (usd, wei) => {
  return parseFloat(convertWeiToETH(wei) * usd).toFixed(2);
};
const getETHPriceInUSD = (usd, eth) => {
  return parseFloat(eth * usd).toFixed(2);
};
const convertWeiToETH = wei => {
  return parseFloat(wei) / 1000000000000000000;
}; // INR variants

const getETHPriceINR = async () => {
  try {
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ethereum");
    const data = await response.json();
    const ethPrice = data[0].current_price;
    return parseFloat(parseFloat(ethPrice).toFixed(2));
  } catch (error) {
    console.log(error);
  }
};
const getWEIPriceInINR = (inr, wei) => {
  return parseFloat(convertWeiToETH(wei) * inr).toFixed(2);
};
const getETHPriceInINR = (inr, eth) => {
  return parseFloat(eth * inr).toFixed(2);
};

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/campaign/[id]/requests/new.js":
/*!*********************************************!*\
  !*** ./pages/campaign/[id]/requests/new.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewRequest; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/getETHPrice */ "./lib/getETHPrice.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../smart-contract/web3 */ "./smart-contract/web3.js");
/* harmony import */ var _smart_contract_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../smart-contract/campaign */ "./smart-contract/campaign.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\Sanket\\OneDrive\\Documents\\blockchain-based-crowdfunding\\pages\\campaign\\[id]\\requests\\new.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function NewRequest() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    handleSubmit,
    register,
    formState: {
      isSubmitting,
      errors
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    mode: "onChange"
  });
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("");
  const {
    0: inINR,
    1: setInINR
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])();
  const {
    0: ETHPrice,
    1: setETHPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0);
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_4__["useWallet"])();
  Object(react_use__WEBPACK_IMPORTED_MODULE_12__["useAsync"])(async () => {
    try {
      const result = await Object(_lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__["getETHPriceINR"])();
      setETHPrice(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function onSubmit(data) {
    console.log(data);
    const campaign = Object(_smart_contract_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(id);

    try {
      const accounts = await _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__["default"].eth.getAccounts();
      await campaign.methods.createRequest(data.description, _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__["default"].utils.toWei(data.value, "ether"), data.recipient).send({
        from: accounts[0]
      });
      router.push(`/campaign/${id}/requests`);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Create a Withdrawal Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Create a Withdrawal Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        spacing: 8,
        mx: "auto",
        maxW: "2xl",
        py: 12,
        px: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          fontSize: "lg",
          color: "teal.400",
          justifyContent: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowBackIcon"], {
            mr: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: `/campaign/${id}/requests`,
            children: "Back to Requests"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
            fontSize: "4xl",
            children: "Create a Withdrawal Request \uD83D\uDCB8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
          rounded: "lg",
          bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["useColorModeValue"])("white", "gray.700"),
          boxShadow: "lg",
          p: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit(onSubmit),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
              spacing: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  children: "Request Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Textarea"], _objectSpread(_objectSpread({}, register("description", {
                  required: true
                })), {}, {
                  isDisabled: isSubmitting
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "value",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  children: "Amount in Ether"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], _objectSpread(_objectSpread({
                    type: "number"
                  }, register("value", {
                    required: true
                  })), {}, {
                    isDisabled: isSubmitting,
                    onChange: e => {
                      setInINR(Math.abs(e.target.value));
                    },
                    step: "any"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputRightAddon"], {
                    children: "ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this), inINR ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
                  children: ["\u20B9 ", Object(_lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__["getETHPriceInINR"])(ETHPrice, inINR)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "recipient",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  htmlFor: "recipient",
                  children: "Recipient Ethereum Wallet Address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], _objectSpread(_objectSpread({
                  name: "recipient"
                }, register("recipient", {
                  required: true
                })), {}, {
                  isDisabled: isSubmitting
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this), errors.description || errors.value || errors.recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                status: "error",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                  mr: 2,
                  children: [" ", "All Fields are Required"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, this) : null, error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                status: "error",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                  mr: 2,
                  children: [" ", error]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                spacing: 10,
                children: wallet.status === "connected" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                  bg: "teal.400",
                  color: "white",
                  _hover: {
                    bg: "teal.500"
                  },
                  isLoading: isSubmitting,
                  type: "submit",
                  children: "Create Withdrawal Request"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 21
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                  spacing: 3,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                    color: "white",
                    bg: "teal.400",
                    _hover: {
                      bg: "teal.300"
                    },
                    onClick: () => wallet.connect(),
                    children: ["Connect Wallet", " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                    status: "warning",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                      mr: 2,
                      children: "Please Connect Your Wallet First to Create a Campaign"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./smart-contract/build/Campaign.json":
/*!********************************************!*\
  !*** ./smart-contract/build/Campaign.json ***!
  \********************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":1257,\"end\":1629,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1257,\"end\":1629,\"name\":\"POP\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSHSIZE\"},{\"begin\":1257,\"end\":1629,\"name\":\"CODESIZE\"},{\"begin\":1257,\"end\":1629,\"name\":\"SUB\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSHSIZE\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP4\"},{\"begin\":1257,\"end\":1629,\"name\":\"CODECOPY\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP2\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP2\"},{\"begin\":1257,\"end\":1629,\"name\":\"MSTORE\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP2\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP5\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP3\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP5\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP6\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP7\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP8\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP9\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"MLOAD\"},{\"begin\":1392,\"end\":1399,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1392,\"end\":1409,\"name\":\"DUP1\"},{\"begin\":1392,\"end\":1409,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1392,\"end\":1409,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1392,\"end\":1409,\"name\":\"DUP11\"},{\"begin\":1392,\"end\":1409,\"name\":\"AND\"},{\"begin\":1392,\"end\":1409,\"name\":\"OR\"},{\"begin\":1392,\"end\":1409,\"name\":\"SWAP1\"},{\"begin\":1392,\"end\":1409,\"name\":\"SSTORE\"},{\"begin\":1417,\"end\":1436,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1417,\"end\":1446,\"name\":\"DUP8\"},{\"begin\":1417,\"end\":1446,\"name\":\"SWAP1\"},{\"begin\":1417,\"end\":1446,\"name\":\"SSTORE\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP4\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP9\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1454,\"end\":1471,\"name\":\"DUP1\"},{\"begin\":1454,\"end\":1471,\"name\":\"MLOAD\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP7\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP9\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP7\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP4\"},{\"begin\":1257,\"end\":1629,\"name\":\"DUP2\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP6\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP3\"},{\"begin\":1257,\"end\":1629,\"name\":\"ADD\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP4\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP3\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP1\"},{\"begin\":1257,\"end\":1629,\"name\":\"SWAP2\"},{\"begin\":1454,\"end\":1471,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":1454,\"end\":1471,\"name\":\"SWAP2\"},{\"begin\":1454,\"end\":1466,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1454,\"end\":1466,\"name\":\"SWAP2\"},{\"begin\":1454,\"end\":1471,\"name\":\"DUP9\"},{\"begin\":1454,\"end\":1471,\"name\":\"ADD\"},{\"begin\":1454,\"end\":1471,\"name\":\"SWAP1\"},{\"begin\":1454,\"end\":1471,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1454,\"end\":1471,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1454,\"end\":1471,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":1454,\"end\":1471,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1479,\"end\":1510,\"name\":\"DUP4\"},{\"begin\":1479,\"end\":1510,\"name\":\"MLOAD\"},{\"begin\":1479,\"end\":1510,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":1479,\"end\":1510,\"name\":\"SWAP1\"},{\"begin\":1479,\"end\":1498,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1479,\"end\":1498,\"name\":\"SWAP1\"},{\"begin\":1479,\"end\":1510,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1479,\"end\":1510,\"name\":\"DUP8\"},{\"begin\":1479,\"end\":1510,\"name\":\"ADD\"},{\"begin\":1479,\"end\":1510,\"name\":\"SWAP1\"},{\"begin\":1479,\"end\":1510,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1479,\"end\":1510,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1479,\"end\":1510,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":1479,\"end\":1510,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1518,\"end\":1532,\"name\":\"DUP3\"},{\"begin\":1518,\"end\":1532,\"name\":\"MLOAD\"},{\"begin\":1518,\"end\":1532,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":1518,\"end\":1532,\"name\":\"SWAP1\"},{\"begin\":1518,\"end\":1526,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1518,\"end\":1526,\"name\":\"SWAP1\"},{\"begin\":1518,\"end\":1532,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1518,\"end\":1532,\"name\":\"DUP7\"},{\"begin\":1518,\"end\":1532,\"name\":\"ADD\"},{\"begin\":1518,\"end\":1532,\"name\":\"SWAP1\"},{\"begin\":1518,\"end\":1532,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1518,\"end\":1532,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1518,\"end\":1532,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":1518,\"end\":1532,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1540,\"end\":1555,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":1540,\"end\":1562,\"name\":\"SWAP2\"},{\"begin\":1540,\"end\":1562,\"name\":\"SWAP1\"},{\"begin\":1540,\"end\":1562,\"name\":\"SWAP2\"},{\"begin\":1540,\"end\":1562,\"name\":\"SSTORE\"},{\"begin\":1570,\"end\":1578,\"name\":\"PUSH\",\"value\":\"B\"},{\"begin\":1570,\"end\":1588,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1596,\"end\":1601,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":1596,\"end\":1624,\"name\":\"DUP1\"},{\"begin\":1596,\"end\":1624,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1596,\"end\":1624,\"name\":\"AND\"},{\"begin\":1596,\"end\":1624,\"name\":\"SWAP1\"},{\"begin\":1596,\"end\":1624,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"SLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":485,\"end\":4181,\"name\":\"MUL\"},{\"begin\":485,\"end\":4181,\"name\":\"SUB\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DIV\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"KECCAK256\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DIV\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":485,\"end\":4181,\"name\":\"LT\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":485,\"end\":4181,\"name\":\"NOT\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP4\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"OR\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP6\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP6\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"GT\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"MLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP3\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"GT\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"CODECOPY\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a72305820826b94b3079d6b4593a3a76caf5cb1ba402848ae50dd77be7217e335257160fa0029\",\".code\":[{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":485,\"end\":4181,\"name\":\"CALLDATASIZE\"},{\"begin\":485,\"end\":4181,\"name\":\"LT\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"CALLDATALOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"DIV\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"3441006\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"A144391\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1FBED579\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"29DCB0CF\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"3410452A\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"35A063B4\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"4051DDAC\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"42E94C90\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"481C6A75\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"4BB278F3\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"590E1AE3\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"7E7CD1B3\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"81D12C58\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"82FDE093\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"8A9CFD55\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"97654A8C\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"A7F33715\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"ABA83150\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"B2A87FC3\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"C19D93FB\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"D7D1BBDB\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"EA25213F\"},{\"begin\":485,\"end\":4181,\"name\":\"EQ\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"REVERT\"},{\"begin\":2658,\"end\":2980,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":2658,\"end\":2980,\"name\":\"JUMPDEST\"},{\"begin\":2658,\"end\":2980,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2658,\"end\":2980,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":2658,\"end\":2980,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2658,\"end\":2980,\"name\":\"CALLDATALOAD\"},{\"begin\":2658,\"end\":2980,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":2658,\"end\":2980,\"name\":\"JUMP\"},{\"begin\":2658,\"end\":2980,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":2658,\"end\":2980,\"name\":\"JUMPDEST\"},{\"begin\":2658,\"end\":2980,\"name\":\"STOP\"},{\"begin\":999,\"end\":1040,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":999,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":999,\"end\":1040,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":999,\"end\":1040,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":999,\"end\":1040,\"name\":\"AND\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":999,\"end\":1040,\"name\":\"JUMP\"},{\"begin\":999,\"end\":1040,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":999,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":999,\"end\":1040,\"name\":\"DUP1\"},{\"begin\":999,\"end\":1040,\"name\":\"MLOAD\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP2\"},{\"begin\":999,\"end\":1040,\"name\":\"ISZERO\"},{\"begin\":999,\"end\":1040,\"name\":\"ISZERO\"},{\"begin\":999,\"end\":1040,\"name\":\"DUP3\"},{\"begin\":999,\"end\":1040,\"name\":\"MSTORE\"},{\"begin\":999,\"end\":1040,\"name\":\"MLOAD\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP1\"},{\"begin\":999,\"end\":1040,\"name\":\"DUP2\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP1\"},{\"begin\":999,\"end\":1040,\"name\":\"SUB\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":999,\"end\":1040,\"name\":\"ADD\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP1\"},{\"begin\":999,\"end\":1040,\"name\":\"RETURN\"},{\"begin\":966,\"end\":995,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":966,\"end\":995,\"name\":\"JUMPDEST\"},{\"begin\":966,\"end\":995,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":966,\"end\":995,\"name\":\"CALLDATALOAD\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":966,\"end\":995,\"name\":\"JUMP\"},{\"begin\":966,\"end\":995,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":966,\"end\":995,\"name\":\"JUMPDEST\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":966,\"end\":995,\"name\":\"DUP1\"},{\"begin\":966,\"end\":995,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP3\"},{\"begin\":966,\"end\":995,\"name\":\"AND\"},{\"begin\":966,\"end\":995,\"name\":\"DUP3\"},{\"begin\":966,\"end\":995,\"name\":\"MSTORE\"},{\"begin\":966,\"end\":995,\"name\":\"MLOAD\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"DUP2\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"SUB\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":966,\"end\":995,\"name\":\"ADD\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"RETURN\"},{\"begin\":1123,\"end\":1143,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":1123,\"end\":1143,\"name\":\"JUMPDEST\"},{\"begin\":1123,\"end\":1143,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1123,\"end\":1143,\"name\":\"POP\"},{\"begin\":1123,\"end\":1143,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":1123,\"end\":1143,\"name\":\"PUSH [tag]\",\"value\":\"35\"},{\"begin\":1123,\"end\":1143,\"name\":\"JUMP\"},{\"begin\":1123,\"end\":1143,\"name\":\"tag\",\"value\":\"34\"},{\"begin\":1123,\"end\":1143,\"name\":\"JUMPDEST\"},{\"begin\":1123,\"end\":1143,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1123,\"end\":1143,\"name\":\"DUP1\"},{\"begin\":1123,\"end\":1143,\"name\":\"MLOAD\"},{\"begin\":1123,\"end\":1143,\"name\":\"SWAP2\"},{\"begin\":1123,\"end\":1143,\"name\":\"DUP3\"},{\"begin\":1123,\"end\":1143,\"name\":\"MSTORE\"},{\"begin\":1123,\"end\":1143,\"name\":\"MLOAD\"},{\"begin\":1123,\"end\":1143,\"name\":\"SWAP1\"},{\"begin\":1123,\"end\":1143,\"name\":\"DUP2\"},{\"begin\":1123,\"end\":1143,\"name\":\"SWAP1\"},{\"begin\":1123,\"end\":1143,\"name\":\"SUB\"},{\"begin\":1123,\"end\":1143,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1123,\"end\":1143,\"name\":\"ADD\"},{\"begin\":1123,\"end\":1143,\"name\":\"SWAP1\"},{\"begin\":1123,\"end\":1143,\"name\":\"RETURN\"},{\"begin\":4086,\"end\":4179,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":4086,\"end\":4179,\"name\":\"JUMPDEST\"},{\"begin\":4086,\"end\":4179,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":4086,\"end\":4179,\"name\":\"POP\"},{\"begin\":4086,\"end\":4179,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":4086,\"end\":4179,\"name\":\"PUSH [tag]\",\"value\":\"38\"},{\"begin\":4086,\"end\":4179,\"name\":\"JUMP\"},{\"begin\":2984,\"end\":3109,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":2984,\"end\":3109,\"name\":\"JUMPDEST\"},{\"begin\":2984,\"end\":3109,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"39\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"39\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":2984,\"end\":3109,\"name\":\"POP\"},{\"begin\":2984,\"end\":3109,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":2984,\"end\":3109,\"name\":\"PUSH [tag]\",\"value\":\"41\"},{\"begin\":2984,\"end\":3109,\"name\":\"JUMP\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":3643,\"end\":4080,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"42\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"42\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH [tag]\",\"value\":\"43\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH [tag]\",\"value\":\"44\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMP\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"43\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP13\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP12\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP11\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP10\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP9\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP8\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP7\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP6\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP5\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP5\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP11\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"45\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"46\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"45\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"46\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"ISZERO\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH [tag]\",\"value\":\"48\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPI\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3643,\"end\":4080,\"name\":\"EXP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"NOT\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"48\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP5\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP10\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP10\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP12\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"49\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"50\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"ISZERO\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH [tag]\",\"value\":\"52\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPI\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3643,\"end\":4080,\"name\":\"EXP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"NOT\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"52\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP5\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP9\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP9\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP11\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"53\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"53\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"ISZERO\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPI\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3643,\"end\":4080,\"name\":\"EXP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"NOT\"},{\"begin\":3643,\"end\":4080,\"name\":\"AND\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"MSTORE\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3643,\"end\":4080,\"name\":\"ADD\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP15\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3643,\"end\":4080,\"name\":\"MLOAD\"},{\"begin\":3643,\"end\":4080,\"name\":\"DUP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"SUB\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"RETURN\"},{\"begin\":1044,\"end\":1089,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":1044,\"end\":1089,\"name\":\"JUMPDEST\"},{\"begin\":1044,\"end\":1089,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"57\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1044,\"end\":1089,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1044,\"end\":1089,\"name\":\"AND\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH [tag]\",\"value\":\"59\"},{\"begin\":1044,\"end\":1089,\"name\":\"JUMP\"},{\"begin\":781,\"end\":803,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":781,\"end\":803,\"name\":\"JUMPDEST\"},{\"begin\":781,\"end\":803,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"60\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"60\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":781,\"end\":803,\"name\":\"POP\"},{\"begin\":781,\"end\":803,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":781,\"end\":803,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":781,\"end\":803,\"name\":\"JUMP\"},{\"begin\":3113,\"end\":3374,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":3113,\"end\":3374,\"name\":\"JUMPDEST\"},{\"begin\":3113,\"end\":3374,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"63\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"63\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":3113,\"end\":3374,\"name\":\"POP\"},{\"begin\":3113,\"end\":3374,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":3113,\"end\":3374,\"name\":\"PUSH [tag]\",\"value\":\"65\"},{\"begin\":3113,\"end\":3374,\"name\":\"JUMP\"},{\"begin\":3378,\"end\":3636,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":3378,\"end\":3636,\"name\":\"JUMPDEST\"},{\"begin\":3378,\"end\":3636,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"66\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"66\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":3378,\"end\":3636,\"name\":\"POP\"},{\"begin\":3378,\"end\":3636,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":3378,\"end\":3636,\"name\":\"PUSH [tag]\",\"value\":\"68\"},{\"begin\":3378,\"end\":3636,\"name\":\"JUMP\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"69\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"69\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"71\"},{\"begin\":842,\"end\":868,\"name\":\"JUMP\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"70\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP3\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP3\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"DUP6\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"72\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"73\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"72\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"73\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":842,\"end\":868,\"name\":\"AND\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"ISZERO\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"75\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPI\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"SUB\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"SUB\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":842,\"end\":868,\"name\":\"EXP\"},{\"begin\":842,\"end\":868,\"name\":\"SUB\"},{\"begin\":842,\"end\":868,\"name\":\"NOT\"},{\"begin\":842,\"end\":868,\"name\":\"AND\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"75\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP3\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"SUB\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"RETURN\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"76\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"76\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":752,\"end\":777,\"name\":\"CALLDATALOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"78\"},{\"begin\":752,\"end\":777,\"name\":\"JUMP\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP8\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"DUP7\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"ISZERO\"},{\"begin\":752,\"end\":777,\"name\":\"ISZERO\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"DUP8\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"DUP7\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP10\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"79\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"80\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"80\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"ISZERO\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"82\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPI\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":752,\"end\":777,\"name\":\"EXP\"},{\"begin\":752,\"end\":777,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"NOT\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"82\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP7\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"RETURN\"},{\"begin\":1093,\"end\":1119,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":1093,\"end\":1119,\"name\":\"JUMPDEST\"},{\"begin\":1093,\"end\":1119,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"83\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"83\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1093,\"end\":1119,\"name\":\"POP\"},{\"begin\":1093,\"end\":1119,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":1093,\"end\":1119,\"name\":\"PUSH [tag]\",\"value\":\"85\"},{\"begin\":1093,\"end\":1119,\"name\":\"JUMP\"},{\"begin\":1999,\"end\":2371,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":1999,\"end\":2371,\"name\":\"JUMPDEST\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"86\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"86\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"MLOAD\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATALOAD\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP3\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATALOAD\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP2\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"DIV\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"MUL\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP6\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP6\"},{\"begin\":1999,\"end\":2371,\"name\":\"MSTORE\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"MSTORE\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATASIZE\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP3\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP4\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP4\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP3\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP2\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP2\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP4\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP3\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP3\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"DUP5\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATALOAD\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP2\"},{\"begin\":1999,\"end\":2371,\"name\":\"ADD\"},{\"begin\":1999,\"end\":2371,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1999,\"end\":2371,\"name\":\"AND\"},{\"begin\":1999,\"end\":2371,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":1999,\"end\":2371,\"name\":\"JUMP\"},{\"begin\":872,\"end\":905,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":872,\"end\":905,\"name\":\"JUMPDEST\"},{\"begin\":872,\"end\":905,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"89\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"89\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":872,\"end\":905,\"name\":\"POP\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH [tag]\",\"value\":\"91\"},{\"begin\":872,\"end\":905,\"name\":\"JUMP\"},{\"begin\":807,\"end\":838,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":807,\"end\":838,\"name\":\"JUMPDEST\"},{\"begin\":807,\"end\":838,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"96\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"96\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":807,\"end\":838,\"name\":\"POP\"},{\"begin\":807,\"end\":838,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":807,\"end\":838,\"name\":\"PUSH [tag]\",\"value\":\"98\"},{\"begin\":807,\"end\":838,\"name\":\"JUMP\"},{\"begin\":909,\"end\":931,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":909,\"end\":931,\"name\":\"JUMPDEST\"},{\"begin\":909,\"end\":931,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"99\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":909,\"end\":931,\"name\":\"POP\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH [tag]\",\"value\":\"101\"},{\"begin\":909,\"end\":931,\"name\":\"JUMP\"},{\"begin\":935,\"end\":962,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":935,\"end\":962,\"name\":\"JUMPDEST\"},{\"begin\":935,\"end\":962,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"106\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"106\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":935,\"end\":962,\"name\":\"POP\"},{\"begin\":935,\"end\":962,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":935,\"end\":962,\"name\":\"PUSH [tag]\",\"value\":\"108\"},{\"begin\":935,\"end\":962,\"name\":\"JUMP\"},{\"begin\":1147,\"end\":1173,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMPDEST\"},{\"begin\":1147,\"end\":1173,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"109\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"109\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1147,\"end\":1173,\"name\":\"POP\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH [tag]\",\"value\":\"110\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH [tag]\",\"value\":\"111\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMP\"},{\"begin\":1147,\"end\":1173,\"name\":\"tag\",\"value\":\"110\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMPDEST\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1147,\"end\":1173,\"name\":\"MLOAD\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP1\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP3\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP2\"},{\"begin\":1147,\"end\":1173,\"name\":\"GT\"},{\"begin\":1147,\"end\":1173,\"name\":\"ISZERO\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH [tag]\",\"value\":\"112\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMPI\"},{\"begin\":1147,\"end\":1173,\"name\":\"INVALID\"},{\"begin\":1147,\"end\":1173,\"name\":\"tag\",\"value\":\"112\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMPDEST\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1147,\"end\":1173,\"name\":\"AND\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP2\"},{\"begin\":1147,\"end\":1173,\"name\":\"MSTORE\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1147,\"end\":1173,\"name\":\"ADD\"},{\"begin\":1147,\"end\":1173,\"name\":\"SWAP2\"},{\"begin\":1147,\"end\":1173,\"name\":\"POP\"},{\"begin\":1147,\"end\":1173,\"name\":\"POP\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1147,\"end\":1173,\"name\":\"MLOAD\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP1\"},{\"begin\":1147,\"end\":1173,\"name\":\"SWAP2\"},{\"begin\":1147,\"end\":1173,\"name\":\"SUB\"},{\"begin\":1147,\"end\":1173,\"name\":\"SWAP1\"},{\"begin\":1147,\"end\":1173,\"name\":\"RETURN\"},{\"begin\":2375,\"end\":2654,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":2375,\"end\":2654,\"name\":\"JUMPDEST\"},{\"begin\":2375,\"end\":2654,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"113\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"113\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2375,\"end\":2654,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":2375,\"end\":2654,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2375,\"end\":2654,\"name\":\"CALLDATALOAD\"},{\"begin\":2375,\"end\":2654,\"name\":\"PUSH [tag]\",\"value\":\"115\"},{\"begin\":2375,\"end\":2654,\"name\":\"JUMP\"},{\"begin\":1633,\"end\":1995,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":1633,\"end\":1995,\"name\":\"JUMPDEST\"},{\"begin\":1633,\"end\":1995,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":1633,\"end\":1995,\"name\":\"PUSH [tag]\",\"value\":\"117\"},{\"begin\":1633,\"end\":1995,\"name\":\"JUMP\"},{\"begin\":2658,\"end\":2980,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":2658,\"end\":2980,\"name\":\"JUMPDEST\"},{\"begin\":1231,\"end\":1238,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1231,\"end\":1238,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1231,\"end\":1238,\"name\":\"AND\"},{\"begin\":1217,\"end\":1227,\"name\":\"CALLER\"},{\"begin\":1217,\"end\":1238,\"name\":\"EQ\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH [tag]\",\"value\":\"119\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPI\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1209,\"end\":1239,\"name\":\"DUP1\"},{\"begin\":1209,\"end\":1239,\"name\":\"REVERT\"},{\"begin\":1209,\"end\":1239,\"name\":\"tag\",\"value\":\"119\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPDEST\"},{\"begin\":2737,\"end\":2757,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2728,\"end\":2733,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":2728,\"end\":2733,\"name\":\"SLOAD\"},{\"begin\":2728,\"end\":2733,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2728,\"end\":2733,\"name\":\"AND\"},{\"begin\":2728,\"end\":2757,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2728,\"end\":2757,\"name\":\"DUP2\"},{\"begin\":2728,\"end\":2757,\"name\":\"GT\"},{\"begin\":2728,\"end\":2757,\"name\":\"ISZERO\"},{\"begin\":2728,\"end\":2757,\"name\":\"PUSH [tag]\",\"value\":\"122\"},{\"begin\":2728,\"end\":2757,\"name\":\"JUMPI\"},{\"begin\":2728,\"end\":2757,\"name\":\"INVALID\"},{\"begin\":2728,\"end\":2757,\"name\":\"tag\",\"value\":\"122\"},{\"begin\":2728,\"end\":2757,\"name\":\"JUMPDEST\"},{\"begin\":2728,\"end\":2757,\"name\":\"EQ\"},{\"begin\":2720,\"end\":2758,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":2720,\"end\":2758,\"name\":\"JUMPI\"},{\"begin\":2720,\"end\":2758,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2720,\"end\":2758,\"name\":\"DUP1\"},{\"begin\":2720,\"end\":2758,\"name\":\"REVERT\"},{\"begin\":2720,\"end\":2758,\"name\":\"tag\",\"value\":\"123\"},{\"begin\":2720,\"end\":2758,\"name\":\"JUMPDEST\"},{\"begin\":2807,\"end\":2821,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":2807,\"end\":2821,\"name\":\"SLOAD\"},{\"begin\":2824,\"end\":2825,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2824,\"end\":2825,\"name\":\"SWAP1\"},{\"begin\":2807,\"end\":2825,\"name\":\"DIV\"},{\"begin\":2774,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2783,\"end\":2788,\"name\":\"DUP3\"},{\"begin\":2774,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2774,\"end\":2789,\"name\":\"SLOAD\"},{\"begin\":2774,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2774,\"end\":2789,\"name\":\"LT\"},{\"begin\":2774,\"end\":2789,\"name\":\"ISZERO\"},{\"begin\":2774,\"end\":2789,\"name\":\"ISZERO\"},{\"begin\":2774,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"125\"},{\"begin\":2774,\"end\":2789,\"name\":\"JUMPI\"},{\"begin\":2774,\"end\":2789,\"name\":\"INVALID\"},{\"begin\":2774,\"end\":2789,\"name\":\"tag\",\"value\":\"125\"},{\"begin\":2774,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":2774,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2774,\"end\":2789,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2774,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2774,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2774,\"end\":2789,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2774,\"end\":2789,\"name\":\"KECCAK256\"},{\"begin\":2774,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2774,\"end\":2789,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2774,\"end\":2789,\"name\":\"MUL\"},{\"begin\":2774,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2774,\"end\":2803,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2774,\"end\":2803,\"name\":\"ADD\"},{\"begin\":2774,\"end\":2803,\"name\":\"SLOAD\"},{\"begin\":2774,\"end\":2826,\"name\":\"GT\"},{\"begin\":2766,\"end\":2827,\"name\":\"ISZERO\"},{\"begin\":2766,\"end\":2827,\"name\":\"ISZERO\"},{\"begin\":2766,\"end\":2827,\"name\":\"PUSH [tag]\",\"value\":\"127\"},{\"begin\":2766,\"end\":2827,\"name\":\"JUMPI\"},{\"begin\":2766,\"end\":2827,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2766,\"end\":2827,\"name\":\"DUP1\"},{\"begin\":2766,\"end\":2827,\"name\":\"REVERT\"},{\"begin\":2766,\"end\":2827,\"name\":\"tag\",\"value\":\"127\"},{\"begin\":2766,\"end\":2827,\"name\":\"JUMPDEST\"},{\"begin\":2844,\"end\":2852,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2844,\"end\":2859,\"name\":\"DUP1\"},{\"begin\":2844,\"end\":2859,\"name\":\"SLOAD\"},{\"begin\":2853,\"end\":2858,\"name\":\"DUP3\"},{\"begin\":2853,\"end\":2858,\"name\":\"SWAP1\"},{\"begin\":2844,\"end\":2859,\"name\":\"DUP2\"},{\"begin\":2844,\"end\":2859,\"name\":\"LT\"},{\"begin\":2844,\"end\":2859,\"name\":\"PUSH [tag]\",\"value\":\"128\"},{\"begin\":2844,\"end\":2859,\"name\":\"JUMPI\"},{\"begin\":2844,\"end\":2859,\"name\":\"INVALID\"},{\"begin\":2844,\"end\":2859,\"name\":\"tag\",\"value\":\"128\"},{\"begin\":2844,\"end\":2859,\"name\":\"JUMPDEST\"},{\"begin\":2844,\"end\":2859,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2844,\"end\":2859,\"name\":\"SWAP2\"},{\"begin\":2844,\"end\":2859,\"name\":\"DUP3\"},{\"begin\":2844,\"end\":2859,\"name\":\"MSTORE\"},{\"begin\":2844,\"end\":2859,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2844,\"end\":2859,\"name\":\"SWAP1\"},{\"begin\":2844,\"end\":2859,\"name\":\"SWAP2\"},{\"begin\":2844,\"end\":2859,\"name\":\"KECCAK256\"},{\"begin\":2844,\"end\":2859,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2844,\"end\":2859,\"name\":\"SWAP1\"},{\"begin\":2844,\"end\":2859,\"name\":\"SWAP2\"},{\"begin\":2844,\"end\":2859,\"name\":\"MUL\"},{\"begin\":2844,\"end\":2859,\"name\":\"ADD\"},{\"begin\":2844,\"end\":2868,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2844,\"end\":2868,\"name\":\"ADD\"},{\"begin\":2844,\"end\":2868,\"name\":\"SLOAD\"},{\"begin\":2844,\"end\":2868,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":2844,\"end\":2868,\"name\":\"SWAP1\"},{\"begin\":2844,\"end\":2868,\"name\":\"DIV\"},{\"begin\":2844,\"end\":2868,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2844,\"end\":2868,\"name\":\"AND\"},{\"begin\":2843,\"end\":2868,\"name\":\"ISZERO\"},{\"begin\":2835,\"end\":2869,\"name\":\"PUSH [tag]\",\"value\":\"130\"},{\"begin\":2835,\"end\":2869,\"name\":\"JUMPI\"},{\"begin\":2835,\"end\":2869,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2835,\"end\":2869,\"name\":\"DUP1\"},{\"begin\":2835,\"end\":2869,\"name\":\"REVERT\"},{\"begin\":2835,\"end\":2869,\"name\":\"tag\",\"value\":\"130\"},{\"begin\":2835,\"end\":2869,\"name\":\"JUMPDEST\"},{\"begin\":2878,\"end\":2886,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2878,\"end\":2893,\"name\":\"DUP1\"},{\"begin\":2878,\"end\":2893,\"name\":\"SLOAD\"},{\"begin\":2887,\"end\":2892,\"name\":\"DUP3\"},{\"begin\":2887,\"end\":2892,\"name\":\"SWAP1\"},{\"begin\":2878,\"end\":2893,\"name\":\"DUP2\"},{\"begin\":2878,\"end\":2893,\"name\":\"LT\"},{\"begin\":2878,\"end\":2893,\"name\":\"PUSH [tag]\",\"value\":\"131\"},{\"begin\":2878,\"end\":2893,\"name\":\"JUMPI\"},{\"begin\":2878,\"end\":2893,\"name\":\"INVALID\"},{\"begin\":2878,\"end\":2893,\"name\":\"tag\",\"value\":\"131\"},{\"begin\":2878,\"end\":2893,\"name\":\"JUMPDEST\"},{\"begin\":2878,\"end\":2893,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2878,\"end\":2893,\"name\":\"SWAP2\"},{\"begin\":2878,\"end\":2893,\"name\":\"DUP3\"},{\"begin\":2878,\"end\":2893,\"name\":\"MSTORE\"},{\"begin\":2878,\"end\":2893,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2878,\"end\":2893,\"name\":\"DUP3\"},{\"begin\":2878,\"end\":2893,\"name\":\"KECCAK256\"},{\"begin\":2878,\"end\":2893,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2878,\"end\":2893,\"name\":\"SWAP2\"},{\"begin\":2878,\"end\":2893,\"name\":\"SWAP1\"},{\"begin\":2878,\"end\":2893,\"name\":\"SWAP2\"},{\"begin\":2878,\"end\":2893,\"name\":\"MUL\"},{\"begin\":2878,\"end\":2893,\"name\":\"ADD\"},{\"begin\":2878,\"end\":2903,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2878,\"end\":2903,\"name\":\"ADD\"},{\"begin\":2878,\"end\":2903,\"name\":\"SLOAD\"},{\"begin\":2913,\"end\":2928,\"name\":\"DUP2\"},{\"begin\":2913,\"end\":2928,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2878,\"end\":2903,\"name\":\"SWAP1\"},{\"begin\":2878,\"end\":2903,\"name\":\"SWAP2\"},{\"begin\":2878,\"end\":2903,\"name\":\"AND\"},{\"begin\":2878,\"end\":2903,\"name\":\"SWAP2\"},{\"begin\":2878,\"end\":2935,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":2878,\"end\":2935,\"name\":\"SWAP2\"},{\"begin\":2922,\"end\":2927,\"name\":\"DUP5\"},{\"begin\":2922,\"end\":2927,\"name\":\"SWAP1\"},{\"begin\":2913,\"end\":2928,\"name\":\"DUP2\"},{\"begin\":2913,\"end\":2928,\"name\":\"LT\"},{\"begin\":2913,\"end\":2928,\"name\":\"PUSH [tag]\",\"value\":\"133\"},{\"begin\":2913,\"end\":2928,\"name\":\"JUMPI\"},{\"begin\":2913,\"end\":2928,\"name\":\"INVALID\"},{\"begin\":2913,\"end\":2928,\"name\":\"tag\",\"value\":\"133\"},{\"begin\":2913,\"end\":2928,\"name\":\"JUMPDEST\"},{\"begin\":2913,\"end\":2928,\"name\":\"SWAP1\"},{\"begin\":2913,\"end\":2928,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2913,\"end\":2928,\"name\":\"MSTORE\"},{\"begin\":2913,\"end\":2928,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2913,\"end\":2928,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2913,\"end\":2928,\"name\":\"KECCAK256\"},{\"begin\":2913,\"end\":2928,\"name\":\"SWAP1\"},{\"begin\":2913,\"end\":2928,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2913,\"end\":2928,\"name\":\"MUL\"},{\"begin\":2913,\"end\":2928,\"name\":\"ADD\"},{\"begin\":2913,\"end\":2934,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2913,\"end\":2934,\"name\":\"ADD\"},{\"begin\":2913,\"end\":2934,\"name\":\"SLOAD\"},{\"begin\":2878,\"end\":2935,\"name\":\"SWAP1\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP2\"},{\"begin\":2878,\"end\":2935,\"name\":\"ISZERO\"},{\"begin\":2878,\"end\":2935,\"name\":\"MUL\"},{\"begin\":2878,\"end\":2935,\"name\":\"SWAP1\"},{\"begin\":2878,\"end\":2935,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2878,\"end\":2935,\"name\":\"MLOAD\"},{\"begin\":2878,\"end\":2935,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2878,\"end\":2935,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2878,\"end\":2935,\"name\":\"MLOAD\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP1\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP4\"},{\"begin\":2878,\"end\":2935,\"name\":\"SUB\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP2\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP6\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP9\"},{\"begin\":2878,\"end\":2935,\"name\":\"DUP9\"},{\"begin\":2878,\"end\":2935,\"name\":\"CALL\"},{\"begin\":2878,\"end\":2935,\"name\":\"SWAP4\"},{\"begin\":2878,\"end\":2935,\"name\":\"POP\"},{\"begin\":2878,\"end\":2935,\"name\":\"POP\"},{\"begin\":2878,\"end\":2935,\"name\":\"POP\"},{\"begin\":2878,\"end\":2935,\"name\":\"POP\"},{\"begin\":2878,\"end\":2935,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"135\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":45,\"end\":61,\"name\":\"RETURNDATASIZE\"},{\"begin\":42,\"end\":43,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":39,\"end\":40,\"name\":\"DUP1\"},{\"begin\":24,\"end\":62,\"name\":\"RETURNDATACOPY\"},{\"begin\":77,\"end\":93,\"name\":\"RETURNDATASIZE\"},{\"begin\":74,\"end\":75,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":67,\"end\":94,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"135\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":2878,\"end\":2935,\"name\":\"POP\"},{\"begin\":2970,\"end\":2974,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2943,\"end\":2951,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2952,\"end\":2957,\"name\":\"DUP3\"},{\"begin\":2943,\"end\":2958,\"name\":\"DUP2\"},{\"begin\":2943,\"end\":2958,\"name\":\"SLOAD\"},{\"begin\":2943,\"end\":2958,\"name\":\"DUP2\"},{\"begin\":2943,\"end\":2958,\"name\":\"LT\"},{\"begin\":2943,\"end\":2958,\"name\":\"ISZERO\"},{\"begin\":2943,\"end\":2958,\"name\":\"ISZERO\"},{\"begin\":2943,\"end\":2958,\"name\":\"PUSH [tag]\",\"value\":\"136\"},{\"begin\":2943,\"end\":2958,\"name\":\"JUMPI\"},{\"begin\":2943,\"end\":2958,\"name\":\"INVALID\"},{\"begin\":2943,\"end\":2958,\"name\":\"tag\",\"value\":\"136\"},{\"begin\":2943,\"end\":2958,\"name\":\"JUMPDEST\"},{\"begin\":2943,\"end\":2958,\"name\":\"SWAP1\"},{\"begin\":2943,\"end\":2958,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2943,\"end\":2958,\"name\":\"MSTORE\"},{\"begin\":2943,\"end\":2958,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2943,\"end\":2958,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2943,\"end\":2958,\"name\":\"KECCAK256\"},{\"begin\":2943,\"end\":2958,\"name\":\"SWAP1\"},{\"begin\":2943,\"end\":2958,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2943,\"end\":2958,\"name\":\"MUL\"},{\"begin\":2943,\"end\":2958,\"name\":\"ADD\"},{\"begin\":2943,\"end\":2967,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2943,\"end\":2967,\"name\":\"ADD\"},{\"begin\":2943,\"end\":2967,\"name\":\"PUSH\",\"value\":\"14\"},{\"begin\":2943,\"end\":2974,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2943,\"end\":2974,\"name\":\"EXP\"},{\"begin\":2943,\"end\":2974,\"name\":\"DUP2\"},{\"begin\":2943,\"end\":2974,\"name\":\"SLOAD\"},{\"begin\":2943,\"end\":2974,\"name\":\"DUP2\"},{\"begin\":2943,\"end\":2974,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2943,\"end\":2974,\"name\":\"MUL\"},{\"begin\":2943,\"end\":2974,\"name\":\"NOT\"},{\"begin\":2943,\"end\":2974,\"name\":\"AND\"},{\"begin\":2943,\"end\":2974,\"name\":\"SWAP1\"},{\"begin\":2943,\"end\":2974,\"name\":\"DUP4\"},{\"begin\":2943,\"end\":2974,\"name\":\"ISZERO\"},{\"begin\":2943,\"end\":2974,\"name\":\"ISZERO\"},{\"begin\":2943,\"end\":2974,\"name\":\"MUL\"},{\"begin\":2943,\"end\":2974,\"name\":\"OR\"},{\"begin\":2943,\"end\":2974,\"name\":\"SWAP1\"},{\"begin\":2943,\"end\":2974,\"name\":\"SSTORE\"},{\"begin\":2943,\"end\":2974,\"name\":\"POP\"},{\"begin\":2658,\"end\":2980,\"name\":\"POP\"},{\"begin\":2658,\"end\":2980,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":999,\"end\":1040,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":999,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":999,\"end\":1040,\"name\":\"MSTORE\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP1\"},{\"begin\":999,\"end\":1040,\"name\":\"DUP2\"},{\"begin\":999,\"end\":1040,\"name\":\"MSTORE\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":999,\"end\":1040,\"name\":\"SWAP1\"},{\"begin\":999,\"end\":1040,\"name\":\"KECCAK256\"},{\"begin\":999,\"end\":1040,\"name\":\"SLOAD\"},{\"begin\":999,\"end\":1040,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":999,\"end\":1040,\"name\":\"AND\"},{\"begin\":999,\"end\":1040,\"name\":\"DUP2\"},{\"begin\":999,\"end\":1040,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":966,\"end\":995,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":966,\"end\":995,\"name\":\"JUMPDEST\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":966,\"end\":995,\"name\":\"DUP1\"},{\"begin\":966,\"end\":995,\"name\":\"SLOAD\"},{\"begin\":966,\"end\":995,\"name\":\"DUP3\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"DUP2\"},{\"begin\":966,\"end\":995,\"name\":\"LT\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH [tag]\",\"value\":\"138\"},{\"begin\":966,\"end\":995,\"name\":\"JUMPI\"},{\"begin\":966,\"end\":995,\"name\":\"INVALID\"},{\"begin\":966,\"end\":995,\"name\":\"tag\",\"value\":\"138\"},{\"begin\":966,\"end\":995,\"name\":\"JUMPDEST\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP2\"},{\"begin\":966,\"end\":995,\"name\":\"DUP3\"},{\"begin\":966,\"end\":995,\"name\":\"MSTORE\"},{\"begin\":966,\"end\":995,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP2\"},{\"begin\":966,\"end\":995,\"name\":\"KECCAK256\"},{\"begin\":966,\"end\":995,\"name\":\"ADD\"},{\"begin\":966,\"end\":995,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":966,\"end\":995,\"name\":\"AND\"},{\"begin\":966,\"end\":995,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":966,\"end\":995,\"name\":\"DUP2\"},{\"begin\":966,\"end\":995,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1123,\"end\":1143,\"name\":\"tag\",\"value\":\"35\"},{\"begin\":1123,\"end\":1143,\"name\":\"JUMPDEST\"},{\"begin\":1123,\"end\":1143,\"name\":\"PUSH\",\"value\":\"B\"},{\"begin\":1123,\"end\":1143,\"name\":\"SLOAD\"},{\"begin\":1123,\"end\":1143,\"name\":\"DUP2\"},{\"begin\":1123,\"end\":1143,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":4086,\"end\":4179,\"name\":\"tag\",\"value\":\"38\"},{\"begin\":4086,\"end\":4179,\"name\":\"JUMPDEST\"},{\"begin\":4135,\"end\":4139,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4157,\"end\":4172,\"name\":\"SLOAD\"},{\"begin\":4086,\"end\":4179,\"name\":\"tag\",\"value\":\"140\"},{\"begin\":4086,\"end\":4179,\"name\":\"JUMPDEST\"},{\"begin\":4086,\"end\":4179,\"name\":\"SWAP1\"},{\"begin\":4086,\"end\":4179,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2984,\"end\":3109,\"name\":\"tag\",\"value\":\"41\"},{\"begin\":2984,\"end\":3109,\"name\":\"JUMPDEST\"},{\"begin\":1231,\"end\":1238,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1231,\"end\":1238,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1231,\"end\":1238,\"name\":\"AND\"},{\"begin\":1217,\"end\":1227,\"name\":\"CALLER\"},{\"begin\":1217,\"end\":1238,\"name\":\"EQ\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH [tag]\",\"value\":\"142\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPI\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1209,\"end\":1239,\"name\":\"DUP1\"},{\"begin\":1209,\"end\":1239,\"name\":\"REVERT\"},{\"begin\":1209,\"end\":1239,\"name\":\"tag\",\"value\":\"142\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPDEST\"},{\"begin\":3044,\"end\":3064,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3035,\"end\":3040,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3035,\"end\":3040,\"name\":\"SLOAD\"},{\"begin\":3035,\"end\":3040,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3035,\"end\":3040,\"name\":\"AND\"},{\"begin\":3035,\"end\":3064,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3035,\"end\":3064,\"name\":\"DUP2\"},{\"begin\":3035,\"end\":3064,\"name\":\"GT\"},{\"begin\":3035,\"end\":3064,\"name\":\"ISZERO\"},{\"begin\":3035,\"end\":3064,\"name\":\"PUSH [tag]\",\"value\":\"145\"},{\"begin\":3035,\"end\":3064,\"name\":\"JUMPI\"},{\"begin\":3035,\"end\":3064,\"name\":\"INVALID\"},{\"begin\":3035,\"end\":3064,\"name\":\"tag\",\"value\":\"145\"},{\"begin\":3035,\"end\":3064,\"name\":\"JUMPDEST\"},{\"begin\":3035,\"end\":3064,\"name\":\"EQ\"},{\"begin\":3027,\"end\":3065,\"name\":\"PUSH [tag]\",\"value\":\"146\"},{\"begin\":3027,\"end\":3065,\"name\":\"JUMPI\"},{\"begin\":3027,\"end\":3065,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3027,\"end\":3065,\"name\":\"DUP1\"},{\"begin\":3027,\"end\":3065,\"name\":\"REVERT\"},{\"begin\":3027,\"end\":3065,\"name\":\"tag\",\"value\":\"146\"},{\"begin\":3027,\"end\":3065,\"name\":\"JUMPDEST\"},{\"begin\":3073,\"end\":3078,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3073,\"end\":3104,\"name\":\"DUP1\"},{\"begin\":3073,\"end\":3104,\"name\":\"SLOAD\"},{\"begin\":3081,\"end\":3104,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3081,\"end\":3104,\"name\":\"SWAP2\"},{\"begin\":3073,\"end\":3078,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3073,\"end\":3104,\"name\":\"AND\"},{\"begin\":3081,\"end\":3104,\"name\":\"DUP3\"},{\"begin\":3081,\"end\":3104,\"name\":\"DUP1\"},{\"begin\":3073,\"end\":3104,\"name\":\"tag\",\"value\":\"147\"},{\"begin\":3073,\"end\":3104,\"name\":\"JUMPDEST\"},{\"begin\":3073,\"end\":3104,\"name\":\"MUL\"},{\"begin\":3073,\"end\":3104,\"name\":\"OR\"},{\"begin\":3073,\"end\":3104,\"name\":\"SWAP1\"},{\"begin\":3073,\"end\":3104,\"name\":\"SSTORE\"},{\"begin\":3073,\"end\":3104,\"name\":\"POP\"},{\"begin\":2984,\"end\":3109,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3643,\"end\":4080,\"name\":\"tag\",\"value\":\"44\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMPDEST\"},{\"begin\":3781,\"end\":3800,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3781,\"end\":3800,\"name\":\"SLOAD\"},{\"begin\":3686,\"end\":3690,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3840,\"end\":3855,\"name\":\"DUP1\"},{\"begin\":3840,\"end\":3855,\"name\":\"SLOAD\"},{\"begin\":3869,\"end\":3883,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":3869,\"end\":3883,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3897,\"end\":3904,\"name\":\"SLOAD\"},{\"begin\":3999,\"end\":4014,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":3999,\"end\":4014,\"name\":\"SLOAD\"},{\"begin\":4028,\"end\":4036,\"name\":\"PUSH\",\"value\":\"B\"},{\"begin\":4028,\"end\":4036,\"name\":\"SLOAD\"},{\"begin\":4055,\"end\":4060,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":4055,\"end\":4060,\"name\":\"SLOAD\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP6\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3714,\"end\":3720,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":3714,\"end\":3720,\"name\":\"SWAP7\"},{\"begin\":3714,\"end\":3720,\"name\":\"DUP8\"},{\"begin\":3714,\"end\":3720,\"name\":\"SWAP7\"},{\"begin\":3714,\"end\":3720,\"name\":\"DUP8\"},{\"begin\":3714,\"end\":3720,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP11\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3686,\"end\":3690,\"name\":\"DUP8\"},{\"begin\":3686,\"end\":3690,\"name\":\"SWAP7\"},{\"begin\":3781,\"end\":3800,\"name\":\"SWAP3\"},{\"begin\":3781,\"end\":3800,\"name\":\"SWAP6\"},{\"begin\":3814,\"end\":3818,\"name\":\"ADDRESS\"},{\"begin\":3814,\"end\":3826,\"name\":\"BALANCE\"},{\"begin\":3814,\"end\":3826,\"name\":\"SWAP6\"},{\"begin\":3840,\"end\":3855,\"name\":\"SWAP2\"},{\"begin\":3840,\"end\":3855,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3897,\"end\":3904,\"name\":\"SWAP1\"},{\"begin\":3897,\"end\":3904,\"name\":\"SWAP2\"},{\"begin\":3897,\"end\":3904,\"name\":\"AND\"},{\"begin\":3897,\"end\":3904,\"name\":\"SWAP3\"},{\"begin\":3918,\"end\":3930,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3918,\"end\":3930,\"name\":\"SWAP3\"},{\"begin\":3944,\"end\":3963,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3944,\"end\":3963,\"name\":\"SWAP3\"},{\"begin\":3977,\"end\":3985,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3977,\"end\":3985,\"name\":\"SWAP3\"},{\"begin\":4055,\"end\":4060,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":4055,\"end\":4060,\"name\":\"AND\"},{\"begin\":4050,\"end\":4061,\"name\":\"DUP6\"},{\"begin\":4050,\"end\":4061,\"name\":\"DUP2\"},{\"begin\":4050,\"end\":4061,\"name\":\"GT\"},{\"begin\":4050,\"end\":4061,\"name\":\"ISZERO\"},{\"begin\":4050,\"end\":4061,\"name\":\"PUSH [tag]\",\"value\":\"149\"},{\"begin\":4050,\"end\":4061,\"name\":\"JUMPI\"},{\"begin\":4050,\"end\":4061,\"name\":\"INVALID\"},{\"begin\":4050,\"end\":4061,\"name\":\"tag\",\"value\":\"149\"},{\"begin\":4050,\"end\":4061,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"MLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP9\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"150\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"LT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"151\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"150\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMP\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"151\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"KECCAK256\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"152\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"GT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"152\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SUB\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"150\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP9\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"MLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP12\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"LT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"154\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMP\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"154\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"KECCAK256\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"155\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"GT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"155\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SUB\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"153\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP8\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"MLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP6\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP10\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP5\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ISZERO\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"156\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"LT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"157\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DIV\"},{\"begin\":3761,\"end\":4073,\"name\":\"MUL\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"156\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMP\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"157\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3761,\"end\":4073,\"name\":\"KECCAK256\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"158\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"SLOAD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"MSTORE\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"GT\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH [tag]\",\"value\":\"158\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPI\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP1\"},{\"begin\":3761,\"end\":4073,\"name\":\"SUB\"},{\"begin\":3761,\"end\":4073,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3761,\"end\":4073,\"name\":\"AND\"},{\"begin\":3761,\"end\":4073,\"name\":\"DUP3\"},{\"begin\":3761,\"end\":4073,\"name\":\"ADD\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP2\"},{\"begin\":3761,\"end\":4073,\"name\":\"tag\",\"value\":\"156\"},{\"begin\":3761,\"end\":4073,\"name\":\"JUMPDEST\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP4\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3761,\"end\":4073,\"name\":\"SWAP11\"},{\"begin\":3761,\"end\":4073,\"name\":\"POP\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP1\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP2\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP3\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP4\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP5\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP6\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP7\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP8\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP9\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP10\"},{\"begin\":3643,\"end\":4080,\"name\":\"SWAP11\"},{\"begin\":3643,\"end\":4080,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1044,\"end\":1089,\"name\":\"tag\",\"value\":\"59\"},{\"begin\":1044,\"end\":1089,\"name\":\"JUMPDEST\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1044,\"end\":1089,\"name\":\"MSTORE\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1044,\"end\":1089,\"name\":\"SWAP1\"},{\"begin\":1044,\"end\":1089,\"name\":\"DUP2\"},{\"begin\":1044,\"end\":1089,\"name\":\"MSTORE\"},{\"begin\":1044,\"end\":1089,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1044,\"end\":1089,\"name\":\"SWAP1\"},{\"begin\":1044,\"end\":1089,\"name\":\"KECCAK256\"},{\"begin\":1044,\"end\":1089,\"name\":\"SLOAD\"},{\"begin\":1044,\"end\":1089,\"name\":\"DUP2\"},{\"begin\":1044,\"end\":1089,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":781,\"end\":803,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":781,\"end\":803,\"name\":\"JUMPDEST\"},{\"begin\":781,\"end\":803,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":781,\"end\":803,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":781,\"end\":803,\"name\":\"AND\"},{\"begin\":781,\"end\":803,\"name\":\"DUP2\"},{\"begin\":781,\"end\":803,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3113,\"end\":3374,\"name\":\"tag\",\"value\":\"65\"},{\"begin\":3113,\"end\":3374,\"name\":\"JUMPDEST\"},{\"begin\":3165,\"end\":3185,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3156,\"end\":3161,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3156,\"end\":3161,\"name\":\"SLOAD\"},{\"begin\":3156,\"end\":3161,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3156,\"end\":3161,\"name\":\"AND\"},{\"begin\":3156,\"end\":3185,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3156,\"end\":3185,\"name\":\"DUP2\"},{\"begin\":3156,\"end\":3185,\"name\":\"GT\"},{\"begin\":3156,\"end\":3185,\"name\":\"ISZERO\"},{\"begin\":3156,\"end\":3185,\"name\":\"PUSH [tag]\",\"value\":\"161\"},{\"begin\":3156,\"end\":3185,\"name\":\"JUMPI\"},{\"begin\":3156,\"end\":3185,\"name\":\"INVALID\"},{\"begin\":3156,\"end\":3185,\"name\":\"tag\",\"value\":\"161\"},{\"begin\":3156,\"end\":3185,\"name\":\"JUMPDEST\"},{\"begin\":3156,\"end\":3185,\"name\":\"EQ\"},{\"begin\":3148,\"end\":3186,\"name\":\"PUSH [tag]\",\"value\":\"162\"},{\"begin\":3148,\"end\":3186,\"name\":\"JUMPI\"},{\"begin\":3148,\"end\":3186,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3148,\"end\":3186,\"name\":\"DUP1\"},{\"begin\":3148,\"end\":3186,\"name\":\"REVERT\"},{\"begin\":3148,\"end\":3186,\"name\":\"tag\",\"value\":\"162\"},{\"begin\":3148,\"end\":3186,\"name\":\"JUMPDEST\"},{\"begin\":3208,\"end\":3216,\"name\":\"PUSH\",\"value\":\"B\"},{\"begin\":3208,\"end\":3216,\"name\":\"SLOAD\"},{\"begin\":3202,\"end\":3205,\"name\":\"TIMESTAMP\"},{\"begin\":3202,\"end\":3216,\"name\":\"GT\"},{\"begin\":3194,\"end\":3217,\"name\":\"PUSH [tag]\",\"value\":\"163\"},{\"begin\":3194,\"end\":3217,\"name\":\"JUMPI\"},{\"begin\":3194,\"end\":3217,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3194,\"end\":3217,\"name\":\"DUP1\"},{\"begin\":3194,\"end\":3217,\"name\":\"REVERT\"},{\"begin\":3194,\"end\":3217,\"name\":\"tag\",\"value\":\"163\"},{\"begin\":3194,\"end\":3217,\"name\":\"JUMPDEST\"},{\"begin\":3245,\"end\":3260,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":3245,\"end\":3260,\"name\":\"SLOAD\"},{\"begin\":3229,\"end\":3233,\"name\":\"ADDRESS\"},{\"begin\":3229,\"end\":3241,\"name\":\"BALANCE\"},{\"begin\":3229,\"end\":3260,\"name\":\"LT\"},{\"begin\":3225,\"end\":3370,\"name\":\"PUSH [tag]\",\"value\":\"164\"},{\"begin\":3225,\"end\":3370,\"name\":\"JUMPI\"},{\"begin\":3274,\"end\":3279,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3274,\"end\":3306,\"name\":\"DUP1\"},{\"begin\":3274,\"end\":3306,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3274,\"end\":3306,\"name\":\"AND\"},{\"begin\":3282,\"end\":3306,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3274,\"end\":3306,\"name\":\"OR\"},{\"begin\":3274,\"end\":3306,\"name\":\"SWAP1\"},{\"begin\":3274,\"end\":3306,\"name\":\"SSTORE\"},{\"begin\":3225,\"end\":3370,\"name\":\"PUSH [tag]\",\"value\":\"166\"},{\"begin\":3225,\"end\":3370,\"name\":\"JUMP\"},{\"begin\":3225,\"end\":3370,\"name\":\"tag\",\"value\":\"164\"},{\"begin\":3225,\"end\":3370,\"name\":\"JUMPDEST\"},{\"begin\":3333,\"end\":3338,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3333,\"end\":3361,\"name\":\"DUP1\"},{\"begin\":3333,\"end\":3361,\"name\":\"SLOAD\"},{\"begin\":3341,\"end\":3361,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3341,\"end\":3361,\"name\":\"SWAP2\"},{\"begin\":3333,\"end\":3338,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3333,\"end\":3361,\"name\":\"AND\"},{\"begin\":3333,\"end\":3361,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3341,\"end\":3361,\"name\":\"DUP4\"},{\"begin\":3333,\"end\":3361,\"name\":\"PUSH [tag]\",\"value\":\"147\"},{\"begin\":3333,\"end\":3361,\"name\":\"JUMP\"},{\"begin\":3225,\"end\":3370,\"name\":\"tag\",\"value\":\"166\"},{\"begin\":3225,\"end\":3370,\"name\":\"JUMPDEST\"},{\"begin\":3113,\"end\":3374,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3378,\"end\":3636,\"name\":\"tag\",\"value\":\"68\"},{\"begin\":3378,\"end\":3636,\"name\":\"JUMPDEST\"},{\"begin\":3493,\"end\":3504,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3428,\"end\":3451,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3419,\"end\":3424,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3419,\"end\":3424,\"name\":\"SLOAD\"},{\"begin\":3419,\"end\":3424,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3419,\"end\":3424,\"name\":\"AND\"},{\"begin\":3419,\"end\":3451,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3419,\"end\":3451,\"name\":\"DUP2\"},{\"begin\":3419,\"end\":3451,\"name\":\"GT\"},{\"begin\":3419,\"end\":3451,\"name\":\"ISZERO\"},{\"begin\":3419,\"end\":3451,\"name\":\"PUSH [tag]\",\"value\":\"170\"},{\"begin\":3419,\"end\":3451,\"name\":\"JUMPI\"},{\"begin\":3419,\"end\":3451,\"name\":\"INVALID\"},{\"begin\":3419,\"end\":3451,\"name\":\"tag\",\"value\":\"170\"},{\"begin\":3419,\"end\":3451,\"name\":\"JUMPDEST\"},{\"begin\":3419,\"end\":3451,\"name\":\"EQ\"},{\"begin\":3419,\"end\":3484,\"name\":\"DUP1\"},{\"begin\":3419,\"end\":3484,\"name\":\"PUSH [tag]\",\"value\":\"171\"},{\"begin\":3419,\"end\":3484,\"name\":\"JUMPI\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3464,\"end\":3484,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3455,\"end\":3460,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":3455,\"end\":3460,\"name\":\"SLOAD\"},{\"begin\":3455,\"end\":3460,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3455,\"end\":3460,\"name\":\"AND\"},{\"begin\":3455,\"end\":3484,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3455,\"end\":3484,\"name\":\"DUP2\"},{\"begin\":3455,\"end\":3484,\"name\":\"GT\"},{\"begin\":3455,\"end\":3484,\"name\":\"ISZERO\"},{\"begin\":3455,\"end\":3484,\"name\":\"PUSH [tag]\",\"value\":\"173\"},{\"begin\":3455,\"end\":3484,\"name\":\"JUMPI\"},{\"begin\":3455,\"end\":3484,\"name\":\"INVALID\"},{\"begin\":3455,\"end\":3484,\"name\":\"tag\",\"value\":\"173\"},{\"begin\":3455,\"end\":3484,\"name\":\"JUMPDEST\"},{\"begin\":3455,\"end\":3484,\"name\":\"EQ\"},{\"begin\":3419,\"end\":3484,\"name\":\"tag\",\"value\":\"171\"},{\"begin\":3419,\"end\":3484,\"name\":\"JUMPDEST\"},{\"begin\":3411,\"end\":3485,\"name\":\"ISZERO\"},{\"begin\":3411,\"end\":3485,\"name\":\"ISZERO\"},{\"begin\":3411,\"end\":3485,\"name\":\"PUSH [tag]\",\"value\":\"174\"},{\"begin\":3411,\"end\":3485,\"name\":\"JUMPI\"},{\"begin\":3411,\"end\":3485,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3411,\"end\":3485,\"name\":\"DUP1\"},{\"begin\":3411,\"end\":3485,\"name\":\"REVERT\"},{\"begin\":3411,\"end\":3485,\"name\":\"tag\",\"value\":\"174\"},{\"begin\":3411,\"end\":3485,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3521,\"end\":3531,\"name\":\"CALLER\"},{\"begin\":3507,\"end\":3532,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3507,\"end\":3532,\"name\":\"SWAP1\"},{\"begin\":3507,\"end\":3532,\"name\":\"DUP2\"},{\"begin\":3507,\"end\":3532,\"name\":\"MSTORE\"},{\"begin\":3507,\"end\":3520,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":3507,\"end\":3532,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3507,\"end\":3532,\"name\":\"MSTORE\"},{\"begin\":3507,\"end\":3532,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3507,\"end\":3532,\"name\":\"DUP2\"},{\"begin\":3507,\"end\":3532,\"name\":\"KECCAK256\"},{\"begin\":3507,\"end\":3532,\"name\":\"SLOAD\"},{\"begin\":3507,\"end\":3532,\"name\":\"SWAP1\"},{\"begin\":3548,\"end\":3558,\"name\":\"DUP2\"},{\"begin\":3548,\"end\":3558,\"name\":\"GT\"},{\"begin\":3540,\"end\":3559,\"name\":\"PUSH [tag]\",\"value\":\"175\"},{\"begin\":3540,\"end\":3559,\"name\":\"JUMPI\"},{\"begin\":3540,\"end\":3559,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3540,\"end\":3559,\"name\":\"DUP1\"},{\"begin\":3540,\"end\":3559,\"name\":\"REVERT\"},{\"begin\":3540,\"end\":3559,\"name\":\"tag\",\"value\":\"175\"},{\"begin\":3540,\"end\":3559,\"name\":\"JUMPDEST\"},{\"begin\":3581,\"end\":3591,\"name\":\"CALLER\"},{\"begin\":3595,\"end\":3596,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3567,\"end\":3592,\"name\":\"DUP2\"},{\"begin\":3567,\"end\":3592,\"name\":\"DUP2\"},{\"begin\":3567,\"end\":3592,\"name\":\"MSTORE\"},{\"begin\":3567,\"end\":3580,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":3567,\"end\":3592,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3567,\"end\":3592,\"name\":\"MSTORE\"},{\"begin\":3567,\"end\":3592,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3567,\"end\":3592,\"name\":\"DUP1\"},{\"begin\":3567,\"end\":3592,\"name\":\"DUP3\"},{\"begin\":3567,\"end\":3592,\"name\":\"KECCAK256\"},{\"begin\":3567,\"end\":3596,\"name\":\"DUP3\"},{\"begin\":3567,\"end\":3596,\"name\":\"SWAP1\"},{\"begin\":3567,\"end\":3596,\"name\":\"SSTORE\"},{\"begin\":3604,\"end\":3631,\"name\":\"MLOAD\"},{\"begin\":3604,\"end\":3631,\"name\":\"DUP4\"},{\"begin\":3604,\"end\":3631,\"name\":\"ISZERO\"},{\"begin\":3604,\"end\":3631,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":3604,\"end\":3631,\"name\":\"MUL\"},{\"begin\":3604,\"end\":3631,\"name\":\"SWAP2\"},{\"begin\":3624,\"end\":3630,\"name\":\"DUP5\"},{\"begin\":3624,\"end\":3630,\"name\":\"SWAP2\"},{\"begin\":3604,\"end\":3631,\"name\":\"SWAP1\"},{\"begin\":3604,\"end\":3631,\"name\":\"DUP2\"},{\"begin\":3595,\"end\":3596,\"name\":\"DUP2\"},{\"begin\":3604,\"end\":3631,\"name\":\"DUP2\"},{\"begin\":3624,\"end\":3630,\"name\":\"DUP6\"},{\"begin\":3581,\"end\":3591,\"name\":\"DUP9\"},{\"begin\":3604,\"end\":3631,\"name\":\"DUP9\"},{\"begin\":3604,\"end\":3631,\"name\":\"CALL\"},{\"begin\":3604,\"end\":3631,\"name\":\"SWAP4\"},{\"begin\":3604,\"end\":3631,\"name\":\"POP\"},{\"begin\":3604,\"end\":3631,\"name\":\"POP\"},{\"begin\":3604,\"end\":3631,\"name\":\"POP\"},{\"begin\":3604,\"end\":3631,\"name\":\"POP\"},{\"begin\":3604,\"end\":3631,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"176\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":45,\"end\":61,\"name\":\"RETURNDATASIZE\"},{\"begin\":42,\"end\":43,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":39,\"end\":40,\"name\":\"DUP1\"},{\"begin\":24,\"end\":62,\"name\":\"RETURNDATACOPY\"},{\"begin\":77,\"end\":93,\"name\":\"RETURNDATASIZE\"},{\"begin\":74,\"end\":75,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":67,\"end\":94,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"176\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":3604,\"end\":3631,\"name\":\"POP\"},{\"begin\":3378,\"end\":3636,\"name\":\"POP\"},{\"begin\":3378,\"end\":3636,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"71\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"SLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"MLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP6\"},{\"begin\":842,\"end\":868,\"name\":\"AND\"},{\"begin\":842,\"end\":868,\"name\":\"ISZERO\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":842,\"end\":868,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP5\"},{\"begin\":842,\"end\":868,\"name\":\"AND\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP4\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP4\"},{\"begin\":842,\"end\":868,\"name\":\"DIV\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP5\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"DIV\"},{\"begin\":842,\"end\":868,\"name\":\"DUP5\"},{\"begin\":842,\"end\":868,\"name\":\"MUL\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP5\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP3\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP3\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"ISZERO\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPI\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":842,\"end\":868,\"name\":\"LT\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"178\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPI\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"SLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"DIV\"},{\"begin\":842,\"end\":868,\"name\":\"MUL\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":842,\"end\":868,\"name\":\"JUMP\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"178\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":842,\"end\":868,\"name\":\"KECCAK256\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"179\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"SLOAD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"MSTORE\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"DUP1\"},{\"begin\":842,\"end\":868,\"name\":\"DUP4\"},{\"begin\":842,\"end\":868,\"name\":\"GT\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH [tag]\",\"value\":\"179\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPI\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP1\"},{\"begin\":842,\"end\":868,\"name\":\"SUB\"},{\"begin\":842,\"end\":868,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":842,\"end\":868,\"name\":\"AND\"},{\"begin\":842,\"end\":868,\"name\":\"DUP3\"},{\"begin\":842,\"end\":868,\"name\":\"ADD\"},{\"begin\":842,\"end\":868,\"name\":\"SWAP2\"},{\"begin\":842,\"end\":868,\"name\":\"tag\",\"value\":\"177\"},{\"begin\":842,\"end\":868,\"name\":\"JUMPDEST\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"POP\"},{\"begin\":842,\"end\":868,\"name\":\"DUP2\"},{\"begin\":842,\"end\":868,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"78\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"LT\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"180\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPI\"},{\"begin\":752,\"end\":777,\"name\":\"INVALID\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"180\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"KECCAK256\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"MUL\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"MLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP5\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"ISZERO\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":752,\"end\":777,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP4\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"DIV\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP6\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DIV\"},{\"begin\":752,\"end\":777,\"name\":\"DUP6\"},{\"begin\":752,\"end\":777,\"name\":\"MUL\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP6\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"ISZERO\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"182\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPI\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":752,\"end\":777,\"name\":\"LT\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"183\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPI\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"DIV\"},{\"begin\":752,\"end\":777,\"name\":\"MUL\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"182\"},{\"begin\":752,\"end\":777,\"name\":\"JUMP\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"183\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":752,\"end\":777,\"name\":\"KECCAK256\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"184\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP2\"},{\"begin\":752,\"end\":777,\"name\":\"MSTORE\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"DUP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"GT\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH [tag]\",\"value\":\"184\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPI\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"tag\",\"value\":\"182\"},{\"begin\":752,\"end\":777,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP4\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":752,\"end\":777,\"name\":\"DUP5\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP5\"},{\"begin\":752,\"end\":777,\"name\":\"ADD\"},{\"begin\":752,\"end\":777,\"name\":\"SLOAD\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP4\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":752,\"end\":777,\"name\":\"DUP3\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP2\"},{\"begin\":752,\"end\":777,\"name\":\"DIV\"},{\"begin\":752,\"end\":777,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":752,\"end\":777,\"name\":\"AND\"},{\"begin\":752,\"end\":777,\"name\":\"SWAP1\"},{\"begin\":752,\"end\":777,\"name\":\"DUP6\"},{\"begin\":752,\"end\":777,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1093,\"end\":1119,\"name\":\"tag\",\"value\":\"85\"},{\"begin\":1093,\"end\":1119,\"name\":\"JUMPDEST\"},{\"begin\":1093,\"end\":1119,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":1093,\"end\":1119,\"name\":\"SLOAD\"},{\"begin\":1093,\"end\":1119,\"name\":\"DUP2\"},{\"begin\":1093,\"end\":1119,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1999,\"end\":2371,\"name\":\"tag\",\"value\":\"88\"},{\"begin\":1999,\"end\":2371,\"name\":\"JUMPDEST\"},{\"begin\":2145,\"end\":2170,\"name\":\"PUSH [tag]\",\"value\":\"185\"},{\"begin\":2145,\"end\":2170,\"name\":\"PUSH [tag]\",\"value\":\"186\"},{\"begin\":2145,\"end\":2170,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2145,\"end\":2170,\"name\":\"tag\",\"value\":\"185\"},{\"begin\":2145,\"end\":2170,\"name\":\"JUMPDEST\"},{\"begin\":1231,\"end\":1238,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1231,\"end\":1238,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1231,\"end\":1238,\"name\":\"AND\"},{\"begin\":1217,\"end\":1227,\"name\":\"CALLER\"},{\"begin\":1217,\"end\":1238,\"name\":\"EQ\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH [tag]\",\"value\":\"188\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPI\"},{\"begin\":1209,\"end\":1239,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1209,\"end\":1239,\"name\":\"DUP1\"},{\"begin\":1209,\"end\":1239,\"name\":\"REVERT\"},{\"begin\":1209,\"end\":1239,\"name\":\"tag\",\"value\":\"188\"},{\"begin\":1209,\"end\":1239,\"name\":\"JUMPDEST\"},{\"begin\":2116,\"end\":2136,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2107,\"end\":2112,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":2107,\"end\":2112,\"name\":\"SLOAD\"},{\"begin\":2107,\"end\":2112,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2107,\"end\":2112,\"name\":\"AND\"},{\"begin\":2107,\"end\":2136,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2107,\"end\":2136,\"name\":\"DUP2\"},{\"begin\":2107,\"end\":2136,\"name\":\"GT\"},{\"begin\":2107,\"end\":2136,\"name\":\"ISZERO\"},{\"begin\":2107,\"end\":2136,\"name\":\"PUSH [tag]\",\"value\":\"191\"},{\"begin\":2107,\"end\":2136,\"name\":\"JUMPI\"},{\"begin\":2107,\"end\":2136,\"name\":\"INVALID\"},{\"begin\":2107,\"end\":2136,\"name\":\"tag\",\"value\":\"191\"},{\"begin\":2107,\"end\":2136,\"name\":\"JUMPDEST\"},{\"begin\":2107,\"end\":2136,\"name\":\"EQ\"},{\"begin\":2099,\"end\":2137,\"name\":\"PUSH [tag]\",\"value\":\"192\"},{\"begin\":2099,\"end\":2137,\"name\":\"JUMPI\"},{\"begin\":2099,\"end\":2137,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2099,\"end\":2137,\"name\":\"DUP1\"},{\"begin\":2099,\"end\":2137,\"name\":\"REVERT\"},{\"begin\":2099,\"end\":2137,\"name\":\"tag\",\"value\":\"192\"},{\"begin\":2099,\"end\":2137,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2173,\"end\":2332,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"MLOAD\"},{\"begin\":2173,\"end\":2332,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP2\"},{\"begin\":2173,\"end\":2332,\"name\":\"ADD\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP5\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP2\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":2173,\"end\":2332,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"ADD\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP6\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP5\"},{\"begin\":2173,\"end\":2332,\"name\":\"AND\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"ADD\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2173,\"end\":2332,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"ADD\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP2\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":2173,\"end\":2332,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP3\"},{\"begin\":2173,\"end\":2332,\"name\":\"ADD\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP2\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP1\"},{\"begin\":2173,\"end\":2332,\"name\":\"MSTORE\"},{\"begin\":27,\"end\":37,\"name\":\"DUP1\"},{\"begin\":27,\"end\":37,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP2\"},{\"begin\":23,\"end\":41,\"name\":\"ADD\"},{\"begin\":45,\"end\":68,\"name\":\"DUP1\"},{\"begin\":45,\"end\":68,\"name\":\"DUP4\"},{\"begin\":45,\"end\":68,\"name\":\"SSTORE\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"MSTORE\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP4\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP5\"},{\"begin\":23,\"end\":41,\"name\":\"SWAP3\"},{\"begin\":23,\"end\":41,\"name\":\"SWAP4\"},{\"begin\":2173,\"end\":2332,\"name\":\"DUP6\"},{\"begin\":2173,\"end\":2332,\"name\":\"SWAP4\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP4\"},{\"begin\":2341,\"end\":2366,\"name\":\"MUL\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH [tag]\",\"value\":\"194\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP5\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH [tag]\",\"value\":\"195\"},{\"begin\":2341,\"end\":2366,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2341,\"end\":2366,\"name\":\"tag\",\"value\":\"194\"},{\"begin\":2341,\"end\":2366,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"SSTORE\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2341,\"end\":2366,\"name\":\"DUP6\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"ISZERO\"},{\"begin\":2341,\"end\":2366,\"name\":\"ISZERO\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":2341,\"end\":2366,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP5\"},{\"begin\":2341,\"end\":2366,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"AND\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"OR\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP3\"},{\"begin\":2341,\"end\":2366,\"name\":\"AND\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"OR\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SSTORE\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"MLOAD\"},{\"begin\":2341,\"end\":2366,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP1\"},{\"begin\":2341,\"end\":2366,\"name\":\"SWAP2\"},{\"begin\":2341,\"end\":2366,\"name\":\"ADD\"},{\"begin\":2341,\"end\":2366,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1999,\"end\":2371,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":872,\"end\":905,\"name\":\"tag\",\"value\":\"91\"},{\"begin\":872,\"end\":905,\"name\":\"JUMPDEST\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":872,\"end\":905,\"name\":\"DUP1\"},{\"begin\":872,\"end\":905,\"name\":\"SLOAD\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":872,\"end\":905,\"name\":\"DUP1\"},{\"begin\":872,\"end\":905,\"name\":\"MLOAD\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":872,\"end\":905,\"name\":\"DUP6\"},{\"begin\":872,\"end\":905,\"name\":\"AND\"},{\"begin\":872,\"end\":905,\"name\":\"ISZERO\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":872,\"end\":905,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP1\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP5\"},{\"begin\":872,\"end\":905,\"name\":\"AND\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP4\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP1\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP4\"},{\"begin\":872,\"end\":905,\"name\":\"DIV\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":872,\"end\":905,\"name\":\"DUP2\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"DUP5\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP1\"},{\"begin\":872,\"end\":905,\"name\":\"DIV\"},{\"begin\":872,\"end\":905,\"name\":\"DUP5\"},{\"begin\":872,\"end\":905,\"name\":\"MUL\"},{\"begin\":872,\"end\":905,\"name\":\"DUP3\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"DUP5\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP1\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP3\"},{\"begin\":872,\"end\":905,\"name\":\"MSTORE\"},{\"begin\":872,\"end\":905,\"name\":\"DUP2\"},{\"begin\":872,\"end\":905,\"name\":\"DUP2\"},{\"begin\":872,\"end\":905,\"name\":\"MSTORE\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP3\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP2\"},{\"begin\":872,\"end\":905,\"name\":\"DUP4\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"DUP3\"},{\"begin\":872,\"end\":905,\"name\":\"DUP3\"},{\"begin\":872,\"end\":905,\"name\":\"DUP1\"},{\"begin\":872,\"end\":905,\"name\":\"ISZERO\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":872,\"end\":905,\"name\":\"JUMPI\"},{\"begin\":872,\"end\":905,\"name\":\"DUP1\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":872,\"end\":905,\"name\":\"LT\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH [tag]\",\"value\":\"178\"},{\"begin\":872,\"end\":905,\"name\":\"JUMPI\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":872,\"end\":905,\"name\":\"DUP1\"},{\"begin\":872,\"end\":905,\"name\":\"DUP4\"},{\"begin\":872,\"end\":905,\"name\":\"SLOAD\"},{\"begin\":872,\"end\":905,\"name\":\"DIV\"},{\"begin\":872,\"end\":905,\"name\":\"MUL\"},{\"begin\":872,\"end\":905,\"name\":\"DUP4\"},{\"begin\":872,\"end\":905,\"name\":\"MSTORE\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP2\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":872,\"end\":905,\"name\":\"ADD\"},{\"begin\":872,\"end\":905,\"name\":\"SWAP2\"},{\"begin\":872,\"end\":905,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":872,\"end\":905,\"name\":\"JUMP\"},{\"begin\":807,\"end\":838,\"name\":\"tag\",\"value\":\"98\"},{\"begin\":807,\"end\":838,\"name\":\"JUMPDEST\"},{\"begin\":807,\"end\":838,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":807,\"end\":838,\"name\":\"SLOAD\"},{\"begin\":807,\"end\":838,\"name\":\"DUP2\"},{\"begin\":807,\"end\":838,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":909,\"end\":931,\"name\":\"tag\",\"value\":\"101\"},{\"begin\":909,\"end\":931,\"name\":\"JUMPDEST\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":909,\"end\":931,\"name\":\"DUP1\"},{\"begin\":909,\"end\":931,\"name\":\"SLOAD\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":909,\"end\":931,\"name\":\"DUP1\"},{\"begin\":909,\"end\":931,\"name\":\"MLOAD\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":909,\"end\":931,\"name\":\"DUP6\"},{\"begin\":909,\"end\":931,\"name\":\"AND\"},{\"begin\":909,\"end\":931,\"name\":\"ISZERO\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":909,\"end\":931,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP1\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP5\"},{\"begin\":909,\"end\":931,\"name\":\"AND\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP4\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP1\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP4\"},{\"begin\":909,\"end\":931,\"name\":\"DIV\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":909,\"end\":931,\"name\":\"DUP2\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"DUP5\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP1\"},{\"begin\":909,\"end\":931,\"name\":\"DIV\"},{\"begin\":909,\"end\":931,\"name\":\"DUP5\"},{\"begin\":909,\"end\":931,\"name\":\"MUL\"},{\"begin\":909,\"end\":931,\"name\":\"DUP3\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"DUP5\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP1\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP3\"},{\"begin\":909,\"end\":931,\"name\":\"MSTORE\"},{\"begin\":909,\"end\":931,\"name\":\"DUP2\"},{\"begin\":909,\"end\":931,\"name\":\"DUP2\"},{\"begin\":909,\"end\":931,\"name\":\"MSTORE\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP3\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP2\"},{\"begin\":909,\"end\":931,\"name\":\"DUP4\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"DUP3\"},{\"begin\":909,\"end\":931,\"name\":\"DUP3\"},{\"begin\":909,\"end\":931,\"name\":\"DUP1\"},{\"begin\":909,\"end\":931,\"name\":\"ISZERO\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":909,\"end\":931,\"name\":\"JUMPI\"},{\"begin\":909,\"end\":931,\"name\":\"DUP1\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":909,\"end\":931,\"name\":\"LT\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH [tag]\",\"value\":\"178\"},{\"begin\":909,\"end\":931,\"name\":\"JUMPI\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":909,\"end\":931,\"name\":\"DUP1\"},{\"begin\":909,\"end\":931,\"name\":\"DUP4\"},{\"begin\":909,\"end\":931,\"name\":\"SLOAD\"},{\"begin\":909,\"end\":931,\"name\":\"DIV\"},{\"begin\":909,\"end\":931,\"name\":\"MUL\"},{\"begin\":909,\"end\":931,\"name\":\"DUP4\"},{\"begin\":909,\"end\":931,\"name\":\"MSTORE\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP2\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":909,\"end\":931,\"name\":\"ADD\"},{\"begin\":909,\"end\":931,\"name\":\"SWAP2\"},{\"begin\":909,\"end\":931,\"name\":\"PUSH [tag]\",\"value\":\"177\"},{\"begin\":909,\"end\":931,\"name\":\"JUMP\"},{\"begin\":935,\"end\":962,\"name\":\"tag\",\"value\":\"108\"},{\"begin\":935,\"end\":962,\"name\":\"JUMPDEST\"},{\"begin\":935,\"end\":962,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":935,\"end\":962,\"name\":\"SLOAD\"},{\"begin\":935,\"end\":962,\"name\":\"DUP2\"},{\"begin\":935,\"end\":962,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1147,\"end\":1173,\"name\":\"tag\",\"value\":\"111\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMPDEST\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":1147,\"end\":1173,\"name\":\"SLOAD\"},{\"begin\":1147,\"end\":1173,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1147,\"end\":1173,\"name\":\"AND\"},{\"begin\":1147,\"end\":1173,\"name\":\"DUP2\"},{\"begin\":1147,\"end\":1173,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2375,\"end\":2654,\"name\":\"tag\",\"value\":\"115\"},{\"begin\":2375,\"end\":2654,\"name\":\"JUMPDEST\"},{\"begin\":2444,\"end\":2454,\"name\":\"CALLER\"},{\"begin\":2434,\"end\":2455,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2434,\"end\":2455,\"name\":\"SWAP1\"},{\"begin\":2434,\"end\":2455,\"name\":\"DUP2\"},{\"begin\":2434,\"end\":2455,\"name\":\"MSTORE\"},{\"begin\":2434,\"end\":2443,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":2434,\"end\":2455,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2434,\"end\":2455,\"name\":\"MSTORE\"},{\"begin\":2434,\"end\":2455,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2434,\"end\":2455,\"name\":\"SWAP1\"},{\"begin\":2434,\"end\":2455,\"name\":\"KECCAK256\"},{\"begin\":2434,\"end\":2455,\"name\":\"SLOAD\"},{\"begin\":2434,\"end\":2455,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2434,\"end\":2455,\"name\":\"AND\"},{\"begin\":2426,\"end\":2456,\"name\":\"ISZERO\"},{\"begin\":2426,\"end\":2456,\"name\":\"ISZERO\"},{\"begin\":2426,\"end\":2456,\"name\":\"PUSH [tag]\",\"value\":\"203\"},{\"begin\":2426,\"end\":2456,\"name\":\"JUMPI\"},{\"begin\":2426,\"end\":2456,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2426,\"end\":2456,\"name\":\"DUP1\"},{\"begin\":2426,\"end\":2456,\"name\":\"REVERT\"},{\"begin\":2426,\"end\":2456,\"name\":\"tag\",\"value\":\"203\"},{\"begin\":2426,\"end\":2456,\"name\":\"JUMPDEST\"},{\"begin\":2481,\"end\":2501,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2472,\"end\":2477,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":2472,\"end\":2477,\"name\":\"SLOAD\"},{\"begin\":2472,\"end\":2477,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2472,\"end\":2477,\"name\":\"AND\"},{\"begin\":2472,\"end\":2501,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2472,\"end\":2501,\"name\":\"DUP2\"},{\"begin\":2472,\"end\":2501,\"name\":\"GT\"},{\"begin\":2472,\"end\":2501,\"name\":\"ISZERO\"},{\"begin\":2472,\"end\":2501,\"name\":\"PUSH [tag]\",\"value\":\"205\"},{\"begin\":2472,\"end\":2501,\"name\":\"JUMPI\"},{\"begin\":2472,\"end\":2501,\"name\":\"INVALID\"},{\"begin\":2472,\"end\":2501,\"name\":\"tag\",\"value\":\"205\"},{\"begin\":2472,\"end\":2501,\"name\":\"JUMPDEST\"},{\"begin\":2472,\"end\":2501,\"name\":\"EQ\"},{\"begin\":2464,\"end\":2502,\"name\":\"PUSH [tag]\",\"value\":\"206\"},{\"begin\":2464,\"end\":2502,\"name\":\"JUMPI\"},{\"begin\":2464,\"end\":2502,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2464,\"end\":2502,\"name\":\"DUP1\"},{\"begin\":2464,\"end\":2502,\"name\":\"REVERT\"},{\"begin\":2464,\"end\":2502,\"name\":\"tag\",\"value\":\"206\"},{\"begin\":2464,\"end\":2502,\"name\":\"JUMPDEST\"},{\"begin\":2519,\"end\":2527,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2519,\"end\":2534,\"name\":\"DUP1\"},{\"begin\":2519,\"end\":2534,\"name\":\"SLOAD\"},{\"begin\":2528,\"end\":2533,\"name\":\"DUP3\"},{\"begin\":2528,\"end\":2533,\"name\":\"SWAP1\"},{\"begin\":2519,\"end\":2534,\"name\":\"DUP2\"},{\"begin\":2519,\"end\":2534,\"name\":\"LT\"},{\"begin\":2519,\"end\":2534,\"name\":\"PUSH [tag]\",\"value\":\"207\"},{\"begin\":2519,\"end\":2534,\"name\":\"JUMPI\"},{\"begin\":2519,\"end\":2534,\"name\":\"INVALID\"},{\"begin\":2519,\"end\":2534,\"name\":\"tag\",\"value\":\"207\"},{\"begin\":2519,\"end\":2534,\"name\":\"JUMPDEST\"},{\"begin\":2519,\"end\":2534,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2519,\"end\":2534,\"name\":\"SWAP2\"},{\"begin\":2519,\"end\":2534,\"name\":\"DUP3\"},{\"begin\":2519,\"end\":2534,\"name\":\"MSTORE\"},{\"begin\":2519,\"end\":2534,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2519,\"end\":2534,\"name\":\"DUP1\"},{\"begin\":2519,\"end\":2534,\"name\":\"DUP4\"},{\"begin\":2519,\"end\":2534,\"name\":\"KECCAK256\"},{\"begin\":2545,\"end\":2555,\"name\":\"CALLER\"},{\"begin\":2519,\"end\":2556,\"name\":\"DUP5\"},{\"begin\":2519,\"end\":2556,\"name\":\"MSTORE\"},{\"begin\":2519,\"end\":2544,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2519,\"end\":2534,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2519,\"end\":2534,\"name\":\"SWAP1\"},{\"begin\":2519,\"end\":2534,\"name\":\"SWAP4\"},{\"begin\":2519,\"end\":2534,\"name\":\"MUL\"},{\"begin\":2519,\"end\":2534,\"name\":\"ADD\"},{\"begin\":2519,\"end\":2544,\"name\":\"SWAP2\"},{\"begin\":2519,\"end\":2544,\"name\":\"SWAP1\"},{\"begin\":2519,\"end\":2544,\"name\":\"SWAP2\"},{\"begin\":2519,\"end\":2544,\"name\":\"ADD\"},{\"begin\":2519,\"end\":2556,\"name\":\"SWAP1\"},{\"begin\":2519,\"end\":2556,\"name\":\"MSTORE\"},{\"begin\":2519,\"end\":2556,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2519,\"end\":2556,\"name\":\"SWAP1\"},{\"begin\":2519,\"end\":2556,\"name\":\"KECCAK256\"},{\"begin\":2519,\"end\":2556,\"name\":\"SLOAD\"},{\"begin\":2519,\"end\":2556,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2519,\"end\":2556,\"name\":\"AND\"},{\"begin\":2518,\"end\":2556,\"name\":\"ISZERO\"},{\"begin\":2510,\"end\":2557,\"name\":\"PUSH [tag]\",\"value\":\"209\"},{\"begin\":2510,\"end\":2557,\"name\":\"JUMPI\"},{\"begin\":2510,\"end\":2557,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2510,\"end\":2557,\"name\":\"DUP1\"},{\"begin\":2510,\"end\":2557,\"name\":\"REVERT\"},{\"begin\":2510,\"end\":2557,\"name\":\"tag\",\"value\":\"209\"},{\"begin\":2510,\"end\":2557,\"name\":\"JUMPDEST\"},{\"begin\":2606,\"end\":2610,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2566,\"end\":2574,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2575,\"end\":2580,\"name\":\"DUP3\"},{\"begin\":2566,\"end\":2581,\"name\":\"DUP2\"},{\"begin\":2566,\"end\":2581,\"name\":\"SLOAD\"},{\"begin\":2566,\"end\":2581,\"name\":\"DUP2\"},{\"begin\":2566,\"end\":2581,\"name\":\"LT\"},{\"begin\":2566,\"end\":2581,\"name\":\"ISZERO\"},{\"begin\":2566,\"end\":2581,\"name\":\"ISZERO\"},{\"begin\":2566,\"end\":2581,\"name\":\"PUSH [tag]\",\"value\":\"210\"},{\"begin\":2566,\"end\":2581,\"name\":\"JUMPI\"},{\"begin\":2566,\"end\":2581,\"name\":\"INVALID\"},{\"begin\":2566,\"end\":2581,\"name\":\"tag\",\"value\":\"210\"},{\"begin\":2566,\"end\":2581,\"name\":\"JUMPDEST\"},{\"begin\":2566,\"end\":2581,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP2\"},{\"begin\":2566,\"end\":2581,\"name\":\"DUP3\"},{\"begin\":2566,\"end\":2581,\"name\":\"MSTORE\"},{\"begin\":2566,\"end\":2581,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2566,\"end\":2581,\"name\":\"DUP1\"},{\"begin\":2566,\"end\":2581,\"name\":\"DUP4\"},{\"begin\":2566,\"end\":2581,\"name\":\"KECCAK256\"},{\"begin\":2592,\"end\":2602,\"name\":\"CALLER\"},{\"begin\":2566,\"end\":2603,\"name\":\"DUP5\"},{\"begin\":2566,\"end\":2603,\"name\":\"MSTORE\"},{\"begin\":2566,\"end\":2581,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP3\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP1\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP3\"},{\"begin\":2566,\"end\":2581,\"name\":\"MUL\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP1\"},{\"begin\":2566,\"end\":2581,\"name\":\"SWAP2\"},{\"begin\":2566,\"end\":2581,\"name\":\"ADD\"},{\"begin\":2566,\"end\":2591,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2566,\"end\":2591,\"name\":\"ADD\"},{\"begin\":2566,\"end\":2603,\"name\":\"SWAP1\"},{\"begin\":2566,\"end\":2603,\"name\":\"MSTORE\"},{\"begin\":2566,\"end\":2603,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2566,\"end\":2603,\"name\":\"DUP2\"},{\"begin\":2566,\"end\":2603,\"name\":\"KECCAK256\"},{\"begin\":2566,\"end\":2610,\"name\":\"DUP1\"},{\"begin\":2566,\"end\":2610,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2566,\"end\":2610,\"name\":\"AND\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP3\"},{\"begin\":2566,\"end\":2610,\"name\":\"ISZERO\"},{\"begin\":2566,\"end\":2610,\"name\":\"ISZERO\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP3\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP1\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP3\"},{\"begin\":2566,\"end\":2610,\"name\":\"OR\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP1\"},{\"begin\":2566,\"end\":2610,\"name\":\"SWAP2\"},{\"begin\":2566,\"end\":2610,\"name\":\"SSTORE\"},{\"begin\":2618,\"end\":2633,\"name\":\"DUP1\"},{\"begin\":2618,\"end\":2633,\"name\":\"SLOAD\"},{\"begin\":2627,\"end\":2632,\"name\":\"DUP3\"},{\"begin\":2627,\"end\":2632,\"name\":\"SWAP1\"},{\"begin\":2618,\"end\":2633,\"name\":\"DUP2\"},{\"begin\":2618,\"end\":2633,\"name\":\"LT\"},{\"begin\":2618,\"end\":2633,\"name\":\"PUSH [tag]\",\"value\":\"212\"},{\"begin\":2618,\"end\":2633,\"name\":\"JUMPI\"},{\"begin\":2618,\"end\":2633,\"name\":\"INVALID\"},{\"begin\":2618,\"end\":2633,\"name\":\"tag\",\"value\":\"212\"},{\"begin\":2618,\"end\":2633,\"name\":\"JUMPDEST\"},{\"begin\":2618,\"end\":2633,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2618,\"end\":2633,\"name\":\"SWAP2\"},{\"begin\":2618,\"end\":2633,\"name\":\"DUP3\"},{\"begin\":2618,\"end\":2633,\"name\":\"MSTORE\"},{\"begin\":2618,\"end\":2633,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2618,\"end\":2633,\"name\":\"SWAP1\"},{\"begin\":2618,\"end\":2633,\"name\":\"SWAP2\"},{\"begin\":2618,\"end\":2633,\"name\":\"KECCAK256\"},{\"begin\":2618,\"end\":2647,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2618,\"end\":2633,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2618,\"end\":2633,\"name\":\"SWAP1\"},{\"begin\":2618,\"end\":2633,\"name\":\"SWAP3\"},{\"begin\":2618,\"end\":2633,\"name\":\"MUL\"},{\"begin\":2618,\"end\":2633,\"name\":\"ADD\"},{\"begin\":2618,\"end\":2647,\"name\":\"ADD\"},{\"begin\":2618,\"end\":2649,\"name\":\"DUP1\"},{\"begin\":2618,\"end\":2649,\"name\":\"SLOAD\"},{\"begin\":2618,\"end\":2649,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2618,\"end\":2649,\"name\":\"ADD\"},{\"begin\":2618,\"end\":2649,\"name\":\"SWAP1\"},{\"begin\":2618,\"end\":2649,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2375,\"end\":2654,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1633,\"end\":1995,\"name\":\"tag\",\"value\":\"117\"},{\"begin\":1633,\"end\":1995,\"name\":\"JUMPDEST\"},{\"begin\":1694,\"end\":1714,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1685,\"end\":1690,\"name\":\"PUSH\",\"value\":\"C\"},{\"begin\":1685,\"end\":1690,\"name\":\"SLOAD\"},{\"begin\":1685,\"end\":1690,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1685,\"end\":1690,\"name\":\"AND\"},{\"begin\":1685,\"end\":1714,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1685,\"end\":1714,\"name\":\"DUP2\"},{\"begin\":1685,\"end\":1714,\"name\":\"GT\"},{\"begin\":1685,\"end\":1714,\"name\":\"ISZERO\"},{\"begin\":1685,\"end\":1714,\"name\":\"PUSH [tag]\",\"value\":\"216\"},{\"begin\":1685,\"end\":1714,\"name\":\"JUMPI\"},{\"begin\":1685,\"end\":1714,\"name\":\"INVALID\"},{\"begin\":1685,\"end\":1714,\"name\":\"tag\",\"value\":\"216\"},{\"begin\":1685,\"end\":1714,\"name\":\"JUMPDEST\"},{\"begin\":1685,\"end\":1714,\"name\":\"EQ\"},{\"begin\":1677,\"end\":1715,\"name\":\"PUSH [tag]\",\"value\":\"217\"},{\"begin\":1677,\"end\":1715,\"name\":\"JUMPI\"},{\"begin\":1677,\"end\":1715,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1677,\"end\":1715,\"name\":\"DUP1\"},{\"begin\":1677,\"end\":1715,\"name\":\"REVERT\"},{\"begin\":1677,\"end\":1715,\"name\":\"tag\",\"value\":\"217\"},{\"begin\":1677,\"end\":1715,\"name\":\"JUMPDEST\"},{\"begin\":1738,\"end\":1746,\"name\":\"PUSH\",\"value\":\"B\"},{\"begin\":1738,\"end\":1746,\"name\":\"SLOAD\"},{\"begin\":1731,\"end\":1734,\"name\":\"TIMESTAMP\"},{\"begin\":1731,\"end\":1746,\"name\":\"GT\"},{\"begin\":1731,\"end\":1746,\"name\":\"ISZERO\"},{\"begin\":1723,\"end\":1747,\"name\":\"PUSH [tag]\",\"value\":\"218\"},{\"begin\":1723,\"end\":1747,\"name\":\"JUMPI\"},{\"begin\":1723,\"end\":1747,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1723,\"end\":1747,\"name\":\"DUP1\"},{\"begin\":1723,\"end\":1747,\"name\":\"REVERT\"},{\"begin\":1723,\"end\":1747,\"name\":\"tag\",\"value\":\"218\"},{\"begin\":1723,\"end\":1747,\"name\":\"JUMPDEST\"},{\"begin\":1775,\"end\":1794,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1775,\"end\":1794,\"name\":\"SLOAD\"},{\"begin\":1763,\"end\":1772,\"name\":\"CALLVALUE\"},{\"begin\":1763,\"end\":1794,\"name\":\"GT\"},{\"begin\":1755,\"end\":1796,\"name\":\"PUSH [tag]\",\"value\":\"219\"},{\"begin\":1755,\"end\":1796,\"name\":\"JUMPI\"},{\"begin\":1755,\"end\":1796,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1755,\"end\":1796,\"name\":\"DUP1\"},{\"begin\":1755,\"end\":1796,\"name\":\"REVERT\"},{\"begin\":1755,\"end\":1796,\"name\":\"tag\",\"value\":\"219\"},{\"begin\":1755,\"end\":1796,\"name\":\"JUMPDEST\"},{\"begin\":1820,\"end\":1830,\"name\":\"CALLER\"},{\"begin\":1810,\"end\":1831,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1810,\"end\":1831,\"name\":\"SWAP1\"},{\"begin\":1810,\"end\":1831,\"name\":\"DUP2\"},{\"begin\":1810,\"end\":1831,\"name\":\"MSTORE\"},{\"begin\":1810,\"end\":1819,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":1810,\"end\":1831,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1810,\"end\":1831,\"name\":\"MSTORE\"},{\"begin\":1810,\"end\":1831,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1810,\"end\":1831,\"name\":\"SWAP1\"},{\"begin\":1810,\"end\":1831,\"name\":\"KECCAK256\"},{\"begin\":1810,\"end\":1831,\"name\":\"SLOAD\"},{\"begin\":1810,\"end\":1831,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1810,\"end\":1831,\"name\":\"AND\"},{\"begin\":1809,\"end\":1831,\"name\":\"ISZERO\"},{\"begin\":1805,\"end\":1945,\"name\":\"ISZERO\"},{\"begin\":1805,\"end\":1945,\"name\":\"PUSH [tag]\",\"value\":\"220\"},{\"begin\":1805,\"end\":1945,\"name\":\"JUMPI\"},{\"begin\":1843,\"end\":1855,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":27,\"end\":37,\"name\":\"DUP1\"},{\"begin\":27,\"end\":37,\"name\":\"SLOAD\"},{\"begin\":39,\"end\":40,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP3\"},{\"begin\":23,\"end\":41,\"name\":\"ADD\"},{\"begin\":45,\"end\":68,\"name\":\"SWAP1\"},{\"begin\":45,\"end\":68,\"name\":\"SWAP3\"},{\"begin\":45,\"end\":68,\"name\":\"SSTORE\"},{\"begin\":1843,\"end\":1872,\"name\":\"PUSH\",\"value\":\"A66CC928B5EDB82AF9BD49922954155AB7B0942694BEA4CE44661D9A8736C688\"},{\"begin\":1843,\"end\":1872,\"name\":\"ADD\"},{\"begin\":1843,\"end\":1872,\"name\":\"DUP1\"},{\"begin\":1843,\"end\":1872,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1843,\"end\":1872,\"name\":\"AND\"},{\"begin\":1861,\"end\":1871,\"name\":\"CALLER\"},{\"begin\":1843,\"end\":1872,\"name\":\"SWAP1\"},{\"begin\":1843,\"end\":1872,\"name\":\"DUP2\"},{\"begin\":1843,\"end\":1872,\"name\":\"OR\"},{\"begin\":1843,\"end\":1872,\"name\":\"SWAP1\"},{\"begin\":1843,\"end\":1872,\"name\":\"SWAP2\"},{\"begin\":1843,\"end\":1872,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1882,\"end\":1903,\"name\":\"SWAP1\"},{\"begin\":1882,\"end\":1903,\"name\":\"DUP2\"},{\"begin\":1882,\"end\":1903,\"name\":\"MSTORE\"},{\"begin\":1882,\"end\":1891,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":1843,\"end\":1872,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1882,\"end\":1903,\"name\":\"MSTORE\"},{\"begin\":1882,\"end\":1903,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1882,\"end\":1903,\"name\":\"SWAP1\"},{\"begin\":1882,\"end\":1903,\"name\":\"KECCAK256\"},{\"begin\":1882,\"end\":1910,\"name\":\"DUP1\"},{\"begin\":1882,\"end\":1910,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1882,\"end\":1910,\"name\":\"AND\"},{\"begin\":1882,\"end\":1910,\"name\":\"DUP3\"},{\"begin\":1882,\"end\":1910,\"name\":\"OR\"},{\"begin\":1882,\"end\":1910,\"name\":\"SWAP1\"},{\"begin\":1882,\"end\":1910,\"name\":\"SSTORE\"},{\"begin\":1920,\"end\":1934,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":1920,\"end\":1936,\"name\":\"DUP1\"},{\"begin\":1920,\"end\":1936,\"name\":\"SLOAD\"},{\"begin\":1920,\"end\":1936,\"name\":\"SWAP1\"},{\"begin\":1920,\"end\":1936,\"name\":\"SWAP2\"},{\"begin\":1920,\"end\":1936,\"name\":\"ADD\"},{\"begin\":1920,\"end\":1936,\"name\":\"SWAP1\"},{\"begin\":1920,\"end\":1936,\"name\":\"SSTORE\"},{\"begin\":1805,\"end\":1945,\"name\":\"tag\",\"value\":\"220\"},{\"begin\":1805,\"end\":1945,\"name\":\"JUMPDEST\"},{\"begin\":1966,\"end\":1976,\"name\":\"CALLER\"},{\"begin\":1952,\"end\":1977,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1952,\"end\":1977,\"name\":\"SWAP1\"},{\"begin\":1952,\"end\":1977,\"name\":\"DUP2\"},{\"begin\":1952,\"end\":1977,\"name\":\"MSTORE\"},{\"begin\":1952,\"end\":1965,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":1952,\"end\":1977,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1952,\"end\":1977,\"name\":\"MSTORE\"},{\"begin\":1952,\"end\":1977,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1952,\"end\":1977,\"name\":\"SWAP1\"},{\"begin\":1952,\"end\":1977,\"name\":\"KECCAK256\"},{\"begin\":1952,\"end\":1990,\"name\":\"DUP1\"},{\"begin\":1952,\"end\":1990,\"name\":\"SLOAD\"},{\"begin\":1981,\"end\":1990,\"name\":\"CALLVALUE\"},{\"begin\":1952,\"end\":1990,\"name\":\"ADD\"},{\"begin\":1952,\"end\":1990,\"name\":\"SWAP1\"},{\"begin\":1952,\"end\":1990,\"name\":\"SSTORE\"},{\"begin\":1633,\"end\":1995,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"186\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP4\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP4\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"195\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"SLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":485,\"end\":4181,\"name\":\"MUL\"},{\"begin\":485,\"end\":4181,\"name\":\"SUB\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DIV\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"MSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"KECCAK256\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DIV\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":485,\"end\":4181,\"name\":\"LT\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"223\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"MLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":485,\"end\":4181,\"name\":\"NOT\"},{\"begin\":485,\"end\":4181,\"name\":\"AND\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP4\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"OR\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP6\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"225\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"223\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP6\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"225\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"224\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"GT\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"225\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"MLOAD\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"224\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"225\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"226\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP3\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"227\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"226\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"POP\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"227\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"140\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SWAP1\"},{\"begin\":485,\"end\":4181,\"name\":\"tag\",\"value\":\"229\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPDEST\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP1\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP3\"},{\"begin\":485,\"end\":4181,\"name\":\"GT\"},{\"begin\":485,\"end\":4181,\"name\":\"ISZERO\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"226\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMPI\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":485,\"end\":4181,\"name\":\"DUP2\"},{\"begin\":485,\"end\":4181,\"name\":\"SSTORE\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":485,\"end\":4181,\"name\":\"ADD\"},{\"begin\":485,\"end\":4181,\"name\":\"PUSH [tag]\",\"value\":\"229\"},{\"begin\":485,\"end\":4181,\"name\":\"JUMP\"}]}}},\"bytecode\":\"60806040523480156200001157600080fd5b506040516200139d3803806200139d8339810160409081528151602080840151928401516060850151608086015160a087015160c088015160018054600160a060020a031916600160a060020a038a16179055600287905593880180519698909693810195920193909290916200008e91600391880190620000da565b508351620000a4906004906020870190620000da565b508251620000ba906005906020860190620000da565b50600691909155600b555050600c805460ff19169055506200017f915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011d57805160ff19168380011785556200014d565b828001600101855582156200014d579182015b828111156200014d57825182559160200191906001019062000130565b506200015b9291506200015f565b5090565b6200017c91905b808211156200015b576000815560010162000166565b90565b61120e806200018f6000396000f3006080604052600436106101275763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166303441006811461012c5780630a144391146101465780631fbed5791461017b57806329dcb0cf146101af5780633410452a146101d657806335a063b4146101eb5780634051ddac1461020057806342e94c90146103a3578063481c6a75146103c45780634bb278f3146103d9578063590e1ae3146103ee5780637e7cd1b31461040357806381d12c581461048d57806382fde0931461054f5780638a9cfd551461056457806397654a8c146105ce578063a7f33715146105e3578063aba83150146105f8578063b2a87fc31461060d578063c19d93fb14610622578063d7d1bbdb1461065b578063ea25213f14610673575b600080fd5b34801561013857600080fd5b5061014460043561067b565b005b34801561015257600080fd5b50610167600160a060020a03600435166107e1565b604080519115158252519081900360200190f35b34801561018757600080fd5b506101936004356107f6565b60408051600160a060020a039092168252519081900360200190f35b3480156101bb57600080fd5b506101c461081e565b60408051918252519081900360200190f35b3480156101e257600080fd5b506101c4610824565b3480156101f757600080fd5b5061014461082b565b34801561020c57600080fd5b50610215610875565b604051808c81526020018b81526020018a815260200189815260200188600160a060020a0316600160a060020a0316815260200180602001806020018060200187815260200186815260200185815260200184810384528a818151815260200191508051906020019080838360005b8381101561029c578181015183820152602001610284565b50505050905090810190601f1680156102c95780820380516001836020036101000a031916815260200191505b5084810383528951815289516020918201918b019080838360005b838110156102fc5781810151838201526020016102e4565b50505050905090810190601f1680156103295780820380516001836020036101000a031916815260200191505b5084810382528851815288516020918201918a019080838360005b8381101561035c578181015183820152602001610344565b50505050905090810190601f1680156103895780820380516001836020036101000a031916815260200191505b509e50505050505050505050505050505060405180910390f35b3480156103af57600080fd5b506101c4600160a060020a0360043516610aa7565b3480156103d057600080fd5b50610193610ab9565b3480156103e557600080fd5b50610144610ac8565b3480156103fa57600080fd5b50610144610b25565b34801561040f57600080fd5b50610418610bbd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561045257818101518382015260200161043a565b50505050905090810190601f16801561047f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049957600080fd5b506104a5600435610c4b565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b838110156105105781810151838201526020016104f8565b50505050905090810190601f16801561053d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561055b57600080fd5b506101c4610d36565b34801561057057600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101449436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a03169050610d3c565b3480156105da57600080fd5b50610418610e8b565b3480156105ef57600080fd5b506101c4610ee6565b34801561060457600080fd5b50610418610eec565b34801561061957600080fd5b506101c4610f47565b34801561062e57600080fd5b50610637610f4d565b6040518082600381111561064757fe5b60ff16815260200191505060405180910390f35b34801561066757600080fd5b50610144600435610f56565b610144611035565b600154600160a060020a0316331461069257600080fd5b6000600c5460ff1660038111156106a557fe5b146106af57600080fd5b600a54600290046000828154811015156106c557fe5b9060005260206000209060050201600301541115156106e357600080fd5b60008054829081106106f157fe5b600091825260209091206005909102016002015474010000000000000000000000000000000000000000900460ff161561072a57600080fd5b600080548290811061073857fe5b600091825260208220600260059092020101548154600160a060020a03909116916108fc918490811061076757fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f193505050501580156107a4573d6000803e3d6000fd5b5060016000828154811015156107b657fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60086020526000908152604090205460ff1681565b600780548290811061080457fe5b600091825260209091200154600160a060020a0316905081565b600b5481565b6000545b90565b600154600160a060020a0316331461084257600080fd5b6000600c5460ff16600381111561085557fe5b1461085f57600080fd5b600c80546001919060ff191682805b0217905550565b60008060008060006060806060600080600060025430600160a060020a031631600080549050600a54600160009054906101000a9004600160a060020a0316600360046005600654600b54600c60009054906101000a900460ff1660038111156108db57fe5b8554604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281529188918301828280156109615780601f1061093657610100808354040283529160200191610961565b820191906000526020600020905b81548152906001019060200180831161094457829003601f168201915b5050885460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959b508a9450925084019050828280156109ef5780601f106109c4576101008083540402835291602001916109ef565b820191906000526020600020905b8154815290600101906020018083116109d257829003601f168201915b5050875460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959a5089945092508401905082828015610a7d5780601f10610a5257610100808354040283529160200191610a7d565b820191906000526020600020905b815481529060010190602001808311610a6057829003601f168201915b505050505093509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b60096020526000908152604090205481565b600154600160a060020a031681565b6000600c5460ff166003811115610adb57fe5b14610ae557600080fd5b600b544211610af357600080fd5b600654303110610b0f57600c805460ff19166002179055610b23565b600c80546003919060ff191660018361086e565b565b60006001600c5460ff166003811115610b3a57fe5b1480610b5657506003600c5460ff166003811115610b5457fe5b145b1515610b6157600080fd5b5033600090815260096020526040812054908111610b7e57600080fd5b336000818152600960205260408082208290555183156108fc0291849190818181858888f19350505050158015610bb9573d6000803e3d6000fd5b5050565b6003805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b820191906000526020600020905b815481529060010190602001808311610c2657829003601f168201915b505050505081565b6000805482908110610c5957fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f810185900485028301850190915280825291935091839190830182828015610cf25780601f10610cc757610100808354040283529160200191610cf2565b820191906000526020600020905b815481529060010190602001808311610cd557829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b600a5481565b610d4461110f565b600154600160a060020a03163314610d5b57600080fd5b6000600c5460ff166003811115610d6e57fe5b14610d7857600080fd5b506040805160a0810182528481526020808201859052600160a060020a03841692820192909252600060608201819052608082018190528054600181018083559180528251805193949293859360059093027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630192610dfb92849291019061114a565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516003909101555050505050565b6004805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b60025481565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b60065481565b600c5460ff1681565b3360009081526008602052604090205460ff161515610f7457600080fd5b6000600c5460ff166003811115610f8757fe5b14610f9157600080fd5b6000805482908110610f9f57fe5b600091825260208083203384526004600590930201919091019052604090205460ff1615610fcc57600080fd5b6001600082815481101515610fdd57fe5b60009182526020808320338452600592909202909101600401905260408120805460ff19169215159290921790915580548290811061101857fe5b600091825260209091206003600590920201018054600101905550565b6000600c5460ff16600381111561104857fe5b1461105257600080fd5b600b5442111561106157600080fd5b600254341161106f57600080fd5b3360009081526008602052604090205460ff1615156110f8576007805460018181019092557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff1916339081179091556000908152600860205260409020805460ff191682179055600a805490910190555b336000908152600960205260409020805434019055565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061118b57805160ff19168380011785556111b8565b828001600101855582156111b8579182015b828111156111b857825182559160200191906001019061119d565b506111c49291506111c8565b5090565b61082891905b808211156111c457600081556001016111ce5600a165627a7a72305820826b94b3079d6b4593a3a76caf5cb1ba402848ae50dd77be7217e335257160fa0029\",\"functionHashes\":{\"CampaignDescription()\":\"97654a8c\",\"CampaignName()\":\"7e7cd1b3\",\"abort()\":\"35a063b4\",\"approveRequest(uint256)\":\"d7d1bbdb\",\"approvers(address)\":\"0a144391\",\"approversCount()\":\"82fde093\",\"contibute()\":\"ea25213f\",\"contributers(uint256)\":\"1fbed579\",\"contributions(address)\":\"42e94c90\",\"createRequest(string,uint256,address)\":\"8a9cfd55\",\"deadline()\":\"29dcb0cf\",\"finalize()\":\"4bb278f3\",\"finalizeRequest(uint256)\":\"03441006\",\"getRequestsCount()\":\"3410452a\",\"getSummary()\":\"4051ddac\",\"imageUrl()\":\"aba83150\",\"manager()\":\"481c6a75\",\"minimunContribution()\":\"a7f33715\",\"refund()\":\"590e1ae3\",\"requests(uint256)\":\"81d12c58\",\"state()\":\"c19d93fb\",\"targetToAchieve()\":\"b2a87fc3\"},\"gasEstimates\":{\"creation\":[null,924400],\"external\":{\"CampaignDescription()\":null,\"CampaignName()\":null,\"abort()\":21036,\"approveRequest(uint256)\":42885,\"approvers(address)\":565,\"approversCount()\":670,\"contibute()\":102816,\"contributers(uint256)\":881,\"contributions(address)\":685,\"createRequest(string,uint256,address)\":null,\"deadline()\":450,\"finalize()\":21682,\"finalizeRequest(uint256)\":null,\"getRequestsCount()\":473,\"getSummary()\":null,\"imageUrl()\":null,\"manager()\":713,\"minimunContribution()\":736,\"refund()\":null,\"requests(uint256)\":null,\"state()\":847,\"targetToAchieve()\":780},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"finalizeRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"approvers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"contributers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"deadline\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getRequestsCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"abort\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getSummary\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"contributions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"finalize\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"refund\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignName\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"requests\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"complete\\\",\\\"type\\\":\\\"bool\\\"},{\\\"name\\\":\\\"approvalCount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"approversCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"createRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignDescription\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"minimunContribution\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"imageUrl\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"targetToAchieve\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"state\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approveRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"contibute\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"minimun\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"creator\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"image\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"target\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"_deadline\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.26+commit.4563c3fc\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"finalizeRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"approvers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"contributers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"deadline\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getRequestsCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"abort\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getSummary\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"contributions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"finalize\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"refund\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignName\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"requests\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"complete\\\",\\\"type\\\":\\\"bool\\\"},{\\\"name\\\":\\\"approvalCount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"approversCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"createRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignDescription\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"minimunContribution\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"imageUrl\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"targetToAchieve\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"state\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approveRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"contibute\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"minimun\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"creator\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"image\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"target\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"_deadline\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"Campaign\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0xee2546c1bddef9a1ec8634c97ee04d1a79f2644b5044d9f44a1cf2c1c84abcea\\\",\\\"urls\\\":[\\\"bzzr://8fe4e3ae29d40945429f50363f03d9b72ff7c47933b454f1c623921174dd3a64\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x139D CODESIZE SUB DUP1 PUSH3 0x139D DUP4 CODECOPY DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE DUP2 MLOAD PUSH1 0x20 DUP1 DUP5 ADD MLOAD SWAP3 DUP5 ADD MLOAD PUSH1 0x60 DUP6 ADD MLOAD PUSH1 0x80 DUP7 ADD MLOAD PUSH1 0xA0 DUP8 ADD MLOAD PUSH1 0xC0 DUP9 ADD MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP11 AND OR SWAP1 SSTORE PUSH1 0x2 DUP8 SWAP1 SSTORE SWAP4 DUP9 ADD DUP1 MLOAD SWAP7 SWAP9 SWAP1 SWAP7 SWAP4 DUP2 ADD SWAP6 SWAP3 ADD SWAP4 SWAP1 SWAP3 SWAP1 SWAP2 PUSH3 0x8E SWAP2 PUSH1 0x3 SWAP2 DUP9 ADD SWAP1 PUSH3 0xDA JUMP JUMPDEST POP DUP4 MLOAD PUSH3 0xA4 SWAP1 PUSH1 0x4 SWAP1 PUSH1 0x20 DUP8 ADD SWAP1 PUSH3 0xDA JUMP JUMPDEST POP DUP3 MLOAD PUSH3 0xBA SWAP1 PUSH1 0x5 SWAP1 PUSH1 0x20 DUP7 ADD SWAP1 PUSH3 0xDA JUMP JUMPDEST POP PUSH1 0x6 SWAP2 SWAP1 SWAP2 SSTORE PUSH1 0xB SSTORE POP POP PUSH1 0xC DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE POP PUSH3 0x17F SWAP2 POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH3 0x11D JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x14D JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x14D JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x14D JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x130 JUMP JUMPDEST POP PUSH3 0x15B SWAP3 SWAP2 POP PUSH3 0x15F JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH3 0x17C SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x15B JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH3 0x166 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x120E DUP1 PUSH3 0x18F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x127 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x3441006 DUP2 EQ PUSH2 0x12C JUMPI DUP1 PUSH4 0xA144391 EQ PUSH2 0x146 JUMPI DUP1 PUSH4 0x1FBED579 EQ PUSH2 0x17B JUMPI DUP1 PUSH4 0x29DCB0CF EQ PUSH2 0x1AF JUMPI DUP1 PUSH4 0x3410452A EQ PUSH2 0x1D6 JUMPI DUP1 PUSH4 0x35A063B4 EQ PUSH2 0x1EB JUMPI DUP1 PUSH4 0x4051DDAC EQ PUSH2 0x200 JUMPI DUP1 PUSH4 0x42E94C90 EQ PUSH2 0x3A3 JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0x3C4 JUMPI DUP1 PUSH4 0x4BB278F3 EQ PUSH2 0x3D9 JUMPI DUP1 PUSH4 0x590E1AE3 EQ PUSH2 0x3EE JUMPI DUP1 PUSH4 0x7E7CD1B3 EQ PUSH2 0x403 JUMPI DUP1 PUSH4 0x81D12C58 EQ PUSH2 0x48D JUMPI DUP1 PUSH4 0x82FDE093 EQ PUSH2 0x54F JUMPI DUP1 PUSH4 0x8A9CFD55 EQ PUSH2 0x564 JUMPI DUP1 PUSH4 0x97654A8C EQ PUSH2 0x5CE JUMPI DUP1 PUSH4 0xA7F33715 EQ PUSH2 0x5E3 JUMPI DUP1 PUSH4 0xABA83150 EQ PUSH2 0x5F8 JUMPI DUP1 PUSH4 0xB2A87FC3 EQ PUSH2 0x60D JUMPI DUP1 PUSH4 0xC19D93FB EQ PUSH2 0x622 JUMPI DUP1 PUSH4 0xD7D1BBDB EQ PUSH2 0x65B JUMPI DUP1 PUSH4 0xEA25213F EQ PUSH2 0x673 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x138 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x144 PUSH1 0x4 CALLDATALOAD PUSH2 0x67B JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x152 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x167 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x7E1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x187 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x193 PUSH1 0x4 CALLDATALOAD PUSH2 0x7F6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1BB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH2 0x81E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1E2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH2 0x824 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x144 PUSH2 0x82B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x20C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x215 PUSH2 0x875 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP13 DUP2 MSTORE PUSH1 0x20 ADD DUP12 DUP2 MSTORE PUSH1 0x20 ADD DUP11 DUP2 MSTORE PUSH1 0x20 ADD DUP10 DUP2 MSTORE PUSH1 0x20 ADD DUP9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP8 DUP2 MSTORE PUSH1 0x20 ADD DUP7 DUP2 MSTORE PUSH1 0x20 ADD DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 SUB DUP5 MSTORE DUP11 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x29C JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x284 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x2C9 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 DUP2 SUB DUP4 MSTORE DUP10 MLOAD DUP2 MSTORE DUP10 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP12 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2FC JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x2E4 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x329 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 DUP2 SUB DUP3 MSTORE DUP9 MLOAD DUP2 MSTORE DUP9 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP11 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x35C JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x344 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x389 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP15 POP POP POP POP POP POP POP POP POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3AF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xAA7 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3D0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x193 PUSH2 0xAB9 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3E5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x144 PUSH2 0xAC8 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3FA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x144 PUSH2 0xB25 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x40F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x418 PUSH2 0xBBD JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x452 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x43A JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x47F JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x499 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4A5 PUSH1 0x4 CALLDATALOAD PUSH2 0xC4B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP7 DUP2 MSTORE PUSH1 0x20 ADD DUP6 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP8 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x510 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x4F8 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x53D JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x55B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH2 0xD36 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x570 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0x144 SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP POP DUP5 CALLDATALOAD SWAP6 POP POP POP POP PUSH1 0x20 SWAP1 SWAP2 ADD CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP PUSH2 0xD3C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5DA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x418 PUSH2 0xE8B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH2 0xEE6 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x604 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x418 PUSH2 0xEEC JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x619 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C4 PUSH2 0xF47 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x62E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x637 PUSH2 0xF4D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x647 JUMPI INVALID JUMPDEST PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x667 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x144 PUSH1 0x4 CALLDATALOAD PUSH2 0xF56 JUMP JUMPDEST PUSH2 0x144 PUSH2 0x1035 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x692 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x6A5 JUMPI INVALID JUMPDEST EQ PUSH2 0x6AF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xA SLOAD PUSH1 0x2 SWAP1 DIV PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x6C5 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x3 ADD SLOAD GT ISZERO ISZERO PUSH2 0x6E3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x6F1 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 SWAP1 SWAP2 MUL ADD PUSH1 0x2 ADD SLOAD PUSH21 0x10000000000000000000000000000000000000000 SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0x72A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x738 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 PUSH1 0x2 PUSH1 0x5 SWAP1 SWAP3 MUL ADD ADD SLOAD DUP2 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP2 PUSH2 0x8FC SWAP2 DUP5 SWAP1 DUP2 LT PUSH2 0x767 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x1 ADD SLOAD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x7A4 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x1 PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x7B6 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x2 ADD PUSH1 0x14 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x7 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x804 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0xB SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x842 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x855 JUMPI INVALID JUMPDEST EQ PUSH2 0x85F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xC DUP1 SLOAD PUSH1 0x1 SWAP2 SWAP1 PUSH1 0xFF NOT AND DUP3 DUP1 JUMPDEST MUL OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP1 PUSH1 0x60 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x2 SLOAD ADDRESS PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND BALANCE PUSH1 0x0 DUP1 SLOAD SWAP1 POP PUSH1 0xA SLOAD PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x3 PUSH1 0x4 PUSH1 0x5 PUSH1 0x6 SLOAD PUSH1 0xB SLOAD PUSH1 0xC PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x8DB JUMPI INVALID JUMPDEST DUP6 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x1F PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP9 AND ISZERO MUL ADD SWAP1 SWAP6 AND SWAP5 SWAP1 SWAP5 DIV SWAP4 DUP5 ADD DUP2 SWAP1 DIV DUP2 MUL DUP3 ADD DUP2 ADD SWAP1 SWAP3 MSTORE DUP3 DUP2 MSTORE SWAP2 DUP9 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x961 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x936 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x961 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x944 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP DUP9 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP6 SWAP12 POP DUP11 SWAP5 POP SWAP3 POP DUP5 ADD SWAP1 POP DUP3 DUP3 DUP1 ISZERO PUSH2 0x9EF JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x9C4 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x9EF JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x9D2 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP DUP8 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP6 SWAP11 POP DUP10 SWAP5 POP SWAP3 POP DUP5 ADD SWAP1 POP DUP3 DUP3 DUP1 ISZERO PUSH2 0xA7D JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xA52 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xA7D JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xA60 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP4 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP11 POP SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 SWAP6 SWAP7 SWAP8 SWAP9 SWAP10 SWAP11 JUMP JUMPDEST PUSH1 0x9 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0xADB JUMPI INVALID JUMPDEST EQ PUSH2 0xAE5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xB SLOAD TIMESTAMP GT PUSH2 0xAF3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x6 SLOAD ADDRESS BALANCE LT PUSH2 0xB0F JUMPI PUSH1 0xC DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x2 OR SWAP1 SSTORE PUSH2 0xB23 JUMP JUMPDEST PUSH1 0xC DUP1 SLOAD PUSH1 0x3 SWAP2 SWAP1 PUSH1 0xFF NOT AND PUSH1 0x1 DUP4 PUSH2 0x86E JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0xB3A JUMPI INVALID JUMPDEST EQ DUP1 PUSH2 0xB56 JUMPI POP PUSH1 0x3 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0xB54 JUMPI INVALID JUMPDEST EQ JUMPDEST ISZERO ISZERO PUSH2 0xB61 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x9 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD SWAP1 DUP2 GT PUSH2 0xB7E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x9 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 DUP3 SWAP1 SSTORE MLOAD DUP4 ISZERO PUSH2 0x8FC MUL SWAP2 DUP5 SWAP2 SWAP1 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xBB9 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0xC43 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xC18 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xC43 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xC26 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0xC59 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP2 DUP3 SWAP1 KECCAK256 PUSH1 0x5 SWAP2 SWAP1 SWAP2 MUL ADD DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x2 PUSH1 0x1 DUP5 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP4 AND SWAP3 SWAP1 SWAP3 DIV PUSH1 0x1F DUP2 ADD DUP6 SWAP1 DIV DUP6 MUL DUP4 ADD DUP6 ADD SWAP1 SWAP2 MSTORE DUP1 DUP3 MSTORE SWAP2 SWAP4 POP SWAP2 DUP4 SWAP2 SWAP1 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0xCF2 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xCC7 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xCF2 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xCD5 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP PUSH1 0x1 DUP4 ADD SLOAD PUSH1 0x2 DUP5 ADD SLOAD PUSH1 0x3 SWAP1 SWAP5 ADD SLOAD SWAP3 SWAP4 SWAP1 SWAP3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP3 POP PUSH21 0x10000000000000000000000000000000000000000 SWAP1 SWAP2 DIV PUSH1 0xFF AND SWAP1 DUP6 JUMP JUMPDEST PUSH1 0xA SLOAD DUP2 JUMP JUMPDEST PUSH2 0xD44 PUSH2 0x110F JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0xD5B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0xD6E JUMPI INVALID JUMPDEST EQ PUSH2 0xD78 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0xA0 DUP2 ADD DUP3 MSTORE DUP5 DUP2 MSTORE PUSH1 0x20 DUP1 DUP3 ADD DUP6 SWAP1 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP3 DUP3 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x0 PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x80 DUP3 ADD DUP2 SWAP1 MSTORE DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP1 DUP4 SSTORE SWAP2 DUP1 MSTORE DUP3 MLOAD DUP1 MLOAD SWAP4 SWAP5 SWAP3 SWAP4 DUP6 SWAP4 PUSH1 0x5 SWAP1 SWAP4 MUL PUSH32 0x290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563 ADD SWAP3 PUSH2 0xDFB SWAP3 DUP5 SWAP3 SWAP2 ADD SWAP1 PUSH2 0x114A JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH1 0x1 DUP3 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH1 0x60 DUP6 ADD MLOAD ISZERO ISZERO PUSH21 0x10000000000000000000000000000000000000000 MUL PUSH21 0xFF0000000000000000000000000000000000000000 NOT PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP5 AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x80 SWAP1 SWAP2 ADD MLOAD PUSH1 0x3 SWAP1 SWAP2 ADD SSTORE POP POP POP POP POP JUMP JUMPDEST PUSH1 0x4 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0xC43 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xC18 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xC43 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0xC43 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xC18 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xC43 JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH1 0xC SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0xF74 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0xF87 JUMPI INVALID JUMPDEST EQ PUSH2 0xF91 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0xF9F JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE PUSH1 0x4 PUSH1 0x5 SWAP1 SWAP4 MUL ADD SWAP2 SWAP1 SWAP2 ADD SWAP1 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0xFCC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0xFDD JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE PUSH1 0x5 SWAP3 SWAP1 SWAP3 MUL SWAP1 SWAP2 ADD PUSH1 0x4 ADD SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP3 ISZERO ISZERO SWAP3 SWAP1 SWAP3 OR SWAP1 SWAP2 SSTORE DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x1018 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x3 PUSH1 0x5 SWAP1 SWAP3 MUL ADD ADD DUP1 SLOAD PUSH1 0x1 ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xC SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x1048 JUMPI INVALID JUMPDEST EQ PUSH2 0x1052 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xB SLOAD TIMESTAMP GT ISZERO PUSH2 0x1061 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 SLOAD CALLVALUE GT PUSH2 0x106F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x10F8 JUMPI PUSH1 0x7 DUP1 SLOAD PUSH1 0x1 DUP2 DUP2 ADD SWAP1 SWAP3 SSTORE PUSH32 0xA66CC928B5EDB82AF9BD49922954155AB7B0942694BEA4CE44661D9A8736C688 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND CALLER SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP3 OR SWAP1 SSTORE PUSH1 0xA DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x9 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD CALLVALUE ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x60 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE POP SWAP1 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x118B JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x11B8 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x11B8 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x11B8 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x119D JUMP JUMPDEST POP PUSH2 0x11C4 SWAP3 SWAP2 POP PUSH2 0x11C8 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x828 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x11C4 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x11CE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP3 PUSH12 0x94B3079D6B4593A3A76CAF5C 0xb1 0xba BLOCKHASH 0x28 0x48 0xae POP 0xdd PUSH24 0xBE7217E335257160FA002900000000000000000000000000 \",\"runtimeBytecode\":\"6080604052600436106101275763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166303441006811461012c5780630a144391146101465780631fbed5791461017b57806329dcb0cf146101af5780633410452a146101d657806335a063b4146101eb5780634051ddac1461020057806342e94c90146103a3578063481c6a75146103c45780634bb278f3146103d9578063590e1ae3146103ee5780637e7cd1b31461040357806381d12c581461048d57806382fde0931461054f5780638a9cfd551461056457806397654a8c146105ce578063a7f33715146105e3578063aba83150146105f8578063b2a87fc31461060d578063c19d93fb14610622578063d7d1bbdb1461065b578063ea25213f14610673575b600080fd5b34801561013857600080fd5b5061014460043561067b565b005b34801561015257600080fd5b50610167600160a060020a03600435166107e1565b604080519115158252519081900360200190f35b34801561018757600080fd5b506101936004356107f6565b60408051600160a060020a039092168252519081900360200190f35b3480156101bb57600080fd5b506101c461081e565b60408051918252519081900360200190f35b3480156101e257600080fd5b506101c4610824565b3480156101f757600080fd5b5061014461082b565b34801561020c57600080fd5b50610215610875565b604051808c81526020018b81526020018a815260200189815260200188600160a060020a0316600160a060020a0316815260200180602001806020018060200187815260200186815260200185815260200184810384528a818151815260200191508051906020019080838360005b8381101561029c578181015183820152602001610284565b50505050905090810190601f1680156102c95780820380516001836020036101000a031916815260200191505b5084810383528951815289516020918201918b019080838360005b838110156102fc5781810151838201526020016102e4565b50505050905090810190601f1680156103295780820380516001836020036101000a031916815260200191505b5084810382528851815288516020918201918a019080838360005b8381101561035c578181015183820152602001610344565b50505050905090810190601f1680156103895780820380516001836020036101000a031916815260200191505b509e50505050505050505050505050505060405180910390f35b3480156103af57600080fd5b506101c4600160a060020a0360043516610aa7565b3480156103d057600080fd5b50610193610ab9565b3480156103e557600080fd5b50610144610ac8565b3480156103fa57600080fd5b50610144610b25565b34801561040f57600080fd5b50610418610bbd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561045257818101518382015260200161043a565b50505050905090810190601f16801561047f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049957600080fd5b506104a5600435610c4b565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b838110156105105781810151838201526020016104f8565b50505050905090810190601f16801561053d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561055b57600080fd5b506101c4610d36565b34801561057057600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101449436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a03169050610d3c565b3480156105da57600080fd5b50610418610e8b565b3480156105ef57600080fd5b506101c4610ee6565b34801561060457600080fd5b50610418610eec565b34801561061957600080fd5b506101c4610f47565b34801561062e57600080fd5b50610637610f4d565b6040518082600381111561064757fe5b60ff16815260200191505060405180910390f35b34801561066757600080fd5b50610144600435610f56565b610144611035565b600154600160a060020a0316331461069257600080fd5b6000600c5460ff1660038111156106a557fe5b146106af57600080fd5b600a54600290046000828154811015156106c557fe5b9060005260206000209060050201600301541115156106e357600080fd5b60008054829081106106f157fe5b600091825260209091206005909102016002015474010000000000000000000000000000000000000000900460ff161561072a57600080fd5b600080548290811061073857fe5b600091825260208220600260059092020101548154600160a060020a03909116916108fc918490811061076757fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f193505050501580156107a4573d6000803e3d6000fd5b5060016000828154811015156107b657fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60086020526000908152604090205460ff1681565b600780548290811061080457fe5b600091825260209091200154600160a060020a0316905081565b600b5481565b6000545b90565b600154600160a060020a0316331461084257600080fd5b6000600c5460ff16600381111561085557fe5b1461085f57600080fd5b600c80546001919060ff191682805b0217905550565b60008060008060006060806060600080600060025430600160a060020a031631600080549050600a54600160009054906101000a9004600160a060020a0316600360046005600654600b54600c60009054906101000a900460ff1660038111156108db57fe5b8554604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281529188918301828280156109615780601f1061093657610100808354040283529160200191610961565b820191906000526020600020905b81548152906001019060200180831161094457829003601f168201915b5050885460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959b508a9450925084019050828280156109ef5780601f106109c4576101008083540402835291602001916109ef565b820191906000526020600020905b8154815290600101906020018083116109d257829003601f168201915b5050875460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959a5089945092508401905082828015610a7d5780601f10610a5257610100808354040283529160200191610a7d565b820191906000526020600020905b815481529060010190602001808311610a6057829003601f168201915b505050505093509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b60096020526000908152604090205481565b600154600160a060020a031681565b6000600c5460ff166003811115610adb57fe5b14610ae557600080fd5b600b544211610af357600080fd5b600654303110610b0f57600c805460ff19166002179055610b23565b600c80546003919060ff191660018361086e565b565b60006001600c5460ff166003811115610b3a57fe5b1480610b5657506003600c5460ff166003811115610b5457fe5b145b1515610b6157600080fd5b5033600090815260096020526040812054908111610b7e57600080fd5b336000818152600960205260408082208290555183156108fc0291849190818181858888f19350505050158015610bb9573d6000803e3d6000fd5b5050565b6003805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b820191906000526020600020905b815481529060010190602001808311610c2657829003601f168201915b505050505081565b6000805482908110610c5957fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f810185900485028301850190915280825291935091839190830182828015610cf25780601f10610cc757610100808354040283529160200191610cf2565b820191906000526020600020905b815481529060010190602001808311610cd557829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b600a5481565b610d4461110f565b600154600160a060020a03163314610d5b57600080fd5b6000600c5460ff166003811115610d6e57fe5b14610d7857600080fd5b506040805160a0810182528481526020808201859052600160a060020a03841692820192909252600060608201819052608082018190528054600181018083559180528251805193949293859360059093027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630192610dfb92849291019061114a565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516003909101555050505050565b6004805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b60025481565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610c435780601f10610c1857610100808354040283529160200191610c43565b60065481565b600c5460ff1681565b3360009081526008602052604090205460ff161515610f7457600080fd5b6000600c5460ff166003811115610f8757fe5b14610f9157600080fd5b6000805482908110610f9f57fe5b600091825260208083203384526004600590930201919091019052604090205460ff1615610fcc57600080fd5b6001600082815481101515610fdd57fe5b60009182526020808320338452600592909202909101600401905260408120805460ff19169215159290921790915580548290811061101857fe5b600091825260209091206003600590920201018054600101905550565b6000600c5460ff16600381111561104857fe5b1461105257600080fd5b600b5442111561106157600080fd5b600254341161106f57600080fd5b3360009081526008602052604090205460ff1615156110f8576007805460018181019092557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff1916339081179091556000908152600860205260409020805460ff191682179055600a805490910190555b336000908152600960205260409020805434019055565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061118b57805160ff19168380011785556111b8565b828001600101855582156111b8579182015b828111156111b857825182559160200191906001019061119d565b506111c49291506111c8565b5090565b61082891905b808211156111c457600081556001016111ce5600a165627a7a72305820826b94b3079d6b4593a3a76caf5cb1ba402848ae50dd77be7217e335257160fa0029\",\"srcmap\":\"485:3696:0:-;;;1257:372;8:9:-1;5:2;;;30:1;27;20:12;5:2;1257:372:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1392:7;:17;;-1:-1:-1;;;;;;1392:17:0;-1:-1:-1;;;;;1392:17:0;;;;;1417:19;:29;;;1257:372;;;1454:17;;1257:372;;;;;;;;;;;;;;;1454:17;;:12;;:17;;;;:::i;:::-;-1:-1:-1;1479:31:0;;;;:19;;:31;;;;;:::i;:::-;-1:-1:-1;1518:14:0;;;;:8;;:14;;;;;:::i;:::-;-1:-1:-1;1540:15:0;:22;;;;1570:8;:18;-1:-1:-1;;1596:5:0;:28;;-1:-1:-1;;1596:28:0;;;-1:-1:-1;485:3696:0;;-1:-1:-1;;485:3696:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;485:3696:0;;;-1:-1:-1;485:3696:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;\",\"srcmapRuntime\":\"485:3696:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2658:322;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2658:322:0;;;;;;;999:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;999:41:0;;;-1:-1:-1;;;;;999:41:0;;;;;;;;;;;;;;;;;;;;;966:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;966:29:0;;;;;;;;;-1:-1:-1;;;;;966:29:0;;;;;;;;;;;;;;1123:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1123:20:0;;;;;;;;;;;;;;;;;;;;4086:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4086:93:0;;;;2984:125;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2984:125:0;;;;3643:437;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3643:437:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3643:437:0;-1:-1:-1;;;;;3643:437:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3643:437:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3643:437:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3643:437:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3643:437:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3643:437:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1044:45:0;;;-1:-1:-1;;;;;1044:45:0;;;781:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;781:22:0;;;;3113:261;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3113:261:0;;;;3378:258;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3378:258:0;;;;842:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;842:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;842:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;752:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;752:25:0;;;;;;;;;;;;;;;;-1:-1:-1;;;;;752:25:0;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;752:25:0;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;752:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1093:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1093:26:0;;;;1999:372;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1999:372:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1999:372:0;;-1:-1:-1;;1999:372:0;;;-1:-1:-1;;;;1999:372:0;;;;;-1:-1:-1;;;;;1999:372:0;;-1:-1:-1;1999:372:0;;872:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;872:33:0;;;;807:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;807:31:0;;;;909:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;909:22:0;;;;935:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;935:27:0;;;;1147:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1147:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2375:279;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2375:279:0;;;;;1633:362;;;;2658:322;1231:7;;-1:-1:-1;;;;;1231:7:0;1217:10;:21;1209:30;;;;;;2737:20;2728:5;;;;:29;;;;;;;;;2720:38;;;;;;2807:14;;2824:1;;2807:18;2774:8;2783:5;2774:15;;;;;;;;;;;;;;;;;;;;:29;;;:52;2766:61;;;;;;;;2844:8;:15;;2853:5;;2844:15;;;;;;;;;;;;;;;;;;;:24;;;;;;;;2843:25;2835:34;;;;;;2878:8;:15;;2887:5;;2878:15;;;;;;;;;;;;;;;;;;;:25;;;2913:15;;-1:-1:-1;;;;;2878:25:0;;;;:57;;2922:5;;2913:15;;;;;;;;;;;;;;;;:21;;;2878:57;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2878:57:0;2970:4;2943:8;2952:5;2943:15;;;;;;;;;;;;;;;;;;;;:24;;;:31;;;;;;;;;;;;;;;;;;2658:322;:::o;999:41::-;;;;;;;;;;;;;;;:::o;966:29::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;966:29:0;;-1:-1:-1;966:29:0;:::o;1123:20::-;;;;:::o;4086:93::-;4135:4;4157:15;4086:93;;:::o;2984:125::-;1231:7;;-1:-1:-1;;;;;1231:7:0;1217:10;:21;1209:30;;;;;;3044:20;3035:5;;;;:29;;;;;;;;;3027:38;;;;;;3073:5;:31;;3081:23;;3073:5;-1:-1:-1;;3073:31:0;3081:23;;3073:31;;;;;;2984:125::o;3643:437::-;3781:19;;3686:4;3840:15;;3869:14;;-1:-1:-1;3897:7:0;3999:15;;4028:8;;4055:5;;3686:4;;;;;;;;;;3714:6;;;;;;3686:4;;;;;;3781:19;;3814:4;:12;;3840:15;;-1:-1:-1;;;;;3897:7:0;;;;3918:12;;3944:19;;3977:8;;4055:5;;4050:11;;;;;;;;3761:312;;;;;;;;;;;;;-1:-1:-1;;3761:312:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3761:312:0;;;;;;;;;;;;;-1:-1:-1;;3761:312:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3761:312:0;;-1:-1:-1;3761:312:0;-1:-1:-1;3761:312:0;;;-1:-1:-1;3761:312:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3761:312:0;;;;;;;;;;;;;-1:-1:-1;;3761:312:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3761:312:0;;-1:-1:-1;3761:312:0;-1:-1:-1;3761:312:0;;;-1:-1:-1;3761:312:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3643:437;;;;;;;;;;;:::o;1044:45::-;;;;;;;;;;;;;:::o;781:22::-;;;-1:-1:-1;;;;;781:22:0;;:::o;3113:261::-;3165:20;3156:5;;;;:29;;;;;;;;;3148:38;;;;;;3208:8;;3202:3;:14;3194:23;;;;;;3245:15;;3229:4;:12;:31;3225:145;;3274:5;:32;;-1:-1:-1;;3274:32:0;3282:24;3274:32;;;3225:145;;;3333:5;:28;;3341:20;;3333:5;-1:-1:-1;;3333:28:0;;3341:20;3333:28;;3225:145;3113:261::o;3378:258::-;3493:11;3428:23;3419:5;;;;:32;;;;;;;;;:65;;;-1:-1:-1;3464:20:0;3455:5;;;;:29;;;;;;;;;3419:65;3411:74;;;;;;;;-1:-1:-1;3521:10:0;3507:25;;;;:13;:25;;;;;;;3548:10;;3540:19;;;;;;3581:10;3595:1;3567:25;;;:13;:25;;;;;;:29;;;3604:27;;;;;;3624:6;;3604:27;;3595:1;3604:27;3624:6;3581:10;3604:27;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3604:27:0;3378:258;:::o;842:26::-;;;;;;;;;;;;;;;-1:-1:-1;;842:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;752:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;752:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;752:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;752:25:0;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;752:25:0;;;-1:-1:-1;;752:25:0;;;;;;;:::o;1093:26::-;;;;:::o;1999:372::-;2145:25;;:::i;:::-;1231:7;;-1:-1:-1;;;;;1231:7:0;1217:10;:21;1209:30;;;;;;2116:20;2107:5;;;;:29;;;;;;;;;2099:38;;;;;;-1:-1:-1;2173:159:0;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2173:159:0;;;;;;;;;-1:-1:-1;2173:159:0;;;;;;;;;;;;27:10:-1;;-1:-1;23:18;;45:23;;;2341:25:0;;;;;;;2173:159;;23:18:-1;;2173:159:0;;2341:25;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;2341:25:0;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;2341:25:0;;;-1:-1:-1;;2341:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1999:372:0:o;872:33::-;;;;;;;;;;;;;;;-1:-1:-1;;872:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;807:31;;;;:::o;909:22::-;;;;;;;;;;;;;;;-1:-1:-1;;909:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;935:27;;;;:::o;1147:26::-;;;;;;:::o;2375:279::-;2444:10;2434:21;;;;:9;:21;;;;;;;;2426:30;;;;;;;;2481:20;2472:5;;;;:29;;;;;;;;;2464:38;;;;;;2519:8;:15;;2528:5;;2519:15;;;;;;;;;;;;;;2545:10;2519:37;;:25;:15;;;;;:25;;;;:37;;;;;;;;2518:38;2510:47;;;;;;2606:4;2566:8;2575:5;2566:15;;;;;;;;;;;;;;;;;;2592:10;2566:37;;:15;;;;;;;;:25;;:37;;;;;:44;;-1:-1:-1;;2566:44:0;;;;;;;;;;;2618:15;;2627:5;;2618:15;;;;;;;;;;;;;;:29;:15;;;;;:29;:31;;;;;;-1:-1:-1;2375:279:0:o;1633:362::-;1694:20;1685:5;;;;:29;;;;;;;;;1677:38;;;;;;1738:8;;1731:3;:15;;1723:24;;;;;;1775:19;;1763:9;:31;1755:41;;;;;;1820:10;1810:21;;;;:9;:21;;;;;;;;1809:22;1805:140;;;1843:12;27:10:-1;;39:1;23:18;;;45:23;;;1843:29:0;;;;-1:-1:-1;;1843:29:0;1861:10;1843:29;;;;;;-1:-1:-1;1882:21:0;;;:9;1843:29;1882:21;;;;:28;;-1:-1:-1;;1882:28:0;;;;;1920:14;:16;;;;;;;1805:140;1966:10;1952:25;;;;:13;:25;;;;;:38;;1981:9;1952:38;;;1633:362::o;485:3696::-;;;;;;;;;;;;;-1:-1:-1;485:3696:0;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;485:3696:0;;;-1:-1:-1;485:3696:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;\"}");

/***/ }),

/***/ "./smart-contract/campaign.js":
/*!************************************!*\
  !*** ./smart-contract/campaign.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./smart-contract/web3.js");
/* harmony import */ var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Campaign.json */ "./smart-contract/build/Campaign.json");
var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Campaign.json */ "./smart-contract/build/Campaign.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__.interface), address);
});

/***/ }),

/***/ "./smart-contract/web3.js":
/*!********************************!*\
  !*** ./smart-contract/web3.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  // Running on the server, use Alchemy
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(process.env.NEXT_PUBLIC_RPC_URL || "https://base-sepolia.g.alchemy.com/v2/RuoZfWrBZA6yXOF_COmDk");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-wallet":
/*!*****************************!*\
  !*** external "use-wallet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-wallet");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0RVRIUHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NhbXBhaWduLy9yZXF1ZXN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc21hcnQtY29udHJhY3QvY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc21hcnQtY29udHJhY3Qvd2ViMy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11c2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2Utd2FsbGV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldEVUSFByaWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXRoUHJpY2UiLCJjdXJyZW50X3ByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRXRUlQcmljZUluVVNEIiwidXNkIiwid2VpIiwiY29udmVydFdlaVRvRVRIIiwiZ2V0RVRIUHJpY2VJblVTRCIsImV0aCIsImdldEVUSFByaWNlSU5SIiwiZ2V0V0VJUHJpY2VJbklOUiIsImluciIsImdldEVUSFByaWNlSW5JTlIiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk5ld1JlcXVlc3QiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImlzU3VibWl0dGluZyIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImluSU5SIiwic2V0SW5JTlIiLCJFVEhQcmljZSIsInNldEVUSFByaWNlIiwid2FsbGV0IiwidXNlV2FsbGV0IiwidXNlQXN5bmMiLCJvblN1Ym1pdCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhY2NvdW50cyIsIndlYjMiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsInRvV2VpIiwicmVjaXBpZW50Iiwic2VuZCIsImZyb20iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInJlcXVpcmVkIiwiYWJzIiwic3RhdHVzIiwiYmciLCJjb25uZWN0IiwiYWRkcmVzcyIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwicHJvdmlkZXIiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiZW52IiwiTkVYVF9QVUJMSUNfUlBDX1VSTCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7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Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9jYW1wYWlnbi9baWRdL3JlcXVlc3RzL25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2FtcGFpZ24vW2lkXS9yZXF1ZXN0cy9uZXcuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5leHBvcnQgY29uc3QgZ2V0RVRIUHJpY2UgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbWFya2V0cz92c19jdXJyZW5jeT11c2QmaWRzPWV0aGVyZXVtXCJcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgZXRoUHJpY2UgPSBkYXRhWzBdLmN1cnJlbnRfcHJpY2U7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFyc2VGbG9hdChldGhQcmljZSkudG9GaXhlZCgyKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V0VJUHJpY2VJblVTRCA9ICh1c2QsIHdlaSkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdChjb252ZXJ0V2VpVG9FVEgod2VpKSAqIHVzZCkudG9GaXhlZCgyKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RVRIUHJpY2VJblVTRCA9ICh1c2QsIGV0aCkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdChldGggKiB1c2QpLnRvRml4ZWQoMik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFdlaVRvRVRIID0gKHdlaSkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdCh3ZWkpIC8gMTAwMDAwMDAwMDAwMDAwMDAwMDtcbn07XG5cbi8vIElOUiB2YXJpYW50c1xuZXhwb3J0IGNvbnN0IGdldEVUSFByaWNlSU5SID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9aW5yJmlkcz1ldGhlcmV1bVwiXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGV0aFByaWNlID0gZGF0YVswXS5jdXJyZW50X3ByaWNlO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZXRoUHJpY2UpLnRvRml4ZWQoMikpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFdFSVByaWNlSW5JTlIgPSAoaW5yLCB3ZWkpID0+IHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoY29udmVydFdlaVRvRVRIKHdlaSkgKiBpbnIpLnRvRml4ZWQoMik7XG59O1xuZXhwb3J0IGNvbnN0IGdldEVUSFByaWNlSW5JTlIgPSAoaW5yLCBldGgpID0+IHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoZXRoICogaW5yKS50b0ZpeGVkKDIpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQXJyb3dCYWNrSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwidXNlLXdhbGxldFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEVUSFByaWNlSU5SLCBnZXRFVEhQcmljZUluSU5SIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9nZXRFVEhQcmljZVwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIElucHV0UmlnaHRBZGRvbixcbiAgSW5wdXRHcm91cCxcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQWxlcnREZXNjcmlwdGlvbixcbiAgRm9ybUVycm9yTWVzc2FnZSxcbiAgRm9ybUhlbHBlclRleHQsXG4gIFRleHRhcmVhLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL3NtYXJ0LWNvbnRyYWN0L3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vc21hcnQtY29udHJhY3QvY2FtcGFpZ25cIjtcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdSZXF1ZXN0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcsIGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSh7XG4gICAgbW9kZTogXCJvbkNoYW5nZVwiLFxuICB9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2luSU5SLCBzZXRJbklOUl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbRVRIUHJpY2UsIHNldEVUSFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcbiAgdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRFVEhQcmljZUlOUigpO1xuICAgICAgc2V0RVRIUHJpY2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfSwgW10pO1xuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihpZCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3QoXG4gICAgICAgICAgZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICB3ZWIzLnV0aWxzLnRvV2VpKGRhdGEudmFsdWUsIFwiZXRoZXJcIiksXG4gICAgICAgICAgZGF0YS5yZWNpcGllbnRcbiAgICAgICAgKVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXG4gICAgICByb3V0ZXIucHVzaChgL2NhbXBhaWduLyR7aWR9L3JlcXVlc3RzYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIGEgV2l0aGRyYXdhbCBSZXF1ZXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNyZWF0ZSBhIFdpdGhkcmF3YWwgUmVxdWVzdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0gbXg9e1wiYXV0b1wifSBtYXhXPXtcIjJ4bFwifSBweT17MTJ9IHB4PXs2fT5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJsZ1wifSBjb2xvcj17XCJ0ZWFsLjQwMFwifSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFycm93QmFja0ljb24gbXI9ezJ9IC8+XG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17YC9jYW1wYWlnbi8ke2lkfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICBCYWNrIHRvIFJlcXVlc3RzXG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17XCI0eGxcIn0+Q3JlYXRlIGEgV2l0aGRyYXdhbCBSZXF1ZXN0IPCfkrg8L0hlYWRpbmc+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICByb3VuZGVkPXtcImxnXCJ9XG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZVwiLCBcImdyYXkuNzAwXCIpfVxuICAgICAgICAgICAgYm94U2hhZG93PXtcImxnXCJ9XG4gICAgICAgICAgICBwPXs4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlJlcXVlc3QgRGVzY3JpcHRpb248L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJkZXNjcmlwdGlvblwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlkPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+QW1vdW50IGluIEV0aGVyPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ2YWx1ZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEluSU5SKE1hdGguYWJzKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFJpZ2h0QWRkb24gY2hpbGRyZW49XCJFVEhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgICAge2luSU5SID8gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAg4oK5IHtnZXRFVEhQcmljZUluSU5SKEVUSFByaWNlLCBpbklOUil9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlkPVwicmVjaXBpZW50XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJyZWNpcGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVjaXBpZW50IEV0aGVyZXVtIFdhbGxldCBBZGRyZXNzXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicmVjaXBpZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmRlc2NyaXB0aW9uIHx8IGVycm9ycy52YWx1ZSB8fCBlcnJvcnMucmVjaXBpZW50ID8gKFxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGVzY3JpcHRpb24gbXI9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICBBbGwgRmllbGRzIGFyZSBSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uIG1yPXsyfT4ge2Vycm9yfTwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEwfT5cbiAgICAgICAgICAgICAgICAgIHt3YWxsZXQuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYmc9e1widGVhbC40MDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmc6IFwidGVhbC41MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFdpdGhkcmF3YWwgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9e1widGVhbC40MDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiZzogXCJ0ZWFsLjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdhbGxldC5jb25uZWN0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXR7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHN0YXR1cz1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uIG1yPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIENvbm5lY3QgWW91ciBXYWxsZXQgRmlyc3QgdG8gQ3JlYXRlIGEgQ2FtcGFpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHdlYjMgZnJvbSBcIi4vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuL2J1aWxkL0NhbXBhaWduLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKGFkZHJlc3MpID0+IHtcbiAgcmV0dXJuIG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKENhbXBhaWduLmludGVyZmFjZSksIGFkZHJlc3MpO1xufTtcbiIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmxldCB3ZWIzO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vIFJ1bm5pbmcgaW4gdGhlIGJyb3dzZXIsIHVzZSBNZXRhTWFza1xuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbn0gZWxzZSB7XG4gIC8vIFJ1bm5pbmcgb24gdGhlIHNlcnZlciwgdXNlIEFsY2hlbXlcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JQQ19VUkwgfHwgXCJodHRwczovL2Jhc2Utc2Vwb2xpYS5nLmFsY2hlbXkuY29tL3YyL1J1b1pmV3JCWkE2eVhPRl9DT21Ea1wiXG4gICk7XG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXVzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXdhbGxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=