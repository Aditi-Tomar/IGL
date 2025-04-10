(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-add-update-controloffice-add-update-controloffice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-controloffice/add-update-controloffice.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/add-update-controloffice/add-update-controloffice.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='addcontroloffice'\">Add Control Office</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='updatecontroloffice'\">Update Control Office</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"pageFlag =='addcontroloffice'\">\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"InsertControlRoom()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Control Office Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"controlroomcode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Control Office Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"controlroomname\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"pageFlag =='updatecontroloffice'\">\r\n\t<form [formGroup]=\"updateForm\" (ngSubmit)=\"UpdateControlRoom()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Control Office Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"controlroomcode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Control Office Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Control Office Name\" formControlName=\"controlroomname\">\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/add-update-controloffice/add-update-controloffice-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/HO/add-update-controloffice/add-update-controloffice-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddUpdateControlofficePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateControlofficePageRoutingModule", function() { return AddUpdateControlofficePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_controloffice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-controloffice.page */ "./src/app/HO/add-update-controloffice/add-update-controloffice.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_controloffice_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateControlofficePage"]
    }
];
var AddUpdateControlofficePageRoutingModule = /** @class */ (function () {
    function AddUpdateControlofficePageRoutingModule() {
    }
    AddUpdateControlofficePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdateControlofficePageRoutingModule);
    return AddUpdateControlofficePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-controloffice/add-update-controloffice.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/HO/add-update-controloffice/add-update-controloffice.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddUpdateControlofficePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateControlofficePageModule", function() { return AddUpdateControlofficePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_controloffice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-controloffice-routing.module */ "./src/app/HO/add-update-controloffice/add-update-controloffice-routing.module.ts");
/* harmony import */ var _add_update_controloffice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-controloffice.page */ "./src/app/HO/add-update-controloffice/add-update-controloffice.page.ts");







