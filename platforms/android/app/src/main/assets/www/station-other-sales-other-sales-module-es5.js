(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-other-sales-other-sales-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/other-sales/other-sales.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/other-sales/other-sales.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">{{SummeryDate}}</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dsa-entry-detail\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Other Sales</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\"></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<!-- <form> -->\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"onSelectShift($event.target.value)\"\r\n\t\t\t\t\t\t\t\tname=\"optShift\" [(ngModel)]=\"selectedShiftId\">\r\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of cmbShiftData\" [value]=\"itm.ShiftId\">\r\n\t\t\t\t\t\t\t\t\t{{itm.ShiftDetails}}</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row *ngFor=\"let pm of AddPaymentMode\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label for=\"{{pm.PaymentMode}\">{{pm.PaymentMode}} ((₹)</ion-label>>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\" input_container\">\r\n\t\t\t\t\t\t\t<ion-input type=\"number\" (input)=\"onPayemntEntry($event.target,pm.PaymentModeId)\"\r\n\t\t\t\t\t\t\t\tvalue=\"{{pm.PaymentAmount}}\" value=\"0.0000\" min=\"0\" (blur)=\"checkout()\">\r\n\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Prepaid Card Activations (₹)</ion-label>>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Other Sale/Lube Sale (₹)</ion-label>>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Cluster Sale</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customAlertOptions\" \r\n\t\t\t\t\t\t\t\t[compareWith]=\"compareWith\" multiple=\"true\" placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t[value]=\"selectedItems\" (ionChange)=\"ONClusterChange($event)\">\r\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let pm of CompanyClusterList\" [value]=\"pm\">{{pm.name}}\r\n\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t<!-- <ion-select-option value=\"olives\">Black Olives</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"xcheese\">Extra Cheese</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"peppers\">Green Peppers</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"mushrooms\">Mushrooms</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"onions\">Onions</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"sausage\">Sausage</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Spinach\">Spinach</ion-select-option> -->\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>No. of Cluster Bus</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input [value]=\"NoOfClusterBus\" (input)=\"NoOfClusterBus=$event.target.value\">\r\n\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Sale Quantity</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input [value]=\"SaleQty\" (input)=\"SaleQty=$event.target.value\"></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<ion-label>Voucher Image</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<!-- <ion-label>Attachment <span class=\"star\">*</span></ion-label> -->\r\n\t\t\t\t\t\t\t<ion-input #myInput type=\"file\" class=\"inp_control\" name=\"VoucherImageInput\"\r\n\t\t\t\t\t\t\t\tid=\"VoucherImageInput\" (change)=\"fileupload($event)\" multiple></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<!-- <ion-row *ngIf=\"imageTextName !=''\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ion-label>{{imageTextName}}</ion-label>\r\n\t\t\t\t\t\t\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"presentModal()\">\r\n\t\t\t\t\t<ion-icon name=\"eye\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\" (click)=\"savePayment();\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<!-- </form> -->\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/other-sales/other-sales-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/station/other-sales/other-sales-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OtherSalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherSalesPageRoutingModule", function() { return OtherSalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _other_sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-sales.page */ "./src/app/station/other-sales/other-sales.page.ts");




var routes = [
    {
        path: '',
        component: _other_sales_page__WEBPACK_IMPORTED_MODULE_3__["OtherSalesPage"]
    }
];
var OtherSalesPageRoutingModule = /** @class */ (function () {
    function OtherSalesPageRoutingModule() {
    }
    OtherSalesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OtherSalesPageRoutingModule);
    return OtherSalesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/other-sales/other-sales.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/station/other-sales/other-sales.module.ts ***!
  \***********************************************************/
/*! exports provided: OtherSalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherSalesPageModule", function() { return OtherSalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-sales-routing.module */ "./src/app/station/other-sales/other-sales-routing.module.ts");
/* harmony import */ var _other_sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-sales.page */ "./src/app/station/other-sales/other-sales.page.ts");







var OtherSalesPageModule = /** @class */ (function () {
    function OtherSalesPageModule() {
    }
    OtherSalesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _other_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherSalesPageRoutingModule"]
            ],
            declarations: [_other_sales_page__WEBPACK_IMPORTED_MODULE_6__["OtherSalesPage"]]
        })
    ], OtherSalesPageModule);
    return OtherSalesPageModule;
}());



/***/ }),

