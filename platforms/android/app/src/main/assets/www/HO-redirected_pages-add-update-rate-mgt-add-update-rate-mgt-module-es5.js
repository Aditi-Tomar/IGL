(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-rate-mgt-add-update-rate-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"pageFlag=='addpage'\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"rate-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Add Rate</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-header>\r\n\t<ion-toolbar color=\"dark_green\" *ngIf=\"pageFlag=='updatepage'\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"rate-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Update Rate</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateData()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Region <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"RegionId\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of dataRegionMaster\" [value]=\"itm.RegionId\">\r\n\t\t\t\t\t\t\t\t{{itm.RegionName}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Normal Rate ₹ / K.G <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"NormalRate\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Discounted Rate ₹ / K.G <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DisountedRate\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Effective Date <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<!-- <ion-datetime value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\" class=\"inp_control\" formControlName=\"EffectiveDate\"></ion-datetime> -->\r\n\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick inp_control\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [min]=\"minDateRate\" [max]=\"maxDaterate\"\r\n\t\t\t\t\t\tformControlName=\"EffectiveDate\" name=\"selcteddate\"\r\n\t\t\t\t\t\t(ionChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Effective Time <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select formControlName=\"EffectiveTime\">\r\n\t\t\t\t\t\t\t<!-- [compareWith]=\"compareWith\" -->\r\n\t\t\t\t\t\t\t<ion-select-option value=\"12:01 AM\">12:01 AM</ion-select-option>\r\n\t\t\t\t\t\t\t<ion-select-option value=\"06:00 AM\">06:00 AM</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddUpdateRateMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateRateMgtPageRoutingModule", function() { return AddUpdateRateMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_rate_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-rate-mgt.page */ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_rate_mgt_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateRateMgtPage"]
    }
];
var AddUpdateRateMgtPageRoutingModule = /** @class */ (function () {
    function AddUpdateRateMgtPageRoutingModule() {
    }
    AddUpdateRateMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdateRateMgtPageRoutingModule);
    return AddUpdateRateMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddUpdateRateMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateRateMgtPageModule", function() { return AddUpdateRateMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_rate_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-rate-mgt-routing.module */ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt-routing.module.ts");
/* harmony import */ var _add_update_rate_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-rate-mgt.page */ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.ts");







var AddUpdateRateMgtPageModule = /** @class */ (function () {
    function AddUpdateRateMgtPageModule() {
    }
    AddUpdateRateMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_rate_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateRateMgtPageRoutingModule"]
            ],
            declarations: [_add_update_rate_mgt_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateRateMgtPage"]]
        })
    ], AddUpdateRateMgtPageModule);
    return AddUpdateRateMgtPageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLXJhdGUtbWd0L2FkZC11cGRhdGUtcmF0ZS1tZ3QucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2FkZC11cGRhdGUtcmF0ZS1tZ3QvYWRkLXVwZGF0ZS1yYXRlLW1ndC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0hPL3JlZGlyZWN0ZWRfcGFnZXMvYWRkLXVwZGF0ZS1yYXRlLW1ndC9hZGQtdXBkYXRlLXJhdGUtbWd0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.ts ***!
  \*************************************************************************************/
