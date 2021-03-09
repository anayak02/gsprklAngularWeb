(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-static-theme-static-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/theme-static/theme-static.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/theme-static/theme-static.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Static Layout\" [options]=\"false\">\r\n      <p>In Static Layout - Header & Sidebar is not fixed while scrolling the page.</p>\r\n      <div class=\"alert alert-info mb-0\" role=\"alert\">\r\n        <p class=\"mb-0\">It is best suited for those applications where you don't need sidebar & header to be fixed while scrolling the page.</p>\r\n      </div>\r\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead class=\"header-table\">\r\n          <tr>\r\n            <th>Configuration</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>\r\n              <ul>\r\n                <li>layout: <code>vertical</code></li>\r\n                <li>navFixedLayout: <code>false</code></li>\r\n                <li>headerFixedLayout: <code>false</code></li>\r\n              </ul>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<app-common-content></app-common-content>\r\n");

/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ThemeStaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticRoutingModule", function() { return ThemeStaticRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts");




const routes = [
    {
        path: '',
        component: _theme_static_component__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticComponent"]
    }
];
let ThemeStaticRoutingModule = class ThemeStaticRoutingModule {
};
ThemeStaticRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ThemeStaticRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbGF5b3V0L3RoZW1lLXN0YXRpYy90aGVtZS1zdGF0aWMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThemeStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticComponent", function() { return ThemeStaticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ThemeStaticComponent = class ThemeStaticComponent {
    constructor() { }
    ngOnInit() {
    }
};
ThemeStaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-theme-static',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./theme-static.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/theme-static/theme-static.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./theme-static.component.scss */ "./src/app/demo/pages/layout/theme-static/theme-static.component.scss")).default]
    })
], ThemeStaticComponent);



/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThemeStaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticModule", function() { return ThemeStaticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-static-routing.module */ "./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts");
/* harmony import */ var _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-content/common-content.module */ "./src/app/demo/pages/layout/common-content/common-content.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");







let ThemeStaticModule = class ThemeStaticModule {
};
ThemeStaticModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_theme_static_component__WEBPACK_IMPORTED_MODULE_4__["ThemeStaticComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_5__["CommonContentModule"]
        ]
    })
], ThemeStaticModule);



/***/ })

}]);
//# sourceMappingURL=theme-static-theme-static-module-es2015.js.map