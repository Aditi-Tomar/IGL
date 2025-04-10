(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-reject-station-dpr-reject-station-dpr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/reject-station-dpr/reject-station-dpr.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/reject-station-dpr/reject-station-dpr.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Station Rejection</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\">\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"UpdateRejectStation()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<div class=\"content_area\">\r\n\t\t\t\t\t<div class=\"mycard\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Select Date</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-datetime [ngModelOptions]=\"{standalone: true}\" #selcteddateFrom class=\"date\"\r\n\t\t\t\t\t\t\t\t\t\tdisplayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t[ngModel]=\"rejectiondatE\" name=\"selcteddateForm\"\r\n\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Select Control Room</ion-label>\r\n\t\t\t\t\t<ion-select placeholder=\"Select One\" class=\"inp_control\" formControlName=\"SelectedCRoom\"\r\n\t\t\t\t\t\t(ionChange)=\"OnSelectCRoom($event)\" interface=\"action-sheet\">\r\n\t\t\t\t\t\t<ion-select-option value=\"CR001\">SARAI KALE KHAN</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR002\">LADO SARAI</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR003\">JAIL ROAD</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR004\">DHEERPUR</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR005\">CBD</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR006\">SHAKURPUR</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR007\">ROHINI</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR031\">NOIDA</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR008\">Dwarka</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR033\">GHAZIABAD</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR035\">REWARI</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Select Station for Rejection</ion-label>\r\n\t\t\t\t\t<ion-select class=\"inp_control\" formControlName=\"SelectedStationCode\" interface=\"action-sheet\">\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of listStation\" [value]=\"itm.StationCode\">{{itm.StationName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green\" type=\"submit\">Reject Reading</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/reject-station-dpr/reject-station-dpr-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/HO/reject-station-dpr/reject-station-dpr-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: RejectStationDprPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectStationDprPageRoutingModule", function() { return RejectStationDprPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reject_station_dpr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reject-station-dpr.page */ "./src/app/HO/reject-station-dpr/reject-station-dpr.page.ts");




var routes = [
    {
        path: '',
        component: _reject_station_dpr_page__WEBPACK_IMPORTED_MODULE_3__["RejectStationDprPage"]
    }
];
var RejectStationDprPageRoutingModule = /** @class */ (function () {
    function RejectStationDprPageRoutingModule() {
    }
    RejectStationDprPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RejectStationDprPageRoutingModule);
    return RejectStationDprPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/reject-station-dpr/reject-station-dpr.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/reject-station-dpr/reject-station-dpr.module.ts ***!
  \********************************************************************/
/*! exports provided: RejectStationDprPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectStationDprPageModule", function() { return RejectStationDprPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reject_station_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reject-station-dpr-routing.module */ "./src/app/HO/reject-station-dpr/reject-station-dpr-routing.module.ts");
/* harmony import */ var _reject_station_dpr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reject-station-dpr.page */ "./src/app/HO/reject-station-dpr/reject-station-dpr.page.ts");







var RejectStationDprPageModule = /** @class */ (function () {
    function RejectStationDprPageModule() {
    }
    RejectStationDprPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reject_station_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__["RejectStationDprPageRoutingModule"]
            ],
            declarations: [_reject_station_dpr_page__WEBPACK_IMPORTED_MODULE_6__["RejectStationDprPage"]]
        })
    ], RejectStationDprPageModule);
    return RejectStationDprPageModule;
}());



/***/ }),

/***/ "./src/app/HO/reject-station-dpr/reject-station-dpr.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/HO/reject-station-dpr/reject-station-dpr.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3JlamVjdC1zdGF0aW9uLWRwci9yZWplY3Qtc3RhdGlvbi1kcHIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/reject-station-dpr/reject-station-dpr.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/reject-station-dpr/reject-station-dpr.page.ts ***!
  \******************************************************************/
/*! exports provided: RejectStationDprPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectStationDprPage", function() { return RejectStationDprPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var RejectStationDprPage = /** @class */ (function () {
    function RejectStationDprPage(formBuilder, router, datepipe, activatedroute, commonServices, menu) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.datepipe = datepipe;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.isShown = false;
        this.isItemAvailable = false;
        this.searchShow = false;
        this.searchFlag = 0;
        this.SelectedCRm = '';
        // SelectedStationCode:string='';
        this.errorFound = true;
        this.secondMaxDate = new Date().toISOString();
        this.addupdateForm = formBuilder.group({
            SelectedCRoom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SelectedStationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    RejectStationDprPage.prototype.ngOnInit = function () {
        var dt = new Date();
        this.rejectiondatE = new Date().toLocaleDateString();
        this.rejectiondatE = this.datepipe.transform(dt, 'yyyy/MM/dd');
    };
    RejectStationDprPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    RejectStationDprPage.prototype.OnDateChnageFrom = function (val) {
        var self = this;
        var dt = new Date(val);
        self.rejectiondatE = this.datepipe.transform(dt, 'yyyy/MM/dd');
    };
    RejectStationDprPage.prototype.OnSelectCRoom = function (evt) {
        this.SelectedCRm = evt.detail.value;
        this.getRejectDetails();
    };
    RejectStationDprPage.prototype.getRejectDetails = function () {
        var self = this;
        // self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetStationsByAdmin", { ControlRoomCode: self.SelectedCRm,
            Flag: 'FillStation', Rejectiondate: this.datepipe.transform(this.rejectiondatE, 'dd/MMM/yyyy') }).subscribe(function (res) {
            var stationRes = JSON.parse(res);
            self.listStation = stationRes.Table;
            console.log(self.listStation);
            // self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            // self.commonServices.loadingDismiss();
        });
    };
    RejectStationDprPage.prototype.UpdateRejectStation = function () {
        var self = this;
        self.errorFound = true;
        if (self.ValidationRejection()) {
            self.commonServices.loadingPresent();
            self.commonServices.postwithservice("GetStationsByAdmin", {
                ControlRoomCode: self.addupdateForm.value.SelectedCRoom,
                Flag: self.addupdateForm.value.SelectedStationCode,
                Rejectiondate: this.datepipe.transform(this.rejectiondatE, 'dd/MMM/yyyy')
            }).subscribe(function (res) {
                var data = JSON.parse(res);
                if (data.Table[0].Messages == "Station readings has been rejected.") {
                    self.addupdateForm.reset();
                    self.getRejectDetails();
                }
                self.commonServices.presentToast(data.Table[0].Messages);
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    RejectStationDprPage.prototype.ValidationRejection = function () {
        if (this.addupdateForm.value.SelectedCRoom == '') {
            this.commonServices.presentToast('Please Select Control Room.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.SelectedStationCode == '') {
            this.commonServices.presentToast('Please Select Station for Rejection.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    RejectStationDprPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
    ]; };
    RejectStationDprPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reject-station-dpr',
            template: __webpack_require__(/*! raw-loader!./reject-station-dpr.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/reject-station-dpr/reject-station-dpr.page.html"),
            styles: [__webpack_require__(/*! ./reject-station-dpr.page.scss */ "./src/app/HO/reject-station-dpr/reject-station-dpr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], RejectStationDprPage);
    return RejectStationDprPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-reject-station-dpr-reject-station-dpr-module-es5.js.map