(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-region-mgt-region-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/region-mgt/region-mgt.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/region-mgt/region-mgt.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Region Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button (click)=\"goToRegionAdd()\" color=\"light\" size=\"small\">\r\n\t\t\t\t<ion-icon name=\"add\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" \r\n\t\t\tshowCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToRegionUpdate(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t     <td>{{item.Status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" \r\n\t\t\t\t(ionChange)=\"segmentChanged($event)\" color=\"green_clr\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\" >\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Region Name</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToRegionUpdate(reglist)\" *ngFor=\"let reglist of regionList;let i = index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{reglist.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{reglist.Status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/region-mgt/region-mgt-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/region-mgt/region-mgt-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RegionMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMgtPageRoutingModule", function() { return RegionMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _region_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region-mgt.page */ "./src/app/HO/region-mgt/region-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _region_mgt_page__WEBPACK_IMPORTED_MODULE_3__["RegionMgtPage"]
    }
];
var RegionMgtPageRoutingModule = /** @class */ (function () {
    function RegionMgtPageRoutingModule() {
    }
    RegionMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegionMgtPageRoutingModule);
    return RegionMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/region-mgt/region-mgt.module.ts":
/*!****************************************************!*\
  !*** ./src/app/HO/region-mgt/region-mgt.module.ts ***!
  \****************************************************/
/*! exports provided: RegionMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMgtPageModule", function() { return RegionMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _region_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region-mgt-routing.module */ "./src/app/HO/region-mgt/region-mgt-routing.module.ts");
/* harmony import */ var _region_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region-mgt.page */ "./src/app/HO/region-mgt/region-mgt.page.ts");







var RegionMgtPageModule = /** @class */ (function () {
    function RegionMgtPageModule() {
    }
    RegionMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _region_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegionMgtPageRoutingModule"]
            ],
            declarations: [_region_mgt_page__WEBPACK_IMPORTED_MODULE_6__["RegionMgtPage"]]
        })
    ], RegionMgtPageModule);
    return RegionMgtPageModule;
}());



/***/ }),

/***/ "./src/app/HO/region-mgt/region-mgt.page.scss":
/*!****************************************************!*\
  !*** ./src/app/HO/region-mgt/region-mgt.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3JlZ2lvbi1tZ3QvcmVnaW9uLW1ndC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/region-mgt/region-mgt.page.ts":
/*!**************************************************!*\
  !*** ./src/app/HO/region-mgt/region-mgt.page.ts ***!
  \**************************************************/
/*! exports provided: RegionMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMgtPage", function() { return RegionMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var RegionMgtPage = /** @class */ (function () {
    function RegionMgtPage(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.isShown = false;
        this.isItemAvailable = false;
        this.emptyArray = [];
        this.searchShow = false;
        this.searchFlag = 0;
        this.DSStatus = '';
    }
    RegionMgtPage.prototype.ngOnInit = function () {
        this.getRegionList();
    };
    RegionMgtPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    RegionMgtPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    RegionMgtPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    RegionMgtPage.prototype.getRegionList = function () {
        var self = this;
        var RegionListReq = { Flag: "Region", Id: "0", status: self.DSStatus };
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", RegionListReq).subscribe(function (res) {
            var regionRes = JSON.parse(res);
            self.regionList = regionRes.Table;
            console.log(self.regionList);
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    RegionMgtPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getRegionList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.regionList.filter(function (item) {
                return (item.RegionName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    RegionMgtPage.prototype.segmentChanged = function (value) {
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
        this.getRegionList();
    };
    RegionMgtPage.prototype.goToRegionUpdate = function (item) {
        this.router.navigate(['/add-detail-regionmgt', { regionlist: JSON.stringify(item), pageName: "updatepage" }]);
    };
    RegionMgtPage.prototype.goToRegionAdd = function () {
        var regionid = "";
        this.router.navigate(['/add-detail-regionmgt', { pageName: "addpage" }]);
    };
    RegionMgtPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    RegionMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-region-mgt',
            template: __webpack_require__(/*! raw-loader!./region-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/region-mgt/region-mgt.page.html"),
            styles: [__webpack_require__(/*! ./region-mgt.page.scss */ "./src/app/HO/region-mgt/region-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], RegionMgtPage);
    return RegionMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-region-mgt-region-mgt-module-es5.js.map