(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-alert-basic-alert-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Basic Alert\" [options]=\"false\">\r\n      <app-alert type=\"primary\">A simple primary alert—check it out!</app-alert>\r\n      <app-alert type=\"secondary\">A simple secondary alert—check it out!</app-alert>\r\n      <app-alert type=\"success\">A simple success alert—check it out!</app-alert>\r\n      <app-alert type=\"danger\">A simple danger alert—check it out!</app-alert>\r\n      <app-alert type=\"warning\">A simple warning alert—check it out!</app-alert>\r\n      <app-alert type=\"info\">A simple info alert—check it out!</app-alert>\r\n      <app-alert type=\"light\">A simple light alert—check it out!</app-alert>\r\n      <app-alert type=\"dark\">A simple dark alert—check it out!</app-alert>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Link Alert\" [options]=\"false\">\r\n      <app-alert type=\"primary\">A simple primary with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"secondary\">A simple secondary with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"success\">A simple success with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"danger\">A simple danger with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"warning\">A simple warning with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"info\">A simple info with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"light\">A simple light with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n      <app-alert type=\"dark\">A simple dark with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Dismissing\" [options]=\"false\">\r\n      <app-alert type=\"primary\" dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"secondary\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"success\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"danger\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"warning\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"info\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"light\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n      <app-alert type=\"dark\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Additional Content\" [options]=\"false\">\r\n      <app-alert type=\"success\">\r\n        <h4 class=\"alert-heading\">Well done!</h4>\r\n        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\r\n        <hr>\r\n        <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n      </app-alert>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicAlertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertRoutingModule", function() { return BasicAlertRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-alert.component */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");




const routes = [
    {
        path: '',
        component: _basic_alert_component__WEBPACK_IMPORTED_MODULE_3__["BasicAlertComponent"]
    }
];
let BasicAlertRoutingModule = class BasicAlertRoutingModule {
};
BasicAlertRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicAlertRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYWxlcnQvYmFzaWMtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertComponent", function() { return BasicAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BasicAlertComponent = class BasicAlertComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-alert.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss")).default]
    })
], BasicAlertComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertModule", function() { return BasicAlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-alert-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts");
/* harmony import */ var _basic_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-alert.component */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let BasicAlertModule = class BasicAlertModule {
};
BasicAlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicAlertRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_basic_alert_component__WEBPACK_IMPORTED_MODULE_4__["BasicAlertComponent"]]
    })
], BasicAlertModule);



/***/ })

}]);
//# sourceMappingURL=basic-alert-basic-alert-module-es2015.js.map