/***/ "./src/app/station/other-sales/other-sales.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/station/other-sales/other-sales.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vb3RoZXItc2FsZXMvb3RoZXItc2FsZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/station/other-sales/other-sales.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/other-sales/other-sales.page.ts ***!
  \*********************************************************/
/*! exports provided: OtherSalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherSalesPage", function() { return OtherSalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_HO_redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/HO/redirected_pages/issue-log-modal/issue-log-modal.page */ "./src/app/HO/redirected_pages/issue-log-modal/issue-log-modal.page.ts");









var OtherSalesPage = /** @class */ (function () {
    function OtherSalesPage(alertController, formBuilder, router, activatedroute, commonServices, menu, dp, modalController) {
        var _this = this;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.modalController = modalController;
        this.imageTextName = '';
        this.StationShift = { ShiftId: "-1", SubShiftId: "-1", ActiveTab: "Other" };
        this.SaveEnable = true;
        this.selectedShiftId = "-1";
        this.selectedSubShiftId = "";
        this.UserIdCook = "";
        this.CreditPartySale = "0.00";
        this.CreditCardSale = "0.00";
        this.PrepaidCardSale = "0.00";
        this.PaytmSale = "0.00";
        this.PrepaidCardLoading = "0.00";
        this.PrepaidCardActivations = "0.00";
        this.OtherSale = "0.00";
        this.CashSale = "0.00";
        this.LubeSale = "0.00";
        this.TotalReadings = "0.0000";
        this.TotalSales = "0.00";
        this.CurrentRate = "0.00";
        this.showNext = true;
        this.showPrevious = true;
        this.oldvalue = "";
        this.submittedflag = false;
        this.customAlertOptions = {
            // header: "Cluster",
            subHeader: "Select your cluster",
            // message: "Cluster",
            translucent: true,
        };
        this.NoOfClusterBus = "";
        this.SaleQty = "";
        this.CompanyClusterList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.ModalName = "";
        this.DocumentImagePath = "";
        this.DocResetPopup = false;
        // compareWith(o1, o2) {
        //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
        // }
        this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.commonServices.MasterCompDisplay.emit(true);
        this.SummeryDate = localStorage.getItem("SummeryDate");
        this.UserId = localStorage.getItem("UserId");
        this.onselectedStation = localStorage.getItem("StationId");
        this.toggleSideBar();
        this.StationShift = this.StationShift;
        this.selectedShiftId = this.StationShift.ShiftId;
        this.selectedSubShiftId = this.StationShift.SubShiftId;
        setTimeout(function () {
            _this.GetDataByShift();
        }, 1000);
        this.subscription = this.commonServices.StationDetails.subscribe(function (test) {
            _this.detailsStation = test;
            console.log("detailsStation", _this.detailsStation);
        });
        this.commonServices.lockUnlock.subscribe(function (value) {
            _this.submittedflag = value;
        });
        this.GetCompanyClusterList();
    }
    OtherSalesPage.prototype.ngOnInit = function () {
        this.selectedStation = Number(localStorage.getItem("StationId"));
        // this.InputFileVar.value = '';
    };
    OtherSalesPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OtherSalesPage.prototype.openFirst = function () {
        this.menu.enable(true, "menuStn");
        this.menu.open("menuStn");
    };
    OtherSalesPage.prototype.toggleSideBar = function () {
        var _this = this;
        // this.commonServices.loadingPresent();
        this.commonServices
            .post("CommonGetData", {
            Id: this.onselectedStation,
            Status: this.SummeryDate,
            Flag: "validatePopup",
        })
            .subscribe(function (resp) {
            var data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == "Allow") {
                _this.commonServices.StationDetails.emit({
                    StationId: _this.onselectedStation,
                    SummeryDate: _this.SummeryDate,
                    UserId: _this.UserId,
                });
            }
            else {
                _this, _this.commonServices.presentToast(data.Table[0].Msg);
            }
            // this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            // this.commonServices.loadingDismiss();
        });
    };
    OtherSalesPage.prototype.onSelectShift = function (shiftId) {
        var _this = this;
        this.selectedShiftId = shiftId;
        setTimeout(function () {
            _this.GetDataByShift();
        }, 5000);
    };
    OtherSalesPage.prototype.GetDataByShift = function () {
        var _this = this;
        // this.commonServices.loadingPresent();
        this.commonServices
            .post("GetOtherPaymentByShift", {
            StationId: this.detailsStation.StationId,
            EntryDate: this.detailsStation.SummeryDate,
            ShiftId: this.selectedShiftId,
            UserId: this.detailsStation.UserId,
        })
            .subscribe(function (resp) {
            // this.commonServices.loadingDismiss();
            _this.AddPaymentMode = JSON.parse(resp).Table;
            _this.cmbShiftData = JSON.parse(resp).Table1;
            _this.selectedShiftId = JSON.parse(resp).Table2[0].ShiftId;
            console.log("test1", JSON.parse(resp).Table3.length);
            if (JSON.parse(resp).Table3.length != 0) {
                _this.NoOfClusterBus = JSON.parse(resp).Table3[0].NoOfClusterBus;
                _this.SaleQty = JSON.parse(resp).Table3[0].SaleQty;
                _this.DocumentImagePath =
                    _this.commonServices.apiImageAttachment + "/Attachments/" +
                        JSON.parse(resp).Table3[0].ImagePath;
                _this.InputFileVar.value = JSON.parse(resp).Table3[0].ImagePath;
                // this.InputFileVar.el.title = JSON.parse(resp).Table3[0].ImagePath;
                _this.imageTextName = JSON.parse(resp).Table3[0].ImagePath;
            }
            else {
                _this.NoOfClusterBus = "";
                _this.SaleQty = "";
                _this.DocumentImagePath =
                    _this.commonServices.apiImageAttachment + "/Attachments/";
                _this.InputFileVar.value = '';
                // this.InputFileVar.el.title = '';
                _this.imageTextName = '';
            }
            _this.selectedItems = JSON.parse(resp).Table4;
            console.log("Table 4" + JSON.parse(resp).Table4);
            // this.selectedItems = [
            //   {
            //     id: 2,
            //     name: "ANTONY ROAD TRANSPORT SOLUTIONS",
            //     Status: "Active",
            //     Create_Date: "2021-01-21T13:54:15.79",
            //     Modify_Date: "2021-02-19T09:51:19.25",
            //     SAPCode: "1462",
            //   },
            //   {
            //     id: 6,
            //     name: "District Supply Officer(GBN)",
            //     Status: "Active",
            //     Create_Date: "2021-01-21T13:54:15.79",
            //     Modify_Date: "2021-01-21T13:54:15.79",
            //     SAPCode: "3237",
            //   },
            // ];
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            // this.commonServices.loadingDismiss();
        });
    };
    OtherSalesPage.prototype.checkout = function () {
        this.oldvalue = "";
    };
    OtherSalesPage.prototype.onPayemntEntry = function (event, PaymentModeId) {
        var _this = this;
        if (event.value != "") {
            var rx = /^\d+(?:\.\d{1,3})?$/;
            if (rx.test(event.value)) {
                this.oldvalue = event.value;
            }
            else {
                event.value = this.oldvalue;
            }
        }
        this.selectedPaymentModeId = PaymentModeId;
        this.selectedPaymentAmount = event.value == "" ? "0" : event.value;
        if (this.selectedPaymentAmount != "") {
            if (parseFloat(this.selectedPaymentAmount) >= 0) {
                var Value = this.AddPaymentMode.find(function (pm) { return pm.PaymentModeId === _this.selectedPaymentModeId; });
                Value.PaymentAmount = this.selectedPaymentAmount;
                this.SaveEnable = true;
            }
            else {
                this.commonServices.presentToast("Amount must be positive");
                event.focus();
                this.SaveEnable = false;
            }
        }
        else {
            this.commonServices.presentToast("Amount must be entred");
            event.focus();
            this.SaveEnable = false;
        }
    };
    OtherSalesPage.prototype.savePayment = function () {
        var _this = this;
        var ErrorMsg = this.changeresetValidation();
        if (this.selectedShiftId == "" || this.selectedShiftId == "-1") {
            this.commonServices.presentToast("Please select shift.");
        }
        else if (ErrorMsg != '' && ErrorMsg != undefined) {
            this.commonServices.presentToast(ErrorMsg);
        }
        else {
            if (this.SaveEnable) {
                for (var i = 0; i < this.AddPaymentMode.length; i++) {
                    if (parseFloat(this.AddPaymentMode[i].PaymentAmount) < 0) {
                        this.SaveEnable = false;
                        this.commonServices.presentToast("All payment amount must be positive");
                        break;
                    }
                }
            }
            else {
                this.commonServices.presentToast("All payment value must be positive");
            }
            var MyJson = {
                StationId: this.detailsStation.StationId,
                EntryDate: this.detailsStation.SummeryDate,
                UserId: this.detailsStation.UserId,
                ShiftId: this.selectedShiftId,
                DispanserPayment: this.AddPaymentMode,
                ClusterCompanyList: this.selectedItems,
                FilePath: localStorage.getItem('LoginId') + "/VoucherImage/",
                NoOfClusterBus: this.NoOfClusterBus,
                SaleQty: this.SaleQty == "" ? "0" : this.SaleQty
            };
            // Attachment: ((this.uploadedfilereset == undefined) ? '' : this.uploadedfilereset.name)
            this.Issuelogfiles = $('#VoucherImageInput');
            var frmData = new FormData();
            var fileInput = this.Issuelogfiles[0];
            frmData.append("jsonDetail", JSON.stringify(MyJson));
            if (this.uploadedfilereset != undefined) {
                console.log(this.uploadedfilereset);
                frmData.append('OtherSaleFile', this.uploadedfilereset, this.uploadedfilereset.name);
            }
            if (this.SaveEnable) {
                // this.commonServices
                // .post("DispenserOtherPaymentCollection", {
                //   StationId: this.detailsStation.StationId,
                //   EntryDate: this.detailsStation.SummeryDate,
                //   UserId: this.detailsStation.UserId,
                //   ShiftId: this.selectedShiftId,
                //   DispanserPayment: this.AddPaymentMode,
                // })
                this.commonServices.loadingPresent();
                this.commonServices.OtherPaymentCollection(frmData)
                    .subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    if (data.Table[0].Meaasge.indexOf("transfer") > -1) {
                        _this.commonServices.presentToast(data.Table[0].Meaasge);
                    }
                    else {
                        _this.commonServices.presentToast(data.Table[0].Meaasge);
                        _this.GetDataByShift();
                    }
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        }
    };
    OtherSalesPage.prototype.GetCompanyClusterList = function () {
        var _this = this;
        var obj = {
            flag: "GetAll",
        };
        console.log(obj);
        this.commonServices.post("GetCompanyClusterList", obj).subscribe(function (resp) {
            _this.CompanyClusterList = JSON.parse(resp).Table;
            console.log("CompanyClusterList", _this.CompanyClusterList);
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
        });
    };
    OtherSalesPage.prototype.ONClusterChange = function (evt) {
        var self = this;
        // self.selectedReport = evt.detail.value;
        console.log(evt.detail.value);
        console.log(this.selectedItems);
        self.selectedItems = evt.detail.value;
        console.log(this.selectedItems);
    };
    OtherSalesPage.prototype.fileupload = function (str) {
        console.log("issue", str);
        this.uploadedfilereset = str.target.files[0];
        console.log(this.uploadedfilereset);
        // this.imageTextName =  str.target.files[0].name;
    };
    OtherSalesPage.prototype.ViewVoucherImage = function () {
        this.ModalName = "#myModalImage";
    };
    OtherSalesPage.prototype.changeresetValidation = function () {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var errorMsg = '';
        if (this.NoOfClusterBus != '' && this.SaleQty != '') {
            if (this.DocumentImagePath == this.commonServices.apiImageAttachment + "/Attachments/" && (this.uploadedfilereset == undefined || this.uploadedfilereset == null)) {
                errorMsg = 'Please select voucher image';
                return errorMsg;
            }
        }
        return errorMsg;
    };
    OtherSalesPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_HO_redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_7__["IssueLogModalPage"],
                            cssClass: 'my-custom-class1',
                            componentProps: {
                                previewVar: true,
                                heading: 'View Attachement',
                                viewattachment: this.DocumentImagePath
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OtherSalesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OtherSalesPage.prototype, "InputFileVar", void 0);
    OtherSalesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-other-sales",
            template: __webpack_require__(/*! raw-loader!./other-sales.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/other-sales/other-sales.page.html"),
            styles: [__webpack_require__(/*! ./other-sales.page.scss */ "./src/app/station/other-sales/other-sales.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], OtherSalesPage);
    return OtherSalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-other-sales-other-sales-module-es5.js.map