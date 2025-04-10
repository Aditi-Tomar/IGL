(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-dsm-management-dsm-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/dsm-management/dsm-management.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/dsm-management/dsm-management.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">DSM Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddDsm()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToupdateDsm(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DSMCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DSMName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Emp Code</th>\r\n\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToupdateDsm(dsitem)\" *ngFor=\"let dsitem of DsmResList; let i = index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{dsitem.DSMCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{dsitem.DSMName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{dsitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{dsitem.Status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/dsm-management/dsm-management-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/dsm-management/dsm-management-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DsmManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsmManagementPageRoutingModule", function() { return DsmManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dsm_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsm-management.page */ "./src/app/HO/dsm-management/dsm-management.page.ts");




const routes = [
    {
        path: '',
        component: _dsm_management_page__WEBPACK_IMPORTED_MODULE_3__["DsmManagementPage"]
    }
];
let DsmManagementPageRoutingModule = class DsmManagementPageRoutingModule {
};
DsmManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DsmManagementPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/dsm-management/dsm-management.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/dsm-management/dsm-management.module.ts ***!
  \************************************************************/
/*! exports provided: DsmManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsmManagementPageModule", function() { return DsmManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsm_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsm-management-routing.module */ "./src/app/HO/dsm-management/dsm-management-routing.module.ts");
/* harmony import */ var _dsm_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsm-management.page */ "./src/app/HO/dsm-management/dsm-management.page.ts");







let DsmManagementPageModule = class DsmManagementPageModule {
};
DsmManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dsm_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsmManagementPageRoutingModule"]
        ],
        declarations: [_dsm_management_page__WEBPACK_IMPORTED_MODULE_6__["DsmManagementPage"]]
    })
], DsmManagementPageModule);



/***/ }),

/***/ "./src/app/HO/dsm-management/dsm-management.page.scss":
/*!************************************************************!*\
  !*** ./src/app/HO/dsm-management/dsm-management.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status_bar {\n  padding: 0px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.status_bar > ion-segment-button {\n  min-height: 20px;\n  min-width: 50px;\n}\n\n.status_bar > ion-segment-button ion-label {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vZHNtLW1hbmFnZW1lbnQvZHNtLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9kc20tbWFuYWdlbWVudC9kc20tbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ITy9kc20tbWFuYWdlbWVudC9kc20tbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzX2JhclxyXG57XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG4uc3RhdHVzX2Jhcj5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgbWluLWhlaWdodDoyMHB4O1xyXG4gICAgbWluLXdpZHRoOjUwcHg7XHJcbn1cclxuLnN0YXR1c19iYXI+aW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbFxyXG57XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn0iLCIuc3RhdHVzX2JhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zdGF0dXNfYmFyID4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uc3RhdHVzX2JhciA+IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/dsm-management/dsm-management.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/HO/dsm-management/dsm-management.page.ts ***!
  \**********************************************************/
/*! exports provided: DsmManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsmManagementPage", function() { return DsmManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let DsmManagementPage = class DsmManagementPage {
    constructor(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.DSStatus = '';
    }
    ngOnInit() {
        this.getDsmList();
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
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
        this.getDsmList();
    }
    getDsmList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'DSM', Id: 0, Status: self.DSStatus }).subscribe((res) => {
            var DsmRes = JSON.parse(res);
            self.DsmResList = DsmRes.Table;
            console.log(self.DsmResList);
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    getItems(ev) {
        // Reset items back to all of the items
        // this.getDsmList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.DsmResList.filter((item) => {
                return (item.DSMName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    goToaddDsm() {
        this.router.navigate(['add-apdate-dsm-mgt', { pageFlag: "adddm" }]);
    }
    goToupdateDsm(item) {
        this.router.navigate(['add-apdate-dsm-mgt', { dmlist: JSON.stringify(item), pageFlag: "updatedm" }]);
    }
};
DsmManagementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
DsmManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dsm-management',
        template: __webpack_require__(/*! raw-loader!./dsm-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/dsm-management/dsm-management.page.html"),
        styles: [__webpack_require__(/*! ./dsm-management.page.scss */ "./src/app/HO/dsm-management/dsm-management.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], DsmManagementPage);



/***/ })

}]);
//# sourceMappingURL=HO-dsm-management-dsm-management-module-es2015.js.map