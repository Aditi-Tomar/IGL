(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-station-detail-station-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/station-detail/station-detail.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/station-detail/station-detail.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/co-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Station Detail</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\"  >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\"\r\n\t\t\t\t(ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of items; let i= index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationAddress}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<ion-toggle name=\"Status\" [checked]=\"item.Status\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"updateStatus(item.StationId,$event)\"></ion-toggle>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<ion-button color=\"dark\" size=\"small\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"stnStatusRedirect(item.StationId)\">View Status</ion-button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Address</th>\r\n\t\t\t\t\t\t\t\t<th>Region Name</th>\r\n\t\t\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Type</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Details</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of stattionData; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationAddress}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-toggle name=\"Status\" [checked]=\"item.Status\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"updateStatus(i,item.StationId,$event)\"></ion-toggle>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"dark\" size=\"small\" (click)=\"stnStatusRedirect(item.StationId)\">\r\n\t\t\t\t\t\t\t\t\t\tView Status</ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/CO/station-detail/station-detail-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/CO/station-detail/station-detail-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: StationDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationDetailPageRoutingModule", function() { return StationDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _station_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station-detail.page */ "./src/app/CO/station-detail/station-detail.page.ts");




const routes = [
    {
        path: '',
        component: _station_detail_page__WEBPACK_IMPORTED_MODULE_3__["StationDetailPage"]
    }
];
let StationDetailPageRoutingModule = class StationDetailPageRoutingModule {
};
StationDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StationDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/CO/station-detail/station-detail.module.ts":
/*!************************************************************!*\
  !*** ./src/app/CO/station-detail/station-detail.module.ts ***!
  \************************************************************/
/*! exports provided: StationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationDetailPageModule", function() { return StationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _station_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station-detail-routing.module */ "./src/app/CO/station-detail/station-detail-routing.module.ts");
/* harmony import */ var _station_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-detail.page */ "./src/app/CO/station-detail/station-detail.page.ts");







let StationDetailPageModule = class StationDetailPageModule {
};
StationDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _station_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["StationDetailPageRoutingModule"]
        ],
        declarations: [_station_detail_page__WEBPACK_IMPORTED_MODULE_6__["StationDetailPage"]]
    })
], StationDetailPageModule);



/***/ }),

/***/ "./src/app/CO/station-detail/station-detail.page.scss":
/*!************************************************************!*\
  !*** ./src/app/CO/station-detail/station-detail.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NPL3N0YXRpb24tZGV0YWlsL3N0YXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/CO/station-detail/station-detail.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/CO/station-detail/station-detail.page.ts ***!
  \**********************************************************/
/*! exports provided: StationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationDetailPage", function() { return StationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let StationDetailPage = class StationDetailPage {
    constructor(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.Defaultevent = false;
        this.isItemAvailable = false;
        this.userId = localStorage.getItem('UID');
        this.DeptCode = localStorage.getItem('DepartmentCode');
        this.getCoStationData();
    }
    ngOnInit() {
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
    stnStatusRedirect(StationId) {
        this.router.navigate(['station-status', { stationId: StationId }]);
    }
    updateStatus(i, StationId, event) {
        var self = this;
        this.commonServices.alertMessage("Confirm", "Do you want to change the status?").then((res) => {
            console.log(res);
            if (!res) {
                // if (confirm("Do you want to change the status?")) {
                if (event.detail.checked != self.Defaultevent) {
                    self.status = '1';
                }
                else {
                    self.status = '2';
                }
                self.commonServices.loadingPresent();
                self.commonServices.post("CommonGetData", { Flag: 'UpdateSOStatus',
                    Id: StationId, Status: this.status }).subscribe((res) => {
                    const data = JSON.parse(res).Table;
                    if (data[0].Column1 == 'successfully') {
                        this.commonServices.presentToast("Status Updated successfully");
                        this.commonServices.loadingDismiss();
                    }
                }, (error) => {
                    this.commonServices.presentToast('Something went wrong.');
                    this.commonServices.loadingDismiss();
                });
            }
            else {
                console.log(this.stattionData[i].Status);
                this.stattionData[i].Status = this.stattionData[i].Status;
                this.getCoStationData();
            }
        });
    }
    getCoStationData() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'COListForCR', Id: self.userId }).subscribe((res) => {
            const StationData = JSON.parse(res).Table[0];
            if (StationData != '') {
                self.stattionData = JSON.parse(res).Table;
                console.log(self.stattionData);
                self.commonServices.loadingDismiss();
            }
            else {
                self.commonServices.presentToast('No data found.');
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
            this.items = this.stattionData.filter((item) => {
                return (item.StationCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    exportFile() {
        this.commonServices.post("getAllDetails_CSV", { Flag: "COListForCR", Id: this.userId, PageFlag: 'COStations', Status: this.status }).subscribe((resp) => {
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
StationDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
StationDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-station-detail',
        template: __webpack_require__(/*! raw-loader!./station-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/station-detail/station-detail.page.html"),
        styles: [__webpack_require__(/*! ./station-detail.page.scss */ "./src/app/CO/station-detail/station-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], StationDetailPage);



/***/ })

}]);
//# sourceMappingURL=CO-station-detail-station-detail-module-es2015.js.map