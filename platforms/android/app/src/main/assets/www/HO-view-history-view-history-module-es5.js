(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-view-history-view-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/view-history/view-history.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/view-history/view-history.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">View History</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"dispenser-management\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"8\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<!-- <ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\"></ion-searchbar> -->\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of items; let i= index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{item.DispenserName}}</td>\r\n                  <td>{{item.FromStation}}</td>\r\n                  <td>{{item.ToStation}}</td>\r\n                  <td>{{item.DispanserTransferArmReadingA}}</td>\r\n                  <td>{{item.DispanserTransferArmReadingB}}</td>\r\n                  <td>{{item.EntryDate}}</td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Name</th>\r\n\t\t\t\t\t\t\t\t<th>Transfer From</th>\r\n\t\t\t\t\t\t\t\t<th>Transfer To</th>\r\n\t\t\t\t\t\t\t\t<th>Transfer Arm Reading A</th>\r\n\t\t\t\t\t\t\t\t<th>Transfer Arm Reading B </th>\r\n\t\t\t\t\t\t\t\t<th>Entry Date</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of listDispHistory; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.FromStation}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.ToStation}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispanserTransferArmReadingA}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.DispanserTransferArmReadingB}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.EntryDate}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/HO/view-history/view-history-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/HO/view-history/view-history-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHistoryPageRoutingModule", function() { return ViewHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-history.page */ "./src/app/HO/view-history/view-history.page.ts");




var routes = [
    {
        path: '',
        component: _view_history_page__WEBPACK_IMPORTED_MODULE_3__["ViewHistoryPage"]
    }
];
var ViewHistoryPageRoutingModule = /** @class */ (function () {
    function ViewHistoryPageRoutingModule() {
    }
    ViewHistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewHistoryPageRoutingModule);
    return ViewHistoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/view-history/view-history.module.ts":
/*!********************************************************!*\
  !*** ./src/app/HO/view-history/view-history.module.ts ***!
  \********************************************************/
/*! exports provided: ViewHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHistoryPageModule", function() { return ViewHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-history-routing.module */ "./src/app/HO/view-history/view-history-routing.module.ts");
/* harmony import */ var _view_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-history.page */ "./src/app/HO/view-history/view-history.page.ts");







var ViewHistoryPageModule = /** @class */ (function () {
    function ViewHistoryPageModule() {
    }
    ViewHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewHistoryPageRoutingModule"]
            ],
            declarations: [_view_history_page__WEBPACK_IMPORTED_MODULE_6__["ViewHistoryPage"]]
        })
    ], ViewHistoryPageModule);
    return ViewHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/HO/view-history/view-history.page.scss":
/*!********************************************************!*\
  !*** ./src/app/HO/view-history/view-history.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3ZpZXctaGlzdG9yeS92aWV3LWhpc3RvcnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/view-history/view-history.page.ts":
/*!******************************************************!*\
  !*** ./src/app/HO/view-history/view-history.page.ts ***!
  \******************************************************/
/*! exports provided: ViewHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHistoryPage", function() { return ViewHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ViewHistoryPage = /** @class */ (function () {
    function ViewHistoryPage(router, activatedroute, commonServices, menu, dp) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isShown = false;
        this.DispId = activatedroute.snapshot.paramMap.get('dispId');
        console.log(this.DispId);
        this.GetDispHistory();
    }
    ViewHistoryPage.prototype.ngOnInit = function () {
    };
    ViewHistoryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    ViewHistoryPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    ViewHistoryPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    ViewHistoryPage.prototype.GetDispHistory = function () {
        var self = this;
        self.commonServices.loadingDismiss();
        self.commonServices.post("CommonGetData", { Flag: 'DispenserHistory', Id: self.DispId, Status: 0 }).subscribe(function (res) {
            self.listDispHistory = JSON.parse(res).Table;
            if (self.listDispHistory.length > 0) {
                console.log(self.listDispHistory);
                self.commonServices.loadingDismiss();
            }
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    };
    ViewHistoryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getDispenserList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.listDispHistory.filter(function (item) {
                return (item.DispenserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    ViewHistoryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    ViewHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-history',
            template: __webpack_require__(/*! raw-loader!./view-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/view-history/view-history.page.html"),
            styles: [__webpack_require__(/*! ./view-history.page.scss */ "./src/app/HO/view-history/view-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], ViewHistoryPage);
    return ViewHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-view-history-view-history-module-es5.js.map