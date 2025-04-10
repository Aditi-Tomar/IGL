(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-add-detail-regionmgt-add-detail-regionmgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageName =='updatepage'\">Update Region</ion-text>\r\n\t\t\t\t<ion-text  class=\"text_white\" *ngIf=\"pageName =='addpage'\">Add Region</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"AddupdateForm\" (ngSubmit)=\"InsertupdateRegion()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Region Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\"  formControlName=\"regionname\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>Status</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/HO/add-detail-regionmgt/add-detail-regionmgt-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddDetailRegionmgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailRegionmgtPageRoutingModule", function() { return AddDetailRegionmgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_detail_regionmgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-detail-regionmgt.page */ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.ts");




const routes = [
    {
        path: '',
        component: _add_detail_regionmgt_page__WEBPACK_IMPORTED_MODULE_3__["AddDetailRegionmgtPage"]
    }
];
let AddDetailRegionmgtPageRoutingModule = class AddDetailRegionmgtPageRoutingModule {
};
AddDetailRegionmgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddDetailRegionmgtPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.module.ts ***!
  \************************************************************************/
/*! exports provided: AddDetailRegionmgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailRegionmgtPageModule", function() { return AddDetailRegionmgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_detail_regionmgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-detail-regionmgt-routing.module */ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt-routing.module.ts");
/* harmony import */ var _add_detail_regionmgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-detail-regionmgt.page */ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.ts");







let AddDetailRegionmgtPageModule = class AddDetailRegionmgtPageModule {
};
AddDetailRegionmgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_detail_regionmgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDetailRegionmgtPageRoutingModule"]
        ],
        declarations: [_add_detail_regionmgt_page__WEBPACK_IMPORTED_MODULE_6__["AddDetailRegionmgtPage"]]
    })
], AddDetailRegionmgtPageModule);



/***/ }),

/***/ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form .error-message {\n  color: #ff0000;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vYWRkLWRldGFpbC1yZWdpb25tZ3QvYWRkLWRldGFpbC1yZWdpb25tZ3QucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9hZGQtZGV0YWlsLXJlZ2lvbm1ndC9hZGQtZGV0YWlsLXJlZ2lvbm1ndC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFFSSxjQUFBO0FDSFI7O0FETUE7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9ITy9hZGQtZGV0YWlsLXJlZ2lvbm1ndC9hZGQtZGV0YWlsLXJlZ2lvbm1ndC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybVxyXG57ICAgICAgICBcclxuICAgIC5lcnJvci1tZXNzYWdlXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICB9XHJcbn1cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJmb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.ts ***!
  \**********************************************************************/
/*! exports provided: AddDetailRegionmgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailRegionmgtPage", function() { return AddDetailRegionmgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let AddDetailRegionmgtPage = class AddDetailRegionmgtPage {
    constructor(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.actionFlag = '';
        this.SelectedRegionId = '';
        this.title = '';
        this.userid = localStorage.getItem("UID");
        this.AddupdateForm = formBuilder.group({
            regionname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterContentInit() {
        if (this.pageName == "updatepage") {
            this.AddupdateForm = this.formBuilder.group({
                regionname: [this.regionlist.RegionName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
    }
    ngOnInit() {
        this.regionlist = JSON.parse(this.activatedroute.snapshot.paramMap.get("regionlist"));
        console.log(this.regionlist);
        this.pageName = this.activatedroute.snapshot.paramMap.get("pageName");
        if (this.pageName == "updatepage") {
            if (this.regionlist.Status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
        }
    }
    InsertupdateRegion() {
        var self = this;
        var statusToggle = 2;
        if (self.status == false) {
            statusToggle = 2;
        }
        else {
            statusToggle = 1;
        }
        if (self.regionlist == null) {
            self.title = 'Add Region';
            self.actionFlag = 'Add';
            self.SelectedRegionId = '0';
        }
        else {
            self.title = 'Update Region';
            self.actionFlag = 'Update';
            self.SelectedRegionId = self.regionlist.RegionId;
        }
        self.errorFound = true;
        if (self.ValidationRegion()) {
            const obj = {
                RegionId: (self.actionFlag == 'Update') ? self.SelectedRegionId : '0',
                RegionName: self.AddupdateForm.value.regionname,
                Status: statusToggle,
                UserId: self.userid
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("RegionInsertUpdate", obj).subscribe((res) => {
                var regionUpdate = JSON.parse(res);
                console.log(regionUpdate);
                if (regionUpdate.Table[0].Meaasge == "Region updated successfully.") {
                    self.commonServices.presentToast(regionUpdate.Table[0].Meaasge);
                    self.AddupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/region-mgt']);
                    }, 2000);
                }
                else if (regionUpdate.Table[0].Meaasge == "Region inserted successfully.") {
                    self.commonServices.presentToast(regionUpdate.Table[0].Meaasge);
                    self.AddupdateForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/region-mgt']);
                    }, 2000);
                }
                else {
                    self.commonServices.presentToast(regionUpdate.Table[0].Meaasge);
                }
                self.commonServices.loadingDismiss();
            }, (error) => {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    }
    //for validation check
    ValidationRegion() {
        if (this.AddupdateForm.value.regionname == "") {
            this.commonServices.presentToast('Region must be entered.');
            this.errorFound = false;
        }
        return this.errorFound;
    }
};
AddDetailRegionmgtPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddDetailRegionmgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-detail-regionmgt',
        template: __webpack_require__(/*! raw-loader!./add-detail-regionmgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.html"),
        styles: [__webpack_require__(/*! ./add-detail-regionmgt.page.scss */ "./src/app/HO/add-detail-regionmgt/add-detail-regionmgt.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddDetailRegionmgtPage);



/***/ })

}]);
//# sourceMappingURL=HO-add-detail-regionmgt-add-detail-regionmgt-module-es2015.js.map