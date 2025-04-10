(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MO-dsa-report-mgt-dsa-report-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/mo-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">DSA Report</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div style=\"position:relative;\">\r\n\t\t<div class=\"main_heading1\">\r\n\t\t\t<!-- <div>\r\n\t\t\t\t<ion-back-button defaultHref=\"mo-dashboard\"></ion-back-button>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<h1></h1>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"onReportSelect()\">\r\n\t\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"MailSentCashRecon()\">\r\n\t\t\t\t\t<ion-icon name=\"paper-plane\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</div> -->\r\n\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" offset=\"8\" >\r\n\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"onReportSelect()\">\r\n\t\t\t\t\t<ion-icon name=\"arrow-down\" class=\"font22\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<!-- <ion-col size=\"2\"  >\r\n\t\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"MailSentCashRecon()\">\r\n\t\t\t\t\t<ion-icon name=\"paper-plane\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-col> -->\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Date From</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" \r\n\t\t\t\t\tplaceholder=\"Select Date\" [disabled]=\"IsDatedisable\"\r\n\t\t\t\t\t[max]=\"secondMaxDate\" [(ngModel)]=\"dateFrom\" (ngModelChange)=\"OnDateChnagefrom($event)\"></ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Date To</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" \r\n\t\t\t\t\tplaceholder=\"Select Date\" [disabled]=\"IsDatedisable\"\r\n\t\t\t\t\t[max]=\"secondMaxDate\" [min]=\"DateFromMy\" [(ngModel)]=\"dateTo\" \r\n\t\t\t\t\t(ngModelChange)=\"OnDateChnageTo($event)\"></ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Report</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Report</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"selectedReport\"\r\n\t\t\t\t\t\t(ionChange)=\"OnReportChnage($event)\" [disabled]=\"dateRange\">\r\n\t\t\t\t\t\t<!-- <ion-select-option value=\"DAILY CASH RECON\">DAILY CASH RECON</ion-select-option> -->\r\n\t\t\t\t\t\t<ion-select-option value=\"CASH RECON\">CASH RECON AMOUNT</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"QUANTITY\">CASH RECON QUANTITY</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"OPENING CLOSING\">OPENING CLOSING</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"PENDING STATIONS\">PENDING STATIONS</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"EXCEPTIONAL REPORT\">EXCEPTIONAL REPORT</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"ZERO SALE\">ZERO SALE</ion-select-option>\r\n\t\t\t\t\t\t<!-- <ion-select-option value=\"ZERO SALE\">DSA Summary</ion-select-option>   -->\r\n\t\t\t\t\t\t<ion-select-option value=\"GAS TESTING\">GAS TESTING</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"METER RESET\">METER RESET HISTORY</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"REMARK HISTORY\">REMARK HISTORY</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"DATA MODIFICATION\">DATA MODIFICATION</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"JUMP READING\">JUMP READING</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"DSA SUBMISSION REPORT\">DSA SUBMISSION REPORT</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"STATION OPERATOR SUBMISSION REPORT\">STATION OPERATOR SUBMISSION REPORT\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"GAS SALE (QUANTITY)\">SALE QTY. & VALUES</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Region</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Region</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"selectRegion\"\r\n\t\t\t\t\t\t(ionChange)=\"onRegionSelect($event.detail.value, 'CompanyId')\" [disabled]=\"IsRegionSelected\">\r\n\t\t\t\t\t\t<ion-select-option value=\"All\">All</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of RegionList\" [value]=\"itm.RegionId\">{{itm.RegionName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Company</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Company</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"Station\"\r\n\t\t\t\t\t\t(ionChange)=\"onCompanySelect($event.detail.value)\" [disabled]=\"IsStationDisable\">\r\n\t\t\t\t\t\t<ion-select-option value=\"\" selected>All</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of CompanyList\" [value]=\"itm.CompanyId\">{{itm.CompanyName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row *ngIf=(!IsStationDisabled)>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Station</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Station</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"Station\"\r\n\t\t\t\t\t\t(ionChange)=\"onStationSelect($event.detail.value)\" [disabled]=\"IsStationDisable\">\r\n\t\t\t\t\t\t<ion-select-option value=\"\" selected>All</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of StationList\" (click)=\"filterBoxShow(value)\" [value]=\"itm.StationId\">{{itm.StationName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/MO/dsa-report-mgt/dsa-report-mgt-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/MO/dsa-report-mgt/dsa-report-mgt-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DsaReportMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaReportMgtPageRoutingModule", function() { return DsaReportMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dsa_report_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-report-mgt.page */ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _dsa_report_mgt_page__WEBPACK_IMPORTED_MODULE_3__["DsaReportMgtPage"]
    }
];
var DsaReportMgtPageRoutingModule = /** @class */ (function () {
    function DsaReportMgtPageRoutingModule() {
    }
    DsaReportMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DsaReportMgtPageRoutingModule);
    return DsaReportMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.module.ts":
/*!************************************************************!*\
  !*** ./src/app/MO/dsa-report-mgt/dsa-report-mgt.module.ts ***!
  \************************************************************/
/*! exports provided: DsaReportMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaReportMgtPageModule", function() { return DsaReportMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_report_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-report-mgt-routing.module */ "./src/app/MO/dsa-report-mgt/dsa-report-mgt-routing.module.ts");
/* harmony import */ var _dsa_report_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-report-mgt.page */ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.ts");







var DsaReportMgtPageModule = /** @class */ (function () {
    function DsaReportMgtPageModule() {
    }
    DsaReportMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dsa_report_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaReportMgtPageRoutingModule"]
            ],
            declarations: [_dsa_report_mgt_page__WEBPACK_IMPORTED_MODULE_6__["DsaReportMgtPage"]]
        })
    ], DsaReportMgtPageModule);
    return DsaReportMgtPageModule;
}());



/***/ }),

/***/ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.scss":
/*!************************************************************!*\
  !*** ./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01PL2RzYS1yZXBvcnQtbWd0L2RzYS1yZXBvcnQtbWd0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.ts ***!
  \**********************************************************/
/*! exports provided: DsaReportMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaReportMgtPage", function() { return DsaReportMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var DsaReportMgtPage = /** @class */ (function () {
    function DsaReportMgtPage(formBuilder, router, activatedroute, datepipe, commonServices, menu) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.datepipe = datepipe;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dsaData = { selcteddate: "" };
        this.IsRegionSelected = false;
        this.IsStationPending = false;
        this.IsStationDisable = false;
        this.selectedRegion = 0;
        this.IsDatedisable = false;
        this.IsStationDisabled = false;
        this.selectedFilter = "All";
        this.SheetType = 'All';
        this.AmtDiff = '00.0';
        this.ReportFlag = localStorage.getItem('DepartmentCode');
        this.dateRange = false;
        this.errorFound = true;
        this.UserId = localStorage.getItem('UID');
        this.secondMaxDate = new Date().toISOString();
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.dsaData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            // IOS Comment
            // this.latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.dsaData.selcteddate = this.latest_date;
            //IOS Add
            this.dsaData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        this.dateFrom = this.dsaData.selcteddate;
        this.dateTo = this.dsaData.selcteddate;
        this.RegionByDept();
        this.commonServices.MasterCompDisplay.emit(true);
    }
    ;
    DsaReportMgtPage.prototype.ngOnInit = function () {
    };
    DsaReportMgtPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    DsaReportMgtPage.prototype.RegionByDept = function () {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'StationSubmittedStatusForMO', Id: self.UserId }).subscribe(function (res) {
            self.RegionList = JSON.parse(res).Table1;
            console.log(_this.RegionList);
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    };
    DsaReportMgtPage.prototype.onReportSelect = function () {
        var self = this;
        if (self.ValidationReports()) {
            console.log(self.selectedReport, "selectedReport");
            self.commonServices.loadingPresent();
            var obj = {
                DateFrom: this.datepipe.transform(self.dateFrom, 'dd/MMM/yyyy'),
                DateTo: this.datepipe.transform(self.dateTo, 'dd/MMM/yyyy'),
                Flag: self.selectedReport,
                // Region: self.selectRegion,
                Region: (this.selectRegion == '') ? 'All' : this.selectRegion,
                CompanyId: (self.selectCompany == 'All') ? '0' : this.selectCompany,
                SelectedStationId: (self.selectedStation == 'All') ? '0' : this.selectedStation,
                UserId: self.UserId,
                ControlRoomCode: "All",
                DepartmentCode: this.ReportFlag,
                Filter: this.selectedFilter,
                SheetType: this.SheetType,
                ReportType: (this.selectedReport == "PAYMENT RECONCILIATION (2)") ? 3 : 0,
                AmtDiff: this.AmtDiff
            };
            // console.log(self.IsStationPending + 'is station panding');
            // console.log(self.selectedReport + 'is selection report');
            if (self.IsStationPending == true && self.selectedReport == "PENDING STATIONS") {
                self.commonServices.post("ExcelExportDSA", obj).subscribe(function (resp) {
                    if (JSON.parse(resp).errMsg == 'success') {
                        window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                        self.commonServices.loadingDismiss();
                    }
                    else {
                        self.commonServices.presentToast(JSON.parse(resp).errMsg);
                        self.commonServices.loadingDismiss();
                    }
                }, function (error) {
                    self.commonServices.presentToast('Something went wrong.');
                    self.commonServices.loadingDismiss();
                });
            }
            else if (self.IsStationPending == true && self.selectedReport == "EXCEPTIONAL REPORT") {
                self.commonServices.post("ExcelExportDSA", obj).subscribe(function (resp) {
                    if (JSON.parse(resp).errMsg == 'success') {
                        window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                        self.commonServices.loadingDismiss();
                    }
                    else {
                        self.commonServices.presentToast(JSON.parse(resp).errMsg);
                        self.commonServices.loadingDismiss();
                    }
                }, function (error) {
                    self.commonServices.presentToast('Something went wrong.');
                    self.commonServices.loadingDismiss();
                });
            }
            else if (this.IsStationPending == true && this.selectedReport == "DSA SUBMISSION REPORT") {
                self.commonServices.post("ExportDSASubmissionReport", obj).subscribe(function (resp) {
                    console.log(resp);
                    if (JSON.parse(resp).errMsg == 'success') {
                        window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" +
                            JSON.parse(resp).FileName;
                        self.commonServices.loadingDismiss();
                    }
                    else {
                        self.commonServices.presentToast(JSON.parse(resp).errMsg);
                        self.commonServices.loadingDismiss();
                    }
                }, function (error) {
                    self.commonServices.presentToast('Something went wrong.');
                    self.commonServices.loadingDismiss();
                });
            }
            else if (this.IsStationPending == true && this.selectedReport == "STATION OPERATOR SUBMISSION REPORT") {
                self.commonServices.post("ExportSOPSubmissionReport", obj).subscribe(function (resp) {
                    if (JSON.parse(resp).errMsg == 'success') {
                        window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" +
                            JSON.parse(resp).FileName;
                        self.commonServices.loadingDismiss();
                    }
                    else {
                        self.commonServices.presentToast(JSON.parse(resp).errMsg);
                        self.commonServices.loadingDismiss();
                    }
                }, function (error) {
                    self.commonServices.presentToast('Something went wrong.');
                    self.commonServices.loadingDismiss();
                });
            }
            else {
                if (self.IsRegionSelected == false) {
                    if (self.dateFrom != null && self.dateTo != null && self.selectedReport != null && self.selectedReport != "") //&& this.selectRegion != null
                     {
                        // self.commonServices.post("ExcelExportDSA", obj).subscribe( // before line after update
                        self.commonServices.post("ExcelExportCashRecon", obj).subscribe(function (resp) {
                            var data = JSON.parse(resp);
                            // console.log(data);
                            if (data.FileName != '') {
                                //  alert('file name');
                                if (JSON.parse(resp).errMsg == 'success') {
                                    // alert('inneer sucess');
                                    window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                                    self.commonServices.loadingDismiss();
                                }
                                else {
                                    self.commonServices.presentToast(JSON.parse(resp).errMsg);
                                    self.commonServices.loadingDismiss();
                                }
                            }
                            else {
                                self.commonServices.presentToast('No Report Data Found');
                                self.commonServices.loadingDismiss();
                            }
                        }, function (error) {
                            self.commonServices.presentToast('Something went wrong.');
                            self.commonServices.loadingDismiss();
                        });
                    }
                    else {
                        self.commonServices.presentToast('Please select Report.');
                        self.commonServices.loadingDismiss();
                    }
                }
                else {
                    if (self.dateFrom != null && self.dateTo != null && self.selectedReport != null) {
                        self.commonServices.post("ExcelExportDSA", obj).subscribe(function (resp) {
                            var data = JSON.parse(resp);
                            if (data.FileName != '') {
                                if (JSON.parse(resp).errMsg == 'success') {
                                    window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                                    self.commonServices.loadingDismiss();
                                }
                                else {
                                    self.commonServices.presentToast(JSON.parse(resp).errMsg);
                                    self.commonServices.loadingDismiss();
                                }
                            }
                            else {
                                self.commonServices.presentToast('No Report Data Found.');
                                self.commonServices.loadingDismiss();
                            }
                        }, function (error) {
                            self.commonServices.presentToast('Something went wrong.');
                            self.commonServices.loadingDismiss();
                        });
                    }
                    else {
                        self.commonServices.presentToast('Please select Report.');
                        self.commonServices.loadingDismiss();
                    }
                }
            }
        }
    };
    //   MailSentCashRecon() {
    //     var temparray:any=[];
    //     temparray = this.ResponseList.filter(obj => obj.selected == true);
    //     console.log(temparray, "SelectedData");
    //     if (temparray.length == 0) {
    //       alert('Please Select altleast one Station.');
    //       return false;
    //     }
    //     console.log(this.dateFrom, "Casgdate");
    //     var stJson = [];
    //     temparray.forEach(element => {
    //       stJson.push({
    //             StationName: element.StationName,
    //             SapCode: element.SapCode,
    //             StationCode: element.StationCode      
    //         });
    //     });
    //     const obj = {
    //       CashRecoEntryData :stJson,
    //       SheetType : this.SheetType,
    //       StartDate: this.dateFrom,
    //       EndDate: this.dateTo
    //     };
    //       this.objDbServ.ShowLoaders.emit(true);   
    //       this.objDbServ.MailSentCashRecon(obj).subscribe(
    //         (resp: any) => {
    //             const data= JSON.parse(resp.json()).Table;
    //             if(data[0].Mesage=="1") {
    //               alert('Mail sent Successfully.!');   
    //             }
    //             else {
    //               alert('Something went wrong.');
    //               this.objDbServ.ShowLoaders.emit(false);
    //             }
    //             this.objDbServ.ShowLoaders.emit(false);
    //         },
    //         (error) =>{
    //           alert('Something went wrong.');
    //         this.objDbServ.ShowLoaders.emit(false);
    //        }
    //     )
    //  }  
    DsaReportMgtPage.prototype.onCompanySelect = function (val) {
        var self = this;
        self.selectCompany = val;
        if (self.selectCompany.length > 0)
            self.onRegionSelect(this.selectRegion, self.selectCompany);
    };
    DsaReportMgtPage.prototype.onRegionSelect = function (val, CompanyId) {
        var _this = this;
        console.log(val);
        console.log(CompanyId);
        var self = this;
        self.selectRegion = val;
        if (self.selectRegion != "All") {
            self.IsStationDisable = false;
            self.commonServices.post("CommonGetData", {
                Id: this.selectRegion, CompanyId: CompanyId,
                ReportFlag: this.ReportFlag, Flag: 'StationByRegionId', Status: '', UserId: this.UserId
            }).subscribe(function (resp) {
                self.StationList = JSON.parse(resp).Table;
                console.log(self.StationList);
                if (self.selectCompany == '' || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.selectCompany)) {
                    self.GetCompany();
                    console.log('inner');
                }
                else
                    self.selectCompany = CompanyId;
                console.log(self.selectCompany);
            }, function (error) {
                self.commonServices.presentToast('Something went wrong.');
            });
        }
        else {
            self.IsStationDisable = true;
        }
    };
    DsaReportMgtPage.prototype.GetCompany = function () {
        var self = this;
        if (self.selectCompany != "All") {
            self.IsStationDisable = false;
            self.commonServices.post("CommonGetData", { Id: 0, Flag: 'CompanyByRegion', Status: '',
                RegionId: this.selectRegion }).subscribe(function (resp) {
                self.CompanyList = JSON.parse(resp).Table;
                console.log(self.CompanyList);
            }, function (error) {
                self.commonServices.presentToast('Something went wrong.');
            });
        }
        else {
            self.selectCompany = '0';
        }
    };
    DsaReportMgtPage.prototype.onStationSelect = function (val) {
        var self = this;
        self.selectedStation = val;
        console.log(val);
    };
    // filterBoxShow(itm) {
    //   this.selectedStation = itm.StationId;
    //   console.log(this.selectedStation);
    // }
    DsaReportMgtPage.prototype.OnReportChnage = function (val) {
        var self = this;
        self.selectedReport = val.detail.value;
        if (self.selectedReport == "PENDING STATIONS") {
            // self.IsStationPending = true;
            // self.IsRegionSelected = true;
            // self.IsStationDisable = true;
            // self.selectRegion = 'All';
            // self.selectCompany = 'All';
            // self.selectedStation = 'All';
            this.IsDatedisable = true;
            this.IsStationDisabled = true;
        }
        else if (this.selectedReport == "EXCEPTIONAL REPORT") {
            // this.IsStationPending = true;
            // this.IsRegionSelected = true;
            // this.IsStationDisable = true;
            // this.selectRegion = 'All';
            // this.selectCompany='All';
            // this.selectedStation='All';
            this.IsDatedisable = true;
            this.IsStationDisabled = true;
        }
        else if (this.selectedReport == "DSA SUBMISSION REPORT" || this.selectedReport == "STATION OPERATOR SUBMISSION REPORT") {
            this.IsStationPending = true;
            this.IsRegionSelected = true;
            this.IsStationDisable = true;
            this.selectRegion = 'All';
            this.selectCompany = 'All';
            this.selectedStation = 'All';
            this.IsDatedisable = false;
            this.IsStationDisabled = false;
        }
        else {
            self.IsRegionSelected = false;
            self.selectRegion = '';
            self.IsStationDisable = false;
            this.IsDatedisable = false;
            this.IsStationDisabled = false;
        }
    };
    DsaReportMgtPage.prototype.OnDateChnagefrom = function (val) {
        var self = this;
        var dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IOS Comment
        // self.dateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        self.checkdifference(self.dateFrom, self.dateTo);
    };
    DsaReportMgtPage.prototype.OnDateChnageTo = function (val) {
        var self = this;
        var dt = new Date(val);
        //IOS Comment
        // self.dateTo = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        self.checkdifference(this.dateFrom, this.dateTo);
    };
    DsaReportMgtPage.prototype.OnDateChnagefromSec = function (val) {
        var self = this;
        var dt = new Date(val);
        self.dateFromSec = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
    };
    DsaReportMgtPage.prototype.onReportSelectSec = function () {
        var self = this;
        var obj = { dateFromSec: this.dateFromSec };
        if (self.dateFromSec != null) {
            self.commonServices.loadingPresent();
            self.commonServices.post("ExcelExportDSASec", obj).subscribe(function (resp) {
                if (JSON.parse(resp).errMsg == 'success') {
                    window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                }
                else {
                    self.commonServices.presentToast(JSON.parse(resp).errMsg);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast('Something went wrong.');
                self.commonServices.loadingDismiss();
            });
        }
        else {
            self.commonServices.presentToast('Please Select Reporting Date.');
            self.commonServices.loadingDismiss();
        }
    };
    DsaReportMgtPage.prototype.ValidationReports = function () {
        var self = this;
        var d1 = new Date(Date.parse(this.dateFrom));
        var d2 = new Date(Date.parse(this.dateTo));
        if ((d1 > d2)) {
            self.commonServices.presentToast('From Date cant be greater than To Date.');
            self.errorFound = false;
        }
        return self.errorFound;
    };
    DsaReportMgtPage.prototype.checkdifference = function (dateFrom, dateTo) {
        var self = this;
        var date1 = new Date(dateFrom);
        var date2 = new Date(dateTo);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log(Difference_In_Time);
        console.log(Difference_In_Days);
        if (Difference_In_Days > 31) {
            self.dateRange = true;
            self.commonServices.presentToast('Please Select Date Range within one month');
        }
        else {
            self.dateRange = false;
        }
    };
    DsaReportMgtPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    DsaReportMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dsa-report-mgt',
            template: __webpack_require__(/*! raw-loader!./dsa-report-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.html"),
            styles: [__webpack_require__(/*! ./dsa-report-mgt.page.scss */ "./src/app/MO/dsa-report-mgt/dsa-report-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], DsaReportMgtPage);
    return DsaReportMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=MO-dsa-report-mgt-dsa-report-mgt-module-es5.js.map