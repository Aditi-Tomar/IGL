(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-rate-management-rate-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/rate-management/rate-management.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/rate-management/rate-management.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Rate Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"8\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<!-- <ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToadd()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col> -->\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\"\r\n\t\t\t\t(ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<!-- (click)=\"goToUpdate(item.RateId)\" -->\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.NormalRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DisountedRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.EffectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DisplayTime}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"showPrevRedirect()\">Show Previous</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Region</th>\r\n\t\t\t\t\t\t\t\t<th>Normal Rate ₹/Kg</th>\r\n\t\t\t\t\t\t\t\t<th>Discounted Rate ₹/Kg</th>\r\n\t\t\t\t\t\t\t\t<th>Effective Date</th>\r\n\t\t\t\t\t\t\t\t<th>Effective Time</th>\r\n\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<!-- (click)=\"goToUpdate(ritem.RateId)\" -->\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let ritem of Ratelist; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" class=\"inp_control\" [ngClass]=\"ritem.IsDisable ? 'showDisabled' : 'hideDisabled'\" readonly=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t{{ritem.RegionName}}</ion-input>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<!-- {{ritem.NormalRate.toFixed(2)}} -->\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Normal Rate\" class=\"inp_control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"NormalRate\" [value]=\"ritem.NormalRate.toFixed(2)\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"ritem.IsDisable ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t(ionInput)=\"NormalRate = $event.target.value\" [readonly]=\"ritem.IsDisable\">\r\n\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<!-- {{ritem.DisountedRate.toFixed(2)}} -->\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Discounted Rate\" class=\"inp_control\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"DisountedRate\" [value]=\"ritem.DisountedRate.toFixed(2)\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"ritem.IsDisable ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t(input)=\"DisountedRate = $event.target.value\" [readonly]=\"ritem.IsDisable\">\r\n\t\t\t\t\t\t\t\t\t</ion-input>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick inp_control\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" (ionChange)=\"OnDateChnage($event)\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"ritem.IsDisable ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"ritem.EffectiveDate\" [min]=\"minDateRate\" [max]=\"maxDaterate\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"EffectiveDate\" [disabled]=\"ritem.IsDisable\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t\t<!-- (ngModelChange)=\"OnDateChnage($event)\" -->\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<!-- {{ritem.DisplayTime}} -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"divTableCell\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select name=\"optRegion\" class=\"inp_control\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"onTimeSelect($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"ritem.IsDisable ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"ritem.DisplayTime ? ritem.DisplayTime : ''\"\r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"ritem.IsDisable\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"12:01 AM\">12:01 AM</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"06:00 AM\">06:00 AM</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"primary\" (click)=\"editmodefun(ritem)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\" [disabled]=\"ritem.IsDisable\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"saveRate(ritem.RateId,ritem.RegionId,ritem.EffectiveDate,ritem.NormalRate,ritem.DisountedRate,ritem.DisplayTime)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"save\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/rate-management/rate-management-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/HO/rate-management/rate-management-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: RateManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateManagementPageRoutingModule", function() { return RateManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rate_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate-management.page */ "./src/app/HO/rate-management/rate-management.page.ts");




var routes = [
    {
        path: '',
        component: _rate_management_page__WEBPACK_IMPORTED_MODULE_3__["RateManagementPage"]
    }
];
var RateManagementPageRoutingModule = /** @class */ (function () {
    function RateManagementPageRoutingModule() {
    }
    RateManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RateManagementPageRoutingModule);
    return RateManagementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/rate-management/rate-management.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/HO/rate-management/rate-management.module.ts ***!
  \**************************************************************/
/*! exports provided: RateManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateManagementPageModule", function() { return RateManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rate_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate-management-routing.module */ "./src/app/HO/rate-management/rate-management-routing.module.ts");
/* harmony import */ var _rate_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate-management.page */ "./src/app/HO/rate-management/rate-management.page.ts");







var RateManagementPageModule = /** @class */ (function () {
    function RateManagementPageModule() {
    }
    RateManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rate_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["RateManagementPageRoutingModule"]
            ],
            declarations: [_rate_management_page__WEBPACK_IMPORTED_MODULE_6__["RateManagementPage"]]
        })
    ], RateManagementPageModule);
    return RateManagementPageModule;
}());



/***/ }),

/***/ "./src/app/HO/rate-management/rate-management.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/HO/rate-management/rate-management.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showDisabled {\n  background-color: #eee;\n  opacity: 1;\n}\n\n.hideDisabled {\n  background-color: #fff;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmF0ZS1tYW5hZ2VtZW50L3JhdGUtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL3JhdGUtbWFuYWdlbWVudC9yYXRlLW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0hPL3JhdGUtbWFuYWdlbWVudC9yYXRlLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dEaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGlkZURpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0iLCIuc2hvd0Rpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhpZGVEaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/rate-management/rate-management.page.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/rate-management/rate-management.page.ts ***!
  \************************************************************/
