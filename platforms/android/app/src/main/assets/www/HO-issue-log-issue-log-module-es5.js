(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-issue-log-issue-log-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/issue-log/issue-log.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/issue-log/issue-log.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-row class=\"ion-align-items-center search_parent for_color\">\r\n\t\t<ion-col size=\"2\" class=\"pt_0 pb_0\">\r\n\t\t\t<ion-back-button class=\"text_white\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\" class=\"text_white ion-text-center\">Issue Log</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<form #f=\"ngForm\" (ngSubmit)=\"InsertIssueLog(f)\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Issue <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" [(ngModel)]=\"heading\" name=\"heading\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Detail <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" [(ngModel)]=\"details\" name=\"details\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Attachment <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input #inputFile type=\"file\" class=\"inp_control\" name=\"issuefiles\" id=\"issuefiles\" \r\n\t\t\t\t\t(change)=\"fileupload($event)\"  multiple></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</form>\r\n\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h4 class=\"ion-text-center mb10\">Issue List</h4>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Reference No</th>\r\n\t\t\t\t\t\t\t\t<th>Requester ID</th>\r\n\t\t\t\t\t\t\t\t<th>Issue Date</th>\r\n\t\t\t\t\t\t\t\t<th>Issue</th>\r\n\t\t\t\t\t\t\t\t<th>Detail</th>\r\n\t\t\t\t\t\t\t\t<th>Remarks By Developer</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>Attachment</th>\r\n\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let itm of listIssueLog; let i = index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.IssueReferenceNo}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.RequesterID}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.IssueDate}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.IssueHeading}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.IssueDetails}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.RemarksByDeveloper}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.CurrentStatus}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"viewAttachment(itm.IssueReferenceNo)\"><ion-icon name=\"eye\"></ion-icon></ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"deleteIssuePopup(itm.IssueReferenceNo)\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/issue-log/issue-log-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/HO/issue-log/issue-log-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: IssueLogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogPageRoutingModule", function() { return IssueLogPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_log_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issue-log.page */ "./src/app/HO/issue-log/issue-log.page.ts");




var routes = [
    {
        path: '',
        component: _issue_log_page__WEBPACK_IMPORTED_MODULE_3__["IssueLogPage"]
    }
];
var IssueLogPageRoutingModule = /** @class */ (function () {
    function IssueLogPageRoutingModule() {
    }
    IssueLogPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IssueLogPageRoutingModule);
    return IssueLogPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/issue-log/issue-log.module.ts":
/*!**************************************************!*\
  !*** ./src/app/HO/issue-log/issue-log.module.ts ***!
  \**************************************************/
/*! exports provided: IssueLogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogPageModule", function() { return IssueLogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _issue_log_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue-log-routing.module */ "./src/app/HO/issue-log/issue-log-routing.module.ts");
/* harmony import */ var _issue_log_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue-log.page */ "./src/app/HO/issue-log/issue-log.page.ts");







var IssueLogPageModule = /** @class */ (function () {
    function IssueLogPageModule() {
    }
    IssueLogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _issue_log_routing_module__WEBPACK_IMPORTED_MODULE_5__["IssueLogPageRoutingModule"]
            ],
            declarations: [_issue_log_page__WEBPACK_IMPORTED_MODULE_6__["IssueLogPage"]]
        })
    ], IssueLogPageModule);
    return IssueLogPageModule;
}());



/***/ }),

/***/ "./src/app/HO/issue-log/issue-log.page.scss":
/*!**************************************************!*\
  !*** ./src/app/HO/issue-log/issue-log.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".for_color {\n  background-color: var(--green_clr);\n}\n\n.noti_card {\n  border-left: 3px solid var(--yellow_clr);\n  padding-left: 10px;\n}\n\n.noti_card ion-label:first-child {\n  color: green;\n  overflow: hidden;\n}\n\n.noti_card ion-label:first-child ion-text {\n  padding-top: 7px;\n}\n\n.noti_card ion-label {\n  display: block;\n  font-weight: bold;\n  color: black;\n}\n\n.noti_card ion-text {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vaXNzdWUtbG9nL2lzc3VlLWxvZy5wYWdlLnNjc3MiLCJzcmMvYXBwL0hPL2lzc3VlLWxvZy9pc3N1ZS1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0NBQUE7QUNBSjs7QURFQTtFQUVJLHdDQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFSTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdRO0VBRUksZ0JBQUE7QUNGWjs7QURLSTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNKUjs7QURNSTtFQUVJLGNBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL0hPL2lzc3VlLWxvZy9pc3N1ZS1sb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcl9jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xyXG59XHJcbi5ub3RpX2NhcmRcclxue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS15ZWxsb3dfY2xyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIFxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LWNoaWxkXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgICAgICBpb24tdGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGlvbi10ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuIiwiLmZvcl9jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuX2Nscik7XG59XG5cbi5ub3RpX2NhcmQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXllbGxvd19jbHIpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubm90aV9jYXJkIGlvbi1sYWJlbDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RpX2NhcmQgaW9uLWxhYmVsOmZpcnN0LWNoaWxkIGlvbi10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5ub3RpX2NhcmQgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubm90aV9jYXJkIGlvbi10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/issue-log/issue-log.page.ts":
/*!************************************************!*\
  !*** ./src/app/HO/issue-log/issue-log.page.ts ***!
  \************************************************/
