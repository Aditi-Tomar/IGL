(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MO-mostation-status-mostation-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/MO/mostation-status/mostation-status.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/MO/mostation-status/mostation-status.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-row class=\"ion-align-items-center search_parent for_color\">\r\n    <ion-col size=\"2\" class=\"ion-text-left\">\r\n      <ion-back-button defaultHref=\"station-detail\" class=\"text_white\"></ion-back-button>\r\n    </ion-col>\r\n    <ion-col size=\"8\" class=\"ion-text-center\">\r\n      <ion-text class=\"text_white\">Dispensers</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n        <ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n      <ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\"\r\n        (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n      <ion-row *ngIf=\"isItemAvailable\">\r\n        <ion-col>\r\n          <div class=\"my_table_container\">\r\n            <table class=\"my_table\">\r\n              <tbody>\r\n                <tr *ngFor=\"let item of items; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{item.DispenserName}}</td>\r\n                  <td>{{item.DispenserCodeA}}</td>\r\n                  <td>{{item.DispenserCodeB}}</td>\r\n                  <td>{{item.DispanserTypeCodeADisp}}</td>\r\n                  <td>{{item.DispanserTypeCodeBDisp}}</td>\r\n                  <td>{{item.StatusSort}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"my_table_container\">\r\n          <table class=\"my_table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>Dispenser Name</th>\r\n                <th>Dispenser Code A</th>\r\n                <th>Dispenser Code B</th>\r\n                <th>Dispenser Type Code A</th>\r\n                <th>Dispenser Type Code B</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of listDisp; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{item.DispenserName}}</td>\r\n                <td>{{item.DispenserCodeA}}</td>\r\n                <td>{{item.DispenserCodeB}}</td>\r\n                <td>{{item.DispanserTypeCodeADisp}}</td>\r\n                <td>{{item.DispanserTypeCodeBDisp}}</td>\r\n                <td>{{item.StatusSort}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/MO/mostation-status/mostation-status-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/MO/mostation-status/mostation-status-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MOStationStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationStatusPageRoutingModule", function() { return MOStationStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mostation_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mostation-status.page */ "./src/app/MO/mostation-status/mostation-status.page.ts");




const routes = [
    {
        path: '',
        component: _mostation_status_page__WEBPACK_IMPORTED_MODULE_3__["MOStationStatusPage"]
    }
];
let MOStationStatusPageRoutingModule = class MOStationStatusPageRoutingModule {
};
MOStationStatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MOStationStatusPageRoutingModule);



/***/ }),

/***/ "./src/app/MO/mostation-status/mostation-status.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/MO/mostation-status/mostation-status.module.ts ***!
  \****************************************************************/
/*! exports provided: MOStationStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationStatusPageModule", function() { return MOStationStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mostation_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mostation-status-routing.module */ "./src/app/MO/mostation-status/mostation-status-routing.module.ts");
/* harmony import */ var _mostation_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostation-status.page */ "./src/app/MO/mostation-status/mostation-status.page.ts");







let MOStationStatusPageModule = class MOStationStatusPageModule {
};
MOStationStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mostation_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["MOStationStatusPageRoutingModule"]
        ],
        declarations: [_mostation_status_page__WEBPACK_IMPORTED_MODULE_6__["MOStationStatusPage"]]
    })
], MOStationStatusPageModule);



/***/ }),

/***/ "./src/app/MO/mostation-status/mostation-status.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/MO/mostation-status/mostation-status.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvTU8vbW9zdGF0aW9uLXN0YXR1cy9tb3N0YXRpb24tc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvTU8vbW9zdGF0aW9uLXN0YXR1cy9tb3N0YXRpb24tc3RhdHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9NTy9tb3N0YXRpb24tc3RhdHVzL21vc3RhdGlvbi1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcl9jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xyXG59IiwiLmZvcl9jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuX2Nscik7XG59Il19 */"

/***/ }),

/***/ "./src/app/MO/mostation-status/mostation-status.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/MO/mostation-status/mostation-status.page.ts ***!
  \**************************************************************/
/*! exports provided: MOStationStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationStatusPage", function() { return MOStationStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let MOStationStatusPage = class MOStationStatusPage {
    constructor(router, activateRoute, commonServices, menu) {
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
    ngOnInit() {
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
    getSO() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'DispenserListBySO', Id: this.stationId }).subscribe((res) => {
            self.listDisp = JSON.parse(res).Table;
            self.commonServices.loadingDismiss();
            if (self.listDisp == '') {
                self.commonServices.presentToast("Dispnser not found in this station.");
                self.commonServices.loadingDismiss();
            }
        }, (error) => {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    }
    getItems(ev) {
        // Reset items back to all of the items
        // this.getControlOfficeList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.listDisp.filter((item) => {
                return (item.DispenserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
};
MOStationStatusPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
MOStationStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mostation-status',
        template: __webpack_require__(/*! raw-loader!./mostation-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/MO/mostation-status/mostation-status.page.html"),
        styles: [__webpack_require__(/*! ./mostation-status.page.scss */ "./src/app/MO/mostation-status/mostation-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], MOStationStatusPage);



/***/ })

}]);
//# sourceMappingURL=MO-mostation-status-mostation-status-module-es2015.js.map