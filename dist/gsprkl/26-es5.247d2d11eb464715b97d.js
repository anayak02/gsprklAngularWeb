function _classCallCheck(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,s){for(var r=0;r<s.length;r++){var a=s[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,s,r){return s&&_defineProperties(n.prototype,s),r&&_defineProperties(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+e7I":function(n,s,r){"use strict";r.r(s),s.default='<div class="row">\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Border spinner" [options]="false">\r\n      <div class="spinner-border" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Border spinner [ Colors ]" [options]="false">\r\n      <div class="spinner-border text-primary" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-secondary" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-success" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-danger" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-warning" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-info" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-light" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-border text-dark" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Growing spinner" [options]="false">\r\n      <div class="spinner-grow" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Growing spinner [ Colors ]" [options]="false">\r\n      <div class="spinner-grow text-primary" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-secondary" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-success" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-danger" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-warning" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-info" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-light" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow text-dark" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Placement" [options]="false">\r\n      <h6>Start</h6>\r\n      <div class="d-flex justify-content-start">\r\n        <div class="spinner-border" role="status">\r\n          <span class="sr-only">Loading...</span>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <h6>Center</h6>\r\n      <div class="d-flex justify-content-center">\r\n        <div class="spinner-border" role="status">\r\n          <span class="sr-only">Loading...</span>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <h6>End</h6>\r\n      <div class="d-flex justify-content-end">\r\n        <div class="spinner-border" role="status">\r\n          <span class="sr-only">Loading...</span>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Size" [options]="false">\r\n      <h6>Small</h6>\r\n      <div class="spinner-border spinner-border-sm" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow spinner-grow-sm" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <hr>\r\n      <h6>Custom</h6>\r\n      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n      <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">\r\n        <span class="sr-only">Loading...</span>\r\n      </div>\r\n    </app-card>\r\n    <app-card cardTitle="Buttons" [options]="false">\r\n      <div class="row">\r\n        <div class=" col-sm-6">\r\n          <button class="btn  btn-primary m-2" type="button" disabled>\r\n            <span class="spinner-border spinner-border-sm" role="status"></span>\r\n            <span class="sr-only">Loading...</span>\r\n          </button>\r\n          <button class="btn  btn-primary m-2" type="button" disabled>\r\n            <span class="spinner-border spinner-border-sm" role="status"></span>\r\n            Loading...\r\n          </button>\r\n        </div>\r\n        <div class="col-sm-6">\r\n          <button class="btn  btn-primary m-2" type="button" disabled>\r\n            <span class="spinner-grow spinner-grow-sm" role="status"></span>\r\n            <span class="sr-only">Loading...</span>\r\n          </button>\r\n          <button class="btn  btn-primary m-2" type="button" disabled>\r\n            <span class="spinner-grow spinner-grow-sm" role="status"></span>\r\n            Loading...\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Event Buttons" [options]="false">\r\n      <button class="btn btn-primary event-btn m-2" type="button" (click)="onBtnLoader()">\r\n        <span *ngIf="this.btnLoader" class="spinner-border spinner-border-sm" role="status"></span>\r\n        <span *ngIf="this.btnLoader" class="load-text"> Loading...</span>\r\n        <span *ngIf="!this.btnLoader" class="btn-text">Button</span>\r\n      </button>\r\n      <button class="btn btn-primary event-btn m-2" type="button" (click)="onSubmitLoader()">\r\n        <span *ngIf="this.submitLoader" class="spinner-grow spinner-grow-sm" role="status"></span>\r\n        <span *ngIf="this.submitLoader" class="load-text"> Loading...</span>\r\n        <span *ngIf="!this.submitLoader" class="btn-text">Submit</span>\r\n      </button>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n'},NuF2:function(n,s,r){"use strict";r.r(s),s.default=""},QOSa:function(n,s,r){"use strict";r.r(s);var a=r("mrSG"),t=r("fXoL"),e=r("ofXK"),i=r("tyNb"),o=function(){function n(){_classCallCheck(this,n),this.btnLoader=!1,this.submitLoader=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onBtnLoader",value:function(){var n=this;this.btnLoader=!0,setTimeout((function(){n.btnLoader=!1}),2e3)}},{key:"onSubmitLoader",value:function(){var n=this;this.submitLoader=!0,setTimeout((function(){n.submitLoader=!1}),2e3)}}]),n}(),l=[{path:"",component:o=Object(a.b)([Object(t.Component)({selector:"app-basic-spinner",template:Object(a.c)(r("+e7I")).default,styles:[Object(a.c)(r("NuF2")).default]})],o)}],d=function n(){_classCallCheck(this,n)};d=Object(a.b)([Object(t.NgModule)({imports:[i.f.forChild(l)],exports:[i.f]})],d);var p=r("ebz3");r.d(s,"BasicSpinnerModule",(function(){return c}));var c=function n(){_classCallCheck(this,n)};c=Object(a.b)([Object(t.NgModule)({declarations:[o],imports:[e.CommonModule,d,p.a]})],c)}}]);