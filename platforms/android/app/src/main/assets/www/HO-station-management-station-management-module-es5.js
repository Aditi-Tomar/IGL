(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-station-management-station-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/station-management/station-management.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/station-management/station-management.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Station Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToAddStationM()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToUpdateStationM(item.StationId)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t    <td>{{item.MarketingOfficerName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.ControlRoomName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StatusSort}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\" >\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>DSO</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Control Room</th>\r\n\t\t\t\t\t\t\t\t<th>Region Name</th>\r\n\t\t\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Type</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdateStationM(stationlitem.StationId)\" *ngFor=\"let stationlitem of StationMList;let i = index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.MarketingOfficerName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.ControlRoomName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{stationlitem.StatusSort}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/station-management/station-management-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/HO/station-management/station-management-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: StationManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationManagementPageRoutingModule", function() { return StationManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _station_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station-management.page */ "./src/app/HO/station-management/station-management.page.ts");




var routes = [
    {
        path: '',
        component: _station_management_page__WEBPACK_IMPORTED_MODULE_3__["StationManagementPage"]
    }
];
var StationManagementPageRoutingModule = /** @class */ (function () {
    function StationManagementPageRoutingModule() {
    }
    StationManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StationManagementPageRoutingModule);
    return StationManagementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/station-management/station-management.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/station-management/station-management.module.ts ***!
  \********************************************************************/
/*! exports provided: StationManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationManagementPageModule", function() { return StationManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _station_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station-management-routing.module */ "./src/app/HO/station-management/station-management-routing.module.ts");
/* harmony import */ var _station_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-management.page */ "./src/app/HO/station-management/station-management.page.ts");







var StationManagementPageModule = /** @class */ (function () {
    function StationManagementPageModule() {
    }
    StationManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _station_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["StationManagementPageRoutingModule"]
            ],
            declarations: [_station_management_page__WEBPACK_IMPORTED_MODULE_6__["StationManagementPage"]]
        })
    ], StationManagementPageModule);
    return StationManagementPageModule;
}());



/***/ }),

/***/ "./src/app/HO/station-management/station-management.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/HO/station-management/station-management.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3N0YXRpb24tbWFuYWdlbWVudC9zdGF0aW9uLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/station-management/station-management.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/station-management/station-management.page.ts ***!
  \******************************************************************/
/*! exports provided: StationManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationManagementPage", function() { return StationManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var StationManagementPage = /** @class */ (function () {
    function StationManagementPage(router, commonServices, menu) {
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
    StationManagementPage.prototype.ngOnInit = function () {
        this.getStationMList();
    };
    StationManagementPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    StationManagementPage.prototype.segmentChanged = function (value) {
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
        this.getStationMList();
    };
    StationManagementPage.prototype.getStationMList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'SOList', Id: '0', Status: self.DSStatus }).subscribe(function (res) {
            var StaionmRes = JSON.parse(res);
            self.StationMList = StaionmRes.Table;
            self.commonServices.loadingDismiss();
            console.log(self.StationMList);
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    StationManagementPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getStationMList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.StationMList.filter(function (item) {
                return (item.MarketingOfficerName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    StationManagementPage.prototype.goToAddStationM = function () {
        this.router.navigate(['/add-update-station-management', { pageFlag: "addstationm" }]);
    };
    StationManagementPage.prototype.goToUpdateStationM = function (item) {
        this.router.navigate(['/add-update-station-management', { stationid: item, pageFlag: "updatestationm" }]);
    };
    StationManagementPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    StationManagementPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    StationManagementPage.prototype.exportFile = function () {
        var _this = this;
        this.commonServices.post("getAllDetails_CSV", { Flag: 'SOList', Id: '0', Status: this.DSStatus, PageFlag: 'StationMaster' }).subscribe(function (resp) {
            var data = JSON.parse(resp);
            // console.log(data);
            if (data.FileName != '') {
                //  alert('file name');
                if (JSON.parse(resp).errMsg == 'success') {
                    // alert('inneer sucess');
                    window.location.href = _this.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                    _this.commonServices.loadingDismiss();
                }
                else {
                    _this.commonServices.presentToast(JSON.parse(resp).errMsg);
                    _this.commonServices.loadingDismiss();
                }
            }
            else {
                _this.commonServices.presentToast('No Report Data Found');
                _this.commonServices.loadingDismiss();
            }
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
            _this.commonServices.loadingDismiss();
        });
    };
    StationManagementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    StationManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-station-management',
            template: __webpack_require__(/*! raw-loader!./station-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/station-management/station-management.page.html"),
            styles: [__webpack_require__(/*! ./station-management.page.scss */ "./src/app/HO/station-management/station-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], StationManagementPage);
    return StationManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-station-management-station-management-module-es5.js.map