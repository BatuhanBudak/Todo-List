/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    font-size: 32px;\n    font-weight: 900;\n    height: 72px;\n    background: darkmagenta;\n    color: white;\n    justify-content: center;\n  }\n.content{\n  display: flex;\n  flex:1;\n}\n\n.add-task-button{\n  align-self: center;\n  padding: 15px 30px;\n  background-color: #555;\n  color: white;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  max-width: 200px;\n}\n\n.form-container{\n  position: fixed; \n  display: none;\n  z-index: 1; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n  #form-popup{\n      max-width: 600px;\n      background-color: white;\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      margin-top: 50px;\n      font-size: 25px;\n  }\n  \n      #form-popup input[type=text],\n      #form-popup input[type=number]\n      {\n          width: 80%;\n          padding: 15px;\n          margin: 5px 0 15px 0;\n          border: none;\n          background: #f1f1f1;\n      }\n      /* #form-popup input[type=checkbox]{ margin: 5px 0 22px 0;} */\n      \n      /* When the inputs get focus, do something */\n      #form-popup input[type=text]:focus,  #form-popup input[type=number]:focus {\n          background-color: #ddd;\n          outline: none;\n      }\n\n      #form-popup .submit-cancel {\n      background-color: #04AA6D;\n      color: white;\n      padding: 16px 20px;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n      margin: 0 5px 10px 5px;\n      opacity: 0.8;\n      text-align: center;\n      }\n      #form-popup #cancel { background-color: red; }\n      #form-popup .submit-cancel:hover, .add-task-button:hover { opacity: 1;}\n\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  }\n\n\n\n\n\n.task-area{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 100%;\n}\n\n.sidebar {\n  width: 300px;\n  background: royalblue;\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    margin-bottom: 16px;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    font-size: 24px;\n  }\n\n.footer {\n  height: 72px;\n  background: #eee;\n  color: darkmagenta;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wIAAwI;IACxI,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;EACzB;AACF;EACE,aAAa;EACb,MAAM;AACR;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;EAEE;MACI,gBAAgB;MAChB,uBAAuB;MACvB,yBAAyB;MACzB,YAAY;MACZ,aAAa;MACb,sBAAsB;MACtB,UAAU;MACV,gBAAgB;MAChB,eAAe;EACnB;;MAEI;;;UAGI,UAAU;UACV,aAAa;UACb,oBAAoB;UACpB,YAAY;UACZ,mBAAmB;MACvB;MACA,6DAA6D;;MAE7D,4CAA4C;MAC5C;UACI,sBAAsB;UACtB,aAAa;MACjB;;MAEA;MACA,yBAAyB;MACzB,YAAY;MACZ,kBAAkB;MAClB,YAAY;MACZ,eAAe;MACf,WAAW;MACX,sBAAsB;MACtB,YAAY;MACZ,kBAAkB;MAClB;MACA,sBAAsB,qBAAqB,EAAE;MAC7C,2DAA2D,UAAU,CAAC;;;AAG5E;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;EAEE;IACE,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;EAClE;EACA;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;EACA;;EAEA,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf;;;;;;AAMF;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,cAAc;EACd,aAAa;AACf;;;AAGA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;AAEF;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;AAEzB","sourcesContent":["body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    font-size: 32px;\n    font-weight: 900;\n    height: 72px;\n    background: darkmagenta;\n    color: white;\n    justify-content: center;\n  }\n.content{\n  display: flex;\n  flex:1;\n}\n\n.add-task-button{\n  align-self: center;\n  padding: 15px 30px;\n  background-color: #555;\n  color: white;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  max-width: 200px;\n}\n\n.form-container{\n  position: fixed; \n  display: none;\n  z-index: 1; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n  #form-popup{\n      max-width: 600px;\n      background-color: white;\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      margin-top: 50px;\n      font-size: 25px;\n  }\n  \n      #form-popup input[type=text],\n      #form-popup input[type=number]\n      {\n          width: 80%;\n          padding: 15px;\n          margin: 5px 0 15px 0;\n          border: none;\n          background: #f1f1f1;\n      }\n      /* #form-popup input[type=checkbox]{ margin: 5px 0 22px 0;} */\n      \n      /* When the inputs get focus, do something */\n      #form-popup input[type=text]:focus,  #form-popup input[type=number]:focus {\n          background-color: #ddd;\n          outline: none;\n      }\n\n      #form-popup .submit-cancel {\n      background-color: #04AA6D;\n      color: white;\n      padding: 16px 20px;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n      margin: 0 5px 10px 5px;\n      opacity: 0.8;\n      text-align: center;\n      }\n      #form-popup #cancel { background-color: red; }\n      #form-popup .submit-cancel:hover, .add-task-button:hover { opacity: 1;}\n\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  }\n\n\n\n\n\n.task-area{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 100%;\n}\n\n.sidebar {\n  width: 300px;\n  background: royalblue;\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    margin-bottom: 16px;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    font-size: 24px;\n  }\n\n.footer {\n  height: 72px;\n  background: #eee;\n  color: darkmagenta;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createToDoDomElement.js":
/*!*************************************!*\
  !*** ./src/createToDoDomElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoDomElementFactory": () => (/* binding */ toDoDomElementFactory)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoObjectDetailsModalBox.js */ "./src/toDoObjectDetailsModalBox.js");
/* harmony import */ var _popupForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popupForm.js */ "./src/popupForm.js");







const toDoDomElementFactory = (toDoObject) => {
    
       function createDomElements(toDoObject) {
        const domElementList = document.createElement("li");
        let currentProject= _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.getCurrentProject();
        domElementList.setAttribute("data-index",
                                   currentProject.findIndexOfToDoObject(toDoObject));

        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        const titleSpan = document.createElement("span");
        const detailsButton = document.createElement("button");
        const dateSpan = document.createElement("span");
        const editButton = document.createElement("button");
        const removeButton = document.createElement("button");
        
            function populateDomElements() {
                checkBox.type = "checkbox";
                checkBox.name = "check-box";
                checkBox.id = "check-box";
                label.htmlFor = 'id';
                detailsButton.textContent = "Details";
                detailsButton.onclick = () => {
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.createToDoObjectDetailsModalBox();
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.setToDoObjectDetailsModalBox(toDoObject);
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.showModalBox();
                }
                editButton.textContent = "Edit"; //simge eklenecek.
                editButton.toDoObject = toDoObject;
                editButton.addEventListener('click', _popupForm_js__WEBPACK_IMPORTED_MODULE_5__.popupForm.createEditToDoTaskDetailsPopup);
                removeButton.textContent = "Remove"; //simge eklenecek.
                titleSpan.textContent = toDoObject.getValueFromToDoObject('title');
                dateSpan.textContent = toDoObject.getValueFromToDoObject('dueDate');
            }
            populateDomElements();

            function appendDomElementsToListElement() {
                domElementList.appendChild(label);
                domElementList.appendChild(checkBox);
                domElementList.appendChild(titleSpan);
                domElementList.appendChild(dateSpan);
                domElementList.appendChild(detailsButton);
                domElementList.appendChild(removeButton);
                domElementList.appendChild(editButton);
            }
            appendDomElementsToListElement();

            return domElementList;
    }
  let element = createDomElements(toDoObject);
  return element;
}