/*! exports provided: RateManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateManagementPage", function() { return RateManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RateManagementPage = /** @class */ (function () {
    function RateManagementPage(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.searchText = '';
        this.MinDate = '';
        this.SelectedRateId = '';
        this.RateId = '';
        this.RateRegionId = '';
        this.UserId = '';
        this.NormalRate = '0.00';
        this.DisountedRate = '0.00';
        this.Cdate = '';
        this.RateTime = '';
        this.DS = true;
        this.ActiveStatus = '';
        this.PreTableIsfalse = true;
        this.PrevBtnText = 'Show Previous';
        this.Status = true;
        this.tableHeight = true;
        this.key = 'Name';
        this.reverse = true;
        this.filter = '';
        this.exportList = [];
        this.uId = "";
        this.sortingColumn = "";
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.editmode = true;
        this.minDateRate = new Date().toISOString();
        this.maxDaterate = new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString();
    }
    RateManagementPage.prototype.ngOnInit = function () {
        this.UserId = localStorage.getItem('UID');
        this.getRateList();
    };
    RateManagementPage.prototype.getRateList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'RateList', Id: '0' }).subscribe(function (res) {
            var RateRes = JSON.parse(res);
            if (RateRes != "" && RateRes != undefined && RateRes != null) {
                self.Ratelist = RateRes.Table;
                console.table(self.Ratelist);
            }
            else {
                self.commonServices.presentToast("Something went wrong.");
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    RateManagementPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    // goToadd() {
    //   this.router.navigate(['add-update-rate-mgt', { pageFlag: "addpage" }]);
    // }
    // goToUpdate(item) {
    //   this.router.navigate(['add-update-rate-mgt', { RateId: JSON.stringify(item), pageFlag: "updatepage" }]);
    // }
    RateManagementPage.prototype.onTimeSelect = function (eve) {
        this.RateTime = eve.target.value;
    };
    RateManagementPage.prototype.OnDateChnage = function (val) {
        this.EffectiveDate = new Date(val.target.value).toLocaleDateString();
    };
    RateManagementPage.prototype.saveRate = function (rateId, regionId, effectiveDate, normalRate, discountRate, displayRate) {
        var _this = this;
        var self = this;
        this.errorFound = true;
        if (this.ValidationRate()) {
            // const obj = {
            //   RateId: rateId,
            //   RegionId: regionId,
            //   NormalRate: this.NormalRate != '0.00' ? this.NormalRate : normalRate,
            //   DisountedRate: this.DisountedRate != '0.00' ? this.DisountedRate : discountRate,
            //   EffectiveDate: effectiveDate,
            //   UserId: this.UserId,
            //   EffectiveTime: this.RateTime != '' ? this.RateTime : displayRate
            // };
            var obj = {
                RateId: rateId,
                RegionId: regionId,
                NormalRate: this.NormalRate,
                DisountedRate: this.DisountedRate,
                EffectiveDate: effectiveDate,
                UserId: this.UserId,
                EffectiveTime: this.RateTime != '' ? this.RateTime : displayRate
            };
            this.commonServices.loadingPresent();
            self.commonServices.post("RateMaster", obj).subscribe(function (resp) {
                var data = JSON.parse(resp);
                _this.getRateList();
                if (data.Table[0].Meaasge.indexOf('successfully') > -1) {
                    _this.date = new Date(_this.Cdate);
                }
                self.commonServices.presentToast(data.Table[0].Meaasge);
                _this.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
    };
    RateManagementPage.prototype.ValidationRate = function () {
        var self = this;
        var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
        if (this.NormalRate != '' || Number(this.NormalRate) == 0) {
            if (!isNaN(parseFloat(this.NormalRate))) {
                if (parseFloat(this.NormalRate) <= 0) {
                    self.commonServices.presentToast('Rate must be greater then zero');
                    this.errorFound = false;
                }
            }
            else {
                self.commonServices.presentToast('Please enter valid Normal Rate.');
                this.errorFound = false;
            }
        }
        if (this.DisountedRate != '' || Number(this.DisountedRate) == 0) {
            if (!isNaN(parseFloat(this.DisountedRate))) {
                if (parseFloat(this.DisountedRate) <= 0) {
                    self.commonServices.presentToast('Disounted Rate must be greater then zero');
                    this.errorFound = false;
                }
            }
            else {
                self.commonServices.presentToast('Please enter valid Discounted Rate.');
                this.errorFound = false;
            }
        }
        if (this.DisountedRate != '' && this.NormalRate != '') {
            if (parseFloat(this.NormalRate) < parseFloat(this.DisountedRate)) {
                self.commonServices.presentToast('Normal Rate must be greater/equal than discounted rate');
                this.errorFound = false;
            }
        }
        if (this.RateTime == '' || this.RateTime == null) {
            self.commonServices.presentToast('Effective Time must be Selected.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    RateManagementPage.prototype.editmodefun = function (itm) {
        console.log(itm);
        this.Ratelist.forEach(function (element) {
            if (element.RegionName == itm.RegionName) {
                element.IsDisable = false;
            }
            else {
                element.IsDisable = true;
            }
        });
        this.NormalRate = itm.NormalRate;
        this.DisountedRate = itm.DisountedRate;
        this.RateTime = itm.DisplayTime;
        console.log(this.Ratelist, "Ratelist");
        //this.editmode = false;
    };
    RateManagementPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    RateManagementPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    RateManagementPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getRateList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.Ratelist.filter(function (item) {
                return (item.RegionName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    RateManagementPage.prototype.showPrevRedirect = function () {
        this.router.navigate(['/show-previous-rate-mgt']);
    };
    RateManagementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    RateManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rate-management',
            template: __webpack_require__(/*! raw-loader!./rate-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/rate-management/rate-management.page.html"),
            styles: [__webpack_require__(/*! ./rate-management.page.scss */ "./src/app/HO/rate-management/rate-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], RateManagementPage);
    return RateManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-rate-management-rate-management-module-es5.js.map