(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\r\n  <div class=\"auth-content text-center\">\r\n    <img src=\"assets/images/auth/auth-logo.png\" alt=\"\" class=\"img-fluid mb-4\">\r\n    <div class=\"card borderless\">\r\n      <div class=\"row align-items-center text-center\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"mb-3 f-w-400\">Sign up</h4>\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n            </div>\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-group text-left mt-2\">\r\n              <div class=\"checkbox checkbox-primary d-inline\">\r\n                <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\r\n                <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\"> Newsletter</a> weekly.</label>\r\n              </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-block mb-4\">Sign up</button>\r\n            <p class=\"mb-2\">Already have an account? <a [routerLink]=\"['/auth/signin']\" class=\"f-w-400\">Signin</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function() { return AuthSignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");




const routes = [
    {
        path: '',
        component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]
    }
];
let AuthSignupRoutingModule = class AuthSignupRoutingModule {
};
AuthSignupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthSignupRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWdudXAvYXV0aC1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function() { return AuthSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AuthSignupComponent = class AuthSignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthSignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-signup.component.scss */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss")).default]
    })
], AuthSignupComponent);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function() { return AuthSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup-routing.module */ "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");





let AuthSignupModule = class AuthSignupModule {
};
AuthSignupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSignupRoutingModule"]
        ],
        declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"]]
    })
], AuthSignupModule);



/***/ })

}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es2015.js.map