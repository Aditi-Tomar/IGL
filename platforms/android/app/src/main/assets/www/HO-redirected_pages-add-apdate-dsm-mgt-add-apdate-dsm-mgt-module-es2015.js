(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-apdate-dsm-mgt-add-apdate-dsm-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\"><ion-back-button defaultHref=\"dsm-management\" class=\"text_white\"></ion-back-button></ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='adddm'\" class=\"text_white\">Add DSM</ion-text>\r\n\t\t\t\t<ion-text *ngIf=\"pageFlag=='updatedm'\" class=\"text_white\">Update DSM</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\t\r\n\t<form [formGroup]=\"addupdateForm\" (ngSubmit)=\"insertUpdateDm()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Emp Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DSMCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DSMName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"StationId\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of StationList\" [value]=\"itm.StationId\">{{itm.StationName}}</ion-select-option>\r\n\t\t\t\t\t\t  </ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\" >\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddApdateDsmMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateDsmMgtPageRoutingModule", function() { return AddApdateDsmMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_apdate_dsm_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-apdate-dsm-mgt.page */ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.ts");




const routes = [
    {
        path: '',
        component: _add_apdate_dsm_mgt_page__WEBPACK_IMPORTED_MODULE_3__["AddApdateDsmMgtPage"]
    }
];
let AddApdateDsmMgtPageRoutingModule = class AddApdateDsmMgtPageRoutingModule {
};
AddApdateDsmMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddApdateDsmMgtPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddApdateDsmMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateDsmMgtPageModule", function() { return AddApdateDsmMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_apdate_dsm_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-apdate-dsm-mgt-routing.module */ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt-routing.module.ts");
/* harmony import */ var _add_apdate_dsm_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-apdate-dsm-mgt.page */ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.ts");







let AddApdateDsmMgtPageModule = class AddApdateDsmMgtPageModule {
};
AddApdateDsmMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_apdate_dsm_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddApdateDsmMgtPageRoutingModule"]
        ],
        declarations: [_add_apdate_dsm_mgt_page__WEBPACK_IMPORTED_MODULE_6__["AddApdateDsmMgtPage"]]
    })
], AddApdateDsmMgtPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLWRzbS1tZ3QvYWRkLWFwZGF0ZS1kc20tbWd0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLWRzbS1tZ3QvYWRkLWFwZGF0ZS1kc20tbWd0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtYXBkYXRlLWRzbS1tZ3QvYWRkLWFwZGF0ZS1kc20tbWd0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AddApdateDsmMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApdateDsmMgtPage", function() { return AddApdateDsmMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





let AddApdateDsmMgtPage = class AddApdateDsmMgtPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.flag = '';
        this.selectedDSMnameId = '';
        this.StationList = [];
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.userid = localStorage.getItem("UID");
        this.addupdateForm = formBuilder.group({
            DSMCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DSMName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Status: this.status,
            StationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        this.updateDm();
    }
    ngOnInit() {
        this.dmlist = JSON.parse(this.activatedroute.snapshot.paramMap.get('dmlist'));
        this.getStation();
    }
    getStation() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'StationList', Id: 0, Status: 1 }).subscribe((res) => {
            self.StationList = JSON.parse(res).Table;
            console.log(self.StationList);
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.loadingDismiss();
            self.commonServices.presentToast("Something went wrong.");
        });
    }
    updateDm() {
        var self = this;
        if (self.pageFlag == "updatedm" && self.dmlist != "" && self.dmlist != undefined && self.dmlist != null) {
            self.addupdateForm = self.formBuilder.group({
                DSMCode: [self.dmlist.DSMCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DSMName: [self.dmlist.DSMName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Status: this.status,
                StationId: [self.dmlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.dmlist.Status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
    }
    insertUpdateDm() {
        var self = this;
        var statusToggle = 2;
        if (self.status == false) {
            statusToggle = 2;
        }
        else {
            statusToggle = 1;
        }
        self.errorFound = true;
        if (self.pageFlag == "updatedm") {
            self.title = 'Update';
            self.flag = 'U';
            self.selectedDSMnameId = self.dmlist.DSMId;
            self.obj = {
                DSMId: (self.flag == 'U') ? self.selectedDSMnameId : '0',
                DSMCode: self.addupdateForm.value.DSMCode,
                DSMName: self.addupdateForm.value.DSMName,
                UserId: self.userid,
                Status: statusToggle,
                StationId: self.addupdateForm.value.StationId
            };
        }
        else {
            self.title = 'Add';
            self.flag = 'I';
            self.obj = {
                Id: (self.flag == 'U') ? self.selectedDSMnameId : '0',
                DSMCode: self.addupdateForm.value.DSMCode,
                DSMName: self.addupdateForm.value.DSMName,
                UserId: self.userid,
                Status: statusToggle,
                StationId: self.addupdateForm.value.StationId
            };
        }
        if (self.ValidationDSM()) {
            self.commonServices.loadingPresent();
            self.commonServices.post("InsertUpdateDSM", self.obj).subscribe((res) => {
                self.dmRes = (JSON.parse(res)).Table;
                console.log(self.dmRes);
                if (self.dmRes[0].Mesage == "DSM inserted successfully.") {
                    self.commonServices.presentToast(self.dmRes[0].Mesage);
                    self.addupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/dsm-management']);
                    }, 2000);
                }
                else if (self.dmRes[0].Mesage == "DSM updated successfully.") {
                    self.commonServices.presentToast(self.dmRes[0].Mesage);
                    self.addupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/dsm-management']);
                    }, 2000);
                }
                else if (self.dmRes[0].Mesage == "DSM already exists.") {
                    self.commonServices.presentToast(self.dmRes[0].Mesage);
                }
                else {
                    self.commonServices.presentToast("Something went wrong.");
                }
                self.commonServices.loadingDismiss();
            }, (error) => {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    }
    ValidationDSM() {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        if (!re.test(this.addupdateForm.value.DSMName)) {
            this.commonServices.presentToast('Invalid DSM Name.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.DSMCode == '') {
            this.commonServices.presentToast('DSM code must be entered.');
            this.errorFound = false;
        }
        else if (this.addupdateForm.value.DSMName == '') {
            this.commonServices.presentToast('DSM name be entered.');
            this.errorFound = false;
        }
        return this.errorFound;
    }
};
AddApdateDsmMgtPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddApdateDsmMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-apdate-dsm-mgt',
        template: __webpack_require__(/*! raw-loader!./add-apdate-dsm-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.html"),
        styles: [__webpack_require__(/*! ./add-apdate-dsm-mgt.page.scss */ "./src/app/HO/redirected_pages/add-apdate-dsm-mgt/add-apdate-dsm-mgt.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddApdateDsmMgtPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-apdate-dsm-mgt-add-apdate-dsm-mgt-module-es2015.js.map