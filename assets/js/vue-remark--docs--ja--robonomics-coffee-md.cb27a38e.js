(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--robonomics-coffee-md"],{

/***/ "Dppy":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/robonomics-coffee.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Udld":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/robonomics-coffee.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics Coffee\",\n  \"contributors\": [\"PaTara43\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "cOno":
/*!**************************************!*\
  !*** ./docs/ja/robonomics-coffee.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robonomics-coffee.md?vue&type=template&id=525f5c14& */ \"n1cy\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _robonomics_coffee_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robonomics-coffee.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"fuQd\");\n/* harmony import */ var _robonomics_coffee_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./robonomics-coffee.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"iULu\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _robonomics_coffee_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_robonomics_coffee_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _robonomics_coffee_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_robonomics_coffee_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?");

/***/ }),

/***/ "fuQd":
/*!******************************************************************************************!*\
  !*** ./docs/ja/robonomics-coffee.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-coffee.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Dppy\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?");

/***/ }),

/***/ "iULu":
/*!***********************************************************************************************!*\
  !*** ./docs/ja/robonomics-coffee.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-coffee.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Udld\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?");

/***/ }),

/***/ "n1cy":
/*!*********************************************************************!*\
  !*** ./docs/ja/robonomics-coffee.md?vue&type=template&id=525f5c14& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"709914d4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-coffee.md?vue&type=template&id=525f5c14& */ \"sVfa\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_coffee_md_vue_type_template_id_525f5c14___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?");

/***/ }),

