(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-cards-basic-cards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Body Content</h5>\r\n    <hr>\r\n    <app-card [hidHeader]=\"true\">\r\n      This is some text within a card body.\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Titles, Text, and Links</h5>\r\n    <hr>\r\n    <app-card [hidHeader]=\"true\">\r\n      <h5 class=\"card-title\">Card title</h5>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\r\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      <a href=\"javascript:\" class=\"card-link\">Card link</a>\r\n      <a href=\"javascript:\" class=\"card-link\">Another link</a>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Header and Footer</h5>\r\n    <hr>\r\n    <app-card cardTitle=\"Featured\" [options]=\"false\">\r\n      <h5 class=\"card-title\">Special title treatment</h5>\r\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n      <a href=\"javascript:\" class=\"btn btn-primary\">Go somewhere</a>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <h5>Left Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]=\"true\">\r\n          <h5 class=\"card-title\">Special title treatment</h5>\r\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href=\"javascript:\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h5>Center Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\r\n          <h5 class=\"card-title\">Special title treatment</h5>\r\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href=\"javascript:\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h5>Right Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]=\"true\" cardClass=\"text-right\">\r\n          <h5 class=\"card-title\">Special title treatment</h5>\r\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href=\"javascript:\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Image Caps</h5>\r\n    <hr>\r\n    <div class=\"marge-card mb-3\">\r\n      <app-card [hidHeader]=\"true\" cardClass=\"mb-0\" blockClass=\"p-0\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Card image cap\" />\r\n      </app-card>\r\n      <app-card [hidHeader]=\"true\" blockClass=\"m-t-15\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Image Caps [ Bottom ]</h5>\r\n    <hr>\r\n    <div class=\"marge-card mb-3\">\r\n      <app-card [hidHeader]=\"true\" cardClass=\"mb-0\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      </app-card>\r\n      <app-card [hidHeader]=\"true\" blockClass=\"m-t-15 p-0\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Card image cap\" />\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <h5>Image Overlays</h5>\r\n    <hr>\r\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-dark text-white\" blockClass=\"p-0\">\r\n      <img class=\"card-img\" src=\"assets/images/slider/img-slide-7.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n        <h5 class=\"card-title text-white\">Card title</h5>\r\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class=\"card-text\">Last updated 3 mins ago</p>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-12\">\r\n    <h5 class=\"mt-4\">Card Styles</h5>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-primary \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Primary card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-secondary \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Secondary card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-success \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Success card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-danger \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Danger card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-warning \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Warning card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-info \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Info card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card bg-light \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Light card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card text-white bg-dark \">\r\n          <div class=\"card-header\">Header</div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-white\">Dark card title</h5>\r\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-12\">\r\n    <h5>Card Groups</h5>\r\n    <hr>\r\n    <div class=\"card-group\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-4.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-12\">\r\n    <h5 class=\"mt-4\">Card Decks</h5>\r\n    <hr>\r\n    <div class=\"card-deck\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-4.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-12\">\r\n    <h5 class=\"mt-4\">Card Columns</h5>\r\n    <hr>\r\n    <div class=\"card-columns\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title that wraps to a new line</h5>\r\n          <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          <button class=\"btn btn-primary\">View More</button>\r\n          <button class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <blockquote class=\"blockquote mb-0 card-body\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n          <footer class=\"blockquote-footer\">\r\n            <small class=\"text-muted\">Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\r\n          </footer>\r\n        </blockquote>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card bg-c-blue text-white text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"blockquote mb-0\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n            <footer class=\"blockquote-footer text-white\">\r\n              <small>Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This card has a regular title and short paragraphy of text below it.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"card-img\" src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Card image\">\r\n      </div>\r\n      <div class=\"card text-right\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"blockquote mb-0\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">\r\n              <small class=\"text-muted\">Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicCardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCardsRoutingModule", function() { return BasicCardsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-cards.component */ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.ts");




const routes = [
    {
        path: '',
        component: _basic_cards_component__WEBPACK_IMPORTED_MODULE_3__["BasicCardsComponent"]
    }
];
let BasicCardsRoutingModule = class BasicCardsRoutingModule {
};
BasicCardsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicCardsRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtY2FyZHMvYmFzaWMtY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCardsComponent", function() { return BasicCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BasicCardsComponent = class BasicCardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-cards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-cards.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.scss")).default]
    })
], BasicCardsComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCardsModule", function() { return BasicCardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_cards_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-cards-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards-routing.module.ts");
/* harmony import */ var _basic_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-cards.component */ "./src/app/demo/ui-elements/ui-basic/basic-cards/basic-cards.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let BasicCardsModule = class BasicCardsModule {
};
BasicCardsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_cards_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicCardsRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_basic_cards_component__WEBPACK_IMPORTED_MODULE_4__["BasicCardsComponent"]]
    })
], BasicCardsModule);



/***/ })

}]);
//# sourceMappingURL=basic-cards-basic-cards-module-es2015.js.map