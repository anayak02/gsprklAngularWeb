function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"03Xq":function(e,t,n){"use strict";n.r(t),t.default=""},Ghlv:function(e,t,n){"use strict";n.r(t),t.default='<div class="row">\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Static Layout" [options]="false">\r\n      <p>In Static Layout - Header & Sidebar is not fixed while scrolling the page.</p>\r\n      <div class="alert alert-info mb-0" role="alert">\r\n        <p class="mb-0">It is best suited for those applications where you don\'t need sidebar & header to be fixed while scrolling the page.</p>\r\n      </div>\r\n      <h5 class="m-15">You can edit this file at [ ../src/app/app-config.ts ] </h5>\r\n      <div class="table-responsive">\r\n        <table class="table table-bordered table-striped">\r\n          <thead class="header-table">\r\n          <tr>\r\n            <th>Configuration</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>\r\n              <ul>\r\n                <li>layout: <code>vertical</code></li>\r\n                <li>navFixedLayout: <code>false</code></li>\r\n                <li>headerFixedLayout: <code>false</code></li>\r\n              </ul>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<app-common-content></app-common-content>\r\n'},XzXy:function(e,t,n){"use strict";n.r(t);var r=n("mrSG"),a=n("fXoL"),o=n("ofXK"),i=n("tyNb"),l=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),c=[{path:"",component:l=Object(r.b)([Object(a.Component)({selector:"app-theme-static",template:Object(r.c)(n("Ghlv")).default,styles:[Object(r.c)(n("03Xq")).default]})],l)}],s=function e(){_classCallCheck(this,e)};s=Object(r.b)([Object(a.NgModule)({imports:[i.f.forChild(c)],exports:[i.f]})],s);var d=n("vdYJ"),p=n("ebz3");n.d(t,"ThemeStaticModule",(function(){return u}));var u=function e(){_classCallCheck(this,e)};u=Object(r.b)([Object(a.NgModule)({declarations:[l],imports:[o.CommonModule,s,p.a,d.a]})],u)}}]);