/***/ "sVfa":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"709914d4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/robonomics-coffee.md?vue&type=template&id=525f5c14& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('h2',{attrs:{\"id\":\"about\"}},[_c('a',{attrs:{\"href\":\"#about\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"About\")]),_c('p',[_vm._v(\"\\\"Robonomics coffee\\\" - is a smart coffee machine integrated in  \"),_c('a',{attrs:{\"href\":\"https://robonomics.network/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics Network\")]),_vm._v(\".\\nThis project aims to show Robonomics potential in the IoT sphere by a real-world example.\")]),_c('div',{staticClass:\"youtube-embed\"},[_c('div',{staticStyle:{\"width\":\"100%\",\"margin\":\"0 auto\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"padding-bottom\":\"56.25%\",\"padding-top\":\"25px\",\"height\":\"0\"}},[_c('iframe',{staticStyle:{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"src\":\"https://www.youtube-nocookie.com/embed/Z8pXcLjlJnQ\",\"allow\":\"autoplay; encrypted-media\",\"allowfullscreen\":\"\"}})])])]),_c('h2',{attrs:{\"id\":\"how-to-make-coffee\"}},[_c('a',{attrs:{\"href\":\"#how-to-make-coffee\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"How to make coffee?\")]),_c('p',[_vm._v(\"In order to have a cup of delicious coffee, a customer should send some funds (1 Statemine's token \\n\"),_c('a',{attrs:{\"href\":\"https://statemine.statescan.io/asset/3077\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"ACT\")]),_vm._v(\", id=3077) to the address of a coffee machine in Statemine parachain.\\nAfter that the pouring process is started and action log is published in the \\n\"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics Parachain portal\")]),_vm._v(\" \\nvia Datalog function.\")]),_c('p',[_c('strong',[_vm._v(\"NOTE!\")]),_c('em',[_vm._v(\"You may use \"),_c('strong',[_vm._v(\"any\")]),_vm._v(\" token on Statemine, more on that \"),_c('a',{attrs:{\"href\":\"#things-to-point-out\"}},[_vm._v(\"here\")])])]),_c('h2',{attrs:{\"id\":\"how-it-works\"}},[_c('a',{attrs:{\"href\":\"#how-it-works\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"How it works?\")]),_c('p',[_vm._v(\"There is a single-board computer attached to the body of the coffee machine. This computer is the center of the entire\\nsystem, where all the processes are happening. The single-board (Raspberry Pi 4) is connected to the control panel of the \\ncoffee machine via jumper breadboard wires and GPIO interface. RPI is also the one interacting with Robonomics and\\nStatemine parachains. Sample flowchart of the workflow is presented below.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Workflow!../images/robonomics-coffee/workflow.png */ \"cRYi\"),\"alt\":\"Workflow\"}})],1),_c('h2',{attrs:{\"id\":\"tutorial\"}},[_c('a',{attrs:{\"href\":\"#tutorial\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Tutorial\")]),_c('h3',{attrs:{\"id\":\"used-hardware\"}},[_c('a',{attrs:{\"href\":\"#used-hardware\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Used hardware\")]),_c('ul',[_c('li',[_vm._v(\"Coffee machine\"),_c('br'),_vm._v(\"\\nThe very important criteria for a coffee machine was the ability to solder some wires to the control panel since GPIO\\nwas selected as a communication interface being the easiest one to implement. Several options were considered\\n(\"),_c('a',{attrs:{\"href\":\"https://www.philips.com/c-p/SM5478_10R1/picobaristo-super-automatic-espresso-machine\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Saeco PicoBaristo HD 8925\")]),_vm._v(\",\\n\"),_c('a',{attrs:{\"href\":\"https://www.delonghi.com/en/esam3200-s-ex-1-magnifica-automatic-coffee-maker/p/ESAM3200.S%20EX%3A1\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"De'Longhi ESAM3200.S\")]),_vm._v(\"). \\nAs may be seen, no touchscreen and no bells and whistles, just buttons and espresso. Finally,\\n\"),_c('a',{attrs:{\"href\":\"https://www.delonghi.com/en/ecam22-110-sb-magnifica-s-automatic-coffee-maker/p/ECAM22.110.SB\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"De’Longhi Magnifica ECAM 22.110\")]),_vm._v(\" \\nwas chosen as it is cheap and has an easy-removed front panel.\")]),_c('li',[_vm._v(\"Single-board \"),_c('a',{attrs:{\"href\":\"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Raspberry Pi 4B\")]),_vm._v(\" (2 GB) with Ubuntu server\\ninstalled via \"),_c('a',{attrs:{\"href\":\"https://www.raspberrypi.com/software/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"RPi Imager\")]),_vm._v(\".\")]),_c('li',[_vm._v(\"5V adapter and USB A to USB type C cable (\"),_c('a',{attrs:{\"href\":\"https://www.amazon.com/Charger-FOBSUNLAND-Universal-Adapter-S6-Note/dp/B073Q1N8FL/ref=sr_1_2_sspa?keywords=5v+adapter&qid=1636572682&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ1JDSkQ5NlBGTFU2JmVuY3J5cHRlZElkPUEwODgwMDgzMUJKMU5YVEdXRjdBWCZlbmNyeXB0ZWRBZElkPUEwMTc3NjgwMldDQ1lJWUkwTVY4VSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"this\")]),_vm._v(\" and \"),_c('a',{attrs:{\"href\":\"https://www.amazon.com/Charger-Braided-Charging-Compatible-Samsung/dp/B0794M53HQ/ref=sr_1_1?keywords=usb+a+type+c+cable&qid=1636572602&sr=8-1\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"this\")]),_vm._v(\" are examples)\")]),_c('li',[_vm._v(\"A set of F-M, M-M, F-F jumper wires, a breadboard (again, \"),_c('a',{attrs:{\"href\":\"https://www.amazon.com/Standard-Jumper-Solderless-Prototype-Breadboard/dp/B07H7V1X7Y/ref=sr_1_13?keywords=breadboard&qid=1636572396&sr=8-13\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"this\")]),_vm._v(\" is just an example).\")]),_c('li',[_vm._v(\"Transistor and a resistor(optionally). More on that \"),_c('a',{attrs:{\"href\":\"#4-circuit\"}},[_vm._v(\"later\")]),_vm._v(\".\")])]),_c('h3',{attrs:{\"id\":\"tools\"}},[_c('a',{attrs:{\"href\":\"#tools\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Tools\")]),_c('ul',[_c('li',[_vm._v(\"A set of screwdrivers.\")]),_c('li',[_vm._v(\"Soldering iron with some solder and resin.\")]),_c('li',[_vm._v(\"Multimeter.\")])]),_c('h3',{attrs:{\"id\":\"hardware-installation\"}},[_c('a',{attrs:{\"href\":\"#hardware-installation\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Hardware installation\")]),_c('h4',{attrs:{\"id\":\"1-disassembly-the-coffee-machine\"}},[_c('a',{attrs:{\"href\":\"#1-disassembly-the-coffee-machine\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1. Disassembly the coffee machine.\")]),_c('p',[_vm._v(\"There is a \"),_c('a',{attrs:{\"href\":\"https://www.youtube.com/watch?v=7Y5NCePD0PM\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"sample tutorial\")]),_vm._v(\" \\non YouTube. Your goal is to remove the front panel (it won't be used anymore, so this is a thing to improve to hide all\\nthe wires) and detach the control PCB.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Detached%20PCB!../images/robonomics-coffee/detached_pcb.png */ \"kR6G\"),\"alt\":\"Detached PCB\"}})],1),_c('h4',{attrs:{\"id\":\"2-solder-two-wires-to-the-button-you-need\"}},[_c('a',{attrs:{\"href\":\"#2-solder-two-wires-to-the-button-you-need\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2. Solder two wires to the button you need.\")]),_c('p',[_vm._v(\"Solder them to the isolated contacts (in our case - two bottom contacts).\\nYou can use any wires, but keep im mind that in the end there should be an M-wire to put it into the breadboard.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Soldered%20Wires!../images/robonomics-coffee/soldered_wires.png */ \"ZiZ4\"),\"alt\":\"Soldered Wires\"}})],1),_c('h4',{attrs:{\"id\":\"3-assemble-the-entire-coffee-machine-back-leaving-the-front-panel-removed\"}},[_c('a',{attrs:{\"href\":\"#3-assemble-the-entire-coffee-machine-back-leaving-the-front-panel-removed\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"3. Assemble the entire coffee machine back leaving the front panel removed.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Coffee%20machine%20Overview!../images/robonomics-coffee/coffee_machine_overview.png */ \"dngW\"),\"alt\":\"Coffee machine Overview\"}})],1),_c('h4',{attrs:{\"id\":\"4-circuit\"}},[_c('a',{attrs:{\"href\":\"#4-circuit\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"4. Circuit\")]),_c('p',[_vm._v(\"Overall circuit is presented below, this is a very simple transistor switch, we used \"),_c('strong',[_vm._v(\"R\"),_c('sub',[_vm._v(\"1\")])]),_vm._v(\"=1kΩ, a npn \\ntransistor \"),_c('strong',[_vm._v(\"Q\"),_c('sub',[_vm._v(\"1\")])]),_vm._v(\" (\"),_c('em',[_vm._v(\"h\"),_c('sub',[_vm._v(\"fe\")])]),_vm._v(\"=40, \"),_c('em',[_vm._v(\"U\"),_c('sub',[_vm._v(\"ce\")])]),_vm._v(\">5V, \"),_c('em',[_vm._v(\"I\"),_c('sub',[_vm._v(\"c\")])]),_vm._v(\">0.015A, sample \"),_c('a',{attrs:{\"href\":\"https://alltransistors.com/adv/pdfdatasheet_rca/2n1613.pdf\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\", but almost any general \\ntransistor suites, since this is a switch) and a small 3.3V diode \"),_c('strong',[_vm._v(\"D\")]),_vm._v(\" in base circuit found in the storage of our lab:) One \\ncan use a MOSFET transistor as well.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Circuit!../images/robonomics-coffee/circuit.png */ \"R82c\"),\"alt\":\"Circuit\"}})],1),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Circuit%20Assembled!../images/robonomics-coffee/circuit_assembled.png */ \"vBp1\"),\"alt\":\"Circuit Assembled\"}})],1),_c('h4',{attrs:{\"id\":\"5-connect-coffee-machine-and-rpi\"}},[_c('a',{attrs:{\"href\":\"#5-connect-coffee-machine-and-rpi\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"5. Connect coffee machine and RPI\")]),_c('p',[_vm._v(\"Connect wires marked as \"),_c('em',[_vm._v(\"RPI GND\")]),_vm._v(\" and \"),_c('em',[_vm._v(\"RPI GPIO Pin\")]),_vm._v(\" to pins \"),_c('strong',[_vm._v(\"GND\")]),_vm._v(\" and \"),_c('strong',[_vm._v(\"21\")]),_vm._v(\" respectively. RPI GPIO scheme is presented below.\\nWires marked as \"),_c('em',[_vm._v(\"Button+\")]),_vm._v(\" and \"),_c('em',[_vm._v(\"Button-\")]),_vm._v(\" should be connected to the left button contact and right button contact \\nrespectively.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=RPI%20GPIO!../images/robonomics-coffee/rpi_gpio.png */ \"Ra2I\"),\"alt\":\"RPI GPIO\"}})],1),_c('h3',{attrs:{\"id\":\"software-installation\"}},[_c('a',{attrs:{\"href\":\"#software-installation\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Software installation\")]),_c('p',[_vm._v(\"Time to turn the Raspberry Pi into blockchain-powered coffee maker!  \")]),_c('h4',{attrs:{\"id\":\"option-1-using-robonomics-parachain-in-kusama-network\"}},[_c('a',{attrs:{\"href\":\"#option-1-using-robonomics-parachain-in-kusama-network\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 1: Using Robonomics Parachain in Kusama Network\")]),_c('ul',[_c('li',[_vm._v(\"Prepare the RPI for Substrate libs (\"),_c('a',{attrs:{\"href\":\"https://www.rust-lang.org/tools/install\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"source\")]),_vm._v(\"):\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"curl --proto \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-string\"}},[_vm._v(\"'=https'\")]),_vm._v(\" --tlsv1.2 -sSf https://sh.rustup.rs | sh\\nrustup default nightly\")])]),_c('ul',[_c('li',[_vm._v(\"Install gpiozero library (\"),_c('a',{attrs:{\"href\":\"https://gpiozero.readthedocs.io/en/stable/installing.html\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"source\")]),_vm._v(\") and reboot:\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo apt update\\nsudo apt install python3-gpiozero\\nsudo pip3 install gpiozero\\nsudo reboot\")])]),_c('ul',[_c('li',[_vm._v(\"Clone the repository\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"git \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"clone\")]),_vm._v(\" https://github.com/Multi-Agent-io/robonomics-coffee-maker\")])]),_c('ul',[_c('li',[_vm._v(\"Install project requirements\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"pip3 install -r requirements.txt\")])]),_c('h4',{attrs:{\"id\":\"option-2-using-everscale-network\"}},[_c('a',{attrs:{\"href\":\"#option-2-using-everscale-network\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 2: Using Everscale Network.\")]),_c('ul',[_c('li',[_vm._v(\"Install gpiozero library (\"),_c('a',{attrs:{\"href\":\"https://gpiozero.readthedocs.io/en/stable/installing.html\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"source\")]),_vm._v(\") and reboot:\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo apt update\\nsudo apt install python3-gpiozero\\nsudo pip3 install gpiozero\\nsudo reboot\")])]),_c('ul',[_c('li',[_vm._v(\"Clone the repository\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"git \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"clone\")]),_vm._v(\" https://github.com/Multi-Agent-io/robonomics-coffee-maker\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"cd\")]),_vm._v(\" robonomics-coffee-maker\")])]),_c('ul',[_c('li',[_vm._v(\"Install Node.js requirements\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"npm install @eversdk/core\\nnpm install python-shell\\nmv eversdk.node ~/.tonlabs/binaries/1\\ngit \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"clone\")]),_vm._v(\" https://github.com/tonlabs/ever-sdk-js\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"cd\")]),_vm._v(\" ever-sdk-js/packages/lib-node\\nnpm install -g\")])]),_c('p',[_vm._v(\"The reason why we can't just npm install @eversdk/lib-node is because this library is not compiled for the ARM architecture.\")]),_c('h3',{attrs:{\"id\":\"account-management\"}},[_c('a',{attrs:{\"href\":\"#account-management\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Account management\")]),_c('h4',{attrs:{\"id\":\"option-1-using-robonomics-parachain-in-kusama-network-1\"}},[_c('a',{attrs:{\"href\":\"#option-1-using-robonomics-parachain-in-kusama-network-1\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 1: Using Robonomics Parachain in Kusama Network\")]),_c('p',[_vm._v(\"On your PC install \"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/extension/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Polkadot Extension\")]),_vm._v(\" and register a coffee machine account there. \"),_c('strong',[_vm._v(\"Save \\nmnemonic seed phrase as it is going to be used later.\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Coffee%20machine%20Account!../images/robonomics-coffee/account.png */ \"p2B6\"),\"alt\":\"Coffee machine Account\"}})],1),_c('p',[_vm._v(\"Logging actions in Robonomics is optional, you will need XRT on \\n\"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics Parachain portal\")]),_vm._v(\" for coffee machine account (it is the same across\\nnetworks) for this. If not, there will simply be an error message \"),_c('em',[_vm._v(\"\\\"Balance too low.\\\"\")])]),_c('h4',{attrs:{\"id\":\"option-2-using-everscale-network-1\"}},[_c('a',{attrs:{\"href\":\"#option-2-using-everscale-network-1\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 2: Using Everscale Network.\")]),_c('p',[_vm._v(\"Create an account in the Everscale with, for example mobile app. Save seed and activate a coffee-machine address there.\\nInsert this address in \"),_c('code',{pre:true},[_vm._v(\"main.js\")])]),_c('h3',{attrs:{\"id\":\"run-robonomics-coffee\"}},[_c('a',{attrs:{\"href\":\"#run-robonomics-coffee\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Run Robonomics coffee\")]),_c('h4',{attrs:{\"id\":\"option-1-using-robonomics-parachain-in-kusama-network-2\"}},[_c('a',{attrs:{\"href\":\"#option-1-using-robonomics-parachain-in-kusama-network-2\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 1: Using Robonomics Parachain in Kusama Network\")]),_c('p',[_vm._v(\"Run this in corresponding network repo folder:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"python3 main.py <previously saved seed \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"in\")]),_vm._v(\" quotes>\")])]),_c('p',[_vm._v(\"You should see the program waiting for ACT incomes:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Waiting%20for%20ACT!../images/robonomics-coffee/waiting_for_act.png */ \"Qp4C\"),\"alt\":\"Waiting for ACT\"}})],1),_c('p',[_vm._v(\"You can send tokens from another account created the same way via \"),_c('code',{pre:true},[_vm._v(\"assets:transfer\")]),_c('em',[_vm._v(\"extrinsic\")]),_vm._v(\" on \\n\"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemine-rpc.polkadot.io#/explorer\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Statemine\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"As soon as there is an income (positive change in \"),_c('code',{pre:true},[_vm._v(\"assets:account\")]),_c('em',[_vm._v(\"storage function\")]),_vm._v(\" for address \\nderived from seed and for token id \"),_c('code',{pre:true},[_vm._v(\"3077\")]),_vm._v(\") the RPI triggers GPIO pin 18 and coffee machine starts making coffee and \\nrecords a datalog!\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Making%20coffee!../images/robonomics-coffee/making_coffee.png */ \"jRny\"),\"alt\":\"Making coffee\"}})],1),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Recorded%20Datalog!../images/robonomics-coffee/datalog.png */ \"LlQF\"),\"alt\":\"Recorded Datalog\"}})],1),_c('h4',{attrs:{\"id\":\"option-2-using-everscale-network-2\"}},[_c('a',{attrs:{\"href\":\"#option-2-using-everscale-network-2\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Option 2: Using Everscale Network.\")]),_c('p',[_vm._v(\"Run poller by \")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"node main.js\")])]),_c('p',[_vm._v(\"Then send 0.5 EVR to the address specified in the \"),_c('code',{pre:true},[_vm._v(\"main.js\")]),_vm._v(\" file. Everscale use case does not imply Datalog recording.\")]),_c('h2',{attrs:{\"id\":\"things-to-point-out\"}},[_c('a',{attrs:{\"href\":\"#things-to-point-out\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Things to point out\")]),_c('ul',[_c('li',[_vm._v(\"This is a POC of a blockchain-driven IoT device, it has things to improve, wires to hide and functionality to implement.\")]),_c('li',[_vm._v(\"Token ID, the one, coffee machine is waiting to receive, is set\\n\"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L27\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\", \"),_c('strong',[_vm._v(\"so you can use your own token\")]),_vm._v(\",\\nexisting one or newly created. To create one, go to \\n\"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics-wiki\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Statemine Kusama parachain page\")]),_vm._v(\", \"),_c('code',{pre:true},[_vm._v(\"Network -> Assets -> Create\")]),_vm._v(\".\\nSet an ID there, complete the procedure and paste ID in the code.\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Creating%20Any%20Token%20for%20Paying!../images/robonomics-coffee/create_token.png */ \"zZ7n\"),\"alt\":\"Creating Any Token for Paying\"}})],1),_c('ul',[_c('li',[_vm._v(\"Right now the only thing that matters for income tracker is the positive difference between current and previous\\nasset balance. This may be filtered \"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L59\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"code\")]),_vm._v(\".\")]),_c('li',[_vm._v(\"One may use QR-code for mobile apps for convenient transfers.\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=QR-codes!../images/robonomics-coffee/qr_codes.png */ \"tUEE\"),\"alt\":\"QR-codes\"}})],1),_c('ul',[_c('li',[_vm._v(\"Powered by \"),_c('a',{attrs:{\"href\":\"https://robonomics.network/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics\")]),_vm._v(\", made by \"),_c('a',{attrs:{\"href\":\"https://multi-agent.io/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Multi-Agent.io\")]),_vm._v(\".\")])])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/robonomics-coffee.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22709914d4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);