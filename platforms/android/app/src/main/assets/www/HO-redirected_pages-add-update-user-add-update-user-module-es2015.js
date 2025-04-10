(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-user-add-update-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-user/add-update-user.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-user/add-update-user.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"user-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='addpage'\" class=\"text_white\">Add User</ion-text>\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='updatepage'\" class=\"text_white\">Update User</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateData()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Login Id <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"LoginId\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Employee Id <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"EmployeeCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Email Id <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"EmailId\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"Name\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Password <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" type=\"Password\" formControlName=\"Password\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Confirm Password <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" type=\"password\" formControlName=\"ConfPassword\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Permission <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"PermissionId\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of listPermision\" [value]=\"itm.DepartmentId\"\r\n\t\t\t\t\t\t\t\t(ionChange)=\"onPermisionSelect($event)\">{{itm.DepartmentName}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationName}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-user/add-update-user-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-user/add-update-user-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddUpdateUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateUserPageRoutingModule", function() { return AddUpdateUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_update_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-user.page */ "./src/app/HO/redirected_pages/add-update-user/add-update-user.page.ts");




const routes = [
    {
        path: '',
        component: _add_update_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateUserPage"]
    }
];
let AddUpdateUserPageRoutingModule = class AddUpdateUserPageRoutingModule {
};
AddUpdateUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUpdateUserPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-user/add-update-user.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-user/add-update-user.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddUpdateUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateUserPageModule", function() { return AddUpdateUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-user-routing.module */ "./src/app/HO/redirected_pages/add-update-user/add-update-user-routing.module.ts");
/* harmony import */ var _add_update_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-user.page */ "./src/app/HO/redirected_pages/add-update-user/add-update-user.page.ts");







let AddUpdateUserPageModule = class AddUpdateUserPageModule {
};
AddUpdateUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_update_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateUserPageRoutingModule"]
        ],
        declarations: [_add_update_user_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateUserPage"]]
    })
], AddUpdateUserPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-user/add-update-user.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-user/add-update-user.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLXVzZXIvYWRkLXVwZGF0ZS11c2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLXVzZXIvYWRkLXVwZGF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLXVzZXIvYWRkLXVwZGF0ZS11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaG9tZV9idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyYTJhMmE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-user/add-update-user.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-user/add-update-user.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUpdateUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateUserPage", function() { return AddUpdateUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);