/*! exports provided: IssueLogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueLogPage", function() { return IssueLogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redirected_pages/issue-log-modal/issue-log-modal.page */ "./src/app/HO/redirected_pages/issue-log-modal/issue-log-modal.page.ts");







var IssueLogPage = /** @class */ (function () {
    function IssueLogPage(modalController, router, activatedroute, alertController, commonServices) {
        this.modalController = modalController;
        this.router = router;
        this.activatedroute = activatedroute;
        this.alertController = alertController;
        this.commonServices = commonServices;
        this.issuePopup = false;
        this.listIssueLog = [];
        this.imgURL = '';
        this.issueAttachement = '';
        this.heading = '';
        this.details = '';
    }
    IssueLogPage.prototype.ngOnInit = function () {
        this.GetIssueLog();
    };
    // issueAttachRedirect(attachment)
    // {
    //   this.router.navigate(['issue-log-attachment',{Imgattachment: attachment}]);
    // }
    IssueLogPage.prototype.presentModal = function (attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _redirected_pages_issue_log_modal_issue_log_modal_page__WEBPACK_IMPORTED_MODULE_5__["IssueLogModalPage"],
                            cssClass: 'my-custom-class1',
                            componentProps: {
                                previewVar: true,
                                heading: 'View Attachement',
                                viewattachment: attachment
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
    IssueLogPage.prototype.fileupload = function (str) {
        console.log("issue", str);
        this.Issuesuploadedfile = str.target.files[0];
    };
    IssueLogPage.prototype.InsertIssueLog = function (myForm) {
        var _this = this;
        console.log(myForm);
        // console.log("issue",thisheading,",",details,",",localStorage.getItem('LoginId'));
        var loginId = localStorage.getItem('Loginidd');
        this.heading = myForm.value.heading;
        this.details = myForm.value.details;
        var tempRequester = '';
        if (loginId.toLowerCase().indexOf('cng') > -1) {
            tempRequester = "Station";
        }
        else if (loginId.toLowerCase().indexOf('cr') > -1) {
            tempRequester = "ControlRoom";
        }
        else if (loginId.toLowerCase().indexOf('admin') > -1) {
            tempRequester = "Admin";
        }
        console.log("issue", tempRequester);
        var MyJson = {
            RequestFrom: tempRequester,
            RequesterID: loginId,
            IssueHeading: this.heading,
            IssueDetails: this.details,
            CurrentStatus: "Pending",
            Attachment: ((this.Issuesuploadedfile == undefined) ? '' : this.Issuesuploadedfile.name)
        };
        this.Issuelogfiles = $('#issuefiles');
        var frmData = new FormData();
        var fileInput = this.Issuelogfiles[0];
        frmData.append("IssuelogData", JSON.stringify(MyJson));
        if (this.Issuesuploadedfile != undefined) {
            frmData.append('IssuelogFiles', this.Issuesuploadedfile, this.Issuesuploadedfile.name);
        }
        // for (let i = 0; i < files.length; i++) {
        //   formData.append(files[i].name, files[i])
        // }
        var ErrorMsg = this.ValidationIssues(MyJson, fileInput);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            this.commonServices.InsertIssueLog(frmData).subscribe(function (resp) {
                var data = resp;
                console.log(data);
                _this.commonServices.presentToast("Issue inserted successfully");
                _this.heading = '';
                _this.details = '';
                _this.InputFileVar.value = '';
                _this.GetIssueLog();
                // if(data != '') {
                //     this.GetStationLcv(this.lcvid);
                // }
            }, function (error) {
                _this.commonServices.presentToast('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    };
    IssueLogPage.prototype.ValidationIssues = function (IssuesJson, fileInput) {
        var foundError = '';
        if (IssuesJson.IssueHeading == '') {
            foundError = 'Issue Heading is required.';
            return foundError;
        }
        if (IssuesJson.IssueDetails == '') {
            foundError = 'Issue Details is required.';
            return foundError;
        }
        //console.log(fileInput);
        // if (fileInput.files.length > 0) {
        //     var validExtension = 'jpeg,jpg,png,gif';
        //     for (var i = 0; i < fileInput.files.length; i++) {
        //         var fileExtension = fileInput.files[i].name.split('.')[1];
        //         if (validExtension.indexOf(fileExtension) < 0) {
        //             foundError = 'Attachment allowed only for [' + validExtension + '].'; return foundError;
        //         }
        //     }
        // }
        //return foundError;
        if (fileInput.firstChild.files.length > 0) {
            var validExtension = 'jpeg,jpg,png,gif';
            for (var i = 0; i < fileInput.firstChild.files.length; i++) {
                var fileExtension = fileInput.firstChild.files[i].name.split('.').pop().toLowerCase()[1];
                if (validExtension.indexOf(fileExtension) < 0) {
                    foundError = 'Attachment allowed only for [' + validExtension + '].';
                    return foundError;
                }
            }
        }
        return foundError;
    };
    IssueLogPage.prototype.GetIssueLog = function () {
        var _this = this;
        var loginId = localStorage.getItem('Loginidd');
        var tempRequester = '';
        if (loginId.toLowerCase().indexOf('cng') > -1) {
            tempRequester = "Station";
        }
        else if (loginId.toLowerCase().indexOf('cr') > -1) {
            tempRequester = "ControlRoom";
        }
        else if (loginId.toLowerCase().indexOf('admin') > -1) {
            tempRequester = "Admin";
        }
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetIssueLog", { RequestFrom: tempRequester, RequesterID: loginId }).subscribe(function (resp) {
            console.log(JSON.parse(resp));
            _this.listIssueLog = JSON.parse(resp).Table;
            console.log("loglist", _this.listIssueLog);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            console.log(error);
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    IssueLogPage.prototype.viewAttachment = function (RefNo) {
        var _this = this;
        console.log("img", this.listIssueLog, ",", RefNo);
        this.listIssueLog.forEach(function (element) {
            if (element.IssueReferenceNo == RefNo) {
                _this.issueAttachement = element.Attachment;
            }
            _this.imgURL = _this.commonServices.baseUrl.substring(0, _this.commonServices.baseUrl.length - 4) + "Images/";
            console.log(_this.imgURL, "img");
            if (_this.issueAttachement != "") {
                _this.imgURL = _this.imgURL + _this.issueAttachement;
                console.log("img", _this.imgURL);
            }
            else {
                _this.imgURL = _this.issueAttachement;
            }
        });
        this.presentModal(this.imgURL);
    };
    IssueLogPage.prototype.deleteIssueLog = function (refno) {
        var self = this;
        var loginId = localStorage.getItem('Loginidd');
        var tempRequester = '';
        if (loginId.toLowerCase().indexOf('cng') > -1) {
            tempRequester = "Station";
        }
        else if (loginId.toLowerCase().indexOf('cr') > -1) {
            tempRequester = "ControlRoom";
        }
        else if (loginId.toLowerCase().indexOf('admin') > -1) {
            tempRequester = "Admin";
        }
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("DeleteIssueLog", { RequestFrom: tempRequester, ReferenceNo: refno })
            .subscribe(function (resp) {
            var data = JSON.parse(resp);
            var data1 = data.Table1;
            var data2 = data.Table;
            console.log("Vishal", data1);
            console.log("Vishal", data2);
            self.commonServices.presentToast(data1[0].AlertMsg);
            self.listIssueLog = data2;
            console.log("Vishal", self.listIssueLog);
            self.commonServices.loadingDismiss();
        }, function (error) {
            console.log(error);
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    IssueLogPage.prototype.deleteIssuePopup = function (refno) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete',
                            message: 'Are you sure want to delete this Issue ? ',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        _this.deleteIssueLog(refno);
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IssueLogPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IssueLogPage.prototype, "InputFileVar", void 0);
    IssueLogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-log',
            template: __webpack_require__(/*! raw-loader!./issue-log.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/issue-log/issue-log.page.html"),
            styles: [__webpack_require__(/*! ./issue-log.page.scss */ "./src/app/HO/issue-log/issue-log.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], IssueLogPage);
    return IssueLogPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-issue-log-issue-log-module-es5.js.map