(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--es--hass-os-upgrade-md"],{

/***/ "+iQw":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/hass-os-upgrade.md?vue&type=template&id=9ad46204& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Este artículo contiene instrucciones para actualizar tu Home Assistant OS existente con la integración de Robonomics.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/homeassistant_os.png\"}}),_c('h2',{attrs:{\"id\":\"instalar-ipfs-add-on\"}},[_c('a',{attrs:{\"href\":\"#instalar-ipfs-add-on\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Instalar IPFS Add-on\")]),_c('p',[_vm._v(\"La integración de Robonomics almacena los datos utilizando un demonio IPFS local, por lo que primero debes instalarlo. \")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmdAmUHW9bpTU6sUwBYu4ai4DVJ6nZ5xerjM9exvooGKGq', type:'mp4'}]}}),_c('ol',[_c('li',[_c('p',[_vm._v(\"Existe un \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/ipfs-addon\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"complemento IPFS para Home Assistant\")]),_vm._v(\". Para instalarlo, ve a \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Add-ons\")]),_vm._v(\" y presiona el botón \"),_c('code',{pre:true},[_vm._v(\"ADD-ON STORE\")]),_vm._v(\" en la esquina inferior derecha.\")])]),_c('li',[_c('p',[_vm._v(\"Presiona en los tres puntos de la esquina superior derecha y elige \"),_c('code',{pre:true},[_vm._v(\"Repositories\")]),_vm._v(\". Agrega allí el siguiente enlace:\")])])]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"https://github.com/airalab/ipfs-addon\\n\")])])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_c('p',[_vm._v(\"Presiona el botón \"),_c('code',{pre:true},[_vm._v(\"ADD\")]),_vm._v(\".\")])]),_c('li',[_c('p',[_vm._v(\"Cierra el administrador de repositorios y actualiza la página. Ahora al final de la página puedes ver el complemento IPFS Daemon.\")])]),_c('li',[_c('p',[_vm._v(\"Abre el complemento y presiona \"),_c('code',{pre:true}),_vm._v(\"INSTALL\"),_c('code',{pre:true},[_vm._v(\". Después de la instalación, presiona\")]),_vm._v(\"START`.\")])])]),_c('h2',{attrs:{\"id\":\"instala-hacs\"}},[_c('a',{attrs:{\"href\":\"#instala-hacs\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Instala HACS\")]),_c('p',[_c('a',{attrs:{\"href\":\"https://hacs.xyz/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Home Assistant Community Store (HACS)\")]),_vm._v(\" te permite instalar integraciones personalizadas.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmYJFpxrww9PRvcAUhdgKufeDbyUFoBZTREZHPgV452kzs', type:'mp4'}]}}),_c('ol',[_c('li',[_vm._v(\"Antes de comenzar, necesitas instalar un complemento para conectarte al dispositivo de Home Assistant con SSH. En la Tienda de Complementos busca \"),_c('code',{pre:true},[_vm._v(\"ssh\")]),_vm._v(\". Recomendamos instalar el complemento \"),_c('code',{pre:true},[_vm._v(\"SSH & Web Terminal\")]),_vm._v(\".\")])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Si no encuentras el complemento SSH, intenta habilitar el Modo Avanzado en la configuración de tu perfil de usuario. Para hacer esto, haz clic en el icono de perfil en la esquina inferior izquierda y encuentra la opción de Modo Avanzado.\")])]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Elige el complemento y presiona \"),_c('code',{pre:true},[_vm._v(\"INSTALL\")]),_vm._v(\". Después de que la instalación haya finalizado, ve a la pestaña \"),_c('code',{pre:true},[_vm._v(\"Configuración\")]),_vm._v(\" y agrega una \"),_c('code',{pre:true},[_vm._v(\"password\")]),_vm._v(\" o \"),_c('code',{pre:true},[_vm._v(\"authorized_keys\")]),_vm._v(\". No olvides guardar esta parte de la configuración.\")])]),_c('li',[_c('p',[_vm._v(\"En la pestaña \"),_c('code',{pre:true},[_vm._v(\"Info\")]),_vm._v(\", presiona \"),_c('code',{pre:true},[_vm._v(\"START\")]),_vm._v(\". Si deseas ver el complemento en la barra lateral, no olvides habilitar \"),_c('code',{pre:true},[_vm._v(\"Show in sidebar\")]),_vm._v(\".\")])])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmcijfJ45fmW9omB67xWyPKvHhZuwLMTTQ7DBqnyxHUXR1', type:'mp4'}]}}),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Abre el complemento SSH y ejecuta el siguiente comando:\")])]),_c('code-helper',{attrs:{\"copy\":\"\",\"additionalLine\":\"Home Assistant Command Line\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"wget -O - https://get.hacs.xyz | bash -\")])])]),_c('ol',{attrs:{\"start\":\"5\"}},[_c('li',[_c('p',[_vm._v(\"Reinicie Home Assistant (puede hacerlo en \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\"->\"),_c('code',{pre:true},[_vm._v(\"System\")]),_vm._v(\"). \")])]),_c('li',[_c('p',[_vm._v(\"Ahora la Integración HACS estará disponible para agregar en el menú \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\". Ve a Settings\"),_c('code',{pre:true},[_vm._v(\"->\")]),_vm._v(\"Devices & Services\"),_c('code',{pre:true},[_vm._v(\", presiona\")]),_vm._v(\"Add Integration` y busca HACS.\")])])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Para usar HACS necesitas una cuenta de Github.\")])]),_c('ol',{attrs:{\"start\":\"7\"}},[_c('li',[_vm._v(\"Haz clic en él y sigue las instrucciones de instalación. \")])]),_c('h2',{attrs:{\"id\":\"instala-la-integración-de-robonomics\"}},[_c('a',{attrs:{\"href\":\"#instala-la-integraci%C3%B3n-de-robonomics\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Instala la Integración de Robonomics\")]),_c('p',[_vm._v(\"Ahora puedes instalar la Integración de Robonomics usando HACS.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmUodGanHyTE8hCJdcCHzvdnmuyVVGvnfTuYvYTPVKhh5d', type:'mp4'}]}}),_c('p',[_vm._v(\"Abre HACS desde el menú de la barra lateral y navega hasta \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\". Haz clic en \"),_c('code',{pre:true},[_vm._v(\"Explore & Download Repositories\")]),_vm._v(\", luego busca \"),_c('code',{pre:true},[_vm._v(\"Robonomics\")]),_vm._v(\" y haz clic en el botón \"),_c('code',{pre:true},[_vm._v(\"Download\")]),_vm._v(\" ubicado en la esquina inferior derecha. Una vez que la descarga esté completa, reinicia Home Assistant.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "KcdY":
/*!*******************************************************************!*\
  !*** ./docs/es/hass-os-upgrade.md?vue&type=template&id=9ad46204& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=template&id=9ad46204& */ \"+iQw\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?");

/***/ }),

/***/ "P8l8":
/*!************************************!*\
  !*** ./docs/es/hass-os-upgrade.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=template&id=9ad46204& */ \"KcdY\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"qbEr\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"m7iL\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_os_upgrade_md_vue_type_template_id_9ad46204___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?");

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

/***/ "c1/I":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Actualiza tu Home Assistant OS\",\n  \"contributors\": [\"LoSk-p\"],\n  \"tools\": [\"Home Assistant OS 64-9.5 for RaspPi https://github.com/home-assistant/operating-system\", \"HACS 1.31.0 https://github.com/hacs/integration/\", \"Robonomics Home Assistant Integration 1.4.1 https://github.com/airalab/homeassistant-robonomics-integration\", \"IPFS Home Assistant Addon 1.1.0 https://github.com/airalab/ipfs-addon\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "m7iL":
/*!*********************************************************************************************!*\
  !*** ./docs/es/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"c1/I\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?");

/***/ }),

/***/ "qbEr":
/*!****************************************************************************************!*\
  !*** ./docs/es/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ztZV\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?");

/***/ }),

/***/ "ztZV":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/es/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);