let AddUpdateUserPage = class AddUpdateUserPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.selectedUserId = '';
        this.IsStationDisable = true;
        this.listPermision = [];
        this.StationList = [];
        this.fiterBox = false;
        this.filterBoxFlag = 0;
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.userid = localStorage.getItem("UID");
        this.addupdateForm = formBuilder.group({
            EmployeeCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            LoginId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            EmailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ConfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            UserId: [this.userid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PermissionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // status:this.status,
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        this.updateItemList();
    }
    ngOnInit() {
        if (this.pageFlag == "updatepage") {
            this.Itemlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('itemList'));
        }
        this.getPermision();
    }
    updateItemList() {
        var self = this;
        if (self.pageFlag == "updatepage" && self.Itemlist != "" && self.Itemlist != undefined && self.Itemlist != null) {
            self.addupdateForm = self.formBuilder.group({
                EmployeeCode: [self.Itemlist.EmpCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                LoginId: [self.Itemlist.LoginId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                EmailId: [self.Itemlist.EmailId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Name: [self.Itemlist.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Password: [self.Itemlist.UserPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                ConfPassword: [self.Itemlist.UserPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                UserId: [self.Itemlist.UserId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PermissionId: [self.Itemlist.DepartmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                StationId: [self.Itemlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                // status:this.status,
                stCodeMy: [self.Itemlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.Itemlist.Status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
        if (self.pageFlag == "addpage" && self.Itemlist != null && self.Itemlist.StationCode != '') {
            self.addupdateForm.patchValue({
                StationCode: self.addupdateForm.value.StationCode,
                stCodeMy: self.addupdateForm.value.StationName
            });
        }
    }
    getPermision() {
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'PermisionType', Id: 0, Status: "" }).subscribe((res) => {
            self.listPermision = JSON.parse(res).Table;
            self.StationList = JSON.parse(res).Table1;
            console.log(self.listPermision);
            self.items = self.StationList;
            if (this.Itemlist != null && this.Itemlist != '') {
                let arr = self.StationList.filter(function (item) {
                    if (item.StationId == self.Itemlist.StationId) {
                        self.Itemlist.StationName = item.StationName;
                        self.updateItemList();
                    }
                });
                console.log(arr);
            }
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
        });
    }
    onPermisionSelect(val) {
        this.addupdateForm.value.PermissionId = val.deatils.value;
        if (this.addupdateForm.value.PermissionId == '5')
            this.IsStationDisable = false;
        else {
            this.IsStationDisable = true;
            this.addupdateForm.value.PermissionId = '';
        }
    }
    insertUpdateData() {
        var self = this;
        var statusToggle = 2;
        if (self.status == false) {
            // self.status = 2;
            statusToggle = 2;
        }
        else {
            // self.status = 1;
            statusToggle = 1;
        }
        self.errorFound = true;
        if (self.pageFlag == "updatepage") {
            self.title = 'Update';
            self.flag = 'U';
            self.selectedUserId = self.Itemlist.UserId;
            if (self.Itemlist.DepartmentCode == 'SOP') {
                self.IsStationDisable = false;
            }
            else {
                self.IsStationDisable = true;
            }
            self.obj = {
                Id: (self.flag == 'U') ? self.selectedUserId : '0',
                EmployeeCode: self.addupdateForm.value.EmployeeCode,
                LoginId: self.addupdateForm.value.LoginId,
                EmailId: self.addupdateForm.value.EmailId,
                Name: self.addupdateForm.value.Name,
                Password: self.addupdateForm.value.Password,
                UserId: self.Itemlist.UserId,
                PermissionId: self.addupdateForm.value.PermissionId,
                StationId: self.addupdateForm.value.StationId,
                status: statusToggle
            };
            if (self.ValidationUsers()) {
                self.commonServices.loadingPresent();
                self.commonServices.post("insertUpdateUserMaster", self.obj).subscribe((res) => {
                    self.GetRes = (JSON.parse(res));
                    console.log(self.GetRes);
                    if (self.GetRes.Table[0].Mesage == "User updated successfully.") {
                        self.commonServices.presentToast(self.GetRes.Table[0].Mesage);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/user-management']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast(self.GetRes.Table[0].Mesage);
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
                Id: (self.flag == 'U') ? self.selectedUserId : '0',
                EmployeeCode: self.addupdateForm.value.EmployeeCode,
                LoginId: self.addupdateForm.value.LoginId,
                EmailId: self.addupdateForm.value.EmailId,
                Name: self.addupdateForm.value.Name,
                Password: self.addupdateForm.value.Password,
                UserId: self.userid,
                PermissionId: self.addupdateForm.value.PermissionId,
                StationId: self.addupdateForm.value.StationId,
                status: statusToggle
            };
            if (self.ValidationUsers()) {
                self.commonServices.loadingPresent();
                self.commonServices.post("insertUpdateUserMaster", self.obj).subscribe((res) => {
                    self.GetRes = (JSON.parse(res));
                    console.log(self.GetRes);
                    if (self.GetRes.Table[0].Mesage == "User Added Successfully.") {
                        self.commonServices.presentToast(self.GetRes.Table[0].Mesage);
                        self.addupdateForm.reset();
                        setTimeout(function () {
                            self.router.navigate(['/user-management']);
                        }, 2000);
                    }
                    else {
                        self.commonServices.presentToast(self.GetRes.Table[0].Mesage);
                    }
                    self.commonServices.loadingDismiss();
                }, (error) => {
                    self.commonServices.presentToast("Something went wrong.");
                    self.commonServices.loadingDismiss();
                });
            }
        }
    }
    ValidationUsers() {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        if ((this.addupdateForm.value.LoginId == '' || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addupdateForm.value.LoginId))) {
            this.commonServices.presentToast('Loginid must be entered..');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.EmployeeCode == '') {
            this.commonServices.presentToast('Emp code must be entered.');
            this.errorFound = false;
        }
        else if (!re.test(this.addupdateForm.value.Name)) {
            this.commonServices.presentToast('Invalid User Name.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.Name == '') {
            this.commonServices.presentToast('User name be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.Password == '') {
            this.commonServices.presentToast('Password name be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.ConfPassword == '') {
            this.commonServices.presentToast(' Password name be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.ConfPassword != this.addupdateForm.value.Password) {
            this.commonServices.presentToast('Password and Confirm Password must be same.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PermissionId == '' || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addupdateForm.value.PermissionId)) {
            this.commonServices.presentToast('User Type must be seleted.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.PermissionId == '5') {
            if (Number(this.addupdateForm.value.PermissionId) <= 0) {
                this.commonServices.presentToast('Station must be selected.');
                this.errorFound = false;
            }
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
            if (this.Itemlist != null && this.pageFlag == 'updatepage') {
                this.Itemlist.StationName = itm.StationName;
                this.Itemlist.StationCode = itm.StationCode;
                this.Itemlist.StationId = itm.StationId;
            }
            else {
                this.addupdateForm.value.StationCode = itm.StationCode;
                this.addupdateForm.value.StationName = itm.StationName;
                this.Itemlist = 0;
            }
            this.updateItemList();
            this.getPermision();
        }
    }
    onSearchTerm(ev) {
        this.items = this.StationList;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(term => {
                return term.StationName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    }
};
AddUpdateUserPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddUpdateUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-update-user',
        template: __webpack_require__(/*! raw-loader!./add-update-user.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-user/add-update-user.page.html"),
        styles: [__webpack_require__(/*! ./add-update-user.page.scss */ "./src/app/HO/redirected_pages/add-update-user/add-update-user.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddUpdateUserPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-user-add-update-user-module-es2015.js.map