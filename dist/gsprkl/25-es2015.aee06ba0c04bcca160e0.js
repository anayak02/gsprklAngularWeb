(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4VXp":function(r,s,a){"use strict";a.r(s),s.default=""},Mo5Y:function(r,s,a){"use strict";a.r(s),s.default='<div class="row">\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Progress" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar [value]="0"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar [value]="25"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar [value]="50"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar [value]="75"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar [value]="100"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Labels" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar [showValue]="true" [value]="25"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Height" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar height="1px" [value]="25"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar height="20px" [value]="25"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Backgrounds" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar [value]="20">default</ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="success" [value]="25">success</ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="info" [value]="50">info</ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="warning" [value]="75">warning</ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="danger" [value]="100">danger</ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Striped" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar [value]="20" [striped]="true"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="success" [value]="25" [striped]="true"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="info" [value]="50" [striped]="true"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="warning" [value]="75" [striped]="true"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="danger" [value]="100" [striped]="true"></ngb-progressbar></div>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Animated Stripes" [options]="false">\r\n      <div class="mb-4"><ngb-progressbar [value]="20" [striped]="true" [animated]="stripAnimation"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="success" [value]="25" [striped]="true" [animated]="stripAnimation"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="info" [value]="50" [striped]="true" [animated]="stripAnimation"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="warning" [value]="75" [striped]="true" [animated]="stripAnimation"></ngb-progressbar></div>\r\n      <div class="mb-4"><ngb-progressbar type="danger" [value]="100" [striped]="true" [animated]="stripAnimation"></ngb-progressbar></div>\r\n      <button type="button" class="btn btn-secondary bd-toggle-animated-progress" data-toggle="button" aria-pressed="false" (click)="this.stripAnimation = !this.stripAnimation">Toggle Animation</button>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n'},RcgS:function(r,s,a){"use strict";a.r(s);var e=a("mrSG"),n=a("fXoL"),i=a("ofXK"),b=a("tyNb");let t=class{constructor(){this.stripAnimation=!0}ngOnInit(){}};t=Object(e.b)([Object(n.Component)({selector:"app-basic-progress-bar",template:Object(e.c)(a("Mo5Y")).default,styles:[Object(e.c)(a("4VXp")).default]})],t);const p=[{path:"",component:t}];let o=class{};o=Object(e.b)([Object(n.NgModule)({imports:[b.f.forChild(p)],exports:[b.f]})],o);var d=a("ebz3"),g=a("1kSV");a.d(s,"BasicProgressBarModule",(function(){return l}));let l=class{};l=Object(e.b)([Object(n.NgModule)({imports:[i.CommonModule,o,d.a,g.i],declarations:[t]})],l)}}]);