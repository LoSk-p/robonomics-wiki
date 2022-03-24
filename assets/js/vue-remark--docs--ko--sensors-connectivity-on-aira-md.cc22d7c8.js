(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--sensors-connectivity-on-aira-md"],{

/***/ "1ljg":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"709914d4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/sensors-connectivity-on-aira.md?vue&type=template&id=5534cd1a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('h2',{attrs:{\"id\":\"pre-requirements\"}},[_c('a',{attrs:{\"href\":\"#pre-requirements\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Pre-requirements\")]),_c('p',[_vm._v(\"To build a python package IPFS daemon should be installed. Assyming, you work with linux:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz\\ntar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz\\ncd go-ipfs\\nsudo bash install.sh \\nipfs init\\n\")])]),_c('h1',{attrs:{\"id\":\"installation-as-pypi-package\"}},[_c('a',{attrs:{\"href\":\"#installation-as-pypi-package\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Installation as PyPi package\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"pip3 install py-sr25519-bindings\\npip3 install sensors-connectivity\\n\")])]),_c('h2',{attrs:{\"id\":\"configuration\"}},[_c('a',{attrs:{\"href\":\"#configuration\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Configuration\")]),_c('p',[_c('a',{attrs:{\"href\":\"/docs/configuration-options-description/\"}},[_vm._v(\"Here\")]),_vm._v(\" you can find an article to set a proper configuration for your instance.\")]),_c('h2',{attrs:{\"id\":\"running\"}},[_c('a',{attrs:{\"href\":\"#running\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Running\")]),_c('p',[_vm._v(\"First, launch IPFS daemon:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"ipfs daemon --enable-pubsub-experiment\\n\")])]),_c('p',[_vm._v(\"After config and log files are setted, you can run the service: (in another terminal)\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"sensors_connectivity \\\"path/to/your/config/file\\\"\\n\")])]),_c('p',[_vm._v(\"You will be able to see logs in your console and in \"),_c('code',{pre:true},[_vm._v(\"~/.logs\")]),_vm._v(\".\")]),_c('h1',{attrs:{\"id\":\"build-from-source\"}},[_c('a',{attrs:{\"href\":\"#build-from-source\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Build from source\")]),_c('h2',{attrs:{\"id\":\"requirements\"}},[_c('a',{attrs:{\"href\":\"#requirements\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Requirements\")]),_c('p',[_vm._v(\"To build a python package fron source \"),_c('a',{attrs:{\"href\":\"https://python-poetry.org/docs/#osx--linux--bashonwindows-install-instructions\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"poetry\")]),_vm._v(\" should be also installed. Assyming, you work with linux:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -\\n\")])]),_c('h2',{attrs:{\"id\":\"get-a-package-and-installing-dependencies\"}},[_c('a',{attrs:{\"href\":\"#get-a-package-and-installing-dependencies\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Get a Package And Installing dependencies\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"git clone https://github.com/airalab/sensors-connectivity\\ncd sensors-connectivity\\npoetry install\\n\")])]),_c('h2',{attrs:{\"id\":\"documentation\"}},[_c('a',{attrs:{\"href\":\"#documentation\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Documentation\")]),_c('p',[_vm._v(\"To prepare a sensor for the work with the package follow instructions on \"),_c('a',{attrs:{\"href\":\"/docs/connect-sensor-to-robonomics/\"}},[_vm._v(\"Robonomics Wiki\")]),_vm._v(\".\")]),_c('h2',{attrs:{\"id\":\"configuration-1\"}},[_c('a',{attrs:{\"href\":\"#configuration-1\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Configuration\")]),_c('p',[_c('a',{attrs:{\"href\":\"/docs/configuration-options-description/\"}},[_vm._v(\"Here\")]),_vm._v(\" you can find an article to set a proper configuration for your instance.\")]),_c('p',[_vm._v(\"Make a copy of \"),_c('code',{pre:true},[_vm._v(\"default.json\")]),_vm._v(\" and fill it using description from the article.\")]),_c('p',[_vm._v(\"You also can set a logging file. The default file for logs is \"),_c('code',{pre:true},[_vm._v(\"logging.py\")]),_vm._v(\", which uses \"),_c('code',{pre:true},[_vm._v(\"console\")]),_vm._v(\" and \"),_c('code',{pre:true},[_vm._v(\"file\")]),_vm._v(\" handler by default. Pay attention for the \"),_c('code',{pre:true},[_vm._v(\"file\")]),_vm._v(\" handler. The template is stored in \"),_c('code',{pre:true},[_vm._v(\"connectivity/config/logging_template.py\")]),_vm._v(\". You can cpecify the path (\"),_c('code',{pre:true},[_vm._v(\"filename\")]),_vm._v(\"), where your logs will be stored in (do not forget to create this directory if it doesn't exist). Default path for logs is \"),_c('code',{pre:true},[_vm._v(\"~/.logs\")]),_vm._v(\". You can figure any other handlers from the \"),_c('a',{attrs:{\"href\":\"https://docs.python.org/3.8/library/logging.html\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"library\")]),_vm._v(\".\")]),_c('h2',{attrs:{\"id\":\"running-1\"}},[_c('a',{attrs:{\"href\":\"#running-1\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Running\")]),_c('p',[_vm._v(\"First, launch IPFS daemon:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"ipfs daemon --enable-pubsub-experiment\\n\")])]),_c('p',[_vm._v(\"After config and log files are setted, you can run the service: (in another terminal)\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"poetry run sensors_connectivity \\\"path/to/your/config/file\\\"  \\n\")])]),_c('p',[_vm._v(\"If your log file is setted with \"),_c('code',{pre:true},[_vm._v(\"console\")]),_vm._v(\" handler, you will be able to see logs in your console.\")]),_c('h2',{attrs:{\"id\":\"example-of-logs\"}},[_c('a',{attrs:{\"href\":\"#example-of-logs\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Example of logs:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"2022-02-17 19:30:51,248 - INFO - Getting data from the stations...\\n2022-02-17 19:30:51,443 - INFO - airalab-http-v0.8.0: [[], [{MAC: c8e2650f254e, Uptime: 0:00:14.010502, M: {Public: 0be87b58e87599a85dc79bf14731cc9ad547411e9b10c883e29f78fc2c67206a, geo: (53.518475,49.397178000000004), measurements: {'airtemp': -8.0, 'windang': 45.0, 'windspeed': 0.13, 'windspeedmax': 0.13, 'pm10': '', 'pm25': '', 'timestamp': 1645113602.0}}}]]\\n2022-02-17 19:30:51,443 - INFO - Sending result to the feeders...\\n2022-02-17 19:31:07,517 - INFO - Frontier Datalog: Data sent to Robonomics datalog and included in block 0x04baf3d81c6d31ec6f3ca3e515b9a6920666ee17cbd66f57130eaa000bad2cd4\\n2022-02-17 19:31:07,519 - INFO - RobonomicsFeeder: {\\\"0be87b58e87599a85dc79bf14731cc9ad547411e9b10c883e29f78fc2c67206a\\\": {\\\"model\\\": 2, \\\"geo\\\": \\\"53.518475,49.397178000000004\\\", \\\"measurement\\\": {\\\"airtemp\\\": -8.0, \\\"windang\\\": 45.0, \\\"windspeed\\\": 0.13, \\\"windspeedmax\\\": 0.13, \\\"pm10\\\": \\\"\\\", \\\"pm25\\\": \\\"\\\", \\\"timestamp\\\": 1645113602.0}}}\\n2022-02-17 19:31:07,523 - INFO - Checking data base...\\n127.0.0.1 - - [17/Feb/2022 19:31:13] \\\"POST / HTTP/1.1\\\" 200 -\\n2022-02-17 19:31:21,248 - INFO - Getting data from the stations...\\n2022-02-17 19:31:21,429 - INFO - airalab-http-v0.8.0: [[{MAC: c8e2650f254e, Uptime: 0:00:43.818101, M: {Public: 133b761496539ab5d1140e94f644e2ef92c7ac32446dc782bfe1a768379a669a, geo: (1,200), measurements: {'pm10': 27.58, 'pm25': 15.02, 'temperature': 22.93, 'pressure': 758.0687068706872, 'humidity': 39.44, 'timestamp': 1645115473}}}], [{MAC: c8e2650f254e, Uptime: 0:00:43.996539, M: {Public: 0be87b58e87599a85dc79bf14731cc9ad547411e9b10c883e29f78fc2c67206a, geo: (53.518475,49.397178000000004), measurements: {'airtemp': -8.0, 'windang': 45.0, 'windspeed': 0.13, 'windspeedmax': 0.13, 'pm10': '', 'pm25': '', 'timestamp': 1645113602.0}}}]]\\n2022-02-17 19:31:21,444 - INFO - Sending result to the feeders...\\n2022-02-17 19:31:51,249 - INFO - Getting data from the stations...\\n\")])]),_c('h2',{attrs:{\"id\":\"troubleshooting\"}},[_c('a',{attrs:{\"href\":\"#troubleshooting\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Troubleshooting\")]),_c('h3',{attrs:{\"id\":\"pythonh-no-such-file-or-directory\"}},[_c('a',{attrs:{\"href\":\"#pythonh-no-such-file-or-directory\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Python.h: No such file or directory\")]),_c('p',[_vm._v(\"If during running \"),_c('code',{pre:true},[_vm._v(\"poetry install\")]),_vm._v(\" comand you get such error, you need to install the header files and static libraries for python dev. Use your package manager for installation. For example, for \"),_c('code',{pre:true},[_vm._v(\"apt\")]),_vm._v(\" you need to run\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"sudo apt install python3-dev\\n\")])]),_c('blockquote',[_c('p',[_vm._v(\"Note:\\npython3-dev does not cover all versions for python3. The service needs at least python3.8, for that you may need to specify the version \"),_c('code',{pre:true},[_vm._v(\"sudo apt install python3.8-dev\")]),_vm._v(\".\")])]),_c('p',[_c('a',{attrs:{\"href\":\"https://stackoverflow.com/a/21530768\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Here\")]),_vm._v(\" you can find examples for other package managers.\")]),_c('h3',{attrs:{\"id\":\"python-versions-mismatch\"}},[_c('a',{attrs:{\"href\":\"#python-versions-mismatch\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Python versions mismatch\")]),_c('p',[_vm._v(\"If during running \"),_c('code',{pre:true},[_vm._v(\"poetry install\")]),_vm._v(\" comand you get \"),_c('code',{pre:true},[_vm._v(\"SolverProblemError\")]),_vm._v(\", which says \\\"The current project's Python requirement (3.6.9) is not compatible with some of the required packages Python requirement:..\\\", even though you have older version of python (e.g. python3.8), you may need to specify the python version poetry is using:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"poetry env use python3.8\\n\")])])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22709914d4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8ZJb":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/sensors-connectivity-on-aira.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Install Sensors Connectivity\",\n  \"contributors\": [\"LoSk-p\", \"Vourhey\", \"tubleronchik\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "N7Yt":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/sensors-connectivity-on-aira.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OFtj":
/*!**********************************************************************************************************!*\
  !*** ./docs/ko/sensors-connectivity-on-aira.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-on-aira.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"8ZJb\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "eqnL":
/*!********************************************************************************!*\
  !*** ./docs/ko/sensors-connectivity-on-aira.md?vue&type=template&id=5534cd1a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"709914d4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-on-aira.md?vue&type=template&id=5534cd1a& */ \"1ljg\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?");

/***/ }),

/***/ "oNw2":
/*!*****************************************************************************************************!*\
  !*** ./docs/ko/sensors-connectivity-on-aira.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-on-aira.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"N7Yt\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_on_aira_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?");

/***/ }),

/***/ "ww27":
/*!*************************************************!*\
  !*** ./docs/ko/sensors-connectivity-on-aira.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensors-connectivity-on-aira.md?vue&type=template&id=5534cd1a& */ \"eqnL\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sensors_connectivity_on_aira_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensors-connectivity-on-aira.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"oNw2\");\n/* harmony import */ var _sensors_connectivity_on_aira_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensors-connectivity-on-aira.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"OFtj\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sensors_connectivity_on_aira_md_vue_type_template_id_5534cd1a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sensors_connectivity_on_aira_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sensors_connectivity_on_aira_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sensors_connectivity_on_aira_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sensors_connectivity_on_aira_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/sensors-connectivity-on-aira.md?");

/***/ })

}]);