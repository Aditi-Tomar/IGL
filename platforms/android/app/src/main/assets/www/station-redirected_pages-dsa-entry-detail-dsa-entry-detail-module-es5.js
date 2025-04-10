(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-redirected_pages-dsa-entry-detail-dsa-entry-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row class=\"mb5 ion-align-items-center\">\r\n\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t<ion-back-button defaultHref=\"dsa-entry\"></ion-back-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"text_center\">\r\n\t\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t\t<h3><span>DSA Entry Detail</span></h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"6\" class=\"opt\">\r\n\t\t\t\t\t<ion-card class=\"option_box\" (click)=\"paymentRedirect()\">\r\n\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"card\"></ion-icon>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txt\">\r\n\t\t\t\t\t\t\t<ion-text>Payment Collection</ion-text>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"6\" class=\"opt\">\r\n\t\t\t\t\t<ion-card class=\"option_box\" (click)=\"otrSalesRedirect()\">\r\n\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"cash\"></ion-icon>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txt\">\r\n\t\t\t\t\t\t\t<ion-text>Other Sales</ion-text>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t<ion-card class=\"option_box\" (click)=\"bankDepositeRedirect()\">\r\n\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"business\"></ion-icon>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txt\">\r\n\t\t\t\t\t\t\t<ion-text>Bank Deposit</ion-text>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t<ion-card class=\"option_box\" (click)=\"dsaSummaryRedirect()\">\r\n\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"keypad\"></ion-icon>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txt\">\r\n\t\t\t\t\t\t\t<ion-text>DSA Summary</ion-text>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DsaEntryDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryDetailPageRoutingModule", function() { return DsaEntryDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dsa_entry_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-entry-detail.page */ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.ts");




var routes = [
    {
        path: '',
        component: _dsa_entry_detail_page__WEBPACK_IMPORTED_MODULE_3__["DsaEntryDetailPage"]
    }
];
var DsaEntryDetailPageRoutingModule = /** @class */ (function () {
    function DsaEntryDetailPageRoutingModule() {
    }
    DsaEntryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DsaEntryDetailPageRoutingModule);
    return DsaEntryDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DsaEntryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryDetailPageModule", function() { return DsaEntryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_entry_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-entry-detail-routing.module */ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail-routing.module.ts");
/* harmony import */ var _dsa_entry_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-entry-detail.page */ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.ts");







var DsaEntryDetailPageModule = /** @class */ (function () {
    function DsaEntryDetailPageModule() {
    }
    DsaEntryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dsa_entry_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaEntryDetailPageRoutingModule"]
            ],
            declarations: [_dsa_entry_detail_page__WEBPACK_IMPORTED_MODULE_6__["DsaEntryDetailPage"]]
        })
    ], DsaEntryDetailPageModule);
    return DsaEntryDetailPageModule;
}());



/***/ }),

/***/ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option_box .icon {\n  text-align: center;\n  margin-top: 10px;\n}\n.option_box .icon ion-icon {\n  font-size: 45px;\n  color: #cacaca;\n}\n.option_box .txt {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.option_box .txt ion-text {\n  font-size: 16px;\n  color: black;\n}\n.opt .option_box {\n  height: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9yZWRpcmVjdGVkX3BhZ2VzL2RzYS1lbnRyeS1kZXRhaWwvZHNhLWVudHJ5LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpb24vcmVkaXJlY3RlZF9wYWdlcy9kc2EtZW50cnktZGV0YWlsL2RzYS1lbnRyeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FERUk7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQ0RSO0FESUE7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FDSFI7QURRSTtFQUVJLFdBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vcmVkaXJlY3RlZF9wYWdlcy9kc2EtZW50cnktZGV0YWlsL2RzYS1lbnRyeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vcHRpb25fYm94IC5pY29uXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGlvbi1pY29uXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIGNvbG9yOiNjYWNhY2E7XHJcbiAgICB9XHJcbn1cclxuLm9wdGlvbl9ib3ggLnR4dFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcblxyXG4gICAgaW9uLXRleHRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbn1cclxuLm9wdFxyXG57XHJcbiAgICAub3B0aW9uX2JveFxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDo4NSU7XHJcbiAgICB9XHJcbn0iLCIub3B0aW9uX2JveCAuaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5vcHRpb25fYm94IC5pY29uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLm9wdGlvbl9ib3ggLnR4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5vcHRpb25fYm94IC50eHQgaW9uLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9wdCAub3B0aW9uX2JveCB7XG4gIGhlaWdodDogODUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: DsaEntryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryDetailPage", function() { return DsaEntryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DsaEntryDetailPage = /** @class */ (function () {
    function DsaEntryDetailPage(router, activatedroute, menu) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.menu = menu;
        this.UserId = activatedroute.snapshot.paramMap.get('UserId');
        this.StationId = activatedroute.snapshot.paramMap.get('StationId');
        this.SummeryDate = activatedroute.snapshot.paramMap.get('SummeryDate');
    }
    DsaEntryDetailPage.prototype.ngOnInit = function () {
    };
    DsaEntryDetailPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    DsaEntryDetailPage.prototype.paymentRedirect = function () {
        this.router.navigate(['payment-collection']);
    };
    DsaEntryDetailPage.prototype.otrSalesRedirect = function () {
        this.router.navigate(['other-sales']);
    };
    DsaEntryDetailPage.prototype.bankDepositeRedirect = function () {
        this.router.navigate(['bank-deposite']);
    };
    DsaEntryDetailPage.prototype.dsaSummaryRedirect = function () {
        this.router.navigateByUrl('dsa-summary');
    };
    DsaEntryDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    DsaEntryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dsa-entry-detail',
            template: __webpack_require__(/*! raw-loader!./dsa-entry-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.html"),
            styles: [__webpack_require__(/*! ./dsa-entry-detail.page.scss */ "./src/app/station/redirected_pages/dsa-entry-detail/dsa-entry-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], DsaEntryDetailPage);
    return DsaEntryDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-redirected_pages-dsa-entry-detail-dsa-entry-detail-module-es5.js.map