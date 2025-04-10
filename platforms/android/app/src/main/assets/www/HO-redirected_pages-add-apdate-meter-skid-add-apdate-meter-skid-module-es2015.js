(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-apdate-meter-skid-add-apdate-meter-skid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"meter-skid1\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='addsmkid'\">Add Meter Skid</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='updatemkid'\">Update Meter Skid</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateMeterSkid()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationName}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Meter Skid Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"MeterSkidCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Meter Skid Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"MeterSkidName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Description </ion-label>\r\n\t\t\t\t\t<ion-textarea class=\"inp_control txtarea_h\" formControlName=\"Description\"></ion-textarea>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddApdateMeterSkidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateMeterSkidPageRoutingModule", function() { return AddApdateMeterSkidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_apdate_meter_skid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-apdate-meter-skid.page */ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.ts");




const routes = [
    {
        path: '',
        component: _add_apdate_meter_skid_page__WEBPACK_IMPORTED_MODULE_3__["AddApdateMeterSkidPage"]
    }
];
let AddApdateMeterSkidPageRoutingModule = class AddApdateMeterSkidPageRoutingModule {
};
AddApdateMeterSkidPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddApdateMeterSkidPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddApdateMeterSkidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateMeterSkidPageModule", function() { return AddApdateMeterSkidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_apdate_meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-apdate-meter-skid-routing.module */ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid-routing.module.ts");
/* harmony import */ var _add_apdate_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-apdate-meter-skid.page */ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.ts");







let AddApdateMeterSkidPageModule = class AddApdateMeterSkidPageModule {
};
AddApdateMeterSkidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_apdate_meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddApdateMeterSkidPageRoutingModule"]
        ],
        declarations: [_add_apdate_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__["AddApdateMeterSkidPage"]]
    })
], AddApdateMeterSkidPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLW1ldGVyLXNraWQvYWRkLWFwZGF0ZS1tZXRlci1za2lkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLW1ldGVyLXNraWQvYWRkLWFwZGF0ZS1tZXRlci1za2lkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLW1ldGVyLXNraWQvYWRkLWFwZGF0ZS1tZXRlci1za2lkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaG9tZV9idXR0b25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzJhMmEyYTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddApdateMeterSkidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateMeterSkidPage", function() { return AddApdateMeterSkidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





