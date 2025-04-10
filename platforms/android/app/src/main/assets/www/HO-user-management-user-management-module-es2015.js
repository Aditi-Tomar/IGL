(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-user-management-user-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/user-management/user-management.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/user-management/user-management.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">User Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToadd()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" placeholder=\"Login Id\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToUpdate(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.LoginId}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.EmpCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Name}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DepartmentCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n  \r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Login Id</th>\r\n\t\t\t\t\t\t\t\t<th>Emp Code</th>\r\n\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t<th>Permission</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdate(itm)\" *ngFor=\"let itm of getListRes; let i=index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.LoginId}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.EmpCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.Name}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.DepartmentCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.Status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n  "

/***/ }),

/***/ "./src/app/HO/user-management/user-management-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/HO/user-management/user-management-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPageRoutingModule", function() { return UserManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.page */ "./src/app/HO/user-management/user-management.page.ts");




const routes = [
    {
        path: '',
        component: _user_management_page__WEBPACK_IMPORTED_MODULE_3__["UserManagementPage"]
    }
];
let UserManagementPageRoutingModule = class UserManagementPageRoutingModule {
};
UserManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserManagementPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/user-management/user-management.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/HO/user-management/user-management.module.ts ***!
  \**************************************************************/
/*! exports provided: UserManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPageModule", function() { return UserManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/HO/user-management/user-management-routing.module.ts");
/* harmony import */ var _user_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management.page */ "./src/app/HO/user-management/user-management.page.ts");







let UserManagementPageModule = class UserManagementPageModule {
};
UserManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementPageRoutingModule"]
        ],
        declarations: [_user_management_page__WEBPACK_IMPORTED_MODULE_6__["UserManagementPage"]]
    })
], UserManagementPageModule);



/***/ }),

/***/ "./src/app/HO/user-management/user-management.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/HO/user-management/user-management.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/user-management/user-management.page.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/user-management/user-management.page.ts ***!
  \************************************************************/
/*! exports provided: UserManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPage", function() { return UserManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let UserManagementPage = class UserManagementPage {
    constructor(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.DSStatus = '';
        this.filter = '';
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currDate = this.currentdate;
        console.log(this.currDate);
    }
    ngOnInit() {
        const dt = new Date();
        this.getList();
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    segmentChanged(value) {
        console.log(value);
        if (value.detail.value == 'Active') {
            this.DSStatus = '1';
        }
        else if (value.detail.value == 'All') {
            this.DSStatus = '';
        }
        else if (value.detail.value == 'InActive') {
            this.DSStatus = '2';
        }
        this.getList();
    }
    getList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'AlluserDetsils', Id: 0, Status: self.DSStatus }).subscribe((res) => {
            var listRes = JSON.parse(res);
            console.log(listRes);
            if (listRes != "" && listRes != undefined && listRes != null) {
                self.getListRes = listRes.Table;
                console.log(self.getListRes);
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
    goToadd() {
        this.router.navigate(['add-update-user', { itemList: '', pageFlag: "addpage" }]);
    }
    goToUpdate(item) {
        console.log(item);
        if (item.Name == 'Administrator') {
            this.commonServices.presentToast("Administrator login details cant be update/change.");
        }
        else {
            this.router.navigate(['add-update-user', { itemList: JSON.stringify(item), pageFlag: "updatepage" }]);
        }
    }
    searchCollapse() {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    }
    hideSearchBar() {
        this.searchShow = false;
        this.searchFlag = 0;
    }
    getItems(ev) {
        // Reset items back to all of the items
        // this.getList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.getListRes.filter((item) => {
                return (item.LoginId.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    exportFile() {
        this.commonServices.post("getAllDetails_CSV", { Flag: "AlluserDetsils", Id: '0', Status: this.DSStatus, PageFlag: 'UsersManagement' }).subscribe((resp) => {
            const data = JSON.parse(resp);
            // console.log(data);
            if (data.FileName != '') {
                //  alert('file name');
                if (JSON.parse(resp).errMsg == 'success') {
                    // alert('inneer sucess');
                    window.location.href = this.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                    this.commonServices.loadingDismiss();
                }
                else {
                    this.commonServices.presentToast(JSON.parse(resp).errMsg);
                    this.commonServices.loadingDismiss();
                }
            }
            else {
                this.commonServices.presentToast('No Report Data Found');
                this.commonServices.loadingDismiss();
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
};
UserManagementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
UserManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: __webpack_require__(/*! raw-loader!./user-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/user-management/user-management.page.html"),
        styles: [__webpack_require__(/*! ./user-management.page.scss */ "./src/app/HO/user-management/user-management.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], UserManagementPage);



/***/ })

}]);
//# sourceMappingURL=HO-user-management-user-management-module-es2015.js.map