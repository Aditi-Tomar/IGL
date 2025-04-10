(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-apdate-package-add-apdate-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"package1\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='addpage'\" class=\"text_white\">Add Package</ion-text>\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='updatepage'\" class=\"text_white\">Update Package</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdatepack()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationName}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Package Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PackageCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Package Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PackageName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Package Maker <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PackageMake\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Package Capacity <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PackageCapacity\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Prime Mover <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"PrimeMover\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of PrimeMover\" [value]=\"itm.PMName\">{{itm.PMName}}\r\n\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Vent Flow <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"inp_control height_auto\">\r\n\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t<ion-radio-group name=\"StatusFlagVentFlow\" (ionChange)=\"statusChange($event)\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"StatusFlagVentFlow\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Yes</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"1\" checked></ion-radio>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>No</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"0\"></ion-radio>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</ion-radio-group>\r\n\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Description</ion-label>\r\n\t\t\t\t\t<ion-textarea class=\"inp_control txtarea_h\" formControlName=\"Description\"></ion-textarea>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddApdatePackagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdatePackagePageRoutingModule", function() { return AddApdatePackagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_apdate_package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-apdate-package.page */ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.ts");




var routes = [
    {
        path: '',
        component: _add_apdate_package_page__WEBPACK_IMPORTED_MODULE_3__["AddApdatePackagePage"]
    }
];
var AddApdatePackagePageRoutingModule = /** @class */ (function () {
    function AddApdatePackagePageRoutingModule() {
    }
    AddApdatePackagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddApdatePackagePageRoutingModule);
    return AddApdatePackagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddApdatePackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdatePackagePageModule", function() { return AddApdatePackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_apdate_package_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-apdate-package-routing.module */ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package-routing.module.ts");
/* harmony import */ var _add_apdate_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-apdate-package.page */ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.ts");







var AddApdatePackagePageModule = /** @class */ (function () {
    function AddApdatePackagePageModule() {
    }
    AddApdatePackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_apdate_package_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddApdatePackagePageRoutingModule"]
            ],
            declarations: [_add_apdate_package_page__WEBPACK_IMPORTED_MODULE_6__["AddApdatePackagePage"]]
        })
    ], AddApdatePackagePageModule);
    return AddApdatePackagePageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n\n.height_auto {\n  height: auto;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLXBhY2thZ2UvYWRkLWFwZGF0ZS1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLXBhY2thZ2UvYWRkLWFwZGF0ZS1wYWNrYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUksWUFBQTtBQ0NKOztBRENBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLXBhY2thZ2UvYWRkLWFwZGF0ZS1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaGVpZ2h0X2F1dG9cclxue1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbn1cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaGVpZ2h0X2F1dG8ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AddApdatePackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdatePackagePage", function() { return AddApdatePackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





var AddApdatePackagePage = /** @class */ (function () {
    function AddApdatePackagePage(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.PackageId = '';
        this.packlist = '';
        this.SelectedPrimeMover = '';
        this.PrimeMover = [
            { PMName: 'Engine', value: 'E' },
            { PMName: 'Motor', value: 'M' },
        ];
        this.fiterBox = false;
        this.filterBoxFlag = 0;
        this.StatusFlagVentFlow = '1';
        this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.userid = localStorage.getItem("UID");
        this.addupdateForm = formBuilder.group({
            StationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PackageCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PackageName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PackageMake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PackageCapacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PrimeMover: [this.PrimeMover, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoginId: this.userid,
            // status: this.status,
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddApdatePackagePage.prototype.ngAfterContentInit = function () {
        this.updatepackage();
    };
    AddApdatePackagePage.prototype.ngOnInit = function () {
        // if(this.pageFlag == 'updatepage'){
        this.packlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('packlist'));
        // }
        this.getStationList();
    };
    AddApdatePackagePage.prototype.statusChange = function (val) {
        this.StatusFlagVentFlow = val.detail.value;
    };
    AddApdatePackagePage.prototype.updatepackage = function () {
        var self = this;
        if (self.pageFlag == "updatepage" && self.packlist != "" && self.packlist != undefined && self.packlist != null) {
            self.addupdateForm = self.formBuilder.group({
                StationCode: [self.packlist.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PackageCode: [self.packlist.PackageCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PackageName: [self.packlist.PackageName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PackageMake: [self.packlist.PackageMake, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PackageCapacity: [self.packlist.PackageCapacity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PrimeMover: [self.packlist.PrimeMover, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Description: [self.packlist.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LoginId: self.userid,
                // status: self.status,
                stCodeMy: [self.packlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.packlist.status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
            if (self.packlist.IsVentFlow == 'Yes') {
                this.StatusFlagVentFlow = '1';
            }
            else {
                this.StatusFlagVentFlow = '0';
            }
        }
        if (self.pageFlag == "addpage" && self.packlist != null && self.packlist.StationCode != '') {
            self.addupdateForm.patchValue({
                StationCode: self.addupdateForm.value.StationCode,
                stCodeMy: self.addupdateForm.value.StationName
            });
        }
    };
    AddApdatePackagePage.prototype.getStationList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetPackageMaster", { Status: "" }).subscribe(function (res) {
            var packageRes = JSON.parse(res);
            if (packageRes != "" && packageRes != undefined && packageRes != null) {
                self.listStation = packageRes.Table1;
                self.items = self.listStation;
                console.log(self.listStation);
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
    AddApdatePackagePage.prototype.insertUpdatepack = function () {
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
            self.PackageId = self.packlist.PackageId;
            self.obj = {
                PackageId: (self.flag == 'U') ? self.PackageId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                PackageCode: self.addupdateForm.value.PackageCode,
                PackageName: self.addupdateForm.value.PackageName,
                PackageMake: self.addupdateForm.value.PackageMake,
                PackageCapacity: self.addupdateForm.value.PackageCapacity,
                PrimeMover: self.addupdateForm.value.PrimeMover,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                // status: self.status,
                status: statusToggle,
                IsVentFlow: this.StatusFlagVentFlow
            };
            if (self.ValidationCRoom()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("updatePackageMaster", self.obj).subscribe(function (res) {
                    self.packRes = (JSON.parse(res));
                    console.log(self.packRes);
                    if (self.packRes.Status == "Data updated successfully.") {
                        self.commonServices.presentToast(self.packRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/package1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast("Something went wrong.");
                    }
                    self.commonServices.loadingDismiss();
                }, function (error) {
                    self.commonServices.presentToast("Something went wrong.");
                    self.commonServices.loadingDismiss();
                });
            }
        }
        else {
            self.title = 'Add';
            self.flag = 'I';
            self.obj = {
                PackageId: (self.flag == 'U') ? self.PackageId : '0',
                StationCode: self.addupdateForm.value.StationCode,
                PackageCode: self.addupdateForm.value.PackageCode,
                PackageName: self.addupdateForm.value.PackageName,
                PackageMake: self.addupdateForm.value.PackageMake,
                PackageCapacity: self.addupdateForm.value.PackageCapacity,
                PrimeMover: self.addupdateForm.value.PrimeMover,
                Description: self.addupdateForm.value.Description,
                LoginId: self.userid,
                // status: self.status,
                status: statusToggle,
                IsVentFlow: this.StatusFlagVentFlow
            };
            if (self.ValidationCRoom()) {
                self.commonServices.loadingPresent();
                self.commonServices.postwithservice("insertPackageMaster", self.obj).subscribe(function (res) {
                    self.packRes = (JSON.parse(res));
                    console.log(self.packRes);
                    if (self.packRes.Status == "Data inserted successfully.") {
                        self.commonServices.presentToast(self.packRes.Status);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/package1']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast("Something went wrong.");
                    }
                    self.commonServices.loadingDismiss();
                }, function (error) {
                    self.commonServices.presentToast("Something went wrong.");
                    self.commonServices.loadingDismiss();
                });
            }
        }
    };
    AddApdatePackagePage.prototype.ValidationCRoom = function () {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regIntegers = /^[1-9]\d*$/;
        if (this.addupdateForm.value.StationCode == '' || this.addupdateForm.value.StationCode == '--Select Station--') {
            this.commonServices.presentToast('Station must be selected.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PackageCode == '') {
            this.commonServices.presentToast('Package code must be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PackageName == '') {
            this.commonServices.presentToast('Please enter Package Name.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PackageMake == '') {
            this.commonServices.presentToast('Please enter Package Maker.');
            this.errorFound = false;
        }
        else if (!re.test(this.addupdateForm.value.PackageMake)) {
            this.commonServices.presentToast('Invalid Package Maker.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PackageCapacity == '0' || this.addupdateForm.value.PackageCapacity == '') {
            this.commonServices.presentToast('Please enter the Package Capacity.');
            this.addupdateForm.value.errorFound = false;
        }
        else if (regIntegers.test(this.addupdateForm.value.PackageCapacity) == false) {
            this.commonServices.presentToast('only positive value allowed in Package Capacity.');
            this.errorFound = false;
        }
        else if (parseFloat(this.addupdateForm.value.PackageCapacity) < 0) {
            this.commonServices.presentToast('Package Capacity must be Positive.');
            this.errorFound = false;
        }
        else if (regexNumeric.test(this.addupdateForm.value.PackageCapacity) == false) {
            this.commonServices.presentToast('Only numeric value allowed for reading.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PrimeMover == '' || this.addupdateForm.value.PrimeMover == '--Select--') {
            this.commonServices.presentToast('Please select the Prime Mover.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    AddApdatePackagePage.prototype.filterBoxShow = function (itm) {
        if (this.filterBoxFlag == 0) {
            this.fiterBox = true;
            this.filterBoxFlag = 1;
        }
        else {
            this.fiterBox = false;
            this.filterBoxFlag = 0;
            if (this.packlist != null && this.pageFlag == 'updatepage') {
                this.packlist.StationName = itm.StationName;
                this.packlist.StationCode = itm.StationCode;
            }
            else {
                this.addupdateForm.value.StationCode = itm.StationCode;
                this.addupdateForm.value.StationName = itm.StationName;
                this.packlist = 0;
            }
            this.updatepackage();
            this.getStationList();
        }
    };
    AddApdatePackagePage.prototype.onSearchTerm = function (ev) {
        this.items = this.listStation;
        var val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (term) {
                return term.StationName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    };
    AddApdatePackagePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddApdatePackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-apdate-package',
            template: __webpack_require__(/*! raw-loader!./add-apdate-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.html"),
            styles: [__webpack_require__(/*! ./add-apdate-package.page.scss */ "./src/app/HO/redirected_pages/add-apdate-package/add-apdate-package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddApdatePackagePage);
    return AddApdatePackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-apdate-package-add-apdate-package-module-es5.js.map