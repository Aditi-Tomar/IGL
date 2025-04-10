(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-issue-log-attachment-issue-log-attachment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-row class=\"ion-align-items-center search_parent for_color\">\r\n\t\t<ion-col size=\"2\" class=\"pt_0 pb_0\">\r\n\t\t\t<ion-back-button defaultHref=\"issue-log\" class=\"text_white\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\" class=\"text_white ion-text-center\">Issue Log Attachments</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"img_container\" (click)=\"presentModal()\">\r\n\t\t\t\t<img src=\"../../../../assets/images/elon_musk.jpg\" />\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: IssueLogAttachmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogAttachmentPageRoutingModule", function() { return IssueLogAttachmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_log_attachment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issue-log-attachment.page */ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.ts");




var routes = [
    {
        path: '',
        component: _issue_log_attachment_page__WEBPACK_IMPORTED_MODULE_3__["IssueLogAttachmentPage"]
    }
];
var IssueLogAttachmentPageRoutingModule = /** @class */ (function () {
    function IssueLogAttachmentPageRoutingModule() {
    }
    IssueLogAttachmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IssueLogAttachmentPageRoutingModule);
    return IssueLogAttachmentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: IssueLogAttachmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogAttachmentPageModule", function() { return IssueLogAttachmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _issue_log_attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue-log-attachment-routing.module */ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment-routing.module.ts");
/* harmony import */ var _issue_log_attachment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue-log-attachment.page */ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.ts");







var IssueLogAttachmentPageModule = /** @class */ (function () {
    function IssueLogAttachmentPageModule() {
    }
    IssueLogAttachmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _issue_log_attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__["IssueLogAttachmentPageRoutingModule"]
            ],
            declarations: [_issue_log_attachment_page__WEBPACK_IMPORTED_MODULE_6__["IssueLogAttachmentPage"]]
        })
    ], IssueLogAttachmentPageModule);
    return IssueLogAttachmentPageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n\n.img_container {\n  width: 100%;\n}\n\n.img_container img {\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9pc3N1ZS1sb2ctYXR0YWNobWVudC9pc3N1ZS1sb2ctYXR0YWNobWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL3JlZGlyZWN0ZWRfcGFnZXMvaXNzdWUtbG9nLWF0dGFjaG1lbnQvaXNzdWUtbG9nLWF0dGFjaG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0NBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7QUNBSjs7QURDSTtFQUVJLDBDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2lzc3VlLWxvZy1hdHRhY2htZW50L2lzc3VlLWxvZy1hdHRhY2htZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JfY29sb3Jcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5fY2xyKTtcclxufVxyXG4uaW1nX2NvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLDAsMCwuNSk7XHJcbiAgICB9XHJcbn0iLCIuZm9yX2NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5fY2xyKTtcbn1cblxuLmltZ19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbWdfY29udGFpbmVyIGltZyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.ts ***!
  \***************************************************************************************/
/*! exports provided: IssueLogAttachmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogAttachmentPage", function() { return IssueLogAttachmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redirected_pages/issue-log-modal/issue-log-modal.page */ "./src/app/HO/redirected_pages/issue-log-modal/issue-log-modal.page.ts");




var IssueLogAttachmentPage = /** @class */ (function () {
    function IssueLogAttachmentPage(modalController) {
        this.modalController = modalController;
    }
    IssueLogAttachmentPage.prototype.ngOnInit = function () {
    };
    IssueLogAttachmentPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_3__["IssueLogModalPage"],
                            cssClass: 'my-custom-class1'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IssueLogAttachmentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    IssueLogAttachmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-log-attachment',
            template: __webpack_require__(/*! raw-loader!./issue-log-attachment.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.html"),
            styles: [__webpack_require__(/*! ./issue-log-attachment.page.scss */ "./src/app/HO/redirected_pages/issue-log-attachment/issue-log-attachment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], IssueLogAttachmentPage);
    return IssueLogAttachmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-issue-log-attachment-issue-log-attachment-module-es5.js.map