/***/ }),

/***/ "./src/editToDoObjectForm.js":
/*!***********************************!*\
  !*** ./src/editToDoObjectForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDoObjectDetailsForm": () => (/* binding */ editToDoObjectDetailsForm)
/* harmony export */ });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createToDoDomElement.js */ "./src/createToDoDomElement.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");





const editToDoObjectDetailsForm = (() => {


    function editToDoObject(object, formdata) {
       
      const currentProject = _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectController.getCurrentProject();
      const indexOfToDoObject = currentProject.findIndexOfToDoObject(object); //add task button array'de
      
      let oldToDoObject = currentProject.getToDoObject(indexOfToDoObject);

      let newToDoObject = (0,_toDoObject_js__WEBPACK_IMPORTED_MODULE_1__.toDoObjectFactory)(formdata.get('title'),
           formdata.get('due-date'),
           formdata.get('priority'),
           formdata.get('details'));

        currentProject.editToDoObjectsArray(indexOfToDoObject, oldToDoObject, newToDoObject);
      
       let newToDoDomElement = (0,_createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_2__.toDoDomElementFactory)(newToDoObject);
    
       // Bu kısımla ilgili brainstorm yapılması lazım.
       let ulTaskArea = document.querySelector(".task-area-ul");
       let currentChild = ulTaskArea.children[indexOfToDoObject];
       ulTaskArea.replaceChild(newToDoDomElement, currentChild);
    
       
    }
    return {editToDoObject};
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createToDoDomElement.js */ "./src/createToDoDomElement.js");
/* harmony import */ var _popupForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popupForm.js */ "./src/popupForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const exampleProject = (0,_projectObject_js__WEBPACK_IMPORTED_MODULE_1__.ProjectObject)("Example Project");


const todoobject = (0,_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObjectFactory)("Clean room","29/05/2021", "medium", "Your room is really dirty");
exampleProject.addToDoObjectToArray(todoobject);

exampleProject.showArrayContent();

_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.addProjectToArray(exampleProject);
_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.setCurrentProject(exampleProject);
console.log(_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.getCurrentProject().getTitle());






/***/ }),

/***/ "./src/popupForm.js":
/*!**************************!*\
  !*** ./src/popupForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupForm": () => (/* binding */ popupForm)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");
/* harmony import */ var _editToDoObjectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editToDoObjectForm.js */ "./src/editToDoObjectForm.js");




const popupForm = (()=> {

           function createPopupFormDomElements() {

            if (document.querySelector('.form-container')!== null){
                document.querySelector('.form-container').remove();
            }

            const formContainer = document.createElement('div');
            formContainer.classList.add('form-container');

            const formPopup = document.createElement('form');
            formPopup.id = 'form-popup';

            const fieldSet = document.createElement("fielset");

            const legend = document.createElement('legend');
            legend.textContent = 'New Task';
           

            const titleLabel = document.createElement('label');
            titleLabel.htmlFor = 'name';
            titleLabel.textContent = 'Title:';
            titleLabel.style.display = 'block';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.id = 'title';
            titleInput.name = 'title';
            titleInput.setAttribute('required', '');
            titleInput.setAttribute('autofocus', '');
            titleInput.style.display = 'block'  

            const duedateLabel = document.createElement('label');
            duedateLabel.htmlFor = 'name';
            duedateLabel.textContent = 'Due Date:';
            duedateLabel.style.display = 'block' 

            const duedateInput = document.createElement('input');
            duedateInput.type = 'date';
            duedateInput.id = 'due-date';
            duedateInput.name = 'due-date';
            duedateInput.setAttribute('required', '');
            duedateInput.style.display = 'block';

            const priorityLabel = document.createElement('label');
            priorityLabel.htmlFor = 'name';
            priorityLabel.textContent = 'Priority:';
            priorityLabel.style.display = 'block';

            const prioritySelect = document.createElement('select');
            prioritySelect.id = 'priority';
            prioritySelect.name = 'priority';
            prioritySelect.setAttribute('required', '');

            const prioritySelectOption1 = document.createElement('option');
            prioritySelectOption1.value = '';
            prioritySelectOption1.textContent = '--Please choose a priority--';

            const prioritySelectOption2 = document.createElement('option');
            prioritySelectOption2.value = "Low";
            prioritySelectOption2.textContent = 'Low';

            const prioritySelectOption3 = document.createElement('option');
            prioritySelectOption3.value = "Medium";
            prioritySelectOption3.textContent = 'Medium';

            const prioritySelectOption4 = document.createElement('option');
            prioritySelectOption4.value = "High";
            prioritySelectOption4.textContent = 'High';

            const detailsLabel = document.createElement('label');
            detailsLabel.htmlFor = 'name';
            detailsLabel.textContent = 'Details:';
            detailsLabel.style.display = 'block';

            const detailsInput = document.createElement('input');
            detailsInput.type = 'text';
            detailsInput.id = 'details';
            detailsInput.name = 'details';
            detailsInput.style.display = 'block';

            const submitInput = document.createElement('input');
            submitInput.classList.add('submit-cancel');
            submitInput.type = 'submit';
            submitInput.id = 'submit';
            submitInput.value = 'Submit';
            
            const cancelButton = document.createElement('button');
            cancelButton.classList.add('submit-cancel');
            cancelButton.type = 'cancel';
            cancelButton.id = 'cancel';
            cancelButton.textContent = 'Cancel';
            
            giveFamilyStatusToDomElements();
            addEventListenerToForm();

            function giveFamilyStatusToDomElements(){
    
                prioritySelect.appendChild(prioritySelectOption1);
                prioritySelect.appendChild(prioritySelectOption2);
                prioritySelect.appendChild(prioritySelectOption3);
                prioritySelect.appendChild(prioritySelectOption4);
                prioritySelect.style.display = 'block';
    
                fieldSet.appendChild(legend);
                fieldSet.appendChild(titleLabel);
                fieldSet.appendChild(titleInput);
                fieldSet.appendChild(duedateLabel);
                fieldSet.appendChild(duedateInput);
                fieldSet.appendChild(priorityLabel);
                fieldSet.appendChild(prioritySelect);
                fieldSet.appendChild(detailsLabel);
                fieldSet.appendChild(detailsInput);
                fieldSet.appendChild(submitInput);
                fieldSet.appendChild(cancelButton);
    
                formPopup.appendChild(fieldSet);
                formContainer.appendChild(formPopup);
                document.querySelector('body').appendChild(formContainer);
                formContainer.style.display = 'block';
            }

            function addEventListenerToForm() {
                formPopup.addEventListener("submit", createFormDataForNewToDoObject);
                formPopup.addEventListener("formdata", hidePopForm);
                cancelButton.addEventListener('click', hidePopForm);

            }
            
            return { titleInput, duedateInput, detailsInput, submitButton: submitInput, formPopup, formContainer,prioritySelect };
        }
    
    function createEditToDoTaskDetailsPopup(e){
        const  { titleInput, duedateInput, detailsInput, submitButton, formPopup, prioritySelect } = createPopupFormDomElements();

        titleInput.value = e.target.toDoObject.getValueFromToDoObject('title');
        duedateInput.value = e.target.toDoObject.getValueFromToDoObject('dueDate');
        prioritySelect.value = e.target.toDoObject.getValueFromToDoObject('priority');
        detailsInput.value = e.target.toDoObject.getValueFromToDoObject('details');
        submitButton.value = 'Confirm changes?';
        formPopup.toDoObject = e.target.toDoObject;
        formPopup.removeEventListener("submit", createFormDataForNewToDoObject);
        formPopup.addEventListener("submit", createFormDataForExistingToDoObject);
    }

    const hidePopForm = () => {
        console.log('formdata fired');
        const formContainer = document.querySelector('.form-container');
        formContainer.style.display = "none";
        document.querySelector('#form-popup').reset();
    } 

    function createFormDataForNewToDoObject(e){
        if (e.submitter.id === "cancel") return;
        e.preventDefault();
        const formdata = new FormData(e.target);
        _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__.taskForm.createAndPushNewToDoTask(formdata);
    }
    function createFormDataForExistingToDoObject(e){
        if (e.submitter.id === "cancel") return;
        e.preventDefault();
        const formdata = new FormData(e.target);
        _editToDoObjectForm_js__WEBPACK_IMPORTED_MODULE_2__.editToDoObjectDetailsForm.editToDoObject(e.target.toDoObject, formdata);
    }
    return {createEditToDoTaskDetailsPopup, createPopupFormDomElements};
})();


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");


