(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-apex-crt-apex-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <!-- [ variant-chart ] start -->\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Basic line chart\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"line-chart-1-cac\" [chartConfig]=\"this.chartDB.line1CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Area chart\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"area-chart-1-cac\" [chartConfig]=\"this.chartDB.area1CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Bar chart\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"bar-chart-1-cac\" [chartConfig]=\"this.chartDB.bar1CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Bar chart stacked\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"bar-chart-2-cac\" [chartConfig]=\"this.chartDB.bar2CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Pie Chart\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"pie-chart-1-cac\" [chartConfig]=\"this.chartDB.pie1CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-card cardTitle=\"Pie Chart donut\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"pie-chart-2-cac\" [chartConfig]=\"this.chartDB.pie2CAC\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <!-- [ variant-chart ] end -->\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CrtApexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtApexRoutingModule", function() { return CrtApexRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crt_apex_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-apex.component */ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts");




const routes = [
    {
        path: '',
        component: _crt_apex_component__WEBPACK_IMPORTED_MODULE_3__["CrtApexComponent"]
    }
];
let CrtApexRoutingModule = class CrtApexRoutingModule {
};
CrtApexRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CrtApexRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtYXBleC9jcnQtYXBleC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts ***!
  \**********************************************************************/
/*! exports provided: CrtApexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtApexComponent", function() { return CrtApexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../fack-db/chart-data */ "./src/app/fack-db/chart-data.ts");
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/shared/components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");




let CrtApexComponent = class CrtApexComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__["ChartDB"];
        this.lastDate = 0;
        this.data = [];
        this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 });
        this.line2CAC = {
            chart: {
                height: 300,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 2000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                    data: this.data
                }],
            colors: ['#1abc9c'],
            title: {
                text: 'Dynamic Updating Chart',
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                range: 777600000,
            },
            yaxis: {
                max: 100
            },
            legend: {
                show: false
            }
        };
        this.dailyVisitorStatus = '1y';
    }
    ngOnInit() {
        this.intervalSub = setInterval(() => {
            this.getNewSeries(this.lastDate, { min: 10, max: 90 });
            this.apexEvent.eventChangeSeriesData();
        }, 2000);
        this.intervalMain = setInterval(() => {
            this.resetData();
            this.apexEvent.eventChangeSeriesData();
        }, 60000);
    }
    dailyVisitorEvent(status) {
        this.dailyVisitorStatus = status;
        switch (status) {
            case '1m':
                this.dailyVisitorAxis = {
                    min: new Date('28 Jan 2013').getTime(),
                    max: new Date('27 Feb 2013').getTime(),
                };
                break;
            case '6m':
                this.dailyVisitorAxis = {
                    min: new Date('27 Sep 2012').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case '1y':
                this.dailyVisitorAxis = {
                    min: new Date('27 Feb 2012').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case 'ytd':
                this.dailyVisitorAxis = {
                    min: new Date('01 Jan 2013').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case 'all':
                this.dailyVisitorAxis = {
                    min: undefined,
                    max: undefined
                };
                break;
        }
        setTimeout(() => {
            this.apexEvent.eventChangeTimeRange();
        });
    }
    ngOnDestroy() {
        if (this.intervalSub) {
            clearInterval(this.intervalSub);
        }
        if (this.intervalMain) {
            clearInterval(this.intervalMain);
        }
    }
    getDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            this.data.push({ x, y });
            this.lastDate = baseval;
            baseval += 86400000;
            i++;
        }
    }
    resetData() {
        this.data = this.data.slice(this.data.length - 10, this.data.length);
    }
    getNewSeries(baseval, yrange) {
        const newDate = baseval + 86400000;
        this.lastDate = newDate;
        this.data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
    }
};
CrtApexComponent.ctorParameters = () => [
    { type: _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
];
CrtApexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crt-apex',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crt-apex.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crt-apex.component.scss */ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.scss")).default]
    })
], CrtApexComponent);



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts ***!
  \*******************************************************************/
/*! exports provided: CrtApexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtApexModule", function() { return CrtApexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-apex-routing.module */ "./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts");
/* harmony import */ var _crt_apex_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crt-apex.component */ "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let CrtApexModule = class CrtApexModule {
};
CrtApexModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_crt_apex_component__WEBPACK_IMPORTED_MODULE_4__["CrtApexComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrtApexRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], CrtApexModule);



/***/ }),

/***/ "./src/app/fack-db/chart-data.ts":
/*!***************************************!*\
  !*** ./src/app/fack-db/chart-data.ts ***!
  \***************************************/
/*! exports provided: ChartDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDB", function() { return ChartDB; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ChartDB {
}
ChartDB.line1CAC = {
    chart: {
        height: 300,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false,
        width: 2,
    },
    stroke: {
        curve: 'straight',
    },
    colors: ['#1abc9c'],
    series: [{
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f6ff', 'transparent'],
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};
ChartDB.area1CAC = {
    chart: {
        height: 350,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    colors: ['#ffa21d', '#ff5252'],
    series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-09-19T02:30:00',
            '2018-09-19T03:30:00',
            '2018-09-19T04:30:00',
            '2018-09-19T05:30:00',
            '2018-09-19T06:30:00'
        ],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
ChartDB.bar1CAC = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0e9e4a', '#1abc9c', '#e74c3c'],
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: (val) => '$ ' + val + ' thousands'
        }
    }
};
ChartDB.bar2CAC = {
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#1abc9c', '#0e9e4a', '#ffa21d', '#ff5252'],
    responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }],
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    },
};
ChartDB.pie1CAC = {
    chart: {
        height: 320,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    series: [44, 55, 13, 43, 22],
    colors: ['#1abc9c', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252'],
    legend: {
        show: true,
        position: 'bottom',
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
};
ChartDB.pie2CAC = {
    chart: {
        height: 320,
        type: 'donut',
    },
    series: [44, 55, 41, 17, 15],
    colors: ['#1abc9c', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252'],
    legend: {
        show: true,
        position: 'bottom',
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true
                    },
                    value: {
                        show: true
                    }
                }
            }
        }
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
};


/***/ })

}]);
//# sourceMappingURL=crt-apex-crt-apex-module-es2015.js.map