function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-layout-layout-module"], {
  /***/
  "./src/app/demo/pages/layout/layout-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/demo/pages/layout/layout-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppDemoPagesLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'static',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | theme-static-theme-static-module */
          [__webpack_require__.e("common"), __webpack_require__.e("theme-static-theme-static-module")]).then(__webpack_require__.bind(null,
          /*! ./theme-static/theme-static.module */
          "./src/app/demo/pages/layout/theme-static/theme-static.module.ts")).then(function (module) {
            return module.ThemeStaticModule;
          });
        }
      }, {
        path: 'horizontal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | theme-horizontal-theme-horizontal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("theme-horizontal-theme-horizontal-module")]).then(__webpack_require__.bind(null,
          /*! ./theme-horizontal/theme-horizontal.module */
          "./src/app/demo/pages/layout/theme-horizontal/theme-horizontal.module.ts")).then(function (module) {
            return module.ThemeHorizontalModule;
          });
        }
      }]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/layout/layout.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/demo/pages/layout/layout.module.ts ***!
    \****************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppDemoPagesLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/demo/pages/layout/layout-routing.module.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]]
    })], LayoutModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-layout-layout-module-es5.js.map