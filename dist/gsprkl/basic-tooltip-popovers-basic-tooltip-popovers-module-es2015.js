(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-tooltip-popovers-basic-tooltip-popovers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row btn-page\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card cardTitle=\"Tooltip\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-default\" [placement]=\"'top'\" ngbTooltip=\"tooltip on top\">Top</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [placement]=\"'left'\" ngbTooltip=\"tooltip on left\">Left</button>\r\n      <button type=\"button\" class=\"btn btn-success\" [placement]=\"'right'\" ngbTooltip=\"tooltip on right\">Right</button>\r\n      <button type=\"button\" class=\"btn btn-warning\" [placement]=\"'bottom'\" ngbTooltip=\"tooltip on bottom\">Bottom</button>\r\n      <ng-template #htmlTooltip><em>Tooltip</em> <u> with </u> <b> HTML </b></ng-template>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngbTooltip]=\"htmlTooltip\">Html Tooltip</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card cardTitle=\"Popover\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-default\" [placement]=\"'top'\" [popoverTitle]=\"'popup on top'\" ngbPopover=\"top by popover\" data-original-title=\"popup on top\">Top</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [placement]=\"'left'\" [popoverTitle]=\"'popup on left'\" ngbPopover=\"left by popover\">Left</button>\r\n      <button type=\"button\" class=\"btn btn-success\" [placement]=\"'right'\" [popoverTitle]=\"'popup on right'\" ngbPopover=\"right by popover\">Right</button>\r\n      <button type=\"button\" class=\"btn btn-warning\" [placement]=\"'bottom'\" [popoverTitle]=\"'popup on bottom'\" ngbPopover=\"bottom by popover\">Bottom</button>\r\n      <ng-template #popTitle>Hello, <b>Flat Able</b>!</ng-template>\r\n      <ng-template #popContent><em>popup</em> <u> with </u> <b> HTML </b></ng-template>\r\n      <button type=\"button\" class=\"btn btn-info\" [popoverTitle]=\"popTitle\" [ngbPopover]=\"popContent\">Html popup</button>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BasicTooltipPopoversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversRoutingModule", function() { return BasicTooltipPopoversRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tooltip-popovers.component */ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts");




const routes = [
    {
        path: '',
        component: _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_3__["BasicTooltipPopoversComponent"]
    }
];
let BasicTooltipPopoversRoutingModule = class BasicTooltipPopoversRoutingModule {
};
BasicTooltipPopoversRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicTooltipPopoversRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdG9vbHRpcC1wb3BvdmVycy9iYXNpYy10b29sdGlwLXBvcG92ZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: BasicTooltipPopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversComponent", function() { return BasicTooltipPopoversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BasicTooltipPopoversComponent = class BasicTooltipPopoversComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicTooltipPopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-tooltip-popovers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-tooltip-popovers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-tooltip-popovers.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.scss")).default]
    })
], BasicTooltipPopoversComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: BasicTooltipPopoversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversModule", function() { return BasicTooltipPopoversModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tooltip-popovers-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts");
/* harmony import */ var _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-tooltip-popovers.component */ "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







let BasicTooltipPopoversModule = class BasicTooltipPopoversModule {
};
BasicTooltipPopoversModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicTooltipPopoversRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"]
        ],
        declarations: [_basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_4__["BasicTooltipPopoversComponent"]]
    })
], BasicTooltipPopoversModule);



/***/ })

}]);
//# sourceMappingURL=basic-tooltip-popovers-basic-tooltip-popovers-module-es2015.js.map