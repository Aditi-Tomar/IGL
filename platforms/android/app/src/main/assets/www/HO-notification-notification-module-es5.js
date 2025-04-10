(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-notification-notification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/notification/notification.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/notification/notification.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-row class=\"ion-align-items-center search_parent for_color\">\r\n\t\t<ion-col size=\"2\" class=\"pt_0 pb_0\">\r\n\t\t\t<ion-back-button class=\"text_white\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\" class=\"text_white ion-text-center\">Notification Details</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\"\r\n\t\t\t\t(ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<!---Ho-->\r\n\t\t<ion-row *ngFor=\"let item of NotificationDetails; let i=index\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-card class=\"noti_card\">\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<ion-text class=\"ion-float-left\"> {{i+1}}.</ion-text>\r\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"light\" class=\"ion-float-right\"\r\n\t\t\t\t\t\t\t(click)=\"presentModal(item.NotificationId)\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Region Name</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.RegionName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Company Name</ion-label>\r\n\t\t\t\t\t<ion-text> {{item.CompanyName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Station Type</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationTypeName}}</ion-text>\r\n\r\n\t\t\t\t</ion-card>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<!---Mo-->\r\n\t\t<!-- <ion-row *ngFor=\"let item of NotificationDetailsMO; let i=index\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-card class=\"noti_card\">\r\n\t\t\t\t\t<ion-label >\r\n\t\t\t\t\t\t<ion-text class=\"ion-float-left\"> {{i+1}}.</ion-text>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t  \r\n\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t<ion-text> {{item.ShiftName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Manager</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.Manager}}</ion-text>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-label>ContactNo</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.ContactNo}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.Remark}}</ion-text>\r\n\t\t\t\t</ion-card>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row> -->\r\n\t\t<div *ngIf=\"DepartmentCode=='MO' \">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-segment color=\"dark\" (ionChange)=\"notifiChange($event)\" value=\"PendingEntry\">\r\n\t\t\t\t\t<ion-segment-button value=\"PendingEntry\">\r\n\t\t\t\t\t\t<ion-label>Pending Entry</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"JumpEntry\">\r\n\t\t\t\t\t\t<ion-label>Jump Entry</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-row>\r\n\t\t\t<div *ngIf=\"pendingEntry\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-card class=\"noti_card\" *ngFor=\"let item of NotificationDetailsMOPending; let i=index \">\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text class=\"ion-float-left\">{{i+1}}</ion-text>\r\n\t\t\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.ShiftName}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Manager</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Manager}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t\t\t\t<ion-text> {{item.ContactNo}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Entry Date </ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Remark}}</ion-text>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"jumpEntry\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-card class=\"noti_card\" *ngFor=\"let item of NotificationDetailsMOJump; let i=index\">\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text class=\"ion-float-left\">{{i+1}}.</ion-text>\r\n\t\t\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>DispenserName </ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.DispenserName}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>DispanserBeforeJump</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.DispanserBeforeJump}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>DispanserAfterJump</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.DispanserAfterJump}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>DispenserCode</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.DispenserCode}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>DispanserSide</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.DispanserSide}}</ion-text>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!---Co-->\r\n\t\t<div *ngIf=\"DepartmentCode=='CO' \">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-segment color=\"dark\" (ionChange)=\"notifiChange($event)\" value=\"PendingEntry\">\r\n\t\t\t\t\t<ion-segment-button value=\"PendingEntry\">\r\n\t\t\t\t\t\t<ion-label>Pending Entry</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"JumpEntry\">\r\n\t\t\t\t\t\t<ion-label>Jump Entry</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-row>\r\n\t\t\t<div *ngIf=\"pendingEntry\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-card class=\"noti_card\" *ngFor=\"let item of NotificationDetailsCOPending; let i=index \">\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text class=\"ion-float-left\">{{i+1}}</ion-text>\r\n\t\t\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.ShiftName}}</ion-text>\r\n\t\t\t\t\t\t\t<ion-label>Manager</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Manager}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t\t\t\t<ion-text> {{item.ContactNo}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Remark}}</ion-text>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"jumpEntry\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-card class=\"noti_card\" *ngFor=\"let item of NotificationDetailsCOJump; let i=index\">\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text class=\"ion-float-left\">{{i+1}}.</ion-text>\r\n\t\t\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Equipment </ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Equipment}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Type</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Type}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Manager</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Manager}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>ContactNo</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.ContactNo}}</ion-text>\r\n\r\n\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t\t<ion-text>{{item.Remark}}</ion-text>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!---SOP-->\r\n\t\t<ion-row *ngFor=\"let item of NotificationDetailsSOP; let i=index\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-card class=\"noti_card\">\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<ion-text class=\"ion-float-left\"> {{i+1}}.</ion-text>\r\n\t\t\t\t\t\t<!-- <ion-button size=\"small\" color=\"light\" class=\"ion-float-right\" (click)=\"presentModal(item.NotificationId)\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-button> -->\r\n\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t<ion-label>Staion Code</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationCode}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Staion Name</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.StationName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t<ion-text> {{item.ShiftName}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Manager</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.Manager}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>ContactNo</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.ContactNo}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\r\n\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t<ion-text>{{item.Remark}}</ion-text>\r\n\t\t\t\t</ion-card>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/notification/notification-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/HO/notification/notification-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/HO/notification/notification.page.ts");




