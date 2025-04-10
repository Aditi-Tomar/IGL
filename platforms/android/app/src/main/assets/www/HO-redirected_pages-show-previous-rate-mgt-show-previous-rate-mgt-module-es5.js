(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-show-previous-rate-mgt-show-previous-rate-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-row class=\"align_center pr10 search_parent for_color\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"rate-management\" class=\"text_white\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"8\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" class=\"ion-text-center\"></ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"showMessage()\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td >{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.NormalRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DisountedRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.EffectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.DisplayTime}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"ion-text-center\"><h4 class=\"mt10 mb5\">Previous Rate</h4></ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Region</th>\r\n\t\t\t\t\t\t\t\t<th>Normal Rate ₹/Kg</th>\r\n\t\t\t\t\t\t\t\t<th>Discounted Rate ₹/Kg</th>\r\n\t\t\t\t\t\t\t\t<th>Effective Date</th>\r\n\t\t\t\t\t\t\t\t<th>Effective Time</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"showMessage()\" *ngFor=\"let ritem of Ratelist; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{ritem.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{ritem.NormalRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{ritem.DisountedRate.toFixed(2)}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{ritem.EffectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{ritem.DisplayTime}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ShowPreviousRateMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPreviousRateMgtPageRoutingModule", function() { return ShowPreviousRateMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_previous_rate_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-previous-rate-mgt.page */ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _show_previous_rate_mgt_page__WEBPACK_IMPORTED_MODULE_3__["ShowPreviousRateMgtPage"]
    }
];
var ShowPreviousRateMgtPageRoutingModule = /** @class */ (function () {
    function ShowPreviousRateMgtPageRoutingModule() {
    }
    ShowPreviousRateMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowPreviousRateMgtPageRoutingModule);
    return ShowPreviousRateMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShowPreviousRateMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPreviousRateMgtPageModule", function() { return ShowPreviousRateMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_previous_rate_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-previous-rate-mgt-routing.module */ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt-routing.module.ts");
/* harmony import */ var _show_previous_rate_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-previous-rate-mgt.page */ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.ts");







var ShowPreviousRateMgtPageModule = /** @class */ (function () {
    function ShowPreviousRateMgtPageModule() {
    }
    ShowPreviousRateMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _show_previous_rate_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowPreviousRateMgtPageRoutingModule"]
            ],
            declarations: [_show_previous_rate_mgt_page__WEBPACK_IMPORTED_MODULE_6__["ShowPreviousRateMgtPage"]]
        })
    ], ShowPreviousRateMgtPageModule);
    return ShowPreviousRateMgtPageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9zaG93LXByZXZpb3VzLXJhdGUtbWd0L3Nob3ctcHJldmlvdXMtcmF0ZS1tZ3QucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL3Nob3ctcHJldmlvdXMtcmF0ZS1tZ3Qvc2hvdy1wcmV2aW91cy1yYXRlLW1ndC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtBQ0FKOztBREdBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9zaG93LXByZXZpb3VzLXJhdGUtbWd0L3Nob3ctcHJldmlvdXMtcmF0ZS1tZ3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcl9jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xyXG59XHJcblxyXG4uaG9tZV9idXR0b25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzJhMmEyYTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5mb3JfY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xufVxuXG4uaG9tZV9idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyYTJhMmE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ShowPreviousRateMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPreviousRateMgtPage", function() { return ShowPreviousRateMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");




var ShowPreviousRateMgtPage = /** @class */ (function () {
    function ShowPreviousRateMgtPage(router, commonServices) {
        this.router = router;
        this.commonServices = commonServices;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
    }
    ShowPreviousRateMgtPage.prototype.ngOnInit = function () {
        this.getRateList();
    };
    ShowPreviousRateMgtPage.prototype.homeRedirect = function () {
        this.router.navigate(['admin-home']);
    };
    ShowPreviousRateMgtPage.prototype.getRateList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'RateList', Id: '0' }).subscribe(function (res) {
            var RateRes = JSON.parse(res);
            if (RateRes != "" && RateRes != undefined && RateRes != null) {
                self.Ratelist = RateRes.Table1;
                console.log(self.Ratelist);
            }
            else {
                self.commonServices.presentToast("Something went wrong.");
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    ShowPreviousRateMgtPage.prototype.showMessage = function () {
        this.commonServices.presentToast('You cannot modify this rate.');
    };
    ShowPreviousRateMgtPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    ShowPreviousRateMgtPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    ShowPreviousRateMgtPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getRateList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.Ratelist.filter(function (item) {
                return (item.RegionName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    ShowPreviousRateMgtPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ShowPreviousRateMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-previous-rate-mgt',
            template: __webpack_require__(/*! raw-loader!./show-previous-rate-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.html"),
            styles: [__webpack_require__(/*! ./show-previous-rate-mgt.page.scss */ "./src/app/HO/redirected_pages/show-previous-rate-mgt/show-previous-rate-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ShowPreviousRateMgtPage);
    return ShowPreviousRateMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-show-previous-rate-mgt-show-previous-rate-mgt-module-es5.js.map