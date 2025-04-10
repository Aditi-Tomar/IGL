(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-station-status-station-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/station-status/station-status.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/station-status/station-status.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center search_parent\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left text_white\">\r\n\t\t\t\t<ion-back-button defaultHref=\"station-detail\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center text_white text_center title\">\r\n\t\t\t\t<ion-text>Dispensers</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of items; let i=index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeA}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeB}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeADisp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeBDisp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StatusSort}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No.</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Name</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Code A</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Code B</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Type Code A</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Type Code B</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of listDisp; let i=index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeA}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispenserCodeB}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeADisp}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispanserTypeCodeBDisp}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StatusSort}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/CO/station-status/station-status-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/CO/station-status/station-status-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: StationStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationStatusPageRoutingModule", function() { return StationStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _station_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station-status.page */ "./src/app/CO/station-status/station-status.page.ts");




var routes = [
    {
        path: '',
        component: _station_status_page__WEBPACK_IMPORTED_MODULE_3__["StationStatusPage"]
    }
];
var StationStatusPageRoutingModule = /** @class */ (function () {
    function StationStatusPageRoutingModule() {
    }
    StationStatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StationStatusPageRoutingModule);
    return StationStatusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/CO/station-status/station-status.module.ts":
/*!************************************************************!*\
  !*** ./src/app/CO/station-status/station-status.module.ts ***!
  \************************************************************/
/*! exports provided: StationStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationStatusPageModule", function() { return StationStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _station_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station-status-routing.module */ "./src/app/CO/station-status/station-status-routing.module.ts");
/* harmony import */ var _station_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-status.page */ "./src/app/CO/station-status/station-status.page.ts");







var StationStatusPageModule = /** @class */ (function () {
    function StationStatusPageModule() {
    }
    StationStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _station_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StationStatusPageRoutingModule"]
            ],
            declarations: [_station_status_page__WEBPACK_IMPORTED_MODULE_6__["StationStatusPage"]]
        })
    ], StationStatusPageModule);
    return StationStatusPageModule;
}());



/***/ }),

/***/ "./src/app/CO/station-status/station-status.page.scss":
/*!************************************************************!*\
  !*** ./src/app/CO/station-status/station-status.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: white;\n}\n\nion-header .search_parent {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvQ08vc3RhdGlvbi1zdGF0dXMvc3RhdGlvbi1zdGF0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9DTy9zdGF0aW9uLXN0YXR1cy9zdGF0aW9uLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx1QkFBQTtBQ0FKOztBREVBO0VBRUksNkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0NPL3N0YXRpb24tc3RhdHVzL3N0YXRpb24tc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWhlYWRlciAuc2VhcmNoX3BhcmVudCBcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24taGVhZGVyIC5zZWFyY2hfcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/CO/station-status/station-status.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/CO/station-status/station-status.page.ts ***!
  \**********************************************************/
/*! exports provided: StationStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationStatusPage", function() { return StationStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var StationStatusPage = /** @class */ (function () {
    function StationStatusPage(router, activateRoute, commonServices, menu) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.SelectedStationId = '0';
        this.stationId = activateRoute.snapshot.paramMap.get('stationId');
        console.log(this.stationId);
        this.getSO();
    }
    StationStatusPage.prototype.ngOnInit = function () {
    };
    StationStatusPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    StationStatusPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    StationStatusPage.prototype.getSO = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'DispenserListBySO', Id: this.stationId }).subscribe(function (res) {
            self.listDisp = JSON.parse(res).Table;
            self.commonServices.loadingDismiss();
            if (self.listDisp == '') {
                self.commonServices.presentToast("Dispnser not found in this station.");
                self.commonServices.loadingDismiss();
            }
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    };
    StationStatusPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getControlOfficeList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.listDisp.filter(function (item) {
                return (item.DispenserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    StationStatusPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    StationStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-station-status',
            template: __webpack_require__(/*! raw-loader!./station-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/station-status/station-status.page.html"),
            styles: [__webpack_require__(/*! ./station-status.page.scss */ "./src/app/CO/station-status/station-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], StationStatusPage);
    return StationStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=CO-station-status-station-status-module-es5.js.map