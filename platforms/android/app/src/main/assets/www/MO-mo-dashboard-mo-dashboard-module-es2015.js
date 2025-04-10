(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MO-mo-dashboard-mo-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/MO/mo-dashboard/mo-dashboard.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/MO/mo-dashboard/mo-dashboard.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"main_head\">\r\n\t\t\t<h3>\r\n\t\t\t\t<span>Menu</span>\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<div class=\"menu_container\">\r\n\t\t\t<div class=\"men_inner\">\r\n\t\t\t\t<div class=\"item\" (click)=\"dashboardDSARedirect()\">\r\n\t\t\t\t\t<div class=\"item_div\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<!-- <h5>Dashboard MO</h5> -->\r\n\t\t\t\t\t\t<h5>Dashboard AMO</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"stnDetailRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Station Details</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"dsmMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>DSM Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"attachmentRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Summary</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"activityLogDSARedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Activity Log DSA</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"reportDSARedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Report DSA</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"attachDsaRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Dispenser Jump</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"jumpReadingRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Jump Reading System</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/MO/mo-dashboard/mo-dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/MO/mo-dashboard/mo-dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MoDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoDashboardPageRoutingModule", function() { return MoDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mo_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mo-dashboard.page */ "./src/app/MO/mo-dashboard/mo-dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _mo_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["MoDashboardPage"]
    }
];
let MoDashboardPageRoutingModule = class MoDashboardPageRoutingModule {
};
MoDashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MoDashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/MO/mo-dashboard/mo-dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/MO/mo-dashboard/mo-dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: MoDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoDashboardPageModule", function() { return MoDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mo_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo-dashboard-routing.module */ "./src/app/MO/mo-dashboard/mo-dashboard-routing.module.ts");
/* harmony import */ var _mo_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo-dashboard.page */ "./src/app/MO/mo-dashboard/mo-dashboard.page.ts");







let MoDashboardPageModule = class MoDashboardPageModule {
};
MoDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mo_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoDashboardPageRoutingModule"]
        ],
        declarations: [_mo_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["MoDashboardPage"]]
    })
], MoDashboardPageModule);



/***/ }),

/***/ "./src/app/MO/mo-dashboard/mo-dashboard.page.scss":
/*!********************************************************!*\
  !*** ./src/app/MO/mo-dashboard/mo-dashboard.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_head {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvTU8vbW8tZGFzaGJvYXJkL21vLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL01PL21vLWRhc2hib2FyZC9tby1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQTtFQUVJLG1CQUFBO0FDdENKIiwiZmlsZSI6InNyYy9hcHAvTU8vbW8tZGFzaGJvYXJkL21vLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWVudV9jb250YWluZXJcclxuLy8ge1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAubWVudV9jb250YWluZXIgLm1lbl9pbm5lclxyXG4vLyB7XHJcbi8vICAgICB3aWR0aDozMDBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4vLyB9XHJcbi8vIC5tZW51X2NvbnRhaW5lciAubWVuX2lubmVyIC5pdGVtXHJcbi8vIHtcclxuLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUvMik7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vIH1cclxuLy8gLml0ZW0gZGl2Lml0ZW1fZGl2XHJcbi8vIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIxMSwgMjYsIDAuNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5pdGVtX2RpdiBpb24taWNvblxyXG4vLyB7XHJcbi8vICAgICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgICBjb2xvcjogI2IwMWUxZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuLy8gLml0ZW1fZGl2IGg1XHJcbi8vIHtcclxuLy8gICAgIGNvbG9yOiM3NDc0NzQ7XHJcbi8vIH1cclxuLm1haW5faGVhZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OztcclxufVxyXG5cclxuIiwiLm1haW5faGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/MO/mo-dashboard/mo-dashboard.page.ts":
/*!******************************************************!*\
  !*** ./src/app/MO/mo-dashboard/mo-dashboard.page.ts ***!
  \******************************************************/
/*! exports provided: MoDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoDashboardPage", function() { return MoDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let MoDashboardPage = class MoDashboardPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    dashboardDSARedirect() {
        // this.router.navigateByUrl('dashboard-dsa');
        this.router.navigateByUrl('dashboard-mo');
    }
    ;
    reportDSARedirect() {
        this.router.navigate(['dsa-report-mgt']);
        //this.router.navigateByUrl('report-dsa');
    }
    stnDetailRedirect() {
        this.router.navigateByUrl('mostation-detail');
    }
    dsmMgtRedirect() {
        this.router.navigateByUrl('modsm-management');
    }
    ;
    attachDsaRedirect() {
        this.router.navigateByUrl('attachment-dsa');
    }
    jumpReadingRedirect() {
        this.router.navigate(['jump-reading-system']);
    }
};
MoDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
MoDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mo-dashboard',
        template: __webpack_require__(/*! raw-loader!./mo-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/MO/mo-dashboard/mo-dashboard.page.html"),
        styles: [__webpack_require__(/*! ./mo-dashboard.page.scss */ "./src/app/MO/mo-dashboard/mo-dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], MoDashboardPage);



/***/ })

}]);
//# sourceMappingURL=MO-mo-dashboard-mo-dashboard-module-es2015.js.map