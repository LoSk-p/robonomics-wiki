(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--market-messages-md"],{

/***/ "//VM":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/market-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Market messages\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/market-messages.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "0fCG":
/*!*********************************!*\
  !*** ./docs/market-messages.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market-messages.md?vue&type=template&id=60fb3492& */ \"W+Lh\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _market_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market-messages.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"wSLE\");\n/* harmony import */ var _market_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Gf+d\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _market_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_market_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _market_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_market_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/market-messages.md?");

/***/ }),

/***/ "4ReO":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/market-messages.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/market-messages.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Gf+d":
/*!******************************************************************************************!*\
  !*** ./docs/market-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--16-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./market-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"//VM\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/market-messages.md?");

/***/ }),

/***/ "OO8s":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"d818ecc8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/market-messages.md?vue&type=template&id=60fb3492& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"Market messages is used for exchange \"), _c('strong', [_vm._v(\"Demand\")]), _vm._v(\" and \"), _c('strong', [_vm._v(\"Offer\")]), _vm._v(\" information. It also used for delivery \"), _c('strong', [_vm._v(\"Result\")]), _vm._v(\" messages with liability execution reports.\")]), _c('blockquote', [_c('p', [_vm._v(\"This is spec for Robonomics \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Generation 5\")]), _vm._v(\".\")])]), _c('ul', [_c('li', [_vm._v(\"Currently for message delivery is used \"), _c('a', {\n    attrs: {\n      \"href\": \"https://ipfs.io/blog/25-pubsub/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"IPFS PubSub\")]), _vm._v(\" broadcaster.\")]), _c('li', [_vm._v(\"IPFS PubSub \"), _c('strong', [_vm._v(\"topic\")]), _vm._v(\" is set according to \"), _c('em', [_vm._v(\"Lighthouse \"), _c('a', {\n    attrs: {\n      \"href\": \"https://ens.domains/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ENS\")]), _vm._v(\" name\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"messages-content\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#messages-content\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Messages content\")]), _c('p', [_vm._v(\"Robonomics market message use \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.json.org/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"JSON\")]), _vm._v(\" data format.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"demand\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#demand\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Demand\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', [_vm._v(\"ROS Type\")]), _c('th', [_vm._v(\"Description\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"model\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ipfs-common-messages#ipfs_commonmultihashmsg\"\n    }\n  }, [_vm._v(\"ipfs_common/Multihash\")])]), _c('td', [_vm._v(\"CPS behavioral model identifier\")])]), _c('tr', [_c('td', [_vm._v(\"objective\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ipfs-common-messages#ipfs_commonmultihashmsg\"\n    }\n  }, [_vm._v(\"ipfs_common/Multihash\")])]), _c('td', [_vm._v(\"CPS behavioral model parameters in rosbag file\")])]), _c('tr', [_c('td', [_vm._v(\"token\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_common/Address\")])]), _c('td', [_vm._v(\"Operational token address\")])]), _c('tr', [_c('td', [_vm._v(\"cost\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_common/UInt256\")])]), _c('td', [_vm._v(\"CPS behavioral model execution cost\")])]), _c('tr', [_c('td', [_vm._v(\"lighthouse\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_common/Address\")])]), _c('td', [_vm._v(\"Lighthouse contract address\")])]), _c('tr', [_c('td', [_vm._v(\"validator\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_common/Address\")])]), _c('td', [_vm._v(\"Observing network address\")])]), _c('tr', [_c('td', [_vm._v(\"validatorFee\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_common/UInt256\")])]), _c('td', [_vm._v(\"Observing network fee\")])]), _c('tr', [_c('td', [_vm._v(\"deadline\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_common/UInt256\")])]), _c('td', [_vm._v(\"Deadline block number\")])]), _c('tr', [_c('td', [_vm._v(\"nonce\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_common/UInt256\")])]), _c('td', [_vm._v(\"Robonomics message counter\")])]), _c('tr', [_c('td', [_vm._v(\"sender\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_common/Address\")])]), _c('td', [_vm._v(\"Message sender address\")])]), _c('tr', [_c('td', [_vm._v(\"signature\")]), _c('td', [_vm._v(\"std_msgs/UInt8[]\")]), _c('td', [_vm._v(\"Sender’s Ethereum signature\")])])])]), _c('h3', {\n    attrs: {\n      \"id\": \"offer\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#offer\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Offer\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', [_vm._v(\"ROS Type\")]), _c('th', [_vm._v(\"Description\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"model\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ipfs-common-messages#ipfs_commonmultihashmsg\"\n    }\n  }, [_vm._v(\"ipfs_commom/Multihash\")])]), _c('td', [_vm._v(\"CPS behavioral model identifier\")])]), _c('tr', [_c('td', [_vm._v(\"objective\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ipfs-common-messages#ipfs_commonmultihashmsg\"\n    }\n  }, [_vm._v(\"ipfs_commom/Multihash\")])]), _c('td', [_vm._v(\"CPS behavioral model parameters in rosbag file\")])]), _c('tr', [_c('td', [_vm._v(\"token\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_commom/Address\")])]), _c('td', [_vm._v(\"Operational token address\")])]), _c('tr', [_c('td', [_vm._v(\"cost\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_commom/UInt256\")])]), _c('td', [_vm._v(\"CPS behavioral model execution cost\")])]), _c('tr', [_c('td', [_vm._v(\"validator\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_commom/Address\")])]), _c('td', [_vm._v(\"Observing network address\")])]), _c('tr', [_c('td', [_vm._v(\"lighthouse\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_commom/Address\")])]), _c('td', [_vm._v(\"Lighthouse contract address\")])]), _c('tr', [_c('td', [_vm._v(\"lighthouseFee\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_commom/UInt256\")])]), _c('td', [_vm._v(\"Liability creation fee\")])]), _c('tr', [_c('td', [_vm._v(\"deadline\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_commom/UInt256\")])]), _c('td', [_vm._v(\"Deadline block number\")])]), _c('tr', [_c('td', [_vm._v(\"nonce\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonuint256msg\"\n    }\n  }, [_vm._v(\"ethereum_commom/UInt256\")])]), _c('td', [_vm._v(\"Robonomics message counter\")])]), _c('tr', [_c('td', [_vm._v(\"sender\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_commom/Address\")])]), _c('td', [_vm._v(\"Message sender address\")])]), _c('tr', [_c('td', [_vm._v(\"signature\")]), _c('td', [_vm._v(\"std_msgs/UInt8[]\")]), _c('td', [_vm._v(\"Sender’s Ethereum signature\")])])])]), _c('h3', {\n    attrs: {\n      \"id\": \"result\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#result\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Result\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', [_vm._v(\"ROS Type\")]), _c('th', [_vm._v(\"Description\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"liability\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ethereum-common-messages#ethereum_commonaddressmsg\"\n    }\n  }, [_vm._v(\"ethereum_commom/Address\")])]), _c('td', [_vm._v(\"Liability contract address\")])]), _c('tr', [_c('td', [_vm._v(\"result\")]), _c('td', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/ipfs-common-messages#ipfs_commonmultihashmsg\"\n    }\n  }, [_vm._v(\"ipfs_commom/Multihash\")])]), _c('td', [_vm._v(\"Liability result multihash\")])]), _c('tr', [_c('td', [_vm._v(\"success\")]), _c('td', [_vm._v(\"std_msgs/Bool\")]), _c('td', [_vm._v(\"Is liability executed successful\")])]), _c('tr', [_c('td', [_vm._v(\"signature\")]), _c('td', [_vm._v(\"std_msgs/UInt8[]\")]), _c('td', [_vm._v(\"Sender’s Ethereum signature\")])])])]), _c('h2', {\n    attrs: {\n      \"id\": \"messages-signing\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#messages-signing\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Messages signing\")]), _c('p', [_vm._v(\"Before signing the messages is packed using \"), _c('a', {\n    attrs: {\n      \"href\": \"https://solidity.readthedocs.io/en/latest/abi-spec.html#non-standard-packed-mode\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"abi.encodePacked\")]), _vm._v(\" solidity finction and hashed by Keccak_256.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"   demandHash = keccak256(abi.encodePacked(\\n        _model\\n      , _objective\\n      , _token\\n      , _cost\\n      , _lighthouse\\n      , _validator\\n      , _validator_fee\\n      , _deadline\\n      , IFactory(factory).nonceOf(_sender)\\n      , _sender\\n      ));\\n\")])]), _c('p', [_c('strong', [_c('code', {\n    pre: true\n  }, [_vm._v(\"nonce\")]), _vm._v(\" parameter is counted by factory smart contract and incremented for each created liability smart contract.\")])]), _c('p', [_vm._v(\"Message hash are signed using Ethereum \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"secp256k1\")]), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"signature\")]), _vm._v(\".\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/market-messages.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22d818ecc8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "W+Lh":
/*!****************************************************************!*\
  !*** ./docs/market-messages.md?vue&type=template&id=60fb3492& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"d818ecc8-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/babel-loader/lib??ref--1-1!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./market-messages.md?vue&type=template&id=60fb3492& */ \"OO8s\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_template_id_60fb3492___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/market-messages.md?");

/***/ }),

/***/ "wSLE":
/*!*************************************************************************************!*\
  !*** ./docs/market-messages.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--15-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./market-messages.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"4ReO\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_market_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/market-messages.md?");

/***/ })

}]);