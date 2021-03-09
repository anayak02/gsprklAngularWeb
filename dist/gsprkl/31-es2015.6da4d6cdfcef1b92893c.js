(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{jzI2:function(a,n,r){"use strict";r.r(n),n.default=""},ofDJ:function(a,n,r){"use strict";r.r(n),n.default='<div class="row">\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Breadcrumb" [options]="false">\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item active" aria-current="page">Home</li>\r\n        </ol>\r\n      </nav>\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item"><a href="javascript:">Home</a></li>\r\n          <li class="breadcrumb-item active" aria-current="page">Library</li>\r\n        </ol>\r\n      </nav>\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item"><a href="javascript:">Home</a></li>\r\n          <li class="breadcrumb-item"><a href="javascript:">Library</a></li>\r\n          <li class="breadcrumb-item active" aria-current="page">Data</li>\r\n        </ol>\r\n      </nav>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-6">\r\n    <app-card cardTitle="Breadcrumb Icon" [options]="false">\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item active" aria-current="page"><i class="feather icon-home"></i></li>\r\n        </ol>\r\n      </nav>\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item"><a href="javascript:"><i class="feather icon-home"></i></a></li>\r\n          <li class="breadcrumb-item active" aria-current="page">Library</li>\r\n        </ol>\r\n      </nav>\r\n      <nav aria-label="breadcrumb">\r\n        <ol class="breadcrumb">\r\n          <li class="breadcrumb-item"><a href="javascript:"><i class="feather icon-home"></i></a></li>\r\n          <li class="breadcrumb-item"><a href="javascript:">Library</a></li>\r\n          <li class="breadcrumb-item active" aria-current="page">Data</li>\r\n        </ol>\r\n      </nav>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Breadcrumb Live" [options]="false">\r\n      <p>use <code>[type]</code> input parameter with <code>app-breadcrumb</code> tag to set breadcrumb theme.</p>\r\n      <app-breadcrumb [type]="breadcrumbTheme"></app-breadcrumb>\r\n      <div class="btn-group btn-group-toggle" ngbRadioGroup [(ngModel)]="breadcrumbTheme">\r\n        <label class="btn btn-primary" ngbButtonLabel><input type="radio" ngbButton name="theme" id="theme1" value="theme1"> Simple</label>\r\n        <label class="btn btn-primary" ngbButtonLabel><input type="radio" ngbButton name="theme" id="theme2" value="theme2"> Icon</label>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6">\r\n    <app-card cardTitle="Basic Pagination" [options]="false">\r\n      <p>click <a target="_blank" href="https://ng-bootstrap.github.io/#/components/pagination/examples" class="badge badge-primary">ng-bootstrap</a> for pagination guide.</p>\r\n      <h5 class="mt-5">Default pagination:</h5>\r\n      <hr>\r\n      <ngb-pagination [collectionSize]="70" [(page)]="defaultPage" aria-label="Default pagination"></ngb-pagination>\r\n      <h5 class="mt-5">No direction links:</h5>\r\n      <hr>\r\n      <ngb-pagination [collectionSize]="70" [(page)]="noDirectionPage" [directionLinks]="false"></ngb-pagination>\r\n      <h5 class="mt-5">With boundary links:</h5>\r\n      <hr>\r\n      <div class="horizontal-scroll"><ngb-pagination [collectionSize]="70" [(page)]="boundaryPage" [boundaryLinks]="true"></ngb-pagination></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6">\r\n    <app-card cardTitle="Advanced Pagination" [options]="false">\r\n      <h5 class="mt-5">Restricted size, no rotation:</h5>\r\n      <hr>\r\n      <div class="horizontal-scroll"><ngb-pagination [collectionSize]="120" [(page)]="advancePage" [maxSize]="5" [boundaryLinks]="true"></ngb-pagination></div>\r\n      <h5 class="mt-5">Restricted size with rotation:</h5>\r\n      <hr>\r\n      <div class="horizontal-scroll"><ngb-pagination [collectionSize]="120" [(page)]="advancePage" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination></div>\r\n      <h5 class="mt-5">Restricted size with rotation and no ellipses:</h5>\r\n      <hr>\r\n      <div class="horizontal-scroll"><ngb-pagination [collectionSize]="120" [(page)]="advancePage" [maxSize]="5" [rotate]="true" [ellipses]="false" [boundaryLinks]="true"></ngb-pagination></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6">\r\n    <app-card cardTitle="Pagination Size" [options]="false">\r\n      <h5 class="mt-5">Large Size:</h5>\r\n      <hr>\r\n      <div class="horizontal-scroll"><ngb-pagination [collectionSize]="50" [(page)]="sizePage" size="lg"></ngb-pagination></div>\r\n      <h5 class="mt-5">Medium Size (Default):</h5>\r\n      <hr>\r\n      <ngb-pagination [collectionSize]="50" [(page)]="sizePage"></ngb-pagination>\r\n      <h5 class="mt-5">Small Size:</h5>\r\n      <hr>\r\n      <ngb-pagination [collectionSize]="50" [(page)]="sizePage" size="sm"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6">\r\n    <app-card cardTitle="Pagination Alignment" [options]="false">\r\n      <h5 class="mt-5">Left:</h5>\r\n      <hr>\r\n      <ngb-pagination class="d-flex justify-content-start" [collectionSize]="70" [(page)]="alignmentPage"></ngb-pagination>\r\n      <h5 class="mt-5">Center:</h5>\r\n      <hr>\r\n      <ngb-pagination class="d-flex justify-content-center" [collectionSize]="70" [(page)]="alignmentPage"></ngb-pagination>\r\n      <h5 class="mt-5">Right:</h5>\r\n      <hr>\r\n      <ngb-pagination class="d-flex justify-content-end" [collectionSize]="70" [(page)]="alignmentPage"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Disabled Pagination" [options]="false">\r\n      <ngb-pagination [collectionSize]="70" [(page)]="disablePage" [disabled]=\'isDisabled\'></ngb-pagination>\r\n      <button class="btn btn-sm btn-outline-primary" (click)="this.isDisabled = !this.isDisabled">{{this.isDisabled === false ? \'Disable\' : \'Enable\'}}</button>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n'},otMB:function(a,n,r){"use strict";r.r(n);var e=r("mrSG"),i=r("fXoL"),t=r("ofXK"),l=r("tyNb");let s=class{constructor(){this.breadcrumbTheme="theme1",this.defaultPage=5,this.noDirectionPage=4,this.boundaryPage=3,this.advancePage=5,this.sizePage=3,this.alignmentPage=3,this.disablePage=3,this.isDisabled=!0}ngOnInit(){}};s=Object(e.b)([Object(i.Component)({selector:"app-breadcrumb-paging",template:Object(e.c)(r("ofDJ")).default,styles:[Object(e.c)(r("jzI2")).default]})],s);const c=[{path:"",component:s}];let o=class{};o=Object(e.b)([Object(i.NgModule)({imports:[l.f.forChild(c)],exports:[l.f]})],o);var b=r("ebz3"),d=r("1kSV");r.d(n,"BreadcrumbPagingModule",(function(){return p}));let p=class{};p=Object(e.b)([Object(i.NgModule)({imports:[t.CommonModule,o,b.a,d.b,d.g],declarations:[s]})],p)}}]);