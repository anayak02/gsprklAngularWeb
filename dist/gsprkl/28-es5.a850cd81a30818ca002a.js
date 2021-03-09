function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,a){for(var s=0;s<a.length;s++){var o=a[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,a,s){return a&&_defineProperties(t.prototype,a),s&&_defineProperties(t,s),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"02sT":function(t,a,s){"use strict";s.r(a),a.default='<div class="row btn-page">\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Toasts" [options]="false">\r\n      <div class="bg-light p-4 mb-2" style="height:150px;">\r\n        <app-toast uID="toast1" toastTitle="Bootstrap" toastCaption="11 min ago">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n      </div>\r\n      <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast1\'})">click</button>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Translucent" [options]="false">\r\n      <div class="bg-dark p-4 mb-2" style="height:150px;">\r\n        <app-toast uID="toast2" toastTitle="Translucent" toastCaption="11 min ago">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n      </div>\r\n      <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast2\'})">click</button>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Stacking" [options]="false">\r\n      <div class="bg-light p-4 mb-2" style="height:325px;">\r\n        <app-toast uID="toast3" toastTitle="Stacking 1" toastCaption="11 min ago" toastClass="m-b-10">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n        <app-toast uID="toast4" toastTitle="Stacking 2" toastCaption="11 min ago">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n      </div>\r\n      <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast3\', delay: 1000}); this.toastEvent.toast({uid: \'toast4\', delay: 1000})">click</button>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Data-delay" [options]="false">\r\n      <div class="bg-light p-4 mb-2" style="height:325px;">\r\n        <app-toast uID="toast5" toastTitle="Delay 1s" toastCaption="11 min ago" toastClass="m-b-10">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n        <app-toast uID="toast6" toastTitle="Delay 2s" toastCaption="11 min ago" toastClass="m-b-10">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n        <app-toast uID="toast7" toastTitle="Delay 5s" toastCaption="11 min ago">\r\n          Hello, world! This is a toast message.\r\n        </app-toast>\r\n      </div>\r\n      <div class="col">\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast5\', delay: 1000})">1 sec</button>\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast6\', delay: 3000})">3 sec</button>\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toast7\', delay: 5000})">5 sec</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Placement" [options]="false">\r\n      <div class="position-relative bg-light p-4 mb-2" style="height:250px;">\r\n        <div style="position:absolute;top:40px;left:40px">\r\n          <app-toast uID="toastLeft" toastTitle="Placement Left" toastCaption="11 min ago" toastClass="m-b-10">\r\n            Hello, world! This is a toast message.\r\n          </app-toast>\r\n        </div>\r\n        <div class="d-flex justify-content-center" style="position:absolute;top:40px;left:40px;right:40px">\r\n          <app-toast uID="toastCenter" toastTitle="Placement Center" toastCaption="11 min ago" toastClass="m-b-10">\r\n            Hello, world! This is a toast message.\r\n          </app-toast>\r\n        </div>\r\n        <div style="position:absolute;top:40px;right: 40px">\r\n          <app-toast uID="toastRight" toastTitle="Placement Right" toastCaption="11 min ago" toastClass="m-b-10">\r\n            Hello, world! This is a toast message.\r\n          </app-toast>\r\n        </div>\r\n        <div class="d-flex justify-content-center align-items-center" style="min-height:100%;position:absolute;top:0px;right: 0px;left:0">\r\n          <app-toast uID="toastMiddle" toastTitle="Placement Middle" toastCaption="11 min ago" toastClass="m-b-10">\r\n            Hello, world! This is a toast message.\r\n          </app-toast>\r\n        </div>\r\n      </div>\r\n      <div class="col">\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toastLeft\', delay: 1500})">Left</button>\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toastCenter\', delay: 1500})">Center</button>\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toastRight\', delay: 1500})">Right</button>\r\n        <button class="btn btn-primary" (click)="this.toastEvent.toast({uid: \'toastMiddle\', delay: 1500})">Middle</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n'},"7amv":function(t,a,s){"use strict";s.r(a);var o=s("mrSG"),n=s("fXoL"),i=s("ofXK"),e=s("tyNb"),r=s("7oHd"),l=function(){function t(a){_classCallCheck(this,t),this.toastEvent=a}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();l.ctorParameters=function(){return[{type:r.a}]};var p=[{path:"",component:l=Object(o.b)([Object(n.Component)({selector:"app-basic-toasts",template:Object(o.c)(s("02sT")).default,styles:[Object(o.c)(s("E527")).default]})],l)}],c=function t(){_classCallCheck(this,t)};c=Object(o.b)([Object(n.NgModule)({imports:[e.f.forChild(p)],exports:[e.f]})],c);var d=s("ebz3");s.d(a,"BasicToastsModule",(function(){return u}));var u=function t(){_classCallCheck(this,t)};u=Object(o.b)([Object(n.NgModule)({declarations:[l],imports:[i.CommonModule,c,d.a]})],u)},E527:function(t,a,s){"use strict";s.r(a),a.default=""}}]);