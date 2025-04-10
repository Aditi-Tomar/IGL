(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-dispenser-management-dispenser-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/dispenser-management/dispenser-management.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/dispenser-management/dispenser-management.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Dispenser Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddDispenser()\">\r\n\t\t\t\t<ion-icon name=\"add\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"\r\n\t\t\t\t(ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToupdateDispenser(item.DispenserId)\"\r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeA}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeB}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeADisp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeBDisp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeBDisp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StatusSort}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t\t<ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t\t<ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Name</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Code A</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Code B</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Type Code A</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Type Code B</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>History</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let dslitem of DispenserResList;let i = index\">\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.DispenserCodeA}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.DispenserCodeB}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">\r\n\t\t\t\t\t\t\t\t\t{{dslitem.DispanserTypeCodeADisp}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">\r\n\t\t\t\t\t\t\t\t\t{{dslitem.DispanserTypeCodeBDisp}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdateDispenser(dslitem.DispenserId)\">{{dslitem.StatusSort}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"dark\" size=\"small\" (click)=\"viewHistory(dslitem.DispenserId)\">\r\n\t\t\t\t\t\t\t\t\t\tView History</ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/dispenser-management/dispenser-management-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/HO/dispenser-management/dispenser-management-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DispenserManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserManagementPageRoutingModule", function() { return DispenserManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dispenser_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispenser-management.page */ "./src/app/HO/dispenser-management/dispenser-management.page.ts");




const routes = [
    {
        path: '',
        component: _dispenser_management_page__WEBPACK_IMPORTED_MODULE_3__["DispenserManagementPage"]
    }
];
let DispenserManagementPageRoutingModule = class DispenserManagementPageRoutingModule {
};
DispenserManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DispenserManagementPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/dispenser-management/dispenser-management.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/HO/dispenser-management/dispenser-management.module.ts ***!
  \************************************************************************/
/*! exports provided: DispenserManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserManagementPageModule", function() { return DispenserManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dispenser_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispenser-management-routing.module */ "./src/app/HO/dispenser-management/dispenser-management-routing.module.ts");
/* harmony import */ var _dispenser_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispenser-management.page */ "./src/app/HO/dispenser-management/dispenser-management.page.ts");







let DispenserManagementPageModule = class DispenserManagementPageModule {
};
DispenserManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dispenser_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["DispenserManagementPageRoutingModule"]
        ],
        declarations: [_dispenser_management_page__WEBPACK_IMPORTED_MODULE_6__["DispenserManagementPage"]]
    })
], DispenserManagementPageModule);



/***/ }),

/***/ "./src/app/HO/dispenser-management/dispenser-management.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/HO/dispenser-management/dispenser-management.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL2Rpc3BlbnNlci1tYW5hZ2VtZW50L2Rpc3BlbnNlci1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/HO/dispenser-management/dispenser-management.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/HO/dispenser-management/dispenser-management.page.ts ***!
  \**********************************************************************/
/*! exports provided: DispenserManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserManagementPage", function() { return DispenserManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let DispenserManagementPage = class DispenserManagementPage {
    constructor(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isShown = false;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.DSStatus = '';
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currDate = this.currentdate;
        console.log(this.currDate);
    }
    ngOnInit() {
        this.getDispenserList();
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
        this.getDispenserList();
    }
    getDispenserList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'DispenserList', Status: self.DSStatus })
            .subscribe((res) => {
            var DispenserRes = JSON.parse(res);
            self.DispenserResList = DispenserRes.Table;
            console.log(self.DispenserResList);
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    }
    getItems(ev) {
        // Reset items back to all of the items
        // this.getDispenserList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.DispenserResList.filter((item) => {
                return (item.DispenserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    goToaddDispenser() {
        this.router.navigate(['add-update-dispenser-mgt', { pageFlag: "addds" }]);
    }
    goToupdateDispenser(item) {
        this.router.navigate(['add-update-dispenser-mgt', { dispId: item, pageFlag: "updateds" }]);
    }
    viewHistory(id) {
        this.router.navigate(['view-history', { dispId: id }]);
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
    exportFile() {
        this.commonServices.post("getAllDetails_CSV", { Flag: "DispenserList", PageFlag: 'DispenserMaster', Status: this.DSStatus, }).subscribe((resp) => {
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
DispenserManagementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
DispenserManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispenser-management',
        template: __webpack_require__(/*! raw-loader!./dispenser-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/dispenser-management/dispenser-management.page.html"),
        styles: [__webpack_require__(/*! ./dispenser-management.page.scss */ "./src/app/HO/dispenser-management/dispenser-management.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], DispenserManagementPage);



/***/ })

}]);
//# sourceMappingURL=HO-dispenser-management-dispenser-management-module-es2015.js.map