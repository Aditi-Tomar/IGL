(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-entry-threshhold-add-update-entry-threshhold-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark_green\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"2\" class=\"ion-text-left\">\r\n        <ion-back-button defaultHref=\"entry-threshhold\" class=\"text_white\"></ion-back-button>\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <ion-text class=\"text_white\" *ngIf=\"pageFlag =='addds'\">Add Entry Threshold</ion-text>\r\n        <ion-text class=\"text_white\" *ngIf=\"pageFlag =='updateds'\">Update Entry Threshold</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-text-center\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"InsertThreshold()\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"inp_group\">\r\n          <ion-label>Meter Type<span class=\"star\">*</span></ion-label>\r\n          <ion-select class=\"inp_control\" formControlName=\"MeterType\" [disabled]=\"metervisible\">\r\n            <ion-select-option value=\"LCV\">LCV</ion-select-option>\r\n            <ion-select-option value=\"Meter Skid\">Meter Skid</ion-select-option>\r\n            <ion-select-option value=\"Package\">Package</ion-select-option>\r\n            <ion-select-option value=\"Gas Genset\">Gas Genset</ion-select-option>\r\n            <ion-select-option value=\"Dispenser\">Dispenser</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"inp_group\">\r\n          <ion-label>Thresh Hold Value (in %) <span class=\"star\">*</span></ion-label>\r\n          <ion-input class=\"inp_control\" formControlName=\"ThresholdValue\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"inp_group\">\r\n          <ion-label>Average Days (in days) <span class=\"star\">*</span></ion-label>\r\n          <ion-input class=\"inp_control\" formControlName=\"DaysForAverage\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"align_center\">\r\n        <ion-col>\r\n          Status\r\n        </ion-col>\r\n        <ion-col class=\"d_flex ion-justify-content-end\">\r\n          <ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"button_container\">\r\n            <ion-button type=\"submit\" color=\"dark_green_clr\">Save</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold-routing.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddUpdateEntryThreshholdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateEntryThreshholdPageRoutingModule", function() { return AddUpdateEntryThreshholdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_update_entry_threshhold_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-entry-threshhold.page */ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.ts");




const routes = [
    {
        path: '',
        component: _add_update_entry_threshhold_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateEntryThreshholdPage"]
    }
];
let AddUpdateEntryThreshholdPageRoutingModule = class AddUpdateEntryThreshholdPageRoutingModule {
};
AddUpdateEntryThreshholdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUpdateEntryThreshholdPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddUpdateEntryThreshholdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateEntryThreshholdPageModule", function() { return AddUpdateEntryThreshholdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_entry_threshhold_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-entry-threshhold-routing.module */ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold-routing.module.ts");
/* harmony import */ var _add_update_entry_threshhold_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-entry-threshhold.page */ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.ts");







let AddUpdateEntryThreshholdPageModule = class AddUpdateEntryThreshholdPageModule {
};
AddUpdateEntryThreshholdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_update_entry_threshhold_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateEntryThreshholdPageRoutingModule"]
        ],
        declarations: [_add_update_entry_threshhold_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateEntryThreshholdPage"]]
    })
], AddUpdateEntryThreshholdPageModule);



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWVudHJ5LXRocmVzaGhvbGQvYWRkLXVwZGF0ZS1lbnRyeS10aHJlc2hob2xkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWVudHJ5LXRocmVzaGhvbGQvYWRkLXVwZGF0ZS1lbnRyeS10aHJlc2hob2xkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0hPL3JlZGlyZWN0ZWRfcGFnZXMvYWRkLXVwZGF0ZS1lbnRyeS10aHJlc2hob2xkL2FkZC11cGRhdGUtZW50cnktdGhyZXNoaG9sZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9idXR0b25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzJhMmEyYTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddUpdateEntryThreshholdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateEntryThreshholdPage", function() { return AddUpdateEntryThreshholdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





let AddUpdateEntryThreshholdPage = class AddUpdateEntryThreshholdPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.ThresholdId = '0';
        this.metervisible = false;
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.threshholdbj = this.activatedroute.snapshot.paramMap.get("threshholdbj");
        this.threshholdbj = JSON.parse(this.threshholdbj);
        if (this.pageFlag == "updateds") {
            if (this.threshholdbj.status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
            this.metervisible = true;
            this.addForm = formBuilder.group({
                MeterType: [this.threshholdbj.MeterType, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                ThresholdValue: [this.threshholdbj.ThresholdValue, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DaysForAverage: [this.threshholdbj.DaysForAverage, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
            this.ThresholdId = this.threshholdbj.Id;
        }
        else {
            this.addForm = formBuilder.group({
                MeterType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                ThresholdValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DaysForAverage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
            this.metervisible = false;
        }
    }
    ngAfterContentInit() {
        this.addForm;
    }
    ngOnInit() {
    }
    InsertThreshold() {
        console.log(this.addForm);
        var self = this;
        self.errorFound = true;
        if (self.validationDisp()) {
            const obj = {
                Id: (this.pageFlag == 'updateds') ? this.ThresholdId : '0',
                MeterType: self.addForm.value.MeterType,
                ThresholdValue: self.addForm.value.ThresholdValue,
                DaysForAverage: self.addForm.value.DaysForAverage,
                status: (this.status == true) ? '0' : '1',
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("InsertUpdateEntryThreshold", obj).subscribe((res) => {
                const disRes = JSON.parse(res);
                if (disRes.Table[0].Msg.indexOf('successfully') > -1) {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/entry-threshhold']);
                    }, 1000);
                }
                else {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                }
                self.commonServices.loadingDismiss();
            }, (error) => {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    }
    validationDisp() {
        if (this.addForm.value.MeterType == '') {
            this.commonServices.presentToast('Please enter the Meter Type.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ThresholdValue == '') {
            this.commonServices.presentToast('Please enter the ThresholdValue.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.DaysForAverage == '') {
            this.commonServices.presentToast('Please enter the Average Days.');
            this.errorFound = false;
            return this.errorFound;
        }
        return this.errorFound;
    }
};
AddUpdateEntryThreshholdPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddUpdateEntryThreshholdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-update-entry-threshhold',
        template: __webpack_require__(/*! raw-loader!./add-update-entry-threshhold.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.html"),
        styles: [__webpack_require__(/*! ./add-update-entry-threshhold.page.scss */ "./src/app/HO/redirected_pages/add-update-entry-threshhold/add-update-entry-threshhold.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddUpdateEntryThreshholdPage);



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-entry-threshhold-add-update-entry-threshhold-module-es2015.js.map