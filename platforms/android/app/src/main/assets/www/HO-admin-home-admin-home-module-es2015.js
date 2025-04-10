(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-admin-home-admin-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/admin-home/admin-home.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/admin-home/admin-home.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"main_head\">\r\n\t\t\t<h3><span>Menu</span></h3>\r\n\t\t</div>\r\n\t\t<div class=\"menu_container\">\r\n\t\t\t<div class=\"men_inner\">\r\n\t\t\t\t<div class=\"item ion-activatable ripple-parent\" (click)=showhidemastermenu();>\r\n\t\t\t\t\t<div class=\"item_div\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Master Menu</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item ion-activatable ripple-parent\" (click)=\"dashboradRedirect()\">\r\n\t\t\t\t\t<div class=\"item_div\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Dashboard</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"packageRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Package</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"summaryDSAReport()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Summary DSA I</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"rateMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Rate Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"userMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>User Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"dprRejectStnRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>DPR Reject Station</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"paymentManagement()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Payment Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"entryThreshold()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Entry Threshold</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"jumpReadingRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Jump Reading System</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"men_inner master\" *ngIf=\"isShown\">\r\n\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"regionMgtRedirect()\">\r\n\r\n\t\t\t\t\t\t<i class=\"fas fa-map-marker-alt\"></i>\r\n\t\t\t\t\t\t<h5>Region Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"controlOfficeRedirect()\">\r\n\r\n\t\t\t\t\t\t<i class=\"fas fa-building\"></i>\r\n\t\t\t\t\t\t<h5>Control Office</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"moMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<!-- <h5>MO Management</h5> -->\r\n\t\t\t\t\t\t<h5>AMO Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"stationMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Station Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"dispenserMgtRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Dispenser Management</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"meterSkidRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Meter Skid</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"lcvRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>LCV</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"gasGensetRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Gas Genset</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t\t<div class=\"item_div\" (click)=\"summaryDSAReport()\">\r\n\t\t\t\t\t\t<ion-icon name=\"desktop\"></ion-icon>\r\n\t\t\t\t\t\t<h5>Summary DSA I</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/admin-home/admin-home-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/admin-home/admin-home-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AdminHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageRoutingModule", function() { return AdminHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-home.page */ "./src/app/HO/admin-home/admin-home.page.ts");




const routes = [
    {
        path: '',
        component: _admin_home_page__WEBPACK_IMPORTED_MODULE_3__["AdminHomePage"]
    }
];
let AdminHomePageRoutingModule = class AdminHomePageRoutingModule {
};
AdminHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminHomePageRoutingModule);



/***/ }),

/***/ "./src/app/HO/admin-home/admin-home.module.ts":
/*!****************************************************!*\
  !*** ./src/app/HO/admin-home/admin-home.module.ts ***!
  \****************************************************/
/*! exports provided: AdminHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-home-routing.module */ "./src/app/HO/admin-home/admin-home-routing.module.ts");
/* harmony import */ var _admin_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-home.page */ "./src/app/HO/admin-home/admin-home.page.ts");







let AdminHomePageModule = class AdminHomePageModule {
};
AdminHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminHomePageRoutingModule"]
        ],
        declarations: [_admin_home_page__WEBPACK_IMPORTED_MODULE_6__["AdminHomePage"]]
    })
], AdminHomePageModule);



/***/ }),

/***/ "./src/app/HO/admin-home/admin-home.page.scss":
/*!****************************************************!*\
  !*** ./src/app/HO/admin-home/admin-home.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_head {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vYWRtaW4taG9tZS9hZG1pbi1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vYWRtaW4taG9tZS9hZG1pbi1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ITy9hZG1pbi1ob21lL2FkbWluLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5faGVhZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbiIsIi5tYWluX2hlYWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/admin-home/admin-home.page.ts":
/*!**************************************************!*\
  !*** ./src/app/HO/admin-home/admin-home.page.ts ***!
  \**************************************************/
/*! exports provided: AdminHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePage", function() { return AdminHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AdminHomePage = class AdminHomePage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
        this.isShown = false;
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    showhidemastermenu() {
        this.isShown = !this.isShown;
    }
    dashboradRedirect() {
        this.router.navigateByUrl('dashboard');
    }
    ;
    regionMgtRedirect() {
        this.router.navigateByUrl('region-mgt');
    }
    ;
    controlOfficeRedirect() {
        this.router.navigateByUrl('control-office');
    }
    ;
    moMgtRedirect() {
        this.router.navigateByUrl('mo-management');
    }
    ;
    stationMgtRedirect() {
        this.router.navigateByUrl('station-management');
    }
    ;
    dispenserMgtRedirect() {
        this.router.navigateByUrl('dispenser-management');
    }
    ;
    dsmMgtRedirect() {
        this.router.navigateByUrl('dsm-management');
    }
    ;
    meterSkidRedirect() {
        this.router.navigateByUrl('meter-skid1');
    }
    packageRedirect() {
        this.router.navigateByUrl('package1');
    }
    lcvRedirect() {
        this.router.navigateByUrl('lcv1');
    }
    gasGensetRedirect() {
        this.router.navigateByUrl('gas-genset1');
    }
    rateMgtRedirect() {
        this.router.navigateByUrl('rate-management');
    }
    userMgtRedirect() {
        this.router.navigateByUrl('user-management');
    }
    reportRedirect() {
        this.router.navigateByUrl('report');
    }
    paymentManagement() {
        this.router.navigateByUrl('payment-management');
    }
    summaryDsaRedirect() {
        this.router.navigateByUrl('summary-dsa');
    }
    summaryDSAReport() {
        this.router.navigateByUrl('summary-dsareport');
    }
    dprRejectStnRedirect() {
        this.router.navigateByUrl('reject-station-dpr');
    }
    jumpReadingRedirect() {
        this.router.navigate(['jump-reading-system']);
    }
    entryThreshold() {
        this.router.navigate(['entry-threshhold']);
    }
};
AdminHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
AdminHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__(/*! raw-loader!./admin-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/admin-home/admin-home.page.html"),
        styles: [__webpack_require__(/*! ./admin-home.page.scss */ "./src/app/HO/admin-home/admin-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], AdminHomePage);



/***/ })

}]);
//# sourceMappingURL=HO-admin-home-admin-home-module-es2015.js.map