(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-profile-station-profile-station-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/profile-station/profile-station.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/profile-station/profile-station.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-row class=\"ion-align-items-center search_parent for_color\">\r\n\t\t<ion-col size=\"2\" class=\"pt_0 pb_0\">\r\n\t\t\t<ion-back-button class=\"text_white\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\" class=\"text_white ion-text-center\">Profile</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-card *ngIf=\"SMList !=''\" class=\"stn_card\">\r\n\t\t\t<div class=\"stn_details\">\r\n\t\t\t\t<ion-label>Station Name:</ion-label>\r\n\t\t\t\t<ion-text>{{SMList[0].StationName === 'undefined' ? '' : SMList[0].StationName}}</ion-text>\r\n\r\n\t\t\t\t<ion-label>Address:</ion-label>\r\n\t\t\t\t<ion-text>{{SMList[0].StationAddress === 'undefined' ? '' : SMList[0].StationAddress}}</ion-text>\r\n\r\n\t\t\t\t<ion-label>Contact:</ion-label>\r\n\t\t\t\t<ion-text>{{SMList[0].ContactNo === 'undefined' ? '' : SMList[0].ContactNo}}</ion-text>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"stn_details_cont\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Station Operator Name</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].Name === 'undefined' ? '' : SMList[0].Name}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Contact No.</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].ContactNo === 'undefined' ? '' : SMList[0].ContactNo}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Station Manager 1</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].ShiftAManager === 'undefined' ? '' : SMList[0].ShiftAManager}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Contact No.</ion-label>\r\n\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t{{SMList[0].ShiftAManagerContact === 'undefined' ? '' : SMList[0].ShiftAManagerContact}}\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Station Manager 2</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].ShiftBManager === 'undefined' ? '' : SMList[0].ShiftBManager}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label> Contact No.</ion-label>\r\n\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t{{SMList[0].ShiftBManagerContact === 'undefined' ? '' : SMList[0].ShiftBManagerContact}}\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Station Manager 3</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].ShiftCManager === 'undefined' ? '' : SMList[0].ShiftCManager}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Contact No.</ion-label>\r\n\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t{{SMList[0].ShiftCManagerContact === 'undefined' ? '' : SMList[0].ShiftCManagerContact}}\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Station Manager 4</ion-label>\r\n\t\t\t\t\t\t<ion-text>{{SMList[0].ShiftDManager === 'undefined' ? '' : SMList[0].ShiftDManager}}</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-label>Contact No.</ion-label>\r\n\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t{{SMList[0].ShiftDManagerContact === 'undefined' ? '' : SMList[0].ShiftDManagerContact}}\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-card>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/profile-station/profile-station-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/station/profile-station/profile-station-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileStationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStationPageRoutingModule", function() { return ProfileStationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_station_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-station.page */ "./src/app/station/profile-station/profile-station.page.ts");




var routes = [
    {
        path: '',
        component: _profile_station_page__WEBPACK_IMPORTED_MODULE_3__["ProfileStationPage"]
    }
];
var ProfileStationPageRoutingModule = /** @class */ (function () {
    function ProfileStationPageRoutingModule() {
    }
    ProfileStationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileStationPageRoutingModule);
    return ProfileStationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/profile-station/profile-station.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/station/profile-station/profile-station.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileStationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStationPageModule", function() { return ProfileStationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_station_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-station-routing.module */ "./src/app/station/profile-station/profile-station-routing.module.ts");
/* harmony import */ var _profile_station_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-station.page */ "./src/app/station/profile-station/profile-station.page.ts");







var ProfileStationPageModule = /** @class */ (function () {
    function ProfileStationPageModule() {
    }
    ProfileStationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_station_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileStationPageRoutingModule"]
            ],
            declarations: [_profile_station_page__WEBPACK_IMPORTED_MODULE_6__["ProfileStationPage"]]
        })
    ], ProfileStationPageModule);
    return ProfileStationPageModule;
}());



/***/ }),

