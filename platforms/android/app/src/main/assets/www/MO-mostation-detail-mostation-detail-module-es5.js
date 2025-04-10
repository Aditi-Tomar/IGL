(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MO-mostation-detail-mostation-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/MO/mostation-detail/mostation-detail.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/MO/mostation-detail/mostation-detail.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/mo-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Station Details</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\" >\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\"  >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of items; let i= index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td>{{item.StationAddress}}</td> -->\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><ion-toggle name = \"Status\" [checked]=\"item.Status\" (ionChange)=\"updateStatus(item.StationId,$event)\"></ion-toggle></td>\r\n\t\t\t\t\t\t\t\t\t<td><ion-button color=\"dark\" size=\"small\" (click)=\"stnStatusRedirect(item.StationId)\">View Status</ion-button></td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<!-- <th>Station Address</th> -->\r\n\t\t\t\t\t\t\t\t<th>Region Name</th>\r\n\t\t\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Type</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>Dispenser Details</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of stattionData; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<!-- <td>{{item.StationAddress}}</td> -->\r\n\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationTypeName}}</td>\r\n\t\t\t\t\t\t\t\t<td><ion-toggle name = \"Status\" [checked]=\"item.Status\" (ionChange)=\"updateStatus(i,item.StationId,$event)\"></ion-toggle></td>\r\n\t\t\t\t\t\t\t\t<td><ion-button color=\"dark\" size=\"small\" (click)=\"stnStatusRedirect(item.StationId)\">View Status</ion-button></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/MO/mostation-detail/mostation-detail-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/MO/mostation-detail/mostation-detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MOStationDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationDetailPageRoutingModule", function() { return MOStationDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mostation_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mostation-detail.page */ "./src/app/MO/mostation-detail/mostation-detail.page.ts");




var routes = [
    {
        path: '',
        component: _mostation_detail_page__WEBPACK_IMPORTED_MODULE_3__["MOStationDetailPage"]
    }
];
var MOStationDetailPageRoutingModule = /** @class */ (function () {
    function MOStationDetailPageRoutingModule() {
    }
    MOStationDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MOStationDetailPageRoutingModule);
    return MOStationDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/MO/mostation-detail/mostation-detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/MO/mostation-detail/mostation-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: MOStationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationDetailPageModule", function() { return MOStationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mostation_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mostation-detail-routing.module */ "./src/app/MO/mostation-detail/mostation-detail-routing.module.ts");
/* harmony import */ var _mostation_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostation-detail.page */ "./src/app/MO/mostation-detail/mostation-detail.page.ts");







var MOStationDetailPageModule = /** @class */ (function () {
    function MOStationDetailPageModule() {
    }
    MOStationDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _mostation_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MOStationDetailPageRoutingModule"]
            ],
            declarations: [_mostation_detail_page__WEBPACK_IMPORTED_MODULE_6__["MOStationDetailPage"]]
        })
    ], MOStationDetailPageModule);
    return MOStationDetailPageModule;
}());



/***/ }),

/***/ "./src/app/MO/mostation-detail/mostation-detail.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/MO/mostation-detail/mostation-detail.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01PL21vc3RhdGlvbi1kZXRhaWwvbW9zdGF0aW9uLWRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/MO/mostation-detail/mostation-detail.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/MO/mostation-detail/mostation-detail.page.ts ***!
  \**************************************************************/
/*! exports provided: MOStationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOStationDetailPage", function() { return MOStationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var MOStationDetailPage = /** @class */ (function () {
    function MOStationDetailPage(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.Defaultevent = false;
        this.isItemAvailable = false;
        this.userId = localStorage.getItem('UID');
        this.DeptCode = localStorage.getItem('DepartmentCode');
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currDate = this.currentdate;
        console.log(this.currDate);
        this.getMoStationData();
    }
    MOStationDetailPage.prototype.ngOnInit = function () {
    };
    MOStationDetailPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    MOStationDetailPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    MOStationDetailPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    MOStationDetailPage.prototype.stnStatusRedirect = function (StationId) {
        this.router.navigate(['mostation-status', { stationId: StationId }]);
    };
    MOStationDetailPage.prototype.updateStatus = function (i, StationId, event) {
        var _this = this;
        var self = this;
        this.commonServices.alertMessage("Confirm", "Do you want to change the status?").then(function (res) {
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
                self.commonServices.post("CommonGetData", { Flag: 'UpdateSOStatus', Id: StationId, Status: _this.status }).subscribe(function (res) {
                    var data = JSON.parse(res).Table;
                    if (data[0].Column1 == 'successfully') {
                        _this.commonServices.presentToast("Status Updated successfully");
                        _this.commonServices.loadingDismiss();
                    }
                }, function (error) {
                    _this.commonServices.presentToast('Something went wrong.');
                    _this.commonServices.loadingDismiss();
                });
            }
            else {
                console.log(_this.stattionData[i].Status);
                _this.stattionData[i].Status = _this.stattionData[i].Status;
                _this.getMoStationData();
            }
        });
    };
    MOStationDetailPage.prototype.getMoStationData = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'SOListForMO', Id: self.userId }).subscribe(function (res) {
            console.log(JSON.parse(res));
            var StationData = JSON.parse(res).Table[0];
            if (StationData != '') {
                self.stattionData = JSON.parse(res).Table;
                console.log(self.stattionData);
                self.commonServices.loadingDismiss();
            }
            else {
                self.commonServices.presentToast('No data found.');
                self.commonServices.loadingDismiss();
            }
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    };
    MOStationDetailPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getControlOfficeList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.stattionData.filter(function (item) {
                return (item.StationCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    MOStationDetailPage.prototype.exportFile = function () {
        var _this = this;
        this.commonServices.post("getAllDetails_CSV", { Flag: "SOListForMO", Id: this.userId, PageFlag: 'MOStations', Status: this.status }).subscribe(function (resp) {
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
    MOStationDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    MOStationDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mostation-detail',
            template: __webpack_require__(/*! raw-loader!./mostation-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/MO/mostation-detail/mostation-detail.page.html"),
            styles: [__webpack_require__(/*! ./mostation-detail.page.scss */ "./src/app/MO/mostation-detail/mostation-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], MOStationDetailPage);
    return MOStationDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=MO-mostation-detail-mostation-detail-module-es5.js.map