const projectController = (() => {

    let allProjects = [];

    let currentProject = null;

    const getCurrentProject = () => currentProject;

    const setCurrentProject = project => currentProject = project;

    const addProjectToProjectsArray = project => allProjects.push(project);

    const removeProjectFromProjectsArray = projectToRemove => {
        let index = allProjects.findIndex(element => {element.getTitle() == projectToRemove.getTitle()});
        allProjects.splice(index,1);}

    return {getCurrentProject, setCurrentProject, addProjectToArray: addProjectToProjectsArray, removeProjectFromArray: removeProjectFromProjectsArray}
})();



/***/ }),

/***/ "./src/projectObject.js":
/*!******************************!*\
  !*** ./src/projectObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectObject": () => (/* binding */ ProjectObject)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");



const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const getToDoObject = (index) => toDoObjects[index];

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    
    const editToDoObjectsArray = function(index, oldStateToDoObject, newStateToDoObject){
        toDoObjects.splice(index, oldStateToDoObject, newStateToDoObject);
    }

    const removeToDoObjectFromArray = objectToRemove => {
        let index = findIndexOfToDoObject(objectToRemove);
        toDoObjects.splice(index,1);
      
    }
    const findIndexOfToDoObject = (object) => {
       
        return toDoObjects.findIndex(element => element.getValueFromToDoObject('title') === object.getValueFromToDoObject('title'));
        
    }
  
    const showArrayContent = () => toDoObjects.forEach(element => console.log(element.getValueFromToDoObject("title")));

    return {getTitle, getToDoObject, addToDoObjectToArray,  removeToDoObjectFromArray, showArrayContent, findIndexOfToDoObject, editToDoObjectsArray};

}



/***/ }),

/***/ "./src/toDoNewTaskForm.js":
/*!********************************!*\
  !*** ./src/toDoNewTaskForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ addTaskForm)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createToDoDomElement.js */ "./src/createToDoDomElement.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _popupForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popupForm.js */ "./src/popupForm.js");







const addTaskForm = (() => {

    //Bunları değiştirmem lazım
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.onclick = () => _popupForm_js__WEBPACK_IMPORTED_MODULE_5__.popupForm.createPopupFormDomElements();
    
    const form = document.querySelector(".form-container");
    
function createAndPushNewToDoTask(formdata) {
   
  
  const newToDoObject = (0,_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObjectFactory)(formdata.get('title'),
       formdata.get('due-date'),
       formdata.get('priority'),
       formdata.get('details'));

   let currentProject = _projectController_js__WEBPACK_IMPORTED_MODULE_2__.projectController.getCurrentProject();
       
   currentProject.addToDoObjectToArray(newToDoObject);
   
   let newToDoDomElement = (0,_createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_3__.toDoDomElementFactory)(newToDoObject);

   document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);

   
}
return {createAndPushNewToDoTask}

})();



/***/ }),

/***/ "./src/toDoObject.js":
/*!***************************!*\
  !*** ./src/toDoObject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObjectFactory": () => (/* binding */ toDoObjectFactory)
/* harmony export */ });
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");



const toDoObjectFactory = (title, dueDate, priority, details="" ) => {
 
    const getValueFromToDoObject = privatePropertyName => {
        switch(privatePropertyName){
            case ("title"):
              return title;
            case ("dueDate"):
                return dueDate;
            case ("priority"):
                return priority;
            case ("details"):
                return details;
            default:
                return null;
        }
    }
        
    // const showDetailsOfToDoObject = () => {
    //     for (const [key, value] of Object.entries(privatePropertiesObject)) {
    //         console.log(`${key}: ${value}`);
    // }}

    const setPropertyValueOfToDoObject = (privatePropertyName, newValue) => {
        let oldValue = getValueFromToDoObject(privatePropertyName);
        oldValue = newValue;
    }


    return {getValueFromToDoObject, setPropertyValueOfToDoObject,
        };
    
}



/***/ }),

/***/ "./src/toDoObjectDetailsModalBox.js":
/*!******************************************!*\
  !*** ./src/toDoObjectDetailsModalBox.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObjectDetailsModalBox": () => (/* binding */ toDoObjectDetailsModalBox)
/* harmony export */ });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");