var AddUpdateControlofficePageModule = /** @class */ (function () {
    function AddUpdateControlofficePageModule() {
    }
    AddUpdateControlofficePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_controloffice_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateControlofficePageRoutingModule"]
            ],
            declarations: [_add_update_controloffice_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateControlofficePage"]]
        })
    ], AddUpdateControlofficePageModule);
    return AddUpdateControlofficePageModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-controloffice/add-update-controloffice.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/HO/add-update-controloffice/add-update-controloffice.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form ion-toggle {\n  padding: 1%;\n}\nform .error-message {\n  color: #ff0000;\n}\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vYWRkLXVwZGF0ZS1jb250cm9sb2ZmaWNlL2FkZC11cGRhdGUtY29udHJvbG9mZmljZS5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL2FkZC11cGRhdGUtY29udHJvbG9mZmljZS9hZGQtdXBkYXRlLWNvbnRyb2xvZmZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQ0ksV0FBQTtBQ0ZaO0FES1E7RUFBZSxjQUFBO0FDRnZCO0FES0E7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9ITy9hZGQtdXBkYXRlLWNvbnRyb2xvZmZpY2UvYWRkLXVwZGF0ZS1jb250cm9sb2ZmaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlvbi10b2dnbGV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2V7Y29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgfVxyXG59XHJcbi5ob21lX2J1dHRvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMmEyYTJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiZm9ybSBpb24tdG9nZ2xlIHtcbiAgcGFkZGluZzogMSU7XG59XG5mb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/add-update-controloffice/add-update-controloffice.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/HO/add-update-controloffice/add-update-controloffice.page.ts ***!
  \******************************************************************************/
/*! exports provided: AddUpdateControlofficePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateControlofficePage", function() { return AddUpdateControlofficePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var AddUpdateControlofficePage = /** @class */ (function () {
    function AddUpdateControlofficePage(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.CRcode = '';
        this.CRname = '';
        this.flag = '';
        this.selectedCRoomId = '';
        this.title = '';
        this.addForm = formBuilder.group({
            controlroomcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            controlroomname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.updateForm = formBuilder.group({
            controlroomcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            controlroomname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddUpdateControlofficePage.prototype.ngAfterContentInit = function () {
        if (this.pageFlag == "updatecontroloffice") {
            this.updateForm = this.formBuilder.group({
                controlroomcode: [this.itemList.ControlRoomCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                controlroomname: [this.itemList.ControlRoomName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
    };
    AddUpdateControlofficePage.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.itemList = JSON.parse(this.activatedroute.snapshot.paramMap.get("itemList"));
    };
    AddUpdateControlofficePage.prototype.InsertControlRoom = function () {
        var self = this;
        this.title = 'Add';
        this.flag = 'I';
        self.errorFound = true;
        if (self.ValidationCAddRoom()) {
            var obj = {
                Id: (self.flag == 'U') ? self.selectedCRoomId : '0',
                CRCode: self.addForm.value.controlroomcode,
                CRname: self.addForm.value.controlroomname,
                LoginId: self.userid
            };
            self.commonServices.loadingPresent();
            self.commonServices.postwithservice("insertCRoom", obj).subscribe(function (res) {
                var data = JSON.parse(res);
                console.log(data);
                if (data.Status == "Data inserted successfully.") {
                    self.commonServices.presentToast("Data is Inserted successfully");
                    self.addForm.reset();
                    self.router.navigate(['/control-office']);
                }
                else {
                    self.commonServices.presentToast(data.Status);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateControlofficePage.prototype.UpdateControlRoom = function () {
        var self = this;
        self.title = 'Update';
        self.flag = 'U';
        self.selectedCRoomId = self.itemList.Id;
        self.errorFound = true;
        if (self.ValidationCUpdateRoom()) {
            var obj = {
                Id: (self.flag == 'U') ? self.selectedCRoomId : '0',
                CRCode: self.updateForm.value.controlroomcode,
                CRname: self.updateForm.value.controlroomname,
                LoginId: self.userid
            };
            self.commonServices.loadingPresent();
            self.commonServices.postwithservice("updateCRoom", obj).subscribe(function (res) {
                var data = JSON.parse(res);
                if (data.Status == "Data updated successfully.") {
                    self.commonServices.presentToast("Data is updated successfully");
                    self.addForm.reset();
                    self.router.navigate(['/control-office']);
                }
                else {
                    self.commonServices.presentToast("Something went wrong.");
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateControlofficePage.prototype.ValidationCAddRoom = function () {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        if (!re.test(this.addForm.value.controlroomname)) {
            this.commonServices.presentToast('Invalid Control Office Name.');
            this.errorFound = false;
        }
        else if (this.addForm.value.controlroomcode == '') {
            this.commonServices.presentToast('control code must be entered.');
            this.errorFound = false;
        }
        else if (this.addForm.value.controlroomname == '') {
            this.commonServices.presentToast('control name be entered.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    AddUpdateControlofficePage.prototype.ValidationCUpdateRoom = function () {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        if (!re.test(this.updateForm.value.controlroomname)) {
            this.commonServices.presentToast('Invalid Control Office Name.');
            this.errorFound = false;
        }
        else if (this.updateForm.value.controlroomcode == '') {
            this.commonServices.presentToast('control code must be entered.');
            this.errorFound = false;
        }
        else if (this.updateForm.value.controlroomname == '') {
            this.commonServices.presentToast('control name be entered.');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    AddUpdateControlofficePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdateControlofficePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-controloffice',
            template: __webpack_require__(/*! raw-loader!./add-update-controloffice.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-controloffice/add-update-controloffice.page.html"),
            styles: [__webpack_require__(/*! ./add-update-controloffice.page.scss */ "./src/app/HO/add-update-controloffice/add-update-controloffice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdateControlofficePage);
    return AddUpdateControlofficePage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-add-update-controloffice-add-update-controloffice-module-es5.js.map