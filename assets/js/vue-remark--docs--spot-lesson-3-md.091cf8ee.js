(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--spot-lesson-3-md"],{

/***/ "/uIC":
/*!***************************************************************************************!*\
  !*** ./docs/spot-lesson3.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--16-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson3.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"NrYW\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?");

/***/ }),

/***/ "1phR":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"d818ecc8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/spot-lesson3.md?vue&type=template&id=fa54b334& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In the third lesson you will learn how to find World Objects and go to them.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"the-challenge\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#the-challenge\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"The challenge\")]), _c('p', [_vm._v(\"You start with Spot in the place with some fiducials (a mark on the object) around. Create and execute Python script detects at least two fiducials and moves Spot to each of them within 1 m.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"theory\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#theory\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Theory\")]), _c('p', [_vm._v(\"Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/robot_services#world-object\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robot Services\")]), _vm._v(\" tab in Spot SDK documentation.\")]), _c('p', [_vm._v(\"Using world object service you can find fiducials near the Spot. \")]), _c('blockquote', [_c('p', [_vm._v(\"Spot can find objects around faster if he stands.\")])]), _c('p', [_vm._v(\"In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/en/spot-lesson2.md\"\n    }\n  }, [_vm._v(\"Lesson 2\")]), _vm._v(\". The example of how to find a fiducial and it's coordinates is in \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"fiducial_follow example\")]), _vm._v(\".\")]), _c('p', [_vm._v(\"In your script, firstly, you need to find fiducial object with World Object Service:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_vm._v(\"fiducial_objects = world_object_client.list_world_objects(\\n            object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects\")])]), _c('p', [_vm._v(\"Then get fiducial coordinates in a visual frame:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_vm._v(\"fiducial = fiducial_objects[\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0\")]), _vm._v(\"]\\nvision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME,fiducial.apriltag_properties.frame_name_fiducial.to_proto()\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"practice\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#practice\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Practice\")]), _c('blockquote', [_c('p', [_vm._v(\"Ensure you have Yggdrasil Network software running and configured as described in the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/spot-lesson0\"\n    }\n  }, [_vm._v(\"Lesson 0\")]), _vm._v(\". Otherwise you will not have connection to the robot.\\nOn macOS you may need to launch Yggdrasil Network in the terminal:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]), _c('ol', [_c('li', [_vm._v(\"Connect to Spot from a terminal or using your development environment remote execution function.\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-console\"\n    }\n  }, [_vm._v(\"ssh student@strelka.ygg.merklebot.com\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Develop and demonstrate your solution to the challenge.\")])]), _c('p', [_vm._v(\"We create \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/python/examples/estop/readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop endpoint\")]), _vm._v(\" for you, so you should not create it.\\nFor Spot authentication use username and password from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/credentials\")]), _vm._v(\" file.\\nSpot address is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"192.168.50.3\")]), _vm._v(\".\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22d818ecc8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "NrYW":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/spot-lesson3.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 3. Find and follow an object, navigate between them\",\n  \"contributors\": [\"LoSk-p\", \"khssnv\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "S3pC":
/*!*************************************************************!*\
  !*** ./docs/spot-lesson3.md?vue&type=template&id=fa54b334& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"d818ecc8-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/babel-loader/lib??ref--1-1!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson3.md?vue&type=template&id=fa54b334& */ \"1phR\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?");

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

/***/ "i/NY":
/*!******************************!*\
  !*** ./docs/spot-lesson3.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson3.md?vue&type=template&id=fa54b334& */ \"S3pC\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson3_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson3.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"nSFZ\");\n/* harmony import */ var _spot_lesson3_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson3.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/uIC\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson3_md_vue_type_template_id_fa54b334___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson3_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson3_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson3_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson3_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?");

/***/ }),

/***/ "nSFZ":
/*!**********************************************************************************!*\
  !*** ./docs/spot-lesson3.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--15-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson3.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ouPN\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson3_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?");

/***/ }),

/***/ "ouPN":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/spot-lesson3.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/spot-lesson3.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);