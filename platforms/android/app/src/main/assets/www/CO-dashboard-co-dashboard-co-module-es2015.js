(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-dashboard-co-dashboard-co-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/dashboard-co/dashboard-co.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/dashboard-co/dashboard-co.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/co-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\">\r\n\t\t\t<h4 class=\"ion-text-center\">Dashboard Control</h4>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div *ngIf=\"isShown\" class=\"stcode tooltiptext\">\r\n\t\t{{stationCode}}\r\n\t</div>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<!-- <th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th> -->\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<!-- <th>Station Region</th> -->\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor =\"let item of datashnoardcoRes; let i=index\" >\r\n\t\t\t\t\t\t\t\t<!-- <td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td> -->\r\n\t\t\t\t\t\t\t\t<td (click)=\"showStationCode(item.StationName)\">{{item.StationName}}\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<!-- <td>{{item.Region}}</td> -->\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"item.DS=='!Not Submitted'\"><span class=\"submited\" >{{item.DS}}</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf =\"item.DS=='Not Submitted'\"><span class=\"not_submited\" >{{item.DS}}</span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<!-- <tr class=\"row_red\" *ngIf=\"dashCoItem.DS=='Not Submitted'\" *ngFor =\"let item of datashnoardcoRes; let i=index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.Region}}</td>\r\n\t\t\t\t\t\t\t\t<td><span class=\"not_submited\">{{dashCoItem.DS}}</span></td>\r\n\t\t\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/CO/dashboard-co/dashboard-co-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/CO/dashboard-co/dashboard-co-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardCOPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCOPageRoutingModule", function() { return DashboardCOPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_co_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-co.page */ "./src/app/CO/dashboard-co/dashboard-co.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_co_page__WEBPACK_IMPORTED_MODULE_3__["DashboardCOPage"]
    }
];
let DashboardCOPageRoutingModule = class DashboardCOPageRoutingModule {
};
DashboardCOPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardCOPageRoutingModule);



/***/ }),

/***/ "./src/app/CO/dashboard-co/dashboard-co.module.ts":
/*!********************************************************!*\
  !*** ./src/app/CO/dashboard-co/dashboard-co.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardCOPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCOPageModule", function() { return DashboardCOPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_co_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-co-routing.module */ "./src/app/CO/dashboard-co/dashboard-co-routing.module.ts");
/* harmony import */ var _dashboard_co_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-co.page */ "./src/app/CO/dashboard-co/dashboard-co.page.ts");







let DashboardCOPageModule = class DashboardCOPageModule {
};
DashboardCOPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_co_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardCOPageRoutingModule"]
        ],
        declarations: [_dashboard_co_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCOPage"]]
    })
], DashboardCOPageModule);



/***/ }),

/***/ "./src/app/CO/dashboard-co/dashboard-co.page.scss":
/*!********************************************************!*\
  !*** ./src/app/CO/dashboard-co/dashboard-co.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submited {\n  background-color: #039c03;\n  color: white;\n  font-size: 14px;\n  padding: 0px 6px;\n  border-radius: 5px;\n}\n\n.not_submited {\n  background-color: #de2105;\n  color: white;\n  font-size: 14px;\n  padding: 0px 6px;\n  border-radius: 5px;\n}\n\n.row_red {\n  background-color: rgba(255, 0, 0, 0.07);\n}\n\n.row_green {\n  background-color: rgba(0, 255, 76, 0.07);\n}\n\n.my_table_container {\n  position: relative;\n}\n\n.tooltiptext {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 93%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvQ08vZGFzaGJvYXJkLWNvL2Rhc2hib2FyZC1jby5wYWdlLnNjc3MiLCJzcmMvYXBwL0NPL2Rhc2hib2FyZC1jby9kYXNoYm9hcmQtY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFFSSx1Q0FBQTtBQ0FKOztBREVBO0VBRUksd0NBQUE7QUNBSjs7QURHQTtFQUVJLGtCQUFBO0FDREo7O0FER0E7RUFFSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNGLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL0NPL2Rhc2hib2FyZC1jby9kYXNoYm9hcmQtY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdGVkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDMsIDE1NiwgMyk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDBweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLm5vdF9zdWJtaXRlZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZTIxMDU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDBweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnJvd19yZWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDcpO1xyXG59XHJcbi5yb3dfZ3JlZW5cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDc2LCAwLjA3KTtcclxufVxyXG5cclxuLm15X3RhYmxlX2NvbnRhaW5lciBcclxue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnRvb2x0aXB0ZXh0IFxyXG57ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwwICwwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuICBcclxuICAiLCIuc3VibWl0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5YzAzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm90X3N1Ym1pdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMjEwNTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvd19yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNyk7XG59XG5cbi5yb3dfZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNzYsIDAuMDcpO1xufVxuXG4ubXlfdGFibGVfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9vbHRpcHRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/CO/dashboard-co/dashboard-co.page.ts":
/*!******************************************************!*\
  !*** ./src/app/CO/dashboard-co/dashboard-co.page.ts ***!
  \******************************************************/
/*! exports provided: DashboardCOPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCOPage", function() { return DashboardCOPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let DashboardCOPage = class DashboardCOPage {
    constructor(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dashboardData = [];
        this.isShown = false; // hidden by default
        this.LoginId = localStorage.getItem('Loginidd');
        this.getDashoardCo();
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    getDashoardCo() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetDashBoardCO", { LoginId: self.LoginId }).subscribe((res) => {
            const data = JSON.parse(res);
            this.commonServices.loadingDismiss();
            console.log(data);
            if (data != '') {
                const data2 = data;
                console.log(data2);
                this.commonServices.loadingDismiss();
                if (data2.Table.length > 0) {
                    self.datashnoardcoRes = data2.Table;
                    console.log(self.datashnoardcoRes);
                    this.dashboardData = this.datashnoardcoRes;
                }
                else {
                    self.commonServices.presentToast('No data available.');
                    this.commonServices.loadingDismiss();
                }
            }
            else {
                self.commonServices.presentToast('No data available. Please try again.');
                this.commonServices.loadingDismiss();
            }
        }, (error) => {
            this.commonServices.loadingDismiss();
            self.commonServices.presentToast('Something went wrong.');
        });
    }
    showStationCode(stname) {
        var item = this.dashboardData.filter(item => item.StationName === stname);
        console.log("station code", item);
        this.stationCode = item[0].StationCode;
        this.stationname = item[0].StationName;
        this.isShown = !this.isShown;
    }
};
DashboardCOPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
DashboardCOPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-co',
        template: __webpack_require__(/*! raw-loader!./dashboard-co.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/dashboard-co/dashboard-co.page.html"),
        styles: [__webpack_require__(/*! ./dashboard-co.page.scss */ "./src/app/CO/dashboard-co/dashboard-co.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], DashboardCOPage);



/***/ })

}]);
//# sourceMappingURL=CO-dashboard-co-dashboard-co-module-es2015.js.map