let AddApdateMeterSkidPage = class AddApdateMeterSkidPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.MeterSkidId = '';
        this.MSkidId = '';
        this.fiterBox = false;
        this.filterBoxFlag = 0;
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.userid = localStorage.getItem("UID");
        this.addupdateForm = formBuilder.group({
            StationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            MeterSkidCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            MeterSkidName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoginId: this.userid,
            // status: this.status,
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        this.updatemskid();
    }
    ngOnInit() {
        this.mskidlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('mskidlist'));
        this.getMeterstationList();
    }
    updatemskid() {
        var self = this;
        if (self.pageFlag == "updatemkid" && self.mskidlist != "" && self.mskidlist != undefined && self.mskidlist != null) {
            self.addupdateForm = self.formBuilder.group({
                StationCode: [self.mskidlist.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                MeterSkidCode: [self.mskidlist.MeterSkidCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                MeterSkidName: [self.mskidlist.MeterSkidName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Description: [self.mskidlist.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LoginId: self.userid,
                // status: self.status,
                stCodeMy: [self.mskidlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.mskidlist.Status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
        if (self.pageFlag == "addsmkid" && self.mskidlist != null && self.mskidlist.StationCode != '') {
            this.addupdateForm.patchValue({
                StationCode: self.addupdateForm.value.StationCode,
                stCodeMy: self.addupdateForm.value.StationName
            });
        }
    }
    getMeterstationList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetMeterSkidMaster", { Status: "" }).subscribe((res) => {
            var MeterSkidRes = JSON.parse(res);
            self.listStation = MeterSkidRes.Table1;
            console.log(self.listStation);
            self.items = self.listStation;
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    insertUpdateMeterSkid() {
        var self = this;
        var statusToggle = 1;
        if (self.status == false) {
            // self.status = 2;
            statusToggle = 1;
        }
        else {
            // self.status = 1;
            statusToggle = 0;
        }
        self.errorFound = true;
        if (self.pageFlag == "updatemkid") {
            self.title = 'Update';
            self.flag = 'U';
            self.MSkidId = self.mskidlist.MeterSkidId;
            self.obj = {
                MeterSkidId: (self.flag == 'U') ? self.MSkidId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                MeterSkidCode: self.addupdateForm.value.MeterSkidCode,
                MeterSkidName: self.addupdateForm.value.MeterSkidName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                status: statusToggle
            };
            if (self.ValidationMeterSkid()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("updateMeterSkidMaster", self.obj).subscribe((res) => {
                    self.mskidRes = (JSON.parse(res));
                    console.log(self.mskidRes);
                    if (self.mskidRes.Status == "Data updated successfully.") {
                        self.commonServices.presentToast(self.mskidRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/meter-skid1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast(self.mskidRes.Status);
                    }
                    self.commonServices.loadingDismiss();
                }, (error) => {
                    self.commonServices.presentToast("Something went wrong.");
                    self.commonServices.loadingDismiss();
                });
            }
        }
        else {
            self.title = 'Add';
            self.flag = 'I';
            self.obj = {
                MeterSkidId: (self.flag == 'U') ? self.MSkidId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                MeterSkidCode: self.addupdateForm.value.MeterSkidCode,
                MeterSkidName: self.addupdateForm.value.MeterSkidName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                status: statusToggle
            };
            if (self.ValidationMeterSkid()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("insertMeterSkidMaster", self.obj).subscribe((res) => {
                    self.mskidRes = (JSON.parse(res));
                    console.log(self.mskidRes);
                    if (self.mskidRes.Status == "Data inserted successfully.") {
                        self.commonServices.presentToast(self.mskidRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/meter-skid1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast("Something went wrong.");
                    }
                    self.commonServices.loadingDismiss();
                }, (error) => {
                    self.commonServices.presentToast("Something went wrong.");
                    self.commonServices.loadingDismiss();
                });
            }
        }
    }
    ValidationMeterSkid() {
        var re = new RegExp(/^[0-9]*$/gm);
        if (this.addupdateForm.value.StationCode == '') {
            this.commonServices.presentToast('Station must be selected.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.MeterSkidCode == '') {
            this.commonServices.presentToast('Meter Skid code must be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.MeterSkidName == '') {
            this.commonServices.presentToast('Meter Skid name must be entered.');
            this.errorFound = false;
        }
        else if (re.test(this.addupdateForm.value.MeterSkidName)) {
            this.commonServices.presentToast('Invalid Meter Skid name.');
            this.errorFound = false;
        }
        return this.errorFound;
    }
    filterBoxShow(itm) {
        if (this.filterBoxFlag == 0) {
            this.fiterBox = true;
            this.filterBoxFlag = 1;
        }
        else {
            this.fiterBox = false;
            this.filterBoxFlag = 0;
            if (this.mskidlist != null && this.pageFlag == 'updatemkid') {
                this.mskidlist.StationName = itm.StationName;
                this.mskidlist.StationCode = itm.StationCode;
            }
            else {
                this.addupdateForm.value.StationCode = itm.StationCode;
                this.addupdateForm.value.StationName = itm.StationName;
                this.mskidlist = 0;
            }
            this.updatemskid();
            this.getMeterstationList();
        }
    }
    onSearchTerm(ev) {
        this.items = this.listStation;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(term => {
                return term.StationName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    }
};
AddApdateMeterSkidPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddApdateMeterSkidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-apdate-meter-skid',
        template: __webpack_require__(/*! raw-loader!./add-apdate-meter-skid.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.html"),
        styles: [__webpack_require__(/*! ./add-apdate-meter-skid.page.scss */ "./src/app/HO/redirected_pages/add-apdate-meter-skid/add-apdate-meter-skid.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddApdateMeterSkidPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-apdate-meter-skid-add-apdate-meter-skid-module-es2015.js.map