const toDoObjectDetailsModalBox = (() => {
    let modalCreated = false;

    const createToDoObjectDetailsModalBox = () => {
    
        if(modalCreated) clearDetailsModalBox();

        const detailsModalContainerDiv = document.createElement("div");
        detailsModalContainerDiv.classList.add('modal');
        detailsModalContainerDiv.id = 'myModal';

        const detailsModalContentDiv = document.createElement('div');
        detailsModalContentDiv.classList.add('modal-content');

        const detailsModalContetCloseSpan = document.createElement('span');
        detailsModalContetCloseSpan.textContent = "X";
        detailsModalContetCloseSpan.classList.add('close');
        detailsModalContetCloseSpan.addEventListener('click', hideModalBox);

        const detailsModalHeader = document.createElement('h2');
        detailsModalHeader.id = "details-modal-title-header";

        const detailsModalProjectDiv = document.createElement('div');
        detailsModalProjectDiv.classList.add('modal-project-div');
        const detailsModalProjectSpan = document.createElement('span');
        detailsModalProjectSpan.textContent = "Project: ";
        const detailsModalProjectSpanText = document.createElement('span');
        detailsModalProjectSpanText.id = 'project-span-text';
        detailsModalProjectDiv.appendChild(detailsModalProjectSpan);
        detailsModalProjectDiv.appendChild(detailsModalProjectSpanText);

        
        const detailsModalPriorityDiv = document.createElement('div');
        detailsModalPriorityDiv.classList.add('modal-priority-div');
        const detailsModalPrioritySpan = document.createElement('span');
        detailsModalPrioritySpan.textContent = 'Priority: ';
        const detailsModalPrioritySpanText = document.createElement('span');
        detailsModalPrioritySpanText.id = 'priority-span-text';
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpan);
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpanText);

        const detailsModalDueDateDiv = document.createElement('div');
        detailsModalDueDateDiv.classList.add('modal-due-date-div');
        const detailsModalDueDateSpan = document.createElement('span');
        detailsModalDueDateSpan.textContent = 'Due Date: ';
        const detailsModalDueDateSpanText = document.createElement('span');
        detailsModalDueDateSpanText.id = 'due-date-span-text';
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpan);
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpanText);

        const detailsModalDetailsDiv = document.createElement('div');
        detailsModalDetailsDiv.classList.add('modal-details-div');
        const detailsModalDetailsSpan = document.createElement('span');
        detailsModalDetailsSpan.textContent = 'Details: ';
        const detailsModalDetailsSpanText = document.createElement('span');
        detailsModalDetailsSpanText.id = 'details-span-text';
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpan);
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpanText);
        
        detailsModalContentDiv.appendChild(detailsModalContetCloseSpan);
        detailsModalContentDiv.appendChild(detailsModalHeader);
        detailsModalContentDiv.appendChild(detailsModalProjectDiv);
        detailsModalContentDiv.appendChild(detailsModalPriorityDiv);
        detailsModalContentDiv.appendChild(detailsModalDueDateDiv);
        detailsModalContentDiv.appendChild(detailsModalDetailsDiv);

        
        detailsModalContainerDiv.appendChild(detailsModalContentDiv);
        document.querySelector('body').appendChild(detailsModalContainerDiv);

        modalCreated = true;
}
const setToDoObjectDetailsModalBox = (toDoobject) => {
        document.querySelector('#details-modal-title-header').textContent = `${toDoobject.getValueFromToDoObject('title')}`;
        document.querySelector('#project-span-text').textContent = `${_projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectController.getCurrentProject().getTitle()}`;
        document.querySelector('#priority-span-text').textContent = `${toDoobject.getValueFromToDoObject('priority')}`;
        document.querySelector('#due-date-span-text').textContent = `${toDoobject.getValueFromToDoObject('dueDate')}`;
        document.querySelector('#details-span-text').textContent = `${toDoobject.getValueFromToDoObject('details')}`;
    }
    const clearDetailsModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.remove();
    }
    
    const showModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.style.display = "block";
    }

    const hideModalBox = () => {
        const detailsModalContainerDiv = document.querySelector("#myModal");
        detailsModalContainerDiv.style.display = "none";
    }
    return {setToDoObjectDetailsModalBox, createToDoObjectDetailsModalBox, showModalBox};

})();


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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb0RvRG9tRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFRvRG9PYmplY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcG9wdXBGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb05ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvT2JqZWN0RGV0YWlsc01vZGFsQm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQ6IGRhcmttYWdlbnRhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6MTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbntcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7IFxcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIGhlaWdodDogMTAwJTsgXFxuICBvdmVyZmxvdzogYXV0bzsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgXFxufVxcblxcbiAgI2Zvcm0tcG9wdXB7XFxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG4gIFxcbiAgICAgICNmb3JtLXBvcHVwIGlucHV0W3R5cGU9dGV4dF0sXFxuICAgICAgI2Zvcm0tcG9wdXAgaW5wdXRbdHlwZT1udW1iZXJdXFxuICAgICAge1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDE1cHggMDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbiAgICAgIH1cXG4gICAgICAvKiAjZm9ybS1wb3B1cCBpbnB1dFt0eXBlPWNoZWNrYm94XXsgbWFyZ2luOiA1cHggMCAyMnB4IDA7fSAqL1xcbiAgICAgIFxcbiAgICAgIC8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiAgICAgICNmb3JtLXBvcHVwIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICAjZm9ybS1wb3B1cCBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAjZm9ybS1wb3B1cCAuc3VibWl0LWNhbmNlbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAwIDVweCAxMHB4IDVweDtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgICAjZm9ybS1wb3B1cCAjY2FuY2VsIHsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuICAgICAgI2Zvcm0tcG9wdXAgLnN1Ym1pdC1jYW5jZWw6aG92ZXIsIC5hZGQtdGFzay1idXR0b246aG92ZXIgeyBvcGFjaXR5OiAxO31cXG5cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICB9XFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmNsb3NlOmhvdmVyLFxcbiAgLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1hcmVhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcblxcbiAgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgY29sb3I6IGRhcmttYWdlbnRhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0lBQXdJO0lBQ3hJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0FBQ0Y7RUFDRSxhQUFhO0VBQ2IsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQzs7RUFFRTtNQUNJLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjs7TUFFSTs7O1VBR0ksVUFBVTtVQUNWLGFBQWE7VUFDYixvQkFBb0I7VUFDcEIsWUFBWTtVQUNaLG1CQUFtQjtNQUN2QjtNQUNBLDZEQUE2RDs7TUFFN0QsNENBQTRDO01BQzVDO1VBQ0ksc0JBQXNCO1VBQ3RCLGFBQWE7TUFDakI7O01BRUE7TUFDQSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQjtNQUNBLHNCQUFzQixxQkFBcUIsRUFBRTtNQUM3QywyREFBMkQsVUFBVSxDQUFDOzs7QUFHNUU7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7RUFFRTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0VBQ2xFO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTs7RUFFQSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZjs7Ozs7O0FBTUY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBkYXJrbWFnZW50YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OjE7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgcG9zaXRpb246IGZpeGVkOyBcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxOyBcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgXFxuICBoZWlnaHQ6IDEwMCU7IFxcbiAgb3ZlcmZsb3c6IGF1dG87IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IFxcbn1cXG5cXG4gICNmb3JtLXBvcHVwe1xcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuICBcXG4gICAgICAjZm9ybS1wb3B1cCBpbnB1dFt0eXBlPXRleHRdLFxcbiAgICAgICNmb3JtLXBvcHVwIGlucHV0W3R5cGU9bnVtYmVyXVxcbiAgICAgIHtcXG4gICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgICAgbWFyZ2luOiA1cHggMCAxNXB4IDA7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gICAgICB9XFxuICAgICAgLyogI2Zvcm0tcG9wdXAgaW5wdXRbdHlwZT1jaGVja2JveF17IG1hcmdpbjogNXB4IDAgMjJweCAwO30gKi9cXG4gICAgICBcXG4gICAgICAvKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4gICAgICAjZm9ybS1wb3B1cCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAgI2Zvcm0tcG9wdXAgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgI2Zvcm0tcG9wdXAgLnN1Ym1pdC1jYW5jZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgI2Zvcm0tcG9wdXAgI2NhbmNlbCB7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxcbiAgICAgICNmb3JtLXBvcHVwIC5zdWJtaXQtY2FuY2VsOmhvdmVyLCAuYWRkLXRhc2stYnV0dG9uOmhvdmVyIHsgb3BhY2l0eTogMTt9XFxuXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgfVxcbiAgLmNsb3NlIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5jbG9zZTpob3ZlcixcXG4gIC5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuLnRhc2stYXJlYXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCI7XG5pbXBvcnQge3Byb2plY3RDb250cm9sbGVyfSBmcm9tICcuL3Byb2plY3RDb250cm9sbGVyLmpzJztcbmltcG9ydCB7dGFza0Zvcm19IGZyb20gJy4vdG9Eb05ld1Rhc2tGb3JtLmpzJztcbmltcG9ydCB7UHJvamVjdE9iamVjdH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdC5qc1wiO1xuaW1wb3J0IHt0b0RvT2JqZWN0RGV0YWlsc01vZGFsQm94fSBmcm9tICcuL3RvRG9PYmplY3REZXRhaWxzTW9kYWxCb3guanMnO1xuaW1wb3J0IHtwb3B1cEZvcm19IGZyb20gJy4vcG9wdXBGb3JtLmpzJ1xuXG5jb25zdCB0b0RvRG9tRWxlbWVudEZhY3RvcnkgPSAodG9Eb09iamVjdCkgPT4ge1xuICAgIFxuICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnRzKHRvRG9PYmplY3QpIHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdD0gcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgZG9tRWxlbWVudExpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5maW5kSW5kZXhPZlRvRG9PYmplY3QodG9Eb09iamVjdCkpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBvcHVsYXRlRG9tRWxlbWVudHMoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5uYW1lID0gXCJjaGVjay1ib3hcIjtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5pZCA9IFwiY2hlY2stYm94XCI7XG4gICAgICAgICAgICAgICAgbGFiZWwuaHRtbEZvciA9ICdpZCc7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgIGRldGFpbHNCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb09iamVjdERldGFpbHNNb2RhbEJveC5jcmVhdGVUb0RvT2JqZWN0RGV0YWlsc01vZGFsQm94KCk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9PYmplY3REZXRhaWxzTW9kYWxCb3guc2V0VG9Eb09iamVjdERldGFpbHNNb2RhbEJveCh0b0RvT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb09iamVjdERldGFpbHNNb2RhbEJveC5zaG93TW9kYWxCb3goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiOyAvL3NpbWdlIGVrbGVuZWNlay5cbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRvRG9PYmplY3QgPSB0b0RvT2JqZWN0O1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3B1cEZvcm0uY3JlYXRlRWRpdFRvRG9UYXNrRGV0YWlsc1BvcHVwKTtcbiAgICAgICAgICAgICAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiOyAvL3NpbWdlIGVrbGVuZWNlay5cbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0b0RvT2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZVNwYW4udGV4dENvbnRlbnQgPSB0b0RvT2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ2R1ZURhdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVsYXRlRG9tRWxlbWVudHMoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYXBwZW5kRG9tRWxlbWVudHNUb0xpc3RFbGVtZW50KCkge1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRMaXN0LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudExpc3QuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZChkYXRlU3Bhbik7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudExpc3QuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudExpc3QuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZERvbUVsZW1lbnRzVG9MaXN0RWxlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudExpc3Q7XG4gICAgfVxuICBsZXQgZWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnRzKHRvRG9PYmplY3QpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydCB7dG9Eb0RvbUVsZW1lbnRGYWN0b3J5fTsiLCJpbXBvcnQge3Byb2plY3RDb250cm9sbGVyfSBmcm9tICcuL3Byb2plY3RDb250cm9sbGVyLmpzJztcbmltcG9ydCB7dG9Eb09iamVjdEZhY3Rvcnl9IGZyb20gXCIuL3RvRG9PYmplY3QuanNcIjtcbmltcG9ydCB7dG9Eb0RvbUVsZW1lbnRGYWN0b3J5fSBmcm9tICcuL2NyZWF0ZVRvRG9Eb21FbGVtZW50LmpzJztcbmltcG9ydCB7UHJvamVjdE9iamVjdH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdC5qc1wiO1xuXG5jb25zdCBlZGl0VG9Eb09iamVjdERldGFpbHNGb3JtID0gKCgpID0+IHtcblxuXG4gICAgZnVuY3Rpb24gZWRpdFRvRG9PYmplY3Qob2JqZWN0LCBmb3JtZGF0YSkge1xuICAgICAgIFxuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgY29uc3QgaW5kZXhPZlRvRG9PYmplY3QgPSBjdXJyZW50UHJvamVjdC5maW5kSW5kZXhPZlRvRG9PYmplY3Qob2JqZWN0KTsgLy9hZGQgdGFzayBidXR0b24gYXJyYXknZGVcbiAgICAgIFxuICAgICAgbGV0IG9sZFRvRG9PYmplY3QgPSBjdXJyZW50UHJvamVjdC5nZXRUb0RvT2JqZWN0KGluZGV4T2ZUb0RvT2JqZWN0KTtcblxuICAgICAgbGV0IG5ld1RvRG9PYmplY3QgPSB0b0RvT2JqZWN0RmFjdG9yeShmb3JtZGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgIGZvcm1kYXRhLmdldCgnZHVlLWRhdGUnKSxcbiAgICAgICAgICAgZm9ybWRhdGEuZ2V0KCdwcmlvcml0eScpLFxuICAgICAgICAgICBmb3JtZGF0YS5nZXQoJ2RldGFpbHMnKSk7XG5cbiAgICAgICAgY3VycmVudFByb2plY3QuZWRpdFRvRG9PYmplY3RzQXJyYXkoaW5kZXhPZlRvRG9PYmplY3QsIG9sZFRvRG9PYmplY3QsIG5ld1RvRG9PYmplY3QpO1xuICAgICAgXG4gICAgICAgbGV0IG5ld1RvRG9Eb21FbGVtZW50ID0gdG9Eb0RvbUVsZW1lbnRGYWN0b3J5KG5ld1RvRG9PYmplY3QpO1xuICAgIFxuICAgICAgIC8vIEJ1IGvEsXPEsW1sYSBpbGdpbGkgYnJhaW5zdG9ybSB5YXDEsWxtYXPEsSBsYXrEsW0uXG4gICAgICAgbGV0IHVsVGFza0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYXJlYS11bFwiKTtcbiAgICAgICBsZXQgY3VycmVudENoaWxkID0gdWxUYXNrQXJlYS5jaGlsZHJlbltpbmRleE9mVG9Eb09iamVjdF07XG4gICAgICAgdWxUYXNrQXJlYS5yZXBsYWNlQ2hpbGQobmV3VG9Eb0RvbUVsZW1lbnQsIGN1cnJlbnRDaGlsZCk7XG4gICAgXG4gICAgICAgXG4gICAgfVxuICAgIHJldHVybiB7ZWRpdFRvRG9PYmplY3R9O1xufSkoKTtcblxuZXhwb3J0IHtlZGl0VG9Eb09iamVjdERldGFpbHNGb3JtfTsiLCJpbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCI7XG5pbXBvcnQge1Byb2plY3RPYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmplY3QuanNcIjtcbmltcG9ydCB7dGFza0Zvcm19IGZyb20gJy4vdG9Eb05ld1Rhc2tGb3JtLmpzJztcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHt0b0RvRG9tRWxlbWVudEZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlVG9Eb0RvbUVsZW1lbnQuanMnO1xuaW1wb3J0IHtwb3B1cEZvcm19IGZyb20gJy4vcG9wdXBGb3JtLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgZXhhbXBsZVByb2plY3QgPSBQcm9qZWN0T2JqZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIpO1xuXG5cbmNvbnN0IHRvZG9vYmplY3QgPSB0b0RvT2JqZWN0RmFjdG9yeShcIkNsZWFuIHJvb21cIixcIjI5LzA1LzIwMjFcIiwgXCJtZWRpdW1cIiwgXCJZb3VyIHJvb20gaXMgcmVhbGx5IGRpcnR5XCIpO1xuZXhhbXBsZVByb2plY3QuYWRkVG9Eb09iamVjdFRvQXJyYXkodG9kb29iamVjdCk7XG5cbmV4YW1wbGVQcm9qZWN0LnNob3dBcnJheUNvbnRlbnQoKTtcblxucHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdFRvQXJyYXkoZXhhbXBsZVByb2plY3QpO1xucHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QoZXhhbXBsZVByb2plY3QpO1xuY29uc29sZS5sb2cocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUaXRsZSgpKTtcblxuXG5cblxuIiwiaW1wb3J0IHt0b0RvT2JqZWN0RmFjdG9yeX0gZnJvbSBcIi4vdG9Eb09iamVjdC5qc1wiO1xuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSAnLi90b0RvTmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHtlZGl0VG9Eb09iamVjdERldGFpbHNGb3JtfSBmcm9tICcuL2VkaXRUb0RvT2JqZWN0Rm9ybS5qcyc7XG5cbmNvbnN0IHBvcHVwRm9ybSA9ICgoKT0+IHtcblxuICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb3B1cEZvcm1Eb21FbGVtZW50cygpIHtcblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGZvcm1Qb3B1cC5pZCA9ICdmb3JtLXBvcHVwJztcblxuICAgICAgICAgICAgY29uc3QgZmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbHNldFwiKTtcblxuICAgICAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICBcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAnbmFtZSc7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnJyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snICBcblxuICAgICAgICAgICAgY29uc3QgZHVlZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZWRhdGVMYWJlbC5odG1sRm9yID0gJ25hbWUnO1xuICAgICAgICAgICAgZHVlZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgICAgICAgICBkdWVkYXRlTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgXG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGR1ZWRhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgICAgICAgICBkdWVkYXRlSW5wdXQubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgICAgICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIGR1ZWRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSAnbmFtZSc7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdE9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0T3B0aW9uMS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3RPcHRpb24xLnRleHRDb250ZW50ID0gJy0tUGxlYXNlIGNob29zZSBhIHByaW9yaXR5LS0nO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdE9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0T3B0aW9uMi52YWx1ZSA9IFwiTG93XCI7XG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdE9wdGlvbjIudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3RPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdE9wdGlvbjMudmFsdWUgPSBcIk1lZGl1bVwiO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3RPcHRpb24zLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0T3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3RPcHRpb240LnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdE9wdGlvbjQudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkZXRhaWxzTGFiZWwuaHRtbEZvciA9ICduYW1lJztcbiAgICAgICAgICAgIGRldGFpbHNMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzOic7XG4gICAgICAgICAgICBkZXRhaWxzTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkZXRhaWxzSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGRldGFpbHNJbnB1dC5pZCA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgIGRldGFpbHNJbnB1dC5uYW1lID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgZGV0YWlsc0lucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY2FuY2VsJyk7XG4gICAgICAgICAgICBzdWJtaXRJbnB1dC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5pZCA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgc3VibWl0SW5wdXQudmFsdWUgPSAnU3VibWl0JztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNhbmNlbCcpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnY2FuY2VsJztcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdjYW5jZWwnO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdpdmVGYW1pbHlTdGF0dXNUb0RvbUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyVG9Gb3JtKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdpdmVGYW1pbHlTdGF0dXNUb0RvbUVsZW1lbnRzKCl7XG4gICAgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3RPcHRpb24xKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdE9wdGlvbjIpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0T3B0aW9uMyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3RPcHRpb240KTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBcbiAgICAgICAgICAgICAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICAgICAgICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICAgICAgICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKGR1ZWRhdGVMYWJlbCk7XG4gICAgICAgICAgICAgICAgZmllbGRTZXQuYXBwZW5kQ2hpbGQoZHVlZGF0ZUlucHV0KTtcbiAgICAgICAgICAgICAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgICAgICAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgICAgICAgICAgICAgZmllbGRTZXQuYXBwZW5kQ2hpbGQoZGV0YWlsc0xhYmVsKTtcbiAgICAgICAgICAgICAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChkZXRhaWxzSW5wdXQpO1xuICAgICAgICAgICAgICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgICAgICAgICAgICAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm1Qb3B1cC5hcHBlbmRDaGlsZChmaWVsZFNldCk7XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUG9wdXApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9Gb3JtKCkge1xuICAgICAgICAgICAgICAgIGZvcm1Qb3B1cC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZUZvcm1EYXRhRm9yTmV3VG9Eb09iamVjdCk7XG4gICAgICAgICAgICAgICAgZm9ybVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJmb3JtZGF0YVwiLCBoaWRlUG9wRm9ybSk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVBvcEZvcm0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlSW5wdXQsIGR1ZWRhdGVJbnB1dCwgZGV0YWlsc0lucHV0LCBzdWJtaXRCdXR0b246IHN1Ym1pdElucHV0LCBmb3JtUG9wdXAsIGZvcm1Db250YWluZXIscHJpb3JpdHlTZWxlY3QgfTtcbiAgICAgICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVkaXRUb0RvVGFza0RldGFpbHNQb3B1cChlKXtcbiAgICAgICAgY29uc3QgIHsgdGl0bGVJbnB1dCwgZHVlZGF0ZUlucHV0LCBkZXRhaWxzSW5wdXQsIHN1Ym1pdEJ1dHRvbiwgZm9ybVBvcHVwLCBwcmlvcml0eVNlbGVjdCB9ID0gY3JlYXRlUG9wdXBGb3JtRG9tRWxlbWVudHMoKTtcblxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gZS50YXJnZXQudG9Eb09iamVjdC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KCd0aXRsZScpO1xuICAgICAgICBkdWVkYXRlSW5wdXQudmFsdWUgPSBlLnRhcmdldC50b0RvT2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ2R1ZURhdGUnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBlLnRhcmdldC50b0RvT2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGRldGFpbHNJbnB1dC52YWx1ZSA9IGUudGFyZ2V0LnRvRG9PYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgnZGV0YWlscycpO1xuICAgICAgICBzdWJtaXRCdXR0b24udmFsdWUgPSAnQ29uZmlybSBjaGFuZ2VzPyc7XG4gICAgICAgIGZvcm1Qb3B1cC50b0RvT2JqZWN0ID0gZS50YXJnZXQudG9Eb09iamVjdDtcbiAgICAgICAgZm9ybVBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlRm9ybURhdGFGb3JOZXdUb0RvT2JqZWN0KTtcbiAgICAgICAgZm9ybVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlRm9ybURhdGFGb3JFeGlzdGluZ1RvRG9PYmplY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVQb3BGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybWRhdGEgZmlyZWQnKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tcG9wdXAnKS5yZXNldCgpO1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtRGF0YUZvck5ld1RvRG9PYmplY3QoZSl7XG4gICAgICAgIGlmIChlLnN1Ym1pdHRlci5pZCA9PT0gXCJjYW5jZWxcIikgcmV0dXJuO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgdGFza0Zvcm0uY3JlYXRlQW5kUHVzaE5ld1RvRG9UYXNrKGZvcm1kYXRhKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybURhdGFGb3JFeGlzdGluZ1RvRG9PYmplY3QoZSl7XG4gICAgICAgIGlmIChlLnN1Ym1pdHRlci5pZCA9PT0gXCJjYW5jZWxcIikgcmV0dXJuO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgZWRpdFRvRG9PYmplY3REZXRhaWxzRm9ybS5lZGl0VG9Eb09iamVjdChlLnRhcmdldC50b0RvT2JqZWN0LCBmb3JtZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB7Y3JlYXRlRWRpdFRvRG9UYXNrRGV0YWlsc1BvcHVwLCBjcmVhdGVQb3B1cEZvcm1Eb21FbGVtZW50c307XG59KSgpO1xuZXhwb3J0IHtwb3B1cEZvcm19OyIsImltcG9ydCB7UHJvamVjdE9iamVjdH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdC5qc1wiO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0O1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSBwcm9qZWN0ID0+IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIGNvbnN0IGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXkgPSBwcm9qZWN0ID0+IGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RzQXJyYXkgPSBwcm9qZWN0VG9SZW1vdmUgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoZWxlbWVudCA9PiB7ZWxlbWVudC5nZXRUaXRsZSgpID09IHByb2plY3RUb1JlbW92ZS5nZXRUaXRsZSgpfSk7XG4gICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwxKTt9XG5cbiAgICByZXR1cm4ge2dldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCwgYWRkUHJvamVjdFRvQXJyYXk6IGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXksIHJlbW92ZVByb2plY3RGcm9tQXJyYXk6IHJlbW92ZVByb2plY3RGcm9tUHJvamVjdHNBcnJheX1cbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RDb250cm9sbGVyIH07IiwiaW1wb3J0IHt0b0RvT2JqZWN0RmFjdG9yeX0gZnJvbSBcIi4vdG9Eb09iamVjdC5qc1wiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tICcuL3RvRG9OZXdUYXNrRm9ybS5qcyc7XG5cbmNvbnN0IFByb2plY3RPYmplY3QgPSAodGl0bGUpID0+IHtcbiAgICBcbiAgICBsZXQgdG9Eb09iamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBnZXRUb0RvT2JqZWN0ID0gKGluZGV4KSA9PiB0b0RvT2JqZWN0c1tpbmRleF07XG5cbiAgICBjb25zdCBhZGRUb0RvT2JqZWN0VG9BcnJheSA9IG9iamVjdFRvQWRkID0+IHRvRG9PYmplY3RzLnB1c2gob2JqZWN0VG9BZGQpO1xuICAgIFxuICAgIGNvbnN0IGVkaXRUb0RvT2JqZWN0c0FycmF5ID0gZnVuY3Rpb24oaW5kZXgsIG9sZFN0YXRlVG9Eb09iamVjdCwgbmV3U3RhdGVUb0RvT2JqZWN0KXtcbiAgICAgICAgdG9Eb09iamVjdHMuc3BsaWNlKGluZGV4LCBvbGRTdGF0ZVRvRG9PYmplY3QsIG5ld1N0YXRlVG9Eb09iamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9Eb09iamVjdEZyb21BcnJheSA9IG9iamVjdFRvUmVtb3ZlID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gZmluZEluZGV4T2ZUb0RvT2JqZWN0KG9iamVjdFRvUmVtb3ZlKTtcbiAgICAgICAgdG9Eb09iamVjdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgXG4gICAgfVxuICAgIGNvbnN0IGZpbmRJbmRleE9mVG9Eb09iamVjdCA9IChvYmplY3QpID0+IHtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIHRvRG9PYmplY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgndGl0bGUnKSA9PT0gb2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ3RpdGxlJykpO1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgIGNvbnN0IHNob3dBcnJheUNvbnRlbnQgPSAoKSA9PiB0b0RvT2JqZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4gY29uc29sZS5sb2coZWxlbWVudC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KFwidGl0bGVcIikpKTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldFRvRG9PYmplY3QsIGFkZFRvRG9PYmplY3RUb0FycmF5LCAgcmVtb3ZlVG9Eb09iamVjdEZyb21BcnJheSwgc2hvd0FycmF5Q29udGVudCwgZmluZEluZGV4T2ZUb0RvT2JqZWN0LCBlZGl0VG9Eb09iamVjdHNBcnJheX07XG5cbn1cblxuZXhwb3J0IHtQcm9qZWN0T2JqZWN0fTsiLCJpbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCI7XG5pbXBvcnQge1Byb2plY3RPYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmplY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHt0b0RvRG9tRWxlbWVudEZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlVG9Eb0RvbUVsZW1lbnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlQW5kUHVzaE5ld1RvRG9UYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHBvcHVwRm9ybSB9IGZyb20gXCIuL3BvcHVwRm9ybS5qc1wiO1xuXG5jb25zdCBhZGRUYXNrRm9ybSA9ICgoKSA9PiB7XG5cbiAgICAvL0J1bmxhcsSxIGRlxJ9pxZ90aXJtZW0gbGF6xLFtXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24ub25jbGljayA9ICgpID0+IHBvcHVwRm9ybS5jcmVhdGVQb3B1cEZvcm1Eb21FbGVtZW50cygpO1xuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICAgIFxuZnVuY3Rpb24gY3JlYXRlQW5kUHVzaE5ld1RvRG9UYXNrKGZvcm1kYXRhKSB7XG4gICBcbiAgXG4gIGNvbnN0IG5ld1RvRG9PYmplY3QgPSB0b0RvT2JqZWN0RmFjdG9yeShmb3JtZGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgZm9ybWRhdGEuZ2V0KCdkdWUtZGF0ZScpLFxuICAgICAgIGZvcm1kYXRhLmdldCgncHJpb3JpdHknKSxcbiAgICAgICBmb3JtZGF0YS5nZXQoJ2RldGFpbHMnKSk7XG5cbiAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgXG4gICBjdXJyZW50UHJvamVjdC5hZGRUb0RvT2JqZWN0VG9BcnJheShuZXdUb0RvT2JqZWN0KTtcbiAgIFxuICAgbGV0IG5ld1RvRG9Eb21FbGVtZW50ID0gdG9Eb0RvbUVsZW1lbnRGYWN0b3J5KG5ld1RvRG9PYmplY3QpO1xuXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYXJlYVwiKS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdUb0RvRG9tRWxlbWVudCk7XG5cbiAgIFxufVxucmV0dXJuIHtjcmVhdGVBbmRQdXNoTmV3VG9Eb1Rhc2t9XG5cbn0pKCk7XG5cbmV4cG9ydCB7YWRkVGFza0Zvcm0gYXMgdGFza0Zvcm19OyIsImltcG9ydCB7UHJvamVjdE9iamVjdH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdC5qc1wiO1xuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSAnLi90b0RvTmV3VGFza0Zvcm0uanMnO1xuXG5jb25zdCB0b0RvT2JqZWN0RmFjdG9yeSA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRldGFpbHM9XCJcIiApID0+IHtcbiBcbiAgICBjb25zdCBnZXRWYWx1ZUZyb21Ub0RvT2JqZWN0ID0gcHJpdmF0ZVByb3BlcnR5TmFtZSA9PiB7XG4gICAgICAgIHN3aXRjaChwcml2YXRlUHJvcGVydHlOYW1lKXtcbiAgICAgICAgICAgIGNhc2UgKFwidGl0bGVcIik6XG4gICAgICAgICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgICAgICAgIGNhc2UgKFwiZHVlRGF0ZVwiKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVlRGF0ZTtcbiAgICAgICAgICAgIGNhc2UgKFwicHJpb3JpdHlcIik6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICAgICAgY2FzZSAoXCJkZXRhaWxzXCIpOlxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgXG4gICAgLy8gY29uc3Qgc2hvd0RldGFpbHNPZlRvRG9PYmplY3QgPSAoKSA9PiB7XG4gICAgLy8gICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByaXZhdGVQcm9wZXJ0aWVzT2JqZWN0KSkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcbiAgICAvLyB9fVxuXG4gICAgY29uc3Qgc2V0UHJvcGVydHlWYWx1ZU9mVG9Eb09iamVjdCA9IChwcml2YXRlUHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBnZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KHByaXZhdGVQcm9wZXJ0eU5hbWUpO1xuICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZUZyb21Ub0RvT2JqZWN0LCBzZXRQcm9wZXJ0eVZhbHVlT2ZUb0RvT2JqZWN0LFxuICAgICAgICB9O1xuICAgIFxufVxuXG5leHBvcnQge3RvRG9PYmplY3RGYWN0b3J5fTsiLCJpbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCI7XG5pbXBvcnQge1Byb2plY3RPYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmplY3QuanNcIjtcblxuY29uc3QgdG9Eb09iamVjdERldGFpbHNNb2RhbEJveCA9ICgoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY3JlYXRlVG9Eb09iamVjdERldGFpbHNNb2RhbEJveCA9ICgpID0+IHtcbiAgICBcbiAgICAgICAgaWYobW9kYWxDcmVhdGVkKSBjbGVhckRldGFpbHNNb2RhbEJveCgpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYuaWQgPSAnbXlNb2RhbCc7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxDb250ZXRDbG9zZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRldENsb3NlU3Bhbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZXRDbG9zZVNwYW4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGV0Q2xvc2VTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsQm94KTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxIZWFkZXIuaWQgPSBcImRldGFpbHMtbW9kYWwtdGl0bGUtaGVhZGVyXCI7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXByb2plY3QtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbFByb2plY3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCI7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbFByb2plY3RTcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJvamVjdFNwYW5UZXh0LmlkID0gJ3Byb2plY3Qtc3Bhbi10ZXh0JztcbiAgICAgICAgZGV0YWlsc01vZGFsUHJvamVjdERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxQcm9qZWN0U3Bhbik7XG4gICAgICAgIGRldGFpbHNNb2RhbFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsUHJvamVjdFNwYW5UZXh0KTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtcHJpb3JpdHktZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbFByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxQcmlvcml0eVNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcmlvcml0eVNwYW5UZXh0LmlkID0gJ3ByaW9yaXR5LXNwYW4tdGV4dCc7XG4gICAgICAgIGRldGFpbHNNb2RhbFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbFByaW9yaXR5U3Bhbik7XG4gICAgICAgIGRldGFpbHNNb2RhbFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbFByaW9yaXR5U3BhblRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbER1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kdWUtZGF0ZS1kaXYnKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsRHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbER1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxEdWVEYXRlU3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbER1ZURhdGVTcGFuVGV4dC5pZCA9ICdkdWUtZGF0ZS1zcGFuLXRleHQnO1xuICAgICAgICBkZXRhaWxzTW9kYWxEdWVEYXRlRGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbER1ZURhdGVTcGFuKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEdWVEYXRlU3BhblRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kZXRhaWxzLWRpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxEZXRhaWxzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRGV0YWlsc1NwYW4udGV4dENvbnRlbnQgPSAnRGV0YWlsczogJztcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsRGV0YWlsc1NwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxEZXRhaWxzU3BhblRleHQuaWQgPSAnZGV0YWlscy1zcGFuLXRleHQnO1xuICAgICAgICBkZXRhaWxzTW9kYWxEZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbERldGFpbHNTcGFuKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEZXRhaWxzU3BhblRleHQpO1xuICAgICAgICBcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGVudERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxDb250ZXRDbG9zZVNwYW4pO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbEhlYWRlcik7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsUHJvamVjdERpdik7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsUHJpb3JpdHlEaXYpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbER1ZURhdGVEaXYpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbERldGFpbHNEaXYpO1xuXG4gICAgICAgIFxuICAgICAgICBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsQ29udGVudERpdik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxDb250YWluZXJEaXYpO1xuXG4gICAgICAgIG1vZGFsQ3JlYXRlZCA9IHRydWU7XG59XG5jb25zdCBzZXRUb0RvT2JqZWN0RGV0YWlsc01vZGFsQm94ID0gKHRvRG9vYmplY3QpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMtbW9kYWwtdGl0bGUtaGVhZGVyJykudGV4dENvbnRlbnQgPSBgJHt0b0Rvb2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ3RpdGxlJyl9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc3Bhbi10ZXh0JykudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLmdldFRpdGxlKCl9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNwYW4tdGV4dCcpLnRleHRDb250ZW50ID0gYCR7dG9Eb29iamVjdC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KCdwcmlvcml0eScpfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1zcGFuLXRleHQnKS50ZXh0Q29udGVudCA9IGAke3RvRG9vYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgnZHVlRGF0ZScpfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLXNwYW4tdGV4dCcpLnRleHRDb250ZW50ID0gYCR7dG9Eb29iamVjdC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KCdkZXRhaWxzJyl9YDtcbiAgICB9XG4gICAgY29uc3QgY2xlYXJEZXRhaWxzTW9kYWxCb3ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRhaW5lckRpdi5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2hvd01vZGFsQm94ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlTW9kYWxCb3ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlNb2RhbFwiKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIHtzZXRUb0RvT2JqZWN0RGV0YWlsc01vZGFsQm94LCBjcmVhdGVUb0RvT2JqZWN0RGV0YWlsc01vZGFsQm94LCBzaG93TW9kYWxCb3h9O1xuXG59KSgpO1xuZXhwb3J0IHt0b0RvT2JqZWN0RGV0YWlsc01vZGFsQm94fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=