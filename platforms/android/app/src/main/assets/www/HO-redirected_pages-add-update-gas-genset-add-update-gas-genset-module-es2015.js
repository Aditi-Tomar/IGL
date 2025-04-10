(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-gas-genset-add-update-gas-genset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"gas-genset1\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='addpage'\">Add Gas Genset</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='updatepage'\">Update Gas Genset</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateData()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationName}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Gas Genset Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"GenSetCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Gas Genset Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"GenSetName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Description</ion-label>\r\n\t\t\t\t\t<ion-textarea class=\"inp_control txtarea_h\" formControlName=\"Description\"></ion-textarea>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddUpdateGasGensetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateGasGensetPageRoutingModule", function() { return AddUpdateGasGensetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_update_gas_genset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-gas-genset.page */ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.ts");




const routes = [
    {
        path: '',
        component: _add_update_gas_genset_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateGasGensetPage"]
    }
];
let AddUpdateGasGensetPageRoutingModule = class AddUpdateGasGensetPageRoutingModule {
};
AddUpdateGasGensetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUpdateGasGensetPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddUpdateGasGensetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateGasGensetPageModule", function() { return AddUpdateGasGensetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-gas-genset-routing.module */ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset-routing.module.ts");
/* harmony import */ var _add_update_gas_genset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-gas-genset.page */ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.ts");







let AddUpdateGasGensetPageModule = class AddUpdateGasGensetPageModule {
};
AddUpdateGasGensetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_update_gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateGasGensetPageRoutingModule"]
        ],
        declarations: [_add_update_gas_genset_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateGasGensetPage"]]
    })
], AddUpdateGasGensetPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWdhcy1nZW5zZXQvYWRkLXVwZGF0ZS1nYXMtZ2Vuc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWdhcy1nZW5zZXQvYWRkLXVwZGF0ZS1nYXMtZ2Vuc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWdhcy1nZW5zZXQvYWRkLXVwZGF0ZS1nYXMtZ2Vuc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddUpdateGasGensetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateGasGensetPage", function() { return AddUpdateGasGensetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





let AddUpdateGasGensetPage = class AddUpdateGasGensetPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.GenSetId = '';
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
            StationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            GenSetCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            GenSetName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoginId: this.userid,
            // status: this.status,
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        this.updateGset();
    }
    ngOnInit() {
        this.gsetlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('gsetlist'));
        this.getStationList();
    }
    updateGset() {
        var self = this;
        if (self.pageFlag == "updatepage" && self.gsetlist != "" && self.gsetlist != undefined && self.gsetlist != null) {
            self.addupdateForm = self.formBuilder.group({
                StationCode: [self.gsetlist.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                StationId: [self.gsetlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                GenSetCode: [self.gsetlist.GenSetCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                GenSetName: [self.gsetlist.GasGenSetName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Description: [self.gsetlist.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LoginId: this.userid,
                // status: this.status,
                stCodeMy: [self.gsetlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.gsetlist.status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
        // else if(self.gsetlist==null)
        // {
        //  return true;
        // }
        else if (self.gsetlist = !null && self.addupdateForm.value.StationCode != '') {
            // self.addupdateForm = self.formBuilder.group({
            //   StationCode: [self.addupdateForm.value.StationCode, Validators.required],
            //   // StationId: [self.gsetlist.StationId, Validators.required],
            //   // GenSetCode: [self.gsetlist.GenSetCode, Validators.required],
            //   // GenSetName: [self.gsetlist.GasGenSetName, Validators.required],
            //   // Description: [self.gsetlist.Description, Validators.required],
            //   // LoginId: this.userid,
            //   // // status: this.status,
            //   stCodeMy:[self.addupdateForm.value.StationName, Validators.required]
            // });
            self.addupdateForm.patchValue({
                StationCode: self.addupdateForm.value.StationCode,
                stCodeMy: self.addupdateForm.value.StationName
            });
        }
    }
    getStationList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetGensetMaster", { Status: "" }).subscribe((res) => {
            var gassetRes = JSON.parse(res);
            if (gassetRes != "" && gassetRes != undefined && gassetRes != null) {
                self.listStation = gassetRes.Table1;
                console.log(self.listStation);
                self.items = self.listStation;
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
    insertUpdateData() {
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
        if (self.pageFlag == "updatepage") {
            self.title = 'Update';
            self.flag = 'U';
            self.GenSetId = self.gsetlist.GenSetId;
            self.obj = {
                GenSetId: (self.flag == 'U') ? self.GenSetId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                //StationId: self.addupdateForm.value.StationId,
                GenSetCode: self.addupdateForm.value.GenSetCode,
                GenSetName: self.addupdateForm.value.GenSetName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                status: statusToggle,
            };
            if (self.ValidationGenSet()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("updateGensetMaster", self.obj).subscribe((res) => {
                    self.gsetRes = (JSON.parse(res));
                    console.log(self.gsetRes);
                    if (self.gsetRes.Status == "Data updated successfully.") {
                        self.commonServices.presentToast(self.gsetRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/gas-genset1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast(self.gsetRes.Status);
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
                GenSetId: (self.flag == 'U') ? self.GenSetId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                // StationId: self.addupdateForm.value.StationId,
                GenSetCode: self.addupdateForm.value.GenSetCode,
                GenSetName: self.addupdateForm.value.GenSetName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                status: statusToggle
            };
            if (self.ValidationGenSet()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("insertGensetMaster", self.obj).subscribe((res) => {
                    self.gsetRes = (JSON.parse(res));
                    console.log(self.gsetRes);
                    if (self.gsetRes.Status == "Data inserted successfully.") {
                        self.commonServices.presentToast(self.gsetRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/gas-genset1']);
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
    ValidationGenSet() {
        var Numreg = new RegExp(/^[0-9]*$/gm);
        var Streg = new RegExp(/^[a-zA-Z ]*$/);
        if (this.addupdateForm.value.StationCode == '') {
            this.commonServices.presentToast('Station must be selected.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.GenSetCode == '') {
            this.commonServices.presentToast('Please enter the GenSet Code.');
            this.errorFound = false;
        }
        else if (!Streg.test(this.addupdateForm.value.GenSetName)) {
            this.commonServices.presentToast('Invalid Genset Name.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.GenSetName == '') {
            this.commonServices.presentToast('Please enter the GenSet Name.');
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
            if (this.gsetlist != null && this.pageFlag == 'updatepage') {
                this.gsetlist.StationName = itm.StationName;
                this.gsetlist.StationCode = itm.StationCode;
                this.gsetlist.StationId = itm.StationId;
                console.log(this.addupdateForm.stCodeMy);
            }
            else {
                this.addupdateForm.value.StationCode = itm.StationCode;
                this.addupdateForm.value.StationName = itm.StationName;
            }
            this.updateGset();
            this.getStationList();
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
AddUpdateGasGensetPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddUpdateGasGensetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-update-gas-genset',
        template: __webpack_require__(/*! raw-loader!./add-update-gas-genset.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.html"),
        styles: [__webpack_require__(/*! ./add-update-gas-genset.page.scss */ "./src/app/HO/redirected_pages/add-update-gas-genset/add-update-gas-genset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddUpdateGasGensetPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-gas-genset-add-update-gas-genset-module-es2015.js.map