/***/ "./src/app/station/profile-station/profile-station.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/station/profile-station/profile-station.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n\n.stn_card {\n  padding: 5px;\n}\n\n.stn_details {\n  padding-bottom: 10px;\n  background-color: #f9f9f9;\n  margin-left: -5px;\n  margin-top: -5px;\n  margin-right: -5px;\n  padding-left: 10px;\n  padding-top: 10px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 10px;\n}\n\n.stn_details ion-label, .stn_details ion-text {\n  display: block;\n}\n\n.stn_details ion-label {\n  font-weight: bold;\n  color: black;\n}\n\n.stn_details_cont ion-row ion-label {\n  display: block;\n  font-weight: bold;\n}\n\n.stn_details_cont ion-row ion-text {\n  display: block;\n}\n\nion-button {\n  font-size: 16px !important;\n  --padding-top:7px;\n  --padding-bottom:7px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: var(--dark_green_clr);\n  box-shadow: inset 0px 0px 17px rgba(0, 0, 0, 0.45);\n}\n\nion-toggle {\n  padding: 1%;\n}\n\n.error-message {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9wcm9maWxlLXN0YXRpb24vcHJvZmlsZS1zdGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9wcm9maWxlLXN0YXRpb24vcHJvZmlsZS1zdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtDQUFBO0FDQUo7O0FERUE7RUFFSSxZQUFBO0FDQUo7O0FERUE7RUFFSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURDSTtFQUVJLGNBQUE7QUNBUjs7QURFSTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtBQ0RSOztBRFNRO0VBRUksY0FBQTtFQUNBLGlCQUFBO0FDUFo7O0FEU1E7RUFFSSxjQUFBO0FDUlo7O0FEWUE7RUFFSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtEQUFBO0FDVko7O0FEWUE7RUFFSSxXQUFBO0FDVko7O0FEWUE7RUFFSSxjQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL3Byb2ZpbGUtc3RhdGlvbi9wcm9maWxlLXN0YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcl9jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyZWVuX2Nscik7XHJcbn1cclxuLnN0bl9jYXJkXHJcbntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5zdG5fZGV0YWlsc1xyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBpb24tbGFiZWwsaW9uLXRleHRcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG59XHJcbi5zdG5fZGV0YWlsc19jb250XHJcbntcclxuICAgIGlvbi1yb3dcclxuICAgIHtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi10ZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6N3B4OztcclxuICAgIC0tcGFkZGluZy1ib3R0b206N3B4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya19ncmVlbl9jbHIpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC40NSk7XHJcbn1cclxuaW9uLXRvZ2dsZVxyXG57XHJcbiAgICBwYWRkaW5nOiAxJTtcclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufSIsIi5mb3JfY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xufVxuXG4uc3RuX2NhcmQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zdG5fZGV0YWlscyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RuX2RldGFpbHMgaW9uLWxhYmVsLCAuc3RuX2RldGFpbHMgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdG5fZGV0YWlscyBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3RuX2RldGFpbHNfY29udCBpb24tcm93IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdG5fZGV0YWlsc19jb250IGlvbi1yb3cgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOjdweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTo3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya19ncmVlbl9jbHIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/station/profile-station/profile-station.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/profile-station/profile-station.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileStationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStationPage", function() { return ProfileStationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



var ProfileStationPage = /** @class */ (function () {
    function ProfileStationPage(commonServices) {
        this.commonServices = commonServices;
        this.Uid = '';
        this.SMList = '';
        this.Uid = localStorage.getItem('UID');
    }
    ProfileStationPage.prototype.ngOnInit = function () {
        this.profile();
    };
    ProfileStationPage.prototype.profile = function () {
        var _this = this;
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'SMProfile', Id: this.Uid }).subscribe(function (res) {
            var data = JSON.parse(res.toString()).Table;
            console.log(data);
            if (data.length > 0) {
                _this.SMList = JSON.parse(res.toString()).Table;
                console.log(_this.SMList, 'SMList');
            }
            else {
                self.commonServices.presentToast("No Data found.");
            }
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
        });
    };
    ProfileStationPage.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    ProfileStationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-station',
            template: __webpack_require__(/*! raw-loader!./profile-station.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/profile-station/profile-station.page.html"),
            styles: [__webpack_require__(/*! ./profile-station.page.scss */ "./src/app/station/profile-station/profile-station.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfileStationPage);
    return ProfileStationPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-profile-station-profile-station-module-es5.js.map