/*! exports provided: AddUpdateRateMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateRateMgtPage", function() { return AddUpdateRateMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





var AddUpdateRateMgtPage = /** @class */ (function () {
    function AddUpdateRateMgtPage(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.rateDate = { selcteddate: "" };
        this.status = false;
        this.actionFlag = '';
        this.MinDate = '';
        this.Cdate = '';
        this.RateId = '';
        this.SelectedRateId = '';
        this.datePicker = '';
        this.minDateRate = new Date().toISOString();
        this.maxDaterate = new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.rateDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            var latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            this.rateDate.selcteddate = latest_date;
        }
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.userid = localStorage.getItem("UID");
        this.addupdateForm = formBuilder.group({
            RegionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            NormalRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DisountedRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            EffectiveDate: [this.rateDate.selcteddate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            UserId: this.userid,
            EffectiveTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddUpdateRateMgtPage.prototype.ngAfterContentInit = function () {
        this.getRateListById(this.RateId);
    };
    AddUpdateRateMgtPage.prototype.ngOnInit = function () {
        this.RateId = JSON.parse(this.activatedroute.snapshot.paramMap.get('RateId'));
        this.getRateListById(this.RateId);
        this.GetCdate();
    };
    AddUpdateRateMgtPage.prototype.getRateListById = function (RateId) {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'RateListById', Id: RateId })
            .subscribe(function (res) {
            if (JSON.parse(res).Table.length > 0) {
                var retData = JSON.parse(res).Table[0];
                _this.addupdateForm = self.formBuilder.group({
                    RegionId: [retData.RegionId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    NormalRate: [retData.NormalRate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    DisountedRate: [retData.DisountedRate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    EffectiveDate: [retData.EffectiveDate1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    UserId: _this.userid,
                    EffectiveTime: [retData.EffectiveTime, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                });
            }
            _this.dataRegionMaster = JSON.parse(res).Table1;
            _this.MinDate = JSON.parse(res).Table2[0].FMinDate;
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AddUpdateRateMgtPage.prototype.GetCdate = function () {
        var _this = this;
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'Cdate', Id: 0 }).subscribe(function (res) {
            _this.Cdate = JSON.parse(res).Table[0].Cdate;
        });
    };
    AddUpdateRateMgtPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        if (datePicker != "") {
            var dt = new Date(datePicker);
            var latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            this.rateDate.selcteddate = latest_date;
            //datePicker.open();
            // this.insertUpdateData();
        }
        else {
            var dt = new Date(this.addupdateForm.value.EffectiveDate);
            var latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            this.rateDate.selcteddate = latest_date;
        }
    };
    AddUpdateRateMgtPage.prototype.insertUpdateData = function () {
        var self = this;
        self.getSelectedDate(self.datePicker);
        if (self.RateId == '') {
            self.title = 'Add Rate';
            self.actionFlag = 'Add';
            self.SelectedRateId = '0';
        }
        else {
            self.title = 'Update Station';
            self.actionFlag = 'Update';
            self.SelectedRateId = self.RateId;
        }
        self.obj = {
            RateId: (self.actionFlag == 'Update') ? self.SelectedRateId : '0',
            RegionId: self.addupdateForm.value.RegionId,
            NormalRate: self.addupdateForm.value.NormalRate,
            DisountedRate: self.addupdateForm.value.DisountedRate,
            EffectiveDate: self.rateDate.selcteddate,
            UserId: self.userid,
            EffectiveTime: self.addupdateForm.value.EffectiveTime
        };
        self.errorFound = true;
        if (self.ValidationRate()) {
            self.commonServices.loadingPresent();
            self.commonServices.post("RateMaster", self.obj).subscribe(function (res) {
                self.RateRes = (JSON.parse(res));
                console.log(self.RateRes);
                if (self.RateRes.Table[0].Meaasge == "Rate inserted successfully.") {
                    self.commonServices.presentToast(self.RateRes.Table[0].Meaasge);
                    self.addupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/rate-management']);
                    }, 2000);
                }
                else if (self.RateRes.Table[0].Meaasge == "Rate updated successfully.") {
                    self.commonServices.presentToast(self.RateRes.Table[0].Meaasge);
                    self.addupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/rate-management']);
                    }, 2000);
                }
                else {
                    self.commonServices.presentToast(self.RateRes.Table[0].Meaasge);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateRateMgtPage.prototype.ValidationRate = function () {
        if (this.addupdateForm.value.RegionId == '') {
            this.commonServices.presentToast('Region must be selected.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.NormalRate == '') {
            this.commonServices.presentToast('Normal Rate must be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.DisountedRate == '') {
            this.commonServices.presentToast('Discounted Rate must be entered.');
            this.errorFound = false;
        }
        var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
        if (this.addupdateForm.value.NormalRate != '') {
            if (!isNaN(parseFloat(this.addupdateForm.value.NormalRate))) {
                if (parseFloat(this.addupdateForm.value.NormalRate) <= 0) {
                    this.commonServices.presentToast('Rate must be greater then zero');
                    this.errorFound = false;
                }
            }
            else {
                this.commonServices.presentToast('Please enter valid Normal Rate.');
                this.errorFound = false;
            }
        }
        if (this.addupdateForm.value.DisountedRate != '') {
            if (!isNaN(parseFloat(this.addupdateForm.value.DisountedRate))) {
                if (parseFloat(this.addupdateForm.value.DisountedRate) <= 0) {
                    this.commonServices.presentToast('Disounted Rate must be greater then zero');
                    this.errorFound = false;
                }
            }
            else {
                this.commonServices.presentToast('Please enter valid Discounted Rate.');
                this.errorFound = false;
            }
        }
        if (this.addupdateForm.value.DisountedRate != '' && this.addupdateForm.value.NormalRate != '') {
            if (parseFloat(this.addupdateForm.value.NormalRate) < parseFloat(this.addupdateForm.value.DisountedRate)) {
                this.commonServices.presentToast('Normal Rate must be greater/equal than discounted rate');
                this.errorFound = false;
            }
        }
        if (this.addupdateForm.value.EffectiveTime == '') {
            this.commonServices.presentToast('Effective Time must be Selected.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    AddUpdateRateMgtPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdateRateMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-rate-mgt',
            template: __webpack_require__(/*! raw-loader!./add-update-rate-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.html"),
            styles: [__webpack_require__(/*! ./add-update-rate-mgt.page.scss */ "./src/app/HO/redirected_pages/add-update-rate-mgt/add-update-rate-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdateRateMgtPage);
    return AddUpdateRateMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-rate-mgt-add-update-rate-mgt-module-es5.js.map