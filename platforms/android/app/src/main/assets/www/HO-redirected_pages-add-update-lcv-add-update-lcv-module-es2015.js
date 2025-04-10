(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-lcv-add-update-lcv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"lcv1\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='addlcv'\">Add LCV</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag=='updatelcv'\">Update LCV</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateLcv()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationName}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>LCV Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"LcvCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>LCV Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"LcvName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Description</ion-label>\r\n\t\t\t\t\t<ion-textarea class=\"inp_control txtarea_h\" formControlName=\"Description\"></ion-textarea>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddUpdateLcvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateLcvPageRoutingModule", function() { return AddUpdateLcvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_update_lcv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-lcv.page */ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.ts");




const routes = [
    {
        path: '',
        component: _add_update_lcv_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateLcvPage"]
    }
];
let AddUpdateLcvPageRoutingModule = class AddUpdateLcvPageRoutingModule {
};
AddUpdateLcvPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUpdateLcvPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUpdateLcvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateLcvPageModule", function() { return AddUpdateLcvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-lcv-routing.module */ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv-routing.module.ts");
/* harmony import */ var _add_update_lcv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-lcv.page */ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.ts");







let AddUpdateLcvPageModule = class AddUpdateLcvPageModule {
};
AddUpdateLcvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_update_lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateLcvPageRoutingModule"]
        ],
        declarations: [_add_update_lcv_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateLcvPage"]]
    })
], AddUpdateLcvPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWxjdi9hZGQtdXBkYXRlLWxjdi5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL3JlZGlyZWN0ZWRfcGFnZXMvYWRkLXVwZGF0ZS1sY3YvYWRkLXVwZGF0ZS1sY3YucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2FkZC11cGRhdGUtbGN2L2FkZC11cGRhdGUtbGN2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaG9tZV9idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyYTJhMmE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.ts ***!
  \***************************************************************************/
/*! exports provided: AddUpdateLcvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateLcvPage", function() { return AddUpdateLcvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





let AddUpdateLcvPage = class AddUpdateLcvPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.LCVId = '';
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
            LcvCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LcvName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoginId: this.userid,
            // status: this.status,
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        this.updatemLcv();
    }
    ngOnInit() {
        this.lcvlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('lcvlist'));
        this.gettationList();
    }
    updatemLcv() {
        var self = this;
        if (self.pageFlag == "updatelcv" && self.lcvlist != "" && self.lcvlist != undefined && self.lcvlist != null) {
            self.addupdateForm = self.formBuilder.group({
                StationCode: [self.lcvlist.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LcvCode: [self.lcvlist.LcvCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LcvName: [self.lcvlist.LcvName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Description: [self.lcvlist.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LoginId: this.userid,
                // status: this.status,
                stCodeMy: [self.lcvlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.lcvlist.status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
        if (self.pageFlag == "addlcv" && self.lcvlist != null && self.lcvlist.StationCode != '') {
            self.addupdateForm.patchValue({
                StationCode: self.addupdateForm.value.StationCode,
                stCodeMy: self.addupdateForm.value.StationName
            });
        }
    }
    gettationList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetMeterSkidMaster", { Status: "" }).subscribe((res) => {
            var lcvRes = JSON.parse(res);
            self.listStation = lcvRes.Table1;
            console.log(self.listStation);
            self.items = self.listStation;
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    insertUpdateLcv() {
        var self = this;
        var statusToggle;
        if (self.status == false) {
            // self.status = 2;
            statusToggle = 1;
        }
        else {
            // self.status = 1;
            statusToggle = 0;
        }
        self.errorFound = true;
        if (self.pageFlag == "updatelcv") {
            self.title = 'Update';
            self.flag = 'U';
            self.LCVId = self.lcvlist.LcvId;
            self.obj = {
                LcvId: (self.flag == 'U') ? self.LCVId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                LcvCode: self.addupdateForm.value.LcvCode,
                LcvName: self.addupdateForm.value.LcvName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                // status: self.status
                status: statusToggle
            };
            if (self.ValidationLCV()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("updateLcvMaster", self.obj).subscribe((res) => {
                    self.lcvRes = (JSON.parse(res));
                    console.log(self.lcvRes);
                    if (self.lcvRes.Status == "Data updated successfully.") {
                        self.commonServices.presentToast(self.lcvRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/lcv1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast(self.lcvRes.Status);
                    }
                    self.commonServices.loadingDismiss();
                }, (error) => {
                    self.commonServices.presentToast(self.lcvRes.Status);
                    self.commonServices.loadingDismiss();
                });
            }
        }
        else {
            self.title = 'Add';
            self.flag = 'I';
            self.obj = {
                LcvId: (self.flag == 'U') ? self.LCVId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                LcvCode: self.addupdateForm.value.LcvCode,
                LcvName: self.addupdateForm.value.LcvName,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                status: statusToggle
            };
            if (self.ValidationLCV()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("insertLcvMaster", self.obj).subscribe((res) => {
                    self.lcvRes = (JSON.parse(res));
                    console.log(self.lcvRes);
                    if (self.lcvRes.Status == "Data inserted successfully.") {
                        self.commonServices.presentToast(self.lcvRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/lcv1']);
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
    ;
    ValidationLCV() {
        if (this.addupdateForm.value.StationCode == '') {
            this.commonServices.presentToast('Station must be selected.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.LcvCode == '') {
            this.commonServices.presentToast('Please enter the Lcv Code.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.LcvName == '') {
            this.commonServices.presentToast('Please enter the Lcv Name.');
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
            if (this.lcvlist != null && this.pageFlag == 'updatelcv') {
                this.lcvlist.StationName = itm.StationName;
                this.lcvlist.StationCode = itm.StationCode;
            }
            else {
                this.addupdateForm.value.StationCode = itm.StationCode;
                this.addupdateForm.value.StationName = itm.StationName;
                this.lcvlist = 0;
            }
            this.updatemLcv();
            this.gettationList();
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
AddUpdateLcvPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddUpdateLcvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-update-lcv',
        template: __webpack_require__(/*! raw-loader!./add-update-lcv.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.html"),
        styles: [__webpack_require__(/*! ./add-update-lcv.page.scss */ "./src/app/HO/redirected_pages/add-update-lcv/add-update-lcv.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddUpdateLcvPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-lcv-add-update-lcv-module-es2015.js.map