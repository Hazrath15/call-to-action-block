/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/call-to-action-block/Components/Frontend/BlockMain.js":
/*!*******************************************************************!*\
  !*** ./src/call-to-action-block/Components/Frontend/BlockMain.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Style */ "./src/call-to-action-block/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const BlockName = ({
  attributes
}) => {
  const {
    headingTag,
    heading,
    description,
    buttonText
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Style__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes: attributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `callToActionBlock`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "hero-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: headingTag,
          value: heading,
          className: "main-heading"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "p",
          value: description,
          className: "description"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "cta-button",
          children: buttonText
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockName);

/***/ }),

/***/ "./src/call-to-action-block/Style.js":
/*!*******************************************!*\
  !*** ./src/call-to-action-block/Style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Style.jsx
 * -------------------------------------------------
 * Generates <style> tag with:
 *   • Heading, Description, Button: typography, colour, padding, margin (responsive)
 *   • Section background (solid colour OR gradient)
 *   • Section padding & margin (responsive)
 */


const Style = ({
  attributes
}) => {
  const {
    headingColor,
    headingFontFamily,
    headingFontWeight,
    headingTextTransform,
    headingFontSizeDesktop,
    headingFontSizeTablet,
    headingFontSizeMobile,
    headingLineHeightDesktop,
    headingLineHeightTablet,
    headingLineHeightMobile,
    headingPadding,
    headingMargin,
    descriptionColor,
    descriptionFontFamily,
    descriptionFontWeight,
    descriptionTextTransform,
    descriptionFontSizeDesktop,
    descriptionFontSizeTablet,
    descriptionFontSizeMobile,
    descriptionLineHeightDesktop,
    descriptionLineHeightTablet,
    descriptionLineHeightMobile,
    descriptionPadding,
    descriptionMargin,
    buttonFontFamily,
    buttonFontWeight,
    buttonTextTransform,
    buttonFontSizeDesktop,
    buttonFontSizeTablet,
    buttonFontSizeMobile,
    buttonLineHeightDesktop,
    buttonLineHeightTablet,
    buttonLineHeightMobile,
    buttonPadding,
    buttonMargin,
    buttonTextColor,
    buttonBgColor,
    bgType,
    bgColor,
    bgGradient1,
    bgGradient2,
    bgGradientAngle,
    sectionPadding,
    sectionMargin
  } = attributes;

  /* ------------------------------------------------------------------
     HELPER: value + unit → CSS string (e.g. 20 → "20px")
     ------------------------------------------------------------------ */
  const formatSide = (val, unit = 'px') => {
    if (val === undefined || val === null || val === '') return `0${unit}`;
    const v = String(val).trim();
    return /\d\s*(px|%|em|rem|vh|vw)$/.test(v) ? v : `${v}${unit}`;
  };

  /* ------------------------------------------------------------------
     HELPER: responsive padding / margin strings (supports isLinked)
     ------------------------------------------------------------------ */
  const getResponsive = obj => {
    const desktop = obj?.desktop || {};
    const tablet = obj?.tablet || {};
    const mobile = obj?.mobile || {};
    const unitD = desktop.unit || 'px';
    const unitT = tablet.unit || unitD;
    const unitM = mobile.unit || unitT;
    const fmt = (side, u) => formatSide(side, u);

    // ---- Desktop -------------------------------------------------
    const dTop = fmt(desktop.top, unitD);
    const d = desktop.isLinked ? Array(4).fill(dTop).join(' ') : [fmt(desktop.top, unitD), fmt(desktop.right, unitD), fmt(desktop.bottom, unitD), fmt(desktop.left, unitD)].join(' ');

    // ---- Tablet --------------------------------------------------
    const tTop = fmt(tablet.top, unitT);
    const t = tablet.isLinked ? Array(4).fill(tTop).join(' ') : [fmt(tablet.top, unitT), fmt(tablet.right, unitT), fmt(tablet.bottom, unitT), fmt(tablet.left, unitT)].join(' ');

    // ---- Mobile --------------------------------------------------
    const mTop = fmt(mobile.top, unitM);
    const m = mobile.isLinked ? Array(4).fill(mTop).join(' ') : [fmt(mobile.top, unitM), fmt(mobile.right, unitM), fmt(mobile.bottom, unitM), fmt(mobile.left, unitM)].join(' ');
    return {
      desktop: d,
      tablet: t,
      mobile: m
    };
  };

  /* ------------------------------------------------------------------
     Padding / Margin for every element
     ------------------------------------------------------------------ */
  const headingPad = getResponsive(headingPadding);
  const headingMar = getResponsive(headingMargin);
  const descPad = getResponsive(descriptionPadding);
  const descMar = getResponsive(descriptionMargin);
  const buttonPad = getResponsive(buttonPadding);
  const buttonMar = getResponsive(buttonMargin);
  const sectionPad = getResponsive(sectionPadding);
  const sectionMar = getResponsive(sectionMargin);

  /* ------------------------------------------------------------------
     BACKGROUND: solid colour or 2-colour gradient
     ------------------------------------------------------------------ */
  const backgroundCSS = (() => {
    if (bgType === 'gradient' && bgGradient1) {
      const stops = [`${bgGradient1} 0%`];
      stops.push(bgGradient2 ? `${bgGradient2} 100%` : `${bgGradient1}00 100%`);
      const angle = bgGradientAngle !== null && bgGradientAngle !== void 0 ? bgGradientAngle : 90;
      const map = {
        0: 'to right',
        90: 'to bottom',
        180: 'to left',
        270: 'to top'
      };
      const direction = map[angle] || `${angle}deg`;
      return `linear-gradient(${direction}, ${stops.join(', ')})`;
    }
    return bgColor;
  })();

  /* ------------------------------------------------------------------
     TYPOGRAPHY helper
     ------------------------------------------------------------------ */
  const typo = (prefix, family, weight, transform, size, lh) => `
		${family ? `font-family: ${family};` : ''}
		${weight ? `font-weight: ${weight};` : ''}
		${transform ? `text-transform: ${transform};` : ''}
		font-size: ${size || (prefix === 'heading' ? 40 : prefix === 'description' ? 16 : 14)}px;
		line-height: ${lh || 1.4};
	`;

  /* ------------------------------------------------------------------
     RENDER <style>
     ------------------------------------------------------------------ */
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    children: `
				/* -------------------------------------------------
				   SECTION (container)
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block {
					background: ${backgroundCSS};
					padding: ${sectionPad.desktop};
					margin: ${sectionMar.desktop};
                    align-items: ${attributes?.alignment || 'center'};
				}

                .callToActionBlock {
                    text-align: ${attributes?.alignment || 'center'};
                }

				/* -------------------------------------------------
				   HEADING
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .main-heading {
					color: ${headingColor || 'inherit'};
					${typo('heading', headingFontFamily, headingFontWeight, headingTextTransform, headingFontSizeDesktop, headingLineHeightDesktop)}
					padding: ${headingPad.desktop};
					margin: ${headingMar.desktop};
				}

				/* -------------------------------------------------
				   DESCRIPTION
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .description {
					color: ${descriptionColor || 'inherit'};
					${typo('description', descriptionFontFamily, descriptionFontWeight, descriptionTextTransform, descriptionFontSizeDesktop, descriptionLineHeightDesktop)}
					padding: ${descPad.desktop};
					margin: ${descMar.desktop};
				}

				/* -------------------------------------------------
				   BUTTON
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .cta-button {
					${typo('button', buttonFontFamily, buttonFontWeight, buttonTextTransform, buttonFontSizeDesktop, buttonLineHeightDesktop)}
					padding: ${buttonPad.desktop};
					margin: ${buttonMar.desktop};
					display: inline-block;
                    color: ${buttonTextColor || 'inherit'};
                    background-color: ${buttonBgColor};
				}

				/* -------------------------------------------------
				   TABLET (≤1024px)
				   ------------------------------------------------- */
				@media (max-width: 1024px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPad.tablet};
						margin: ${sectionMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeTablet || 32}px;
						line-height: ${headingLineHeightTablet || 1.3};
						padding: ${headingPad.tablet};
						margin: ${headingMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .description {
						font-size: ${descriptionFontSizeTablet || 15}px;
						line-height: ${descriptionLineHeightTablet || 1.5};
						padding: ${descPad.tablet};
						margin: ${descMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .cta-button {
						font-size: ${buttonFontSizeTablet || 14}px;
						line-height: ${buttonLineHeightTablet || 1.4};
						padding: ${buttonPad.tablet};
						margin: ${buttonMar.tablet};
					}
				}

				/* -------------------------------------------------
				   MOBILE (≤767px)
				   ------------------------------------------------- */
				@media (max-width: 767px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPad.mobile};
						margin: ${sectionMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeMobile || 24}px;
						line-height: ${headingLineHeightMobile || 1.4};
						padding: ${headingPad.mobile};
						margin: ${headingMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .description {
						font-size: ${descriptionFontSizeMobile || 14}px;
						line-height: ${descriptionLineHeightMobile || 1.6};
						padding: ${descPad.mobile};
						margin: ${descMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .cta-button {
						font-size: ${buttonFontSizeMobile || 13}px;
						line-height: ${buttonLineHeightMobile || 1.5};
						padding: ${buttonPad.mobile};
						margin: ${buttonMar.mobile};
					}
				}
			`
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/call-to-action-block/style.scss":
/*!*********************************************!*\
  !*** ./src/call-to-action-block/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/call-to-action-block/view.js":
/*!******************************************!*\
  !*** ./src/call-to-action-block/view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/call-to-action-block/style.scss");
/* harmony import */ var _Components_Frontend_BlockMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Frontend/BlockMain */ "./src/call-to-action-block/Components/Frontend/BlockMain.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// @ts-ignore




document.addEventListener('DOMContentLoaded', () => {
  const blockNameEls = document.querySelectorAll('.wp-block-create-block-call-to-action-block');
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    console.log({
      attributes
    });
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(blockNameEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_Frontend_BlockMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes
      })
    }));
    blockNameEl?.removeAttribute('data-attributes');
  });
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"call-to-action-block/view": 0,
/******/ 			"call-to-action-block/style-view": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcall_to_action_block"] = globalThis["webpackChunkcall_to_action_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["call-to-action-block/style-view"], () => (__webpack_require__("./src/call-to-action-block/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map