var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
var NotificationPageRoutingModule = /** @class */ (function () {
    function NotificationPageRoutingModule() {
    }
    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationPageRoutingModule);
    return NotificationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/notification/notification.module.ts":
/*!********************************************************!*\
  !*** ./src/app/HO/notification/notification.module.ts ***!
  \********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/HO/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/HO/notification/notification.page.ts");







var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/HO/notification/notification.page.scss":
/*!********************************************************!*\
  !*** ./src/app/HO/notification/notification.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n\n.noti_card {\n  border-left: 3px solid var(--yellow_clr);\n  padding-left: 10px;\n}\n\n.noti_card ion-label:first-child {\n  color: green;\n  overflow: hidden;\n}\n\n.noti_card ion-label:first-child ion-text {\n  padding-top: 7px;\n}\n\n.noti_card ion-label {\n  display: block;\n  font-weight: bold;\n  color: black;\n}\n\n.noti_card ion-text {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0NBQUE7QUNBSjs7QURFQTtFQUVJLHdDQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFSTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdRO0VBRUksZ0JBQUE7QUNGWjs7QURLSTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNKUjs7QURNSTtFQUVJLGNBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL0hPL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcl9jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xyXG59XHJcbi5ub3RpX2NhcmRcclxue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS15ZWxsb3dfY2xyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIFxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LWNoaWxkXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgICAgICBpb24tdGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGlvbi10ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIuZm9yX2NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5fY2xyKTtcbn1cblxuLm5vdGlfY2FyZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0teWVsbG93X2Nscik7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5ub3RpX2NhcmQgaW9uLWxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6IGdyZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm5vdGlfY2FyZCBpb24tbGFiZWw6Zmlyc3QtY2hpbGQgaW9uLXRleHQge1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuLm5vdGlfY2FyZCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ub3RpX2NhcmQgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/HO/notification/notification.page.ts":
/*!******************************************************!*\
  !*** ./src/app/HO/notification/notification.page.ts ***!
  \******************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_password_update_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-password/update-password.page */ "./src/app/HO/update-password/update-password.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var NotificationPage = /** @class */ (function () {
    function NotificationPage(router, activatedRoute, commonServices, menu, modalController, dp) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.modalController = modalController;
        this.dp = dp;
        this.searchShow = false;
        this.searchFlag = 0;
        this.showHeaderTitle = '';
        this.LoginDetails = [];
        this.pendingEntry = true;
        this.jumpEntry = false;
        this.Reportflag = 'PendingEntry';
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        this.flag = this.activatedRoute.snapshot.paramMap.get('Flag');
    }
    NotificationPage.prototype.ngOnInit = function () {
        var now = new Date();
        this.Cdate = this.dp.transform(now.toDateString(), 'yyyy/MM/dd');
        this.userId = localStorage.getItem('UID');
        console.log("UID", this.userId);
        if (this.flag == 'reset') {
            this.commonServices.confirm('Are You Sure, Want to Reset Your Password ?');
            this.NotiFicationData();
        }
        else {
            this.NotiFicationData();
        }
    };
    NotificationPage.prototype.notifiChange = function (value) {
        if (value.detail.value == 'PendingEntry') {
            this.pendingEntry = true;
            this.jumpEntry = false;
            this.Reportflag = value.detail.value;
            this.NotiFicationData();
        }
        else if (value.detail.value == 'JumpEntry') {
            this.pendingEntry = false;
            this.jumpEntry = true;
            this.Reportflag = value.detail.value;
            this.NotiFicationData();
        }
    };
    NotificationPage.prototype.pendEntry = function () {
        this.pendingEntry = true;
        this.jumpEntry = false;
    };
    NotificationPage.prototype.jmpEntry = function () {
        this.pendingEntry = false;
        this.jumpEntry = true;
    };
    NotificationPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    NotificationPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    NotificationPage.prototype.presentModal = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _update_password_update_password_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePasswordPage"],
                            cssClass: 'my-custom-class1',
                            componentProps: {
                                previewVar: true,
                                notificationid: id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // getValueCO(flagCO:string){
    //   this.Reportflag=flagCO;
    //   this.NotiFicationData();
    //   //alert(this.Reportflag + "CO");
    // }
    // getValueMO(flagMO:string){
    //   this.Reportflag=flagMO;
    //   this.NotiFicationData();
    //   //alert(this.Reportflag + "MO");
    // } 
    NotificationPage.prototype.NotiFicationData = function () {
        var _this = this;
        var self = this;
        if (self.DepartmentCode == "HO") {
            self.commonServices.post("CommonGetData", { Flag: 'NotificationData', Id: 0 }).subscribe(function (res) {
                self.NotificationDetails = JSON.parse(res).Table;
            }, function (error) { self.commonServices.presentToast("Something went wrong."); });
        }
        else if (self.DepartmentCode == "CO") {
            self.commonServices.post("CommonGetData", { Flag: 'NotificationDetailsCO', ReportFlag: this.Reportflag, Id: this.userId, CDashdate: this.Cdate }).subscribe(function (res) {
                _this.NotificationDetailsCOJump = [];
                _this.NotificationDetailsCOPending = [];
                if (_this.Reportflag == 'JumpEntry')
                    _this.NotificationDetailsCOJump = JSON.parse(res).Table;
                else
                    _this.NotificationDetailsCOPending = JSON.parse(res).Table;
                console.log(_this.NotificationDetailsCOPending, "+", "this.Reportflag");
            }, function (error) { self.commonServices.presentToast("Something went wrong."); });
        }
        else if (self.DepartmentCode == "MO") {
            self.commonServices.post("CommonGetData", { Flag: 'NotificationDetailsMO', ReportFlag: this.Reportflag, Id: this.userId, CDashdate: this.Cdate }).subscribe(function (res) {
                _this.NotificationDetailsMOJump = [];
                _this.NotificationDetailsMOPending = [];
                if (_this.Reportflag == 'JumpEntry')
                    _this.NotificationDetailsMOJump = JSON.parse(res).Table;
                else
                    _this.NotificationDetailsMOPending = JSON.parse(res).Table;
                console.log(_this.NotificationDetailsMOJump);
            }, function (error) { _this.commonServices.presentToast("Something went wrong."); });
        }
        else if (self.DepartmentCode == "SOP") {
            self.commonServices.post("CommonGetData", { Flag: 'NotificationSOP', Id: self.userId, CDashdate: self.Cdate }).subscribe(function (res) {
                self.NotificationDetailsSOP = JSON.parse(res).Table;
                console.log(self.NotificationDetailsMO);
                console.log("sop");
            }, function (error) { self.commonServices.presentToast("Something went wrong."); });
        }
        else {
            self.commonServices.presentToast("No Notification available.");
        }
    };
    NotificationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/HO/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-notification-notification-module-es5.js.map