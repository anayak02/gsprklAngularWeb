(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{OnIA:function(a,t,e){"use strict";e.r(t),t.default=""},ppmd:function(a,t,e){"use strict";e.r(t),t.default='<div class="row btn-page">\r\n  <div class="col-sm-12">\r\n    <app-card cardTitle="Demo Modal" [options]="false">\r\n      <div class="bd-example-modal mb-4">\r\n        <div class="modal" tabindex="-1" role="dialog">\r\n          <div class="modal-dialog" role="document">\r\n            <div class="modal-content">\r\n              <div class="modal-header">\r\n                <h5 class="modal-title">Modal title</h5>\r\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n              </div>\r\n              <div class="modal-body">\r\n                <p>Modal body text goes here.</p>\r\n              </div>\r\n              <div class="modal-footer">\r\n                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\r\n                <button type="button" class="btn btn-primary mr-0">Save changes</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type="button" class="btn btn-primary" (click)="modalDefault.show()">Launch demo modal</button>\r\n      <app-ui-modal #modalDefault>\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="modalDefault.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <p>Woohoo, you\'re reading this text in a modal!</p>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="modalDefault.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Scrolling Long Content" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="exampleModalLong.show()">Launch demo modal</button>\r\n      <app-ui-modal #exampleModalLong>\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="exampleModalLong.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="exampleModalLong.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Vertically Centered" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="exampleModalCenter.show()">Launch demo modal</button>\r\n      <app-ui-modal #exampleModalCenter dialogClass="modal-dialog-centered">\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="exampleModalCenter.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="exampleModalCenter.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Tooltips and Popovers" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="exampleModalPopoversLabel.show()">Launch demo modal</button>\r\n      <app-ui-modal #exampleModalPopoversLabel>\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="exampleModalPopoversLabel.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <h5>Popover in a modal</h5>\r\n          <ng-template #popContent>\r\n            <span class=\'text-white\'>Popover body content</span>\r\n          </ng-template>\r\n          <p>This <a href="javascript:" role="button" class="btn btn-secondary popover-test" [popoverClass]="\'bg-dark text-white\'" [popoverTitle]="\'Popover Title\'" [ngbPopover]="popContent" [placement]="\'top\'">button</a> triggers a popover on click.</p>\r\n          <hr />\r\n          <h5>Tooltips in a modal</h5>\r\n          <p><a href="javascript:" class="tooltip-test" [placement]="\'top\'" ngbTooltip="Tooltip">This link</a> and <a href="javascript:" class="tooltip-test" [placement]="\'top\'" ngbTooltip="Tooltip">that link</a> have tooltips on hover.</p>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="exampleModalPopoversLabel.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Using the Grid" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="gridSystemModal.show()">Launch demo modal</button>\r\n      <app-ui-modal #gridSystemModal>\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="gridSystemModal.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <div class="container-fluid bd-example-row">\r\n            <div class="row">\r\n              <div class="col-md-4">.col-md-4</div>\r\n              <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>\r\n              <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="col-sm-9">\r\n                Level 1: .col-sm-9\r\n                <div class="row">\r\n                  <div class="col-8 col-sm-6">\r\n                    Level 2: .col-8 .col-sm-6\r\n                  </div>\r\n                  <div class="col-4 col-sm-6">\r\n                    Level 2: .col-4 .col-sm-6\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="gridSystemModal.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Optional Sizes" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="myLargeModalLabel.show()">Large Modal</button>\r\n      <app-ui-modal #myLargeModalLabel [hideFooter]="true" [dialogClass]="\'modal-lg\'">\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="myLargeModalLabel.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          ...\r\n        </div>\r\n      </app-ui-modal>\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="mySmallModalLabel.show()">Small Modal</button>\r\n      <app-ui-modal #mySmallModalLabel [hideFooter]="true" [dialogClass]="\'modal-sm\'">\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="mySmallModalLabel.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          ...\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-4 col-md-6">\r\n    <app-card cardTitle="Persistence Modal" [options]="false">\r\n      <button type="button" class="btn btn-primary" data-toggle="modal" (click)="myPersistenceModal.show()">Launch demo modal</button>\r\n      <app-ui-modal #myPersistenceModal [containerClick]="false">\r\n        <div class="app-modal-header">\r\n          <h5 class="modal-title">Modal Title</h5>\r\n          <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="myPersistenceModal.hide()"><span aria-hidden="true">&times;</span></button>\r\n        </div>\r\n        <div class="app-modal-body">\r\n          <p>Disable click outside of model</p>\r\n        </div>\r\n        <div class="app-modal-footer">\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="myPersistenceModal.hide()">Close</button>\r\n          <button type="button" class="btn btn-primary">Save changes</button>\r\n        </div>\r\n      </app-ui-modal>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n'},t1y9:function(a,t,e){"use strict";e.r(t);var s=e("mrSG"),o=e("fXoL"),n=e("ofXK"),l=e("tyNb");let r=class{constructor(){}ngOnInit(){}};r=Object(s.b)([Object(o.Component)({selector:"app-basic-modal",template:Object(s.c)(e("ppmd")).default,styles:[Object(s.c)(e("OnIA")).default]})],r);const i=[{path:"",component:r}];let d=class{};d=Object(s.b)([Object(o.NgModule)({imports:[l.f.forChild(i)],exports:[l.f]})],d);var c=e("ebz3"),u=e("1kSV");e.d(t,"BasicModalModule",(function(){return m}));let m=class{};m=Object(s.b)([Object(o.NgModule)({imports:[n.CommonModule,d,c.a,u.h,u.k],declarations:[r]})],m)}}]);