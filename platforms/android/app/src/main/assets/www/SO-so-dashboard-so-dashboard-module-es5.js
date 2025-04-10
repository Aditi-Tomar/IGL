(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SO-so-dashboard-so-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/SO/so-dashboard/so-dashboard.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/SO/so-dashboard/so-dashboard.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"main_head\">\r\n\t\t\t<h3><span>Menu</span></h3>\r\n\t\t</div>\r\n\t\t<div class=\"menu_container\">\r\n\t\t\t<div class=\"men_inner\">\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"gotoredirectEntryDsa()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Entry DSA</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"gotoredirectDsaSummary()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>DSA Station Summary</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/SO/so-dashboard/so-dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/SO/so-dashboard/so-dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SoDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDashboardPageRoutingModule", function() { return SoDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _so_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./so-dashboard.page */ "./src/app/SO/so-dashboard/so-dashboard.page.ts");




var routes = [
    {
        path: '',
        component: _so_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["SoDashboardPage"]
    }
];
var SoDashboardPageRoutingModule = /** @class */ (function () {
    function SoDashboardPageRoutingModule() {
    }
    SoDashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SoDashboardPageRoutingModule);
    return SoDashboardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/SO/so-dashboard/so-dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/SO/so-dashboard/so-dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: SoDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDashboardPageModule", function() { return SoDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _so_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./so-dashboard-routing.module */ "./src/app/SO/so-dashboard/so-dashboard-routing.module.ts");
/* harmony import */ var _so_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./so-dashboard.page */ "./src/app/SO/so-dashboard/so-dashboard.page.ts");







var SoDashboardPageModule = /** @class */ (function () {
    function SoDashboardPageModule() {
    }
    SoDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _so_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["SoDashboardPageRoutingModule"]
            ],
            declarations: [_so_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["SoDashboardPage"]]
        })
    ], SoDashboardPageModule);
    return SoDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/SO/so-dashboard/so-dashboard.page.scss":
/*!********************************************************!*\
  !*** ./src/app/SO/so-dashboard/so-dashboard.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_head {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvU08vc28tZGFzaGJvYXJkL3NvLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL1NPL3NvLWRhc2hib2FyZC9zby1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1NPL3NvLWRhc2hib2FyZC9zby1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5faGVhZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn0iLCIubWFpbl9oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/SO/so-dashboard/so-dashboard.page.ts":
/*!******************************************************!*\
  !*** ./src/app/SO/so-dashboard/so-dashboard.page.ts ***!
  \******************************************************/
/*! exports provided: SoDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDashboardPage", function() { return SoDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SoDashboardPage = /** @class */ (function () {
    function SoDashboardPage(menu, router, dp) {
        this.menu = menu;
        this.router = router;
        this.dp = dp;
        this.geteDate = { selcteddate: "" };
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            var latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
            this.geteDate.selcteddate = latest_date;
            this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            //this.geteDate.selcteddate=this.DPREntryDateTime;
            localStorage.setItem("SummeryDate", this.geteDate.selcteddate);
        }
    }
    SoDashboardPage.prototype.ngOnInit = function () {
    };
    SoDashboardPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    SoDashboardPage.prototype.gotoredirectEntryDsa = function () {
        this.router.navigate(['dsa-entry', { flag: 'dsaEntry' }]);
    };
    SoDashboardPage.prototype.gotoredirectDsaSummary = function () {
        this.router.navigate(['dsa-summary', { flag: 'dsaStationSummary' }]);
    };
    SoDashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    SoDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-so-dashboard',
            template: __webpack_require__(/*! raw-loader!./so-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/SO/so-dashboard/so-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./so-dashboard.page.scss */ "./src/app/SO/so-dashboard/so-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], SoDashboardPage);
    return SoDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=SO-so-dashboard-so-dashboard-module-es5.js.map