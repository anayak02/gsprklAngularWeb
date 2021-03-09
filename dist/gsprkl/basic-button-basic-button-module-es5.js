function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-button-basic-button-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUiElementsUiBasicBasicButtonBasicButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row btn-page\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Default\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"btn-primary\">Primary</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"btn-secondary\">Secondary</button>\r\n      <button type=\"button\" class=\"btn btn-success\" ngbTooltip=\"btn-success\">Success</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" ngbTooltip=\"btn-danger\">Danger</button>\r\n      <button type=\"button\" class=\"btn btn-warning\" ngbTooltip=\"btn-warning\">Warning</button>\r\n      <button type=\"button\" class=\"btn btn-info\" ngbTooltip=\"btn-info\">Info</button>\r\n      <button type=\"button\" class=\"btn btn-light\" ngbTooltip=\"btn-light\">Light</button>\r\n      <button type=\"button\" class=\"btn btn-dark\" ngbTooltip=\"btn-dark\">Dark</button>\r\n      <button type=\"button\" class=\"btn btn-link\" ngbTooltip=\"btn-link\">Link</button>\r\n    </app-card>\r\n    <app-card cardTitle=\"Outline\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"btn-outline-primary\">Primary</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"btn-outline-secondary\">Secondary</button>\r\n      <button type=\"button\" class=\"btn btn-outline-success\" ngbTooltip=\"btn-outline-success\">Success</button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" ngbTooltip=\"btn-outline-danger\">Danger</button>\r\n      <button type=\"button\" class=\"btn btn-outline-warning\" ngbTooltip=\"btn-outline-warning\">Warning</button>\r\n      <button type=\"button\" class=\"btn btn-outline-info\" ngbTooltip=\"btn-outline-info\">Info</button>\r\n      <button type=\"button\" class=\"btn btn-outline-light\" ngbTooltip=\"btn-outline-light\">Light</button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" ngbTooltip=\"btn-outline-dark\">Dark</button>\r\n    </app-card>\r\n    <app-card cardTitle=\"Disabled Button\" [options]=\"false\">\r\n      <p>use <code>.disabled</code> in class <code>.btn</code> class to get Disabled button</p>\r\n      <button type=\"button\" class=\"btn disabled btn-primary\">Primary</button>\r\n      <button type=\"button\" class=\"btn disabled btn-secondary\">Secondary</button>\r\n      <button type=\"button\" class=\"btn disabled btn-success\">Success</button>\r\n      <button type=\"button\" class=\"btn disabled btn-danger\">Danger</button>\r\n      <button type=\"button\" class=\"btn disabled btn-warning\">Warning</button>\r\n      <button type=\"button\" class=\"btn disabled btn-info\">Info</button>\r\n      <button type=\"button\" class=\"btn disabled btn-light\">Light</button>\r\n      <button type=\"button\" class=\"btn disabled btn-dark\">Dark</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Sizes [ Large ]\" [options]=\"false\">\r\n      <p>use <code>.btn-lg</code> in class <code>.btn</code> class to get Large button</p>\r\n      <button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>\r\n      <button type=\"button\" class=\"btn btn-secondary btn-lg\">Large button</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Sizes [ small ]\" [options]=\"false\">\r\n      <p>use <code>.btn-sm</code> in class <code>.btn</code> class to get Small button</p>\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>\r\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\">Small button</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Checkbox Button\" [options]=\"false\">\r\n      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n        <label class=\"btn btn-secondary\" ngbButtonLabel><input type=\"checkbox\" ngbButton [(ngModel)]=\"checkBox.left\"> Left</label>\r\n        <label class=\"btn btn-secondary\" ngbButtonLabel><input type=\"checkbox\" ngbButton [(ngModel)]=\"checkBox.center\"> Center</label>\r\n        <label class=\"btn btn-secondary\" ngbButtonLabel><input type=\"checkbox\" ngbButton [(ngModel)]=\"checkBox.right\"> Right</label>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Radio Buttons\" [options]=\"false\">\r\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"radioButtons\">\r\n        <label class=\"btn btn-secondary active\" ngbButtonLabel><input type=\"radio\" ngbButton name=\"options\" id=\"option1\" value=\"1\" checked> Active</label>\r\n        <label class=\"btn btn-secondary\" ngbButtonLabel><input type=\"radio\" ngbButton name=\"options\" id=\"option2\" value=\"2\"> Radio</label>\r\n        <label class=\"btn btn-secondary\" ngbButtonLabel><input type=\"radio\" ngbButton name=\"options\" id=\"option3\" value=\"3\"> Radio</label>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Buttons With Icon\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-primary\"><i class=\"feather icon-thumbs-up\"></i>Primary</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\"><i class=\"feather icon-camera\"></i>Secondary</button>\r\n      <button type=\"button\" class=\"btn btn-success\"><i class=\"feather icon-check-circle\"></i>Success</button>\r\n      <button type=\"button\" class=\"btn btn-danger\"><i class=\"feather icon-slash\"></i>Danger</button>\r\n      <button type=\"button\" class=\"btn btn-warning\"><i class=\"feather icon-alert-triangle\"></i>Warning</button>\r\n      <button type=\"button\" class=\"btn btn-info\"><i class=\"feather icon-info\"></i>Info</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Outline Icon Buttons\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"feather icon-thumbs-up\"></i>Primary</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\"><i class=\"feather icon-camera\"></i>Secondary</button>\r\n      <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"feather icon-check-circle\"></i>Success</button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"feather icon-slash\"></i>Danger</button>\r\n      <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"feather icon-alert-triangle\"></i>Warning</button>\r\n      <button type=\"button\" class=\"btn btn-outline-info\"><i class=\"feather icon-info\"></i>Info</button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Only Icon\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-icon btn-primary\"><i class=\"feather icon-thumbs-up\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-secondary\"><i class=\"feather icon-camera\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-success\"><i class=\"feather icon-check-circle\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-danger\"><i class=\"feather icon-slash\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-warning\"><i class=\"feather icon-alert-triangle\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-info\"><i class=\"feather icon-info\"></i></button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Outline Icon\" [options]=\"false\">\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-primary\"><i class=\"feather icon-thumbs-up\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-secondary\"><i class=\"feather icon-camera\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-success\"><i class=\"feather icon-check-circle\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-danger\"><i class=\"feather icon-slash\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-warning\"><i class=\"feather icon-alert-triangle\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-icon btn-outline-info\"><i class=\"feather icon-info\"></i></button>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Basic Dropdown Button\" [options]=\"false\">\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-primary\" ngbDropdownToggle type=\"button\">Primary</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-secondary\" ngbDropdownToggle type=\"button\">Secondary</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-success\" ngbDropdownToggle type=\"button\">Success</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-danger\" ngbDropdownToggle type=\"button\">Danger</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-warning\" ngbDropdownToggle type=\"button\">Warning</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-info\" ngbDropdownToggle type=\"button\">Info</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Split Dropdown Button\" [options]=\"false\">\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\r\n        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-success dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-danger dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-warning dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-info dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Basic Outline Dropdown Button\" [options]=\"false\">\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-primary\" ngbDropdownToggle type=\"button\">Primary</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-secondary\" ngbDropdownToggle type=\"button\">Secondary</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-success\" ngbDropdownToggle type=\"button\">Success</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-danger\" ngbDropdownToggle type=\"button\">Danger</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-warning\" ngbDropdownToggle type=\"button\">Warning</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button class=\"btn btn-outline-info\" ngbDropdownToggle type=\"button\">Info</button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Split Outline Dropdown Button\" [options]=\"false\">\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-outline-success dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-outline-warning dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn-group mb-2 mr-2 dropdown\" ngbDropdown placement=\"auto\">\r\n        <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Toggle Dropdown</span></button>\r\n        <div ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Something else here</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Basic Button Group\" [options]=\"false\">\r\n      <div class=\"btn-group mb-2\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Button Toolbar\" [options]=\"false\">\r\n      <div class=\"btn-toolbar\">\r\n        <div class=\"btn-group mr-2\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">1</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">2</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">3</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">4</button>\r\n        </div>\r\n        <div class=\"btn-group mr-2\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">5</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">6</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">7</button>\r\n        </div>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">8</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Button Toolbar Size\" [options]=\"false\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-4 col-md-12 mb-2\">\r\n          <p>use <code>.btn-group-lg</code> in class <code>.btn-group</code> class to get large size button group</p>\r\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"button groups xl\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-md-6 mb-2\">\r\n          <p>this is default size</p>\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"button groups\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-md-6 mb-2\">\r\n          <p>use <code>.btn-group-sm</code> in class <code>.btn-group</code> class to get small size button group</p>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"button groups sm\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Nesting\" [options]=\"false\">\r\n      <div class=\"btn-group\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">1</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\">2</button>\r\n        <div class=\"btn-group dropdown\" role=\"group\" ngbDropdown placement=\"auto\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" ngbDropdownToggle>\r\n            Dropdown\r\n          </button>\r\n          <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:\">Dropdown link</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:\">Dropdown link</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Vertical Variation\" [options]=\"false\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <div class=\"btn-group btn-group-vertical\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" [style.margin-left]=\"'-1px'\">1</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">2</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">3</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <div class=\"btn-group btn-group-vertical\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" [style.margin-left]=\"'-1px'\">1</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">2</button>\r\n            <div class=\"btn-group dropdown\" role=\"group\" ngbDropdown  placement=\"auto\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" ngbDropdownToggle>Dropdown</button>\r\n              <div ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:\">Dropdown link</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:\">Dropdown link</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicButtonRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonRoutingModule", function () {
      return BasicButtonRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");

    var routes = [{
      path: '',
      component: _basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"]
    }];

    var BasicButtonRoutingModule = function BasicButtonRoutingModule() {
      _classCallCheck(this, BasicButtonRoutingModule);
    };

    BasicButtonRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasicButtonRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYnV0dG9uL2Jhc2ljLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicButtonComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonComponent", function () {
      return BasicButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BasicButtonComponent =
    /*#__PURE__*/
    function () {
      function BasicButtonComponent() {
        _classCallCheck(this, BasicButtonComponent);

        this.radioButtons = '1';
        this.checkBox = {
          left: true,
          center: false,
          right: false
        };
      }

      _createClass(BasicButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicButtonComponent;
    }();

    BasicButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basic-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basic-button.component.scss */
      "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.scss")).default]
    })], BasicButtonComponent);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicButtonModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonModule", function () {
      return BasicButtonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-button-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts");
    /* harmony import */


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicButtonModule = function BasicButtonModule() {
      _classCallCheck(this, BasicButtonModule);
    };

    BasicButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"]],
      declarations: [_basic_button_component__WEBPACK_IMPORTED_MODULE_4__["BasicButtonComponent"]]
    })], BasicButtonModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-button-basic-button-module-es5.js.map