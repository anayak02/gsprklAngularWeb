(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-progress-bar-basic-progress-bar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Progress\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"0\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"25\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"50\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"75\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"100\"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Labels\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar [showValue]=\"true\" [value]=\"25\"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Height\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar height=\"1px\" [value]=\"25\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar height=\"20px\" [value]=\"25\"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Backgrounds\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\">default</ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\">success</ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\">info</ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\">warning</ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\">danger</ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Striped\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\" [striped]=\"true\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Animated Stripes\" [options]=\"false\">\r\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\r\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\r\n      <button type=\"button\" class=\"btn btn-secondary bd-toggle-animated-progress\" data-toggle=\"button\" aria-pressed=\"false\" (click)=\"this.stripAnimation = !this.stripAnimation\">Toggle Animation</button>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: BasicProgressBarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarRoutingModule", function() { return BasicProgressBarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-progress-bar.component */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts");




const routes = [
    {
        path: '',
        component: _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["BasicProgressBarComponent"]
    }
];
let BasicProgressBarRoutingModule = class BasicProgressBarRoutingModule {
};
BasicProgressBarRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicProgressBarRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtcHJvZ3Jlc3MtYmFyL2Jhc2ljLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BasicProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarComponent", function() { return BasicProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BasicProgressBarComponent = class BasicProgressBarComponent {
    constructor() {
        this.stripAnimation = true;
    }
    ngOnInit() {
    }
};
BasicProgressBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-progress-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-progress-bar.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss")).default]
    })
], BasicProgressBarComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarModule", function() { return BasicProgressBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-progress-bar-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts");
/* harmony import */ var _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-progress-bar.component */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







let BasicProgressBarModule = class BasicProgressBarModule {
};
BasicProgressBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicProgressBarRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"]
        ],
        declarations: [_basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["BasicProgressBarComponent"]]
    })
], BasicProgressBarModule);



/***/ })

}]);
//# sourceMappingURL=basic-progress-bar-basic-progress-bar-module-es2015.js.map