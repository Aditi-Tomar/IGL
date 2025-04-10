(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-co-dashboard-co-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/co-dashboard/co-dashboard.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/co-dashboard/co-dashboard.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"main_head\">\r\n\t\t\t<h3><span>Menu</span></h3>\r\n\t\t</div>\r\n\t\t<div class=\"menu_container\">\r\n\t\t\t<div class=\"men_inner\">\r\n\t\t\t\t<div class=\"item\" (click)=\"dashCORedirect()\">\r\n\t\t\t\t\t<div class=\"item_div\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Dashboard CO</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\" (click)=\"reviewsCORedirect()\">\r\n\t\t\t\t\t<div class=\"item_div\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Reviews</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"stnDetailRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Station Details</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"dprReportRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Report DPR</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"jumpReadingRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Jump Reading System</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"activityLogDPRRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Activity Log DPR</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/CO/co-dashboard/co-dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/CO/co-dashboard/co-dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CoDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoDashboardPageRoutingModule", function() { return CoDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _co_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./co-dashboard.page */ "./src/app/CO/co-dashboard/co-dashboard.page.ts");




var routes = [
    {
        path: '',
        component: _co_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["CoDashboardPage"]
    }
];
var CoDashboardPageRoutingModule = /** @class */ (function () {
    function CoDashboardPageRoutingModule() {
    }
    CoDashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CoDashboardPageRoutingModule);
    return CoDashboardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/CO/co-dashboard/co-dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/CO/co-dashboard/co-dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: CoDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoDashboardPageModule", function() { return CoDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _co_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./co-dashboard-routing.module */ "./src/app/CO/co-dashboard/co-dashboard-routing.module.ts");
/* harmony import */ var _co_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./co-dashboard.page */ "./src/app/CO/co-dashboard/co-dashboard.page.ts");







var CoDashboardPageModule = /** @class */ (function () {
    function CoDashboardPageModule() {
    }
    CoDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _co_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoDashboardPageRoutingModule"]
            ],
            declarations: [_co_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["CoDashboardPage"]]
        })
    ], CoDashboardPageModule);
    return CoDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/CO/co-dashboard/co-dashboard.page.scss":
/*!********************************************************!*\
  !*** ./src/app/CO/co-dashboard/co-dashboard.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_head {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvQ08vY28tZGFzaGJvYXJkL2NvLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL0NPL2NvLWRhc2hib2FyZC9jby1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQTtFQUVJLG1CQUFBO0FDdENKIiwiZmlsZSI6InNyYy9hcHAvQ08vY28tZGFzaGJvYXJkL2NvLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWVudV9jb250YWluZXJcclxuLy8ge1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAubWVudV9jb250YWluZXIgLm1lbl9pbm5lclxyXG4vLyB7XHJcbi8vICAgICB3aWR0aDozMDBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4vLyB9XHJcbi8vIC5tZW51X2NvbnRhaW5lciAubWVuX2lubmVyIC5pdGVtXHJcbi8vIHtcclxuLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUvMik7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vIH1cclxuLy8gLml0ZW0gZGl2Lml0ZW1fZGl2XHJcbi8vIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIxMSwgMjYsIDAuNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5pdGVtX2RpdiBpb24taWNvblxyXG4vLyB7XHJcbi8vICAgICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgICBjb2xvcjogI2IwMWUxZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuLy8gLml0ZW1fZGl2IGg1XHJcbi8vIHtcclxuLy8gICAgIGNvbG9yOiM3NDc0NzQ7XHJcbi8vIH1cclxuLm1haW5faGVhZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbiIsIi5tYWluX2hlYWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/CO/co-dashboard/co-dashboard.page.ts":
/*!******************************************************!*\
  !*** ./src/app/CO/co-dashboard/co-dashboard.page.ts ***!
  \******************************************************/
/*! exports provided: CoDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoDashboardPage", function() { return CoDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CoDashboardPage = /** @class */ (function () {
    function CoDashboardPage(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    CoDashboardPage.prototype.ngOnInit = function () {
    };
    CoDashboardPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    CoDashboardPage.prototype.dashCORedirect = function () {
        this.router.navigate(['dashboard-co']);
    };
    CoDashboardPage.prototype.reviewsCORedirect = function () {
        this.router.navigate(['reviews-co']);
    };
    CoDashboardPage.prototype.dprReportRedirect = function () {
        this.router.navigate(['dpr-report-mgt']);
    };
    CoDashboardPage.prototype.stnDetailRedirect = function () {
        this.router.navigateByUrl('station-detail');
    };
    CoDashboardPage.prototype.jumpReadingRedirect = function () {
        this.router.navigate(['jump-reading-system']);
    };
    CoDashboardPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    CoDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-co-dashboard',
            template: __webpack_require__(/*! raw-loader!./co-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/co-dashboard/co-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./co-dashboard.page.scss */ "./src/app/CO/co-dashboard/co-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], CoDashboardPage);
    return CoDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=CO-co-dashboard-co-dashboard-module-es5.js.map