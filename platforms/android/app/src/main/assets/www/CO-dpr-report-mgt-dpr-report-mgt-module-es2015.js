(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-dpr-report-mgt-dpr-report-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/co-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">DPR Report</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div>\r\n\t\t<div class=\"main_heading1\">\r\n\t\t\t<div>\r\n\t\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<h1></h1>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button color=\"light\" size=\"small\" style=\"position:relative;\" (click)=\"GetExportDPRreports()\">\r\n\t\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Date From</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" placeholder=\"Select Date\"\r\n\t\t\t\t\t\t[max]=\"secondMaxDate\" [(ngModel)]=\"dateFrom\" (ngModelChange)=\"OnDateChnagefrom($event)\"\r\n\t\t\t\t\t\t[disabled]=\"IsDatesDisable\"></ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Date To</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime [(ngModel)]=\"dateTo\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" [min]=\"DateFromMy\"\r\n\t\t\t\t\t\t[max]=\"secondMaxDate\" placeholder=\"Select Date\" (ngModelChange)=\"OnDateChnageTo($event)\"\r\n\t\t\t\t\t\t[disabled]=\"IsDatesDisable\"></ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Report</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Report</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"selectedReport\"\r\n\t\t\t\t\t\t(ionChange)=\"OnReportChnage($event)\" [disabled]=\"dateRange\">\r\n\t\t\t\t\t\t<ion-select-option value=\"\" selected>--Select--</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"DPR\">DPR</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"OPENING CLOSING\">OPENING CLOSING</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"PENDING STATIONS\">PENDING STATIONS</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"REMARK HISTORY\">REMARK HISTORY</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"REJECT STATION HISTORY\">REJECT STATION HISTORY</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"JUMP READING\">JUMP READING</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"JMR REPORT\" *ngIf=\"JMRReportVisibility\">JMR REPORT</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"DPR SUBMISSION REPORT\">DPR SUBMISSION REPORT</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"CR SUBMISSION REPORT\">CR SUBMISSION REPORT</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Region</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Region</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"selectRegion\"\r\n\t\t\t\t\t\t(ionChange)=\"onRegionSelect($event.detail.value)\" [disabled]=\"IsRegionDisable\">\r\n\t\t\t\t\t\t<ion-select-option value=\"All\" selected>All</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of RegionList\" [value]=\"itm.RegionName\">{{itm.RegionName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Station</ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Station</ion-label>\r\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select One\" name=\"Station\"\r\n\t\t\t\t\t\t(change)=\"onStationSelect($event.detail.value)\" [disabled]=\"IsStationDisable\">\r\n\t\t\t\t\t\t<ion-select-option value=\"\" selected>All</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of StationList\" [value]=\"itm.StationId\">{{itm.StationName}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/CO/dpr-report-mgt/dpr-report-mgt-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/CO/dpr-report-mgt/dpr-report-mgt-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DprReportMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprReportMgtPageRoutingModule", function() { return DprReportMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dpr_report_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dpr-report-mgt.page */ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.ts");




const routes = [
    {
        path: '',
        component: _dpr_report_mgt_page__WEBPACK_IMPORTED_MODULE_3__["DprReportMgtPage"]
    }
];
let DprReportMgtPageRoutingModule = class DprReportMgtPageRoutingModule {
};
DprReportMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DprReportMgtPageRoutingModule);



/***/ }),

/***/ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.module.ts":
/*!************************************************************!*\
  !*** ./src/app/CO/dpr-report-mgt/dpr-report-mgt.module.ts ***!
  \************************************************************/
/*! exports provided: DprReportMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprReportMgtPageModule", function() { return DprReportMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dpr_report_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dpr-report-mgt-routing.module */ "./src/app/CO/dpr-report-mgt/dpr-report-mgt-routing.module.ts");
/* harmony import */ var _dpr_report_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dpr-report-mgt.page */ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.ts");







let DprReportMgtPageModule = class DprReportMgtPageModule {
};
DprReportMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dpr_report_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["DprReportMgtPageRoutingModule"]
        ],
        declarations: [_dpr_report_mgt_page__WEBPACK_IMPORTED_MODULE_6__["DprReportMgtPage"]]
    })
], DprReportMgtPageModule);



/***/ }),

/***/ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.scss":
/*!************************************************************!*\
  !*** ./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NPL2Rwci1yZXBvcnQtbWd0L2Rwci1yZXBvcnQtbWd0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.ts ***!
  \**********************************************************/
/*! exports provided: DprReportMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprReportMgtPage", function() { return DprReportMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let DprReportMgtPage = class DprReportMgtPage {
    constructor(formBuilder, router, activatedroute, datepipe, commonServices, menu) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.datepipe = datepipe;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dsaData = { selcteddate: "" };
        this.IsRegionSelected = false;
        this.selectedRegion = 'All';
        this.ReportFlag = localStorage.getItem('DepartmentCode');
        this.errorFound = true;
        this.IsRegionDisable = false;
        this.IsStationDisable = false;
        this.IsDatesDisable = false;
        this.LoginID = 'Admin'; //this.objCook.get('UID');
        this.dateRange = false;
        this.secondMaxDate = new Date().toISOString();
        this.JMRReportVisibility = false;
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.ControlRoomCode = localStorage.getItem('Loginidd');
        if (this.ControlRoomCode.toLowerCase().indexOf('cng') > -1) {
            this.JMRReportVisibility = false;
        }
        else if (this.ControlRoomCode.toLowerCase().indexOf('cr') > -1) {
            this.JMRReportVisibility = true;
        }
        else if (this.ControlRoomCode.toLowerCase().indexOf('admin') > -1) {
            this.JMRReportVisibility = false;
        }
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.dsaData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            const dt = new Date(this.currDate);
            // IOS Comment
            // this.latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.dsaData.selcteddate = this.latest_date;
            //IOS Add
            this.dsaData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        this.dateFrom = this.dsaData.selcteddate;
        this.dateTo = this.dsaData.selcteddate;
        this.GetRegionByDept();
        this.commonServices.MasterCompDisplay.emit(true);
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    OnDateChnagefrom(val) {
        var self = this;
        const dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IOS Comment
        // self.dateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        self.checkdifference(self.dateFrom, self.dateTo);
    }
    OnDateChnageTo(val) {
        var self = this;
        const dt = new Date(val);
        //IOS Comment
        // self.dateTo = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        self.checkdifference(self.dateFrom, self.dateTo);
    }
    OnReportChnage(evt) {
        var self = this;
        self.selectedReport = evt.detail.value;
        if (self.selectedReport == "DPR") {
            self.IsRegionDisable = true;
            self.IsStationDisable = true;
            self.IsDatesDisable = true;
        }
        else if (self.selectedReport == "PENDING STATIONS") {
            self.IsRegionDisable = true;
            self.IsStationDisable = true;
            self.IsDatesDisable = false;
        }
        else if (self.selectedReport == "JMR REPORT") {
            self.IsRegionDisable = true;
            self.IsStationDisable = true;
            self.IsDatesDisable = false;
        }
        else if (self.selectedReport == "DPR SUBMISSION REPORT") {
            self.IsRegionDisable = true;
            self.IsStationDisable = true;
            self.IsDatesDisable = false;
        }
        else if (self.selectedReport == "CR SUBMISSION REPORT") {
            self.IsRegionDisable = true;
            self.IsStationDisable = true;
            self.IsDatesDisable = false;
        }
        else {
            self.IsRegionDisable = false;
            self.IsStationDisable = false;
            self.IsDatesDisable = false;
        }
    }
    onRegionSelect(val) {
        var self = this;
        self.selectedRegion = val;
        if (self.selectedRegion != "All") {
            self.IsStationDisable = false;
            self.commonServices.postwithservice("GetStationsByAdmin", { ControlRoomCode: self.ControlRoomCode,
                Region: self.selectedRegion, Flag: self.ReportFlag }).subscribe((resp) => {
                self.StationList = JSON.parse(resp).Table;
                //this.selectedStation=JSON.parse(resp).Table[0].StationId;
            }, (error) => {
                self.commonServices.presentToast('Something went wrong.');
            });
        }
        else {
            self.IsStationDisable = true;
        }
    }
    GetRegionByDept() {
        var self = this;
        // self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetDashBoardCO", { LoginId: self.ControlRoomCode }).subscribe((response) => {
            const data = JSON.parse(response);
            console.log(data);
            const data2 = data;
            if (data2.Table1.length > 0) {
                self.RegionList = data2.Table1;
                console.log(this.RegionList, "RegionlistDpr");
            }
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.loadingDismiss();
            self.commonServices.presentToast('Something went wrong.');
        });
    }
    onStationSelect(val) {
        var self = this;
        self.selectedStation = val;
    }
    GetExportDPRreports() {
        var self = this;
        if (this.ValidationReports()) {
            const obj = {
                LoginID: self.LoginID,
                ControlRoomCode: self.ControlRoomCode,
                flag: 'Export',
                // FromDate: self.dateFrom,
                // ToDate: self.dateTo,
                FromDate: this.datepipe.transform(self.dateFrom, 'dd/MMM/yyyy'),
                ToDate: this.datepipe.transform(self.dateTo, 'dd/MMM/yyyy'),
                Region: (self.selectedRegion === undefined) ? "" : self.selectedRegion,
                StationId: (self.selectedStation == 'All' || (self.selectedStation) === undefined) ? '0' : self.selectedStation,
                SelectedDate: self.CurrentDate
            };
            if (self.selectedReport == "DPR") {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("DprExcel", obj).subscribe((resp) => {
                    const data = JSON.parse(resp);
                    if (JSON.parse(resp).FileName != '') {
                        if (JSON.parse(resp).errMsg == 'success') {
                            window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                    }
                    else {
                        self.commonServices.presentToast("No Data found.");
                    }
                    self.commonServices.loadingDismiss();
                }, (error) => {
                    self.commonServices.presentToast('Something went wrong.');
                    self.commonServices.loadingDismiss();
                });
            }
            else if (self.selectedReport == "PENDING STATIONS") {
                self.commonServices.loadingPresent();
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.postwithservice("ExportPendingStation", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "OPENING CLOSING") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportGetOpeningClosing", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "OPENING");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "REMARK HISTORY") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportRemarkHistory", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportRemarkHistory");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "REJECT STATION HISTORY") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportRejectStationHistory", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportRejectStationHistory");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "JUMP READING") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportJumpReport", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportJumpReport");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "JMR REPORT") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportJMRReport", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportJMRReport");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "DPR SUBMISSION REPORT") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportDPRSubmissionReport", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportDPRSubmissionReport");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
            else if (self.selectedReport == "CR SUBMISSION REPORT") {
                if (self.dateFrom != null && self.dateTo != null) {
                    self.commonServices.loadingPresent();
                    self.commonServices.postwithservice("ExportCRSubmissionReport", obj).subscribe((resp) => {
                        const data = JSON.parse(resp);
                        console.log(data, "ExportCRSubmissionReport");
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = self.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                self.commonServices.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            self.commonServices.presentToast("No Data found.");
                        }
                        self.commonServices.loadingDismiss();
                    }, (error) => {
                        self.commonServices.presentToast('Something went wrong.');
                        self.commonServices.loadingDismiss();
                    });
                }
                else {
                    self.commonServices.presentToast('Please Select Reporting Date.');
                }
            }
        }
    }
    ValidationReports() {
        var self = this;
        this.errorFound = true;
        var d1 = new Date(Date.parse(self.dateFrom));
        var d2 = new Date(Date.parse(self.dateTo));
        if ((d1 > d2)) {
            self.commonServices.presentToast('From Date cant be greater than To Date.');
            self.errorFound = false;
        }
        if (self.selectedReport == "" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(self.selectedReport)) {
            self.commonServices.presentToast('Please select Report.');
            self.errorFound = false;
        }
        return self.errorFound;
    }
    checkdifference(dateFrom, dateTo) {
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
    }
};
DprReportMgtPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
DprReportMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dpr-report-mgt',
        template: __webpack_require__(/*! raw-loader!./dpr-report-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.html"),
        styles: [__webpack_require__(/*! ./dpr-report-mgt.page.scss */ "./src/app/CO/dpr-report-mgt/dpr-report-mgt.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], DprReportMgtPage);



/***/ })

}]);
//# sourceMappingURL=CO-dpr-report-mgt-dpr-report-mgt-module-es2015.js.map