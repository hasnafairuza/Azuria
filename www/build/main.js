webpackJsonp([19],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completed_completed__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__total_total__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__used_used__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guest_guest__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmed_confirmed__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vendor_vendor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reserved_reserved__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.addtask = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__task_task__["a" /* TaskPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.completed = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__completed_completed__["a" /* CompletedPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.total = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__total_total__["a" /* TotalPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.used = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__used_used__["a" /* UsedPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.guest = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__guest_guest__["a" /* GuestPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.confirmed = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__confirmed_confirmed__["a" /* ConfirmedPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.vendor = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__vendor_vendor__["a" /* VendorPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage.prototype.reserved = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__reserved_reserved__["a" /* ReservedPage */], { userId: 8675309 });
        profileModal.present();
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\add\add.html"*/'<!--\n\n  Generated template for the AddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!-- <ion-title>add</ion-title> -->\n\n    <ion-icon name="refresh" item-start style="font-size: 25px;margin-left: 10px;"></ion-icon>\n\n    <ion-icon name="person" item-end style="margin-left: 320px;font-size: 25px;"></ion-icon>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg" >\n\n  <img src="../../assets/imgs/t.jpg" (click)="addtask()">\n\n  <img src="../../assets/imgs/t2.jpg" (click)="completed()">\n\n  <img src="../../assets/imgs/b.jpg" (click)="total()">\n\n  <img src="../../assets/imgs/b1.jpg" (click)="used()">\n\n  <img src="../../assets/imgs/g.jpg" (click)="guest()">\n\n  <img src="../../assets/imgs/g1.jpg" (click)="confirmed()">\n\n  <img src="../../assets/imgs/v.jpg" (click)="vendor()">\n\n  <img src="../../assets/imgs/v1.jpg" (click)="reserved()">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = /** @class */ (function () {
    function TaskPage(navCtrl, navParams, viewCtrl, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    TaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskPage');
    };
    TaskPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
    };
    TaskPage.prototype.addTask = function (title, type, detail, date) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.addTask(title, type, detail, date).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                var alert_1 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Success",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Fail",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\task\task.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n</ion-content>\n\n<div class="card">\n\n  <ion-icon name="md-add-circle" style="font-size: 250%;color: white;"></ion-icon>\n\n\n\n  <div style="\n\n  color: white;\n\n  font-size: 22px;\n\n  font-weight: bold;\n\n">Add a new task</div><br>\n\n  <ion-list>\n\n      <ion-item class="input">\n\n        <ion-input placeholder="Enter title" [(ngModel)]="title"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="select">\n\n          <!-- <ion-label placeholder="Select Type"></ion-label> -->\n\n          <ion-select [(ngModel)]="type" style="width:100%" placeholder="Select Type">\n\n            <ion-option value="nes">Miscellaneous</ion-option>\n\n            <ion-option value="n64">Attire & Accessories</ion-option>\n\n            <ion-option value="ps">Healty & Beauty</ion-option>\n\n            <ion-option value="genesis">Music & Show</ion-option>\n\n            <ion-option value="saturn">Flowers & Decor</ion-option>\n\n            <ion-option value="snes">Accessories</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="text-area">\n\n          <ion-textarea placeholder="Details" [(ngModel)]="detail"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-item class="date">\n\n            <ion-label>Date</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="date"></ion-datetime>\n\n          </ion-item>\n\n          <br>\n\n          <button ion-button color="light" round full (click)="addTask(title, type, detail, date)">ADD</button>\n\n          <button ion-button color="dark" round full (click)="cancle()">CANCLE</button>\n\n\n\n  </ion-list>\n\n<!-- {{userid}} -->\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\task\task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletedPage = /** @class */ (function () {
    function CompletedPage(navCtrl, navParams, viewCtrl, db, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataNull = false;
    }
    CompletedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletedPage');
        this.getTask();
    };
    CompletedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CompletedPage.prototype.getTask = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getTask().subscribe(function (data) {
            if (data.result == '0') {
                _this.dataNull = true;
                loading.dismiss();
            }
            else {
                _this.tasksData = data;
                loading.dismiss();
            }
        });
    };
    CompletedPage.prototype.presentActionSheet = function (t_id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'Confirm',
                    handler: function () {
                        console.log('Confirm clicked', t_id);
                        _this.db.setTaskComplete(t_id, 1).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'comfirmed');
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked', t_id);
                        _this.db.deleteTask(t_id).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'deleted');
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CompletedPage.prototype.setAlert = function (status, info) {
        var _this = this;
        if (status == 'success') {
            var alert_1 = this.alertCtrl.create({
                title: "Info",
                subTitle: "Task has " + info + "!!",
                buttons: [{
                        text: "OK",
                        handler: function (data) {
                            _this.ionViewDidLoad();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    CompletedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completed',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\completed\completed.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n  </ion-content>\n\n  <div class="card">\n\n      <ion-icon ios="ios-close-circle" md="md-close-circle" (click)="close()"></ion-icon>\n\n      <div *ngIf="!dataNull">\n\n      <ion-list *ngFor="let item of tasksData">\n\n          <ion-item (click)="presentActionSheet(item.t_id)">\n\n              <ion-row>\n\n                  <ion-col>\n\n                      <div style="font-size: 13px;opacity: 0.5;">Title</div>\n\n                          {{item.t_title}}\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <div style="font-size: 13px;opacity: 0.5;">Date</div>\n\n                          {{item.t_date}}\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-item><br>\n\n      </ion-list>\n\n    </div>\n\n    <ion-item *ngIf="dataNull">\n\n      <ion-row>\n\n          <ion-col style="text-align:center">\n\n              No task list!!\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-item>\n\n  </div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\completed\completed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], CompletedPage);
    return CompletedPage;
}());

//# sourceMappingURL=completed.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalPage = /** @class */ (function () {
    function TotalPage(navCtrl, navParams, viewCtrl, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    TotalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TotalPage');
    };
    TotalPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
    };
    TotalPage.prototype.addTotal = function (title, type, detail, amount) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.addTotal(title, type, detail, amount).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                loading.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Success",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                loading.dismiss();
                var alert_2 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Fail",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    TotalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\total\total.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n</ion-content>\n\n<div class="card">\n\n  <ion-icon name="md-add-circle" style="font-size: 250%;color: white;"></ion-icon>\n\n\n\n  <div style="\n\n  color: white;\n\n  font-size: 22px;\n\n  font-weight: bold;\n\n">Add a new cost</div><br>\n\n  <ion-list>\n\n      <ion-item class="input">\n\n        <ion-input placeholder="Enter title" [(ngModel)]="title"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="select">\n\n          <!-- <ion-label placeholder="Select Type"></ion-label> -->\n\n          <ion-select [(ngModel)]="type" style="width:100%" placeholder="Select Type">\n\n            <ion-option value="nes">Miscellaneous</ion-option>\n\n            <ion-option value="n64">Attire & Accessories</ion-option>\n\n            <ion-option value="ps">Healty & Beauty</ion-option>\n\n            <ion-option value="genesis">Music & Show</ion-option>\n\n            <ion-option value="saturn">Flowers & Decor</ion-option>\n\n            <ion-option value="snes">Accessories</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="text-area">\n\n          <ion-textarea placeholder="Details" [(ngModel)]="detail"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-item class="number">\n\n          <ion-input type="number" placeholder="Estimate amount" [(ngModel)]="amount"></ion-input>\n\n        </ion-item>\n\n          <br>\n\n          <button ion-button color="light" round full (click)="addTotal(title, type, detail, amount)">ADD</button>\n\n          <button ion-button color="dark" round full (click)="cancle()">CANCLE</button>\n\n\n\n  </ion-list>\n\n<!-- {{userid}} -->\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\total\total.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TotalPage);
    return TotalPage;
}());

//# sourceMappingURL=total.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UsedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsedPage = /** @class */ (function () {
    function UsedPage(navCtrl, navParams, viewCtrl, db, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataNull = false;
    }
    UsedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsedPage');
        this.getTotal();
        //   setInterval(() => { 
        //     this.getTotal(); // Now the "this" still references the component
        //  }, 1000);
    };
    UsedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UsedPage.prototype.getTotal = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getTotal().subscribe(function (data) {
            if (data.result == '0') {
                _this.dataNull = true;
                loading.dismiss();
            }
            else {
                _this.totalData = data;
                loading.dismiss();
            }
        });
    };
    UsedPage.prototype.presentActionSheet = function (c_id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'Confirm',
                    handler: function () {
                        console.log('Confirm clicked', c_id);
                        _this.db.setBudgetUsed(c_id, 1).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'confirmed');
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked', c_id);
                        _this.db.deleteBudget(c_id).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'deleted');
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UsedPage.prototype.setAlert = function (status, info) {
        var _this = this;
        if (status == 'success') {
            var alert_1 = this.alertCtrl.create({
                title: "Info",
                subTitle: "Task has " + info + "!!",
                buttons: [{
                        text: "OK",
                        handler: function (data) {
                            _this.ionViewDidLoad();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    UsedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-used',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\used\used.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n  </ion-content>\n\n  <div class="card">\n\n      <ion-icon ios="ios-close-circle" md="md-close-circle" (click)="close()"></ion-icon>\n\n  <div *ngIf="!dataNull">\n\n      <ion-list *ngFor="let item of totalData">\n\n          <ion-item (click)="presentActionSheet(item.c_id)">\n\n              <ion-row>\n\n                  <ion-col>\n\n                      <div style="font-size: 13px;opacity: 0.5;">Title</div>\n\n                          {{item.c_title}}\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <div style="font-size: 13px;opacity: 0.5;">Amount</div>\n\n                          {{item.c_amount}}\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-item><br>\n\n      </ion-list>\n\n    </div>\n\n      <ion-item *ngIf="dataNull">\n\n        <ion-row>\n\n            <ion-col style="text-align:center">\n\n                No task list!!\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n  \n\n  \n\n  </div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\used\used.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], UsedPage);
    return UsedPage;
}());

//# sourceMappingURL=used.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestPage = /** @class */ (function () {
    function GuestPage(navCtrl, navParams, viewCtrl, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    GuestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestPage');
    };
    GuestPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
    };
    GuestPage.prototype.addGuest = function (fname, lname, sex, detail, phone, email, address) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.addGuest(fname, lname, sex, detail, phone, email, address).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                var alert_1 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Success",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Fail",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    GuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guest',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\guest\guest.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n\n\n    <ion-content class="bg">\n\n  </ion-content>\n\n\n\n<div class="card">\n\n  <ion-icon name="md-add-circle" style="font-size: 250%;color: white;"></ion-icon>\n\n\n\n  <div style="\n\n  color: white;\n\n  font-size: 22px;\n\n  font-weight: bold;\n\n">Add a new guest</div><br>\n\n  <ion-list>\n\n\n\n      <ion-item class="input">\n\n        <ion-input placeholder="First name" [(ngModel)]="fname"></ion-input>\n\n      </ion-item><br>\n\n\n\n        <ion-item class="input">\n\n          <ion-input placeholder="Last name" [(ngModel)]="lname"></ion-input>\n\n        </ion-item>\n\n\n\n      <ion-item class="select">\n\n          <!-- <ion-label placeholder="Select Type"></ion-label> -->\n\n          <ion-select [(ngModel)]="sex" style="width:100%" placeholder="Select Gender">\n\n            <ion-option value="Male">Male</ion-option>\n\n            <ion-option value="Female">Female</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="text-area">\n\n          <ion-textarea placeholder="Details" [(ngModel)]="detail"></ion-textarea>\n\n        </ion-item>\n\n\n\n\n\n        \n\n        <ion-item class="number">\n\n            <ion-input type="number" placeholder="Phone number" [(ngModel)]="phone"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n\n\n        <ion-item class="input">\n\n            <ion-input placeholder="E-mail" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n\n\n        <ion-item class="input">\n\n            <ion-input placeholder="Address" [(ngModel)]="address"></ion-input>\n\n          </ion-item>\n\n         <br>\n\n          <button ion-button color="light" round full (click)="addGuest(fname, lname, sex, detail, phone, email, address)">ADD</button>\n\n          <button ion-button color="dark" round full (click)="cancle()">CANCLE</button>\n\n          \n\n          \n\n  </ion-list>\n\n<!-- {{userid}} -->\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\guest\guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], GuestPage);
    return GuestPage;
}());

//# sourceMappingURL=guest.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfirmedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmedPage = /** @class */ (function () {
    function ConfirmedPage(navCtrl, navParams, viewCtrl, db, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataNull = false;
    }
    ConfirmedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmedPage');
        this.getGuest();
    };
    ConfirmedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmedPage.prototype.getGuest = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getGuest().subscribe(function (data) {
            if (data.result == '0') {
                _this.dataNull = true;
                loading.dismiss();
            }
            else {
                _this.guestData = data;
                loading.dismiss();
            }
        });
    };
    ConfirmedPage.prototype.presentActionSheet = function (g_id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'Confirm',
                    handler: function () {
                        console.log('Confirm clicked', g_id);
                        _this.db.setGuestConfirmed(g_id, 1).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'confirmed');
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked', g_id);
                        _this.db.deleteGuest(g_id).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'deleted');
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ConfirmedPage.prototype.setAlert = function (status, info) {
        var _this = this;
        if (status == 'success') {
            var alert_1 = this.alertCtrl.create({
                title: "Info",
                subTitle: "Task has " + info + "!!",
                buttons: [{
                        text: "OK",
                        handler: function (data) {
                            _this.ionViewDidLoad();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    ConfirmedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmed',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\confirmed\confirmed.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n</ion-content>\n\n<div class="card">\n\n    <ion-icon ios="ios-close-circle" md="md-close-circle" (click)="close()"></ion-icon>\n\n<div *ngIf="!dataNull">\n\n    <ion-list *ngFor="let item of guestData">\n\n        <ion-item (click)="presentActionSheet(item.g_id)">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Name</div>\n\n                        {{item.g_fname}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Phone</div>\n\n                        {{item.g_phone}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item><br>\n\n    </ion-list>\n\n  </div>\n\n    <ion-item *ngIf="dataNull">\n\n      <ion-row>\n\n          <ion-col style="text-align:center">\n\n              No task list!!\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-item>\n\n\n\n\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\confirmed\confirmed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ConfirmedPage);
    return ConfirmedPage;
}());

//# sourceMappingURL=confirmed.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorPage = /** @class */ (function () {
    function VendorPage(navCtrl, navParams, viewCtrl, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    VendorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorPage');
    };
    VendorPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
    };
    VendorPage.prototype.addVendor = function (name, type, detail, phone, email, address, amount) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.addVendor(name, type, detail, phone, email, address, amount).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                var alert_1 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Success",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Info",
                    subTitle: "Add Fail",
                    buttons: [{
                            text: "OK",
                            handler: function (data) {
                                loading.dismiss();
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    VendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vendor',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\vendor\vendor.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n</ion-content>\n\n<div class="card">\n\n  <ion-icon name="md-add-circle" style="font-size: 250%;color: white;"></ion-icon>\n\n\n\n  <div style="\n\n  color: white;\n\n  font-size: 22px;\n\n  font-weight: bold;\n\n">Add a new vendor</div><br>\n\n  <ion-list>\n\n      <ion-item class="input">\n\n        <ion-input placeholder="Enter name" [(ngModel)]="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="select">\n\n          <!-- <ion-label placeholder="Select Type"></ion-label> -->\n\n          <ion-select [(ngModel)]="type" style="width:100%" placeholder="Select Type">\n\n            <ion-option value="Miscellaneous">Miscellaneous</ion-option>\n\n            <ion-option value="Attire & Accessories">Attire & Accessories</ion-option>\n\n            <ion-option value="Healty & Beauty">Healty & Beauty</ion-option>\n\n            <ion-option value="Music & Show">Music & Show</ion-option>\n\n            <ion-option value="Flowers & Decor">Flowers & Decor</ion-option>\n\n            <ion-option value="Accessories">Accessories</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="text-area">\n\n          <ion-textarea placeholder="Details" [(ngModel)]="detail"></ion-textarea>\n\n        </ion-item>\n\n        <br>\n\n\n\n        <ion-item class="input">\n\n            <ion-input type="number" placeholder="Phone number" [(ngModel)]="phone"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n\n\n        <ion-item class="input">\n\n            <ion-input placeholder="E-mail" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n\n\n        <ion-item class="input">\n\n            <ion-input placeholder="Address" [(ngModel)]="address"></ion-input>\n\n          </ion-item>\n\n         <br>\n\n\n\n         <ion-item class="number">\n\n            <ion-input type="number" placeholder="Estimate amount" [(ngModel)]="amount"></ion-input>\n\n          </ion-item>\n\n            <br>\n\n      \n\n          <button ion-button color="light" round full (click)="addVendor(name, type, detail, phone, email, address, amount)">ADD</button>\n\n          <button ion-button color="dark" round full (click)="cancle()">CANCLE</button>\n\n\n\n  </ion-list>\n\n<!-- {{userid}} -->\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\vendor\vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], VendorPage);
    return VendorPage;
}());

//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReservedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservedPage = /** @class */ (function () {
    function ReservedPage(navCtrl, navParams, viewCtrl, db, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataNull = false;
    }
    ReservedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservedPage');
        this.getVendor();
    };
    ReservedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ReservedPage.prototype.getVendor = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getVendor().subscribe(function (data) {
            if (data.result == '0') {
                _this.dataNull = true;
                loading.dismiss();
            }
            else {
                _this.vendorData = data;
                loading.dismiss();
            }
        });
    };
    ReservedPage.prototype.presentActionSheet = function (v_id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'Confirm',
                    handler: function () {
                        console.log('Confirm clicked', v_id);
                        _this.db.setVendorReserved(v_id, 1).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'confirmed');
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked', v_id);
                        _this.db.deleteVendor(v_id).subscribe(function (data) {
                            console.log(data);
                            _this.setAlert(data.status, 'deleted');
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReservedPage.prototype.setAlert = function (status, info) {
        var _this = this;
        if (status == 'success') {
            var alert_1 = this.alertCtrl.create({
                title: "Info",
                subTitle: "Task has " + info + "!!",
                buttons: [{
                        text: "OK",
                        handler: function (data) {
                            _this.ionViewDidLoad();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    ReservedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserved',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\reserved\reserved.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-icon name="close-circle-outline" style="font-size:22px;color:white"></ion-icon> -->\n\n<ion-content class="bg">\n\n</ion-content>\n\n<div class="card">\n\n    <ion-icon ios="ios-close-circle" md="md-close-circle" (click)="close()"></ion-icon>\n\n<div *ngIf="!dataNull">\n\n    <ion-list *ngFor="let item of vendorData">\n\n        <ion-item (click)="presentActionSheet(item.v_id)">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Name</div>\n\n                        {{item.v_name}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Phone</div>\n\n                        {{item.v_phone}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item><br>\n\n    </ion-list>\n\n  </div>\n\n    <ion-item *ngIf="dataNull">\n\n      <ion-row>\n\n          <ion-col style="text-align:center">\n\n              No task list!!\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-item>\n\n\n\n\n\n</div>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\reserved\reserved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ReservedPage);
    return ReservedPage;
}());

//# sourceMappingURL=reserved.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BudgetListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BudgetListPage = /** @class */ (function () {
    function BudgetListPage(navCtrl, navParams, db, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    BudgetListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BudgetListPage');
        this.getBudgetLists();
    };
    BudgetListPage.prototype.getBudgetLists = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getBudgetList().subscribe(function (data) {
            _this.budgetList = data;
            console.log(data);
            loading.dismiss();
        });
    };
    BudgetListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget-list',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\budget-list\budget-list.html"*/'<!--\n\n  Generated template for the TaskCompletedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Used Budget</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of budgetList">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Title</div>\n\n                        {{item.c_title}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Amound</div>\n\n                        {{item.c_amount}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n    </ion-list>\n\n       \n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\budget-list\budget-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], BudgetListPage);
    return BudgetListPage;
}());

//# sourceMappingURL=budget-list.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GuestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestListPage = /** @class */ (function () {
    function GuestListPage(navCtrl, navParams, db, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    GuestListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestListPage');
        this.getGuesLists();
    };
    GuestListPage.prototype.getGuesLists = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getGuestList().subscribe(function (data) {
            _this.guestList = data;
            console.log(data);
            loading.dismiss();
        });
    };
    GuestListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guest-list',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\guest-list\guest-list.html"*/'<!--\n\n  Generated template for the TaskCompletedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Confirmed Guest</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of guestList">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Name</div>\n\n                        {{item.g_fname}} {{item.g_lname}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Phone</div>\n\n                        {{item.g_phone}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n    </ion-list>\n\n       \n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\guest-list\guest-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], GuestListPage);
    return GuestListPage;
}());

//# sourceMappingURL=guest-list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_task_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_list_budget_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guest_list_guest_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendor_list_vendor_list__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.TaskList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task_list_task_list__["a" /* TaskListPage */]);
    };
    MenuPage.prototype.BudgetList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__budget_list_budget_list__["a" /* BudgetListPage */]);
    };
    MenuPage.prototype.GuestList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__guest_list_guest_list__["a" /* GuestListPage */]);
    };
    MenuPage.prototype.VendorList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__vendor_list_vendor_list__["a" /* VendorListPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!-- <ion-title>menu</ion-title> -->\n\n    <ion-icon name="refresh" item-start style="font-size: 25px;margin-left: 10px;"></ion-icon>\n\n    <ion-icon name="person" item-end style="margin-left: 320px;font-size: 25px;"></ion-icon>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg">\n\n  <img src="../../assets/imgs/task.jpg" (click)="TaskList()" > \n\n  <img src="../../assets/imgs/budg.jpg" (click)="BudgetList()">\n\n  <img src="../../assets/imgs/guest.jpg" (click)="GuestList()">\n\n  <img src="../../assets/imgs/vendor.jpg" (click)="VendorList()">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskListPage = /** @class */ (function () {
    function TaskListPage(navCtrl, navParams, db, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    TaskListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskListPage');
        this.getTaskList();
    };
    TaskListPage.prototype.getTaskList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getTaskList().subscribe(function (data) {
            _this.taskListData = data;
            console.log(data);
            loading.dismiss();
        });
    };
    TaskListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-list',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\task-list\task-list.html"*/'<!--\n\n  Generated template for the TaskCompletedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Completed Task</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of taskListData">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Title</div>\n\n                        {{item.t_title}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Date</div>\n\n                        {{item.t_date}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n    </ion-list>\n\n       \n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\task-list\task-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TaskListPage);
    return TaskListPage;
}());

//# sourceMappingURL=task-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VendorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorListPage = /** @class */ (function () {
    function VendorListPage(navCtrl, navParams, db, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    VendorListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorListPage');
        this.getVendorLists();
    };
    VendorListPage.prototype.getVendorLists = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.db.getVendorList().subscribe(function (data) {
            _this.vendorList = data;
            console.log(data);
            loading.dismiss();
        });
    };
    VendorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vendor-list',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\vendor-list\vendor-list.html"*/'<!--\n\n  Generated template for the TaskCompletedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Reserved Vendor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of vendorList">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Name</div>\n\n                        {{item.v_name}}\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div style="font-size: 13px;opacity: 0.5;">Phone</div>\n\n                        {{item.v_phone}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n    </ion-list>\n\n       \n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\vendor-list\vendor-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], VendorListPage);
    return VendorListPage;
}());

//# sourceMappingURL=vendor-list.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotifPage = /** @class */ (function () {
    function NotifPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.dataNotificate = [];
        this.date = [];
        this.getCurrentData();
        this.getDate();
    }
    NotifPage.prototype.ionViewWillLoad = function () {
        this.getCurrentData();
        this.getDate();
    };
    NotifPage.prototype.getCurrentData = function () {
        var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        var monthInt = parseInt(month);
        if (monthInt < 10) {
            // console.log(year+"-"+'0'+month+"-"+day);
            this.currentDate = year + "-" + '0' + month + "-" + day;
        }
        else {
            // console.log(year+"-"+month+"-"+day);
            this.currentDate = year + "-" + month + "-" + day;
        }
    };
    NotifPage.prototype.getDate = function () {
        var _this = this;
        this.db.getTask().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].t_date == _this.currentDate) {
                    _this.dataNotificate[i] = data[i].t_title;
                    console.log(_this.dataNotificate[i]);
                    localStorage.setItem('count', i.toString());
                }
            }
        });
    };
    NotifPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notif',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\notif\notif.html"*/'<!--\n\n  Generated template for the NotifPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!-- <ion-title>notif</ion-title> -->\n\n    <ion-icon name="refresh" item-start style="font-size: 25px;margin-left: 10px;"></ion-icon>\n\n    <ion-icon name="person" item-end style="margin-left: 320px;font-size: 25px;"></ion-icon>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n        <div style="text-align:center;font-weight:bold;display: block">Today tasks</div>\n\n        <hr>\n\n    <ion-item *ngFor="let item of dataNotificate;let i=index">\n\n        <ion-row>\n\n            <ion-col>\n\n                    {{dataNotificate[i]}}\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\notif\notif.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], NotifPage);
    return NotifPage;
}());

//# sourceMappingURL=notif.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, alertCtrl, App) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.App = App;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.changedate = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                    type: 'date'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked', data.title);
                        localStorage.setItem('date', data.title);
                        location.reload();
                    }
                }
            ]
        });
        prompt.present();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Setting</ion-title>\n\n    <ion-icon name="refresh" item-start style="font-size: 25px;margin-left: 10px;"></ion-icon>\n\n    <ion-icon name="person" item-end style="margin-left: 320px;font-size: 25px;"></ion-icon>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-row (click)="changedate()">\n\n            <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon>\n\n            <div class="menu-text">Setting date of wedding</div>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row (click)="changedate()">\n\n            <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n\n            <div class="menu-text">About us</div>\n\n        </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row (click)="changedate()">\n\n            <ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n            <div class="menu-text">Rate us</div>\n\n        </ion-row>\n\n    </ion-item>\n\n</ion-list>\n\n<div style="text-align:center">Version 1.0</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';





/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http) {
        this.http = http;
        console.log('Hello DatabaseProvider Provider');
        this.ip = 'fitri5820610144.000webhostapp.com';
    }
    DatabaseProvider.prototype.addTask = function (title, type, detail, date) {
        var url = "http://" + this.ip + "/addTask.php";
        var body = new FormData();
        body.append('title', title);
        body.append('type', type);
        body.append('detail', detail);
        body.append('date', date);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.addTotal = function (title, type, detail, amount) {
        var url = "http://" + this.ip + "/addTotal.php";
        var body = new FormData();
        body.append('title', title);
        body.append('type', type);
        body.append('detail', detail);
        body.append('amount', amount);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.addGuest = function (fname, lname, sex, detail, phone, email, address) {
        var url = "http://" + this.ip + "/addGuest.php";
        var body = new FormData();
        body.append('fname', fname);
        body.append('lname', lname);
        body.append('sex', sex);
        body.append('detail', detail);
        body.append('phone', phone);
        body.append('email', email);
        body.append('address', address);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.addVendor = function (name, type, detail, phone, email, address, amount) {
        var url = "http://" + this.ip + "/addVendor.php";
        var body = new FormData();
        body.append('name', name);
        body.append('type', type);
        body.append('detail', detail);
        body.append('phone', phone);
        body.append('email', email);
        body.append('address', address);
        body.append('amount', amount);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.getTask = function () {
        return this.http.get("http://" + this.ip + "/getTask.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getTotal = function () {
        return this.http.get("http://" + this.ip + "/getTotal.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getGuest = function () {
        return this.http.get("http://" + this.ip + "/getGuest.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getVendor = function () {
        return this.http.get("http://" + this.ip + "/getVendor.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getTaskList = function () {
        return this.http.get("http://" + this.ip + "/getTaskComplete.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getBudgetList = function () {
        return this.http.get("http://" + this.ip + "/getBudgetList.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getGuestList = function () {
        return this.http.get("http://" + this.ip + "/getGuestList.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.getVendorList = function () {
        return this.http.get("http://" + this.ip + "/getVendorList.php")
            .map(function (response) { return response.json(); });
    };
    DatabaseProvider.prototype.setTaskComplete = function (t_id, t_status) {
        var url = "http://" + this.ip + "/setTaskComplete.php";
        var body = new FormData();
        body.append('t_id', t_id);
        body.append('t_status', t_status);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.setBudgetUsed = function (c_id, c_status) {
        var url = "http://" + this.ip + "/setBudgetUsed.php";
        var body = new FormData();
        body.append('c_id', c_id);
        body.append('c_status', c_status);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.setGuestConfirmed = function (g_id, g_status) {
        var url = "http://" + this.ip + "/setGuestConfirmed.php";
        var body = new FormData();
        body.append('g_id', g_id);
        body.append('g_status', g_status);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.setVendorReserved = function (v_id, v_status) {
        var url = "http://" + this.ip + "/setVendorReserved.php";
        var body = new FormData();
        body.append('v_id', v_id);
        body.append('v_status', v_status);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.deleteTask = function (t_id) {
        var url = "http://" + this.ip + "/deleteTask.php";
        var body = new FormData();
        body.append('t_id', t_id);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.deleteBudget = function (c_id) {
        var url = "http://" + this.ip + "/deleteBudget.php";
        var body = new FormData();
        body.append('c_id', c_id);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.deleteGuest = function (g_id) {
        var url = "http://" + this.ip + "/deleteGuest.php";
        var body = new FormData();
        body.append('g_id', g_id);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider.prototype.deleteVendor = function (v_id) {
        var url = "http://" + this.ip + "/deleteVendor.php";
        var body = new FormData();
        body.append('v_id', v_id);
        var response = this.http.post(url, body).map(function (res) { return res.json(); });
        return response;
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		300,
		18
	],
	"../pages/budget-list/budget-list.module": [
		301,
		17
	],
	"../pages/completed/completed.module": [
		302,
		16
	],
	"../pages/confirmed/confirmed.module": [
		303,
		15
	],
	"../pages/guest-list/guest-list.module": [
		304,
		14
	],
	"../pages/guest/guest.module": [
		305,
		13
	],
	"../pages/login/login.module": [
		306,
		0
	],
	"../pages/menu/menu.module": [
		307,
		12
	],
	"../pages/notif/notif.module": [
		308,
		11
	],
	"../pages/profile/profile.module": [
		309,
		2
	],
	"../pages/register/register.module": [
		310,
		1
	],
	"../pages/reserved/reserved.module": [
		311,
		10
	],
	"../pages/setting/setting.module": [
		312,
		9
	],
	"../pages/task-list/task-list.module": [
		316,
		8
	],
	"../pages/task/task.module": [
		313,
		7
	],
	"../pages/total/total.module": [
		314,
		6
	],
	"../pages/used/used.module": [
		315,
		5
	],
	"../pages/vendor-list/vendor-list.module": [
		317,
		4
	],
	"../pages/vendor/vendor.module": [
		318,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notif_notif__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_setting__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__notif_notif__["a" /* NotifPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__setting_setting__["a" /* SettingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="menu"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="add-circle"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabIcon="notifications"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="settings"></ion-tab>\n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var date = localStorage.getItem('date');
        this.countDown(date);
    };
    HomePage.prototype.countDown = function (date) {
        var hicon = '<img src="../../assets/imgs/hi.png" alt="" width="10px" style="top:60px;position: positive;">';
        var hgif = '<img src="../../assets/imgs/wedding.gif" alt="">';
        // var m = "May";
        // var d = "19";
        // var y = "2019";
        // var date = m+" "+d+","+" "+y+" 22:25:00";
        var countDownDate = new Date(date).getTime();
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = "<center>" +
                "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>" +
                "<div style='text-align: center;font-size:50px;'>" + days + "</div>" +
                "<div style='font-size: 15px;text-align: center;'>Days</div></div> " +
                "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>" +
                "<div style='text-align: center;font-size:50px;'>" + hours + "</div>" +
                "<div style='font-size: 15px;text-align: center;'>Hours</div></div> " +
                "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>" +
                "<div style='text-align: center;font-size:50px;'>" + minutes + "</div>" +
                "<div style='font-size: 15px;text-align: center;'>Minutes</div></div> " +
                "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>" +
                "<div style='text-align: center;font-size:50px;'>" + seconds + "</div>" +
                "<div style='font-size: 15px;text-align: center;'>Seconds</div></div> " +
                "</center>";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "<img src='../../assets/imgs/wedding.gif'>";
            }
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding class="bg">\n\n\n\n    <div style="padding:12%;padding-top:50%;">\n\n        <img src="../../assets/imgs/man.png" alt="" width="30%">\n\n        <img src="../../assets/imgs/heart.png" alt="" width="50">\n\n        <img src="../../assets/imgs/girl.png" alt="" width="30%">\n\n    </div>\n\n  \n\n  <p id="demo"></p>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\ASUS\Azuria\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notif_notif__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_task_task__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_completed_completed__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_total_total__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_used_used__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_guest_guest__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirmed_confirmed__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_vendor_vendor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reserved_reserved__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_database_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_task_list_task_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_budget_list_budget_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_guest_list_guest_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_vendor_list_vendor_list__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // AboutPage,
                // ContactPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notif_notif__["a" /* NotifPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_completed_completed__["a" /* CompletedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_total_total__["a" /* TotalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_used_used__["a" /* UsedPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_guest_guest__["a" /* GuestPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirmed_confirmed__["a" /* ConfirmedPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_vendor_vendor__["a" /* VendorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reserved_reserved__["a" /* ReservedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_task_list_task_list__["a" /* TaskListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_budget_list_budget_list__["a" /* BudgetListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_guest_list_guest_list__["a" /* GuestListPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_vendor_list_vendor_list__["a" /* VendorListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/budget-list/budget-list.module#BudgetListPageModule', name: 'BudgetListPage', segment: 'budget-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completed/completed.module#CompletedPageModule', name: 'CompletedPage', segment: 'completed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmed/confirmed.module#ConfirmedPageModule', name: 'ConfirmedPage', segment: 'confirmed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest-list/guest-list.module#GuestListPageModule', name: 'GuestListPage', segment: 'guest-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest/guest.module#GuestPageModule', name: 'GuestPage', segment: 'guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notif/notif.module#NotifPageModule', name: 'NotifPage', segment: 'notif', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserved/reserved.module#ReservedPageModule', name: 'ReservedPage', segment: 'reserved', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total/total.module#TotalPageModule', name: 'TotalPage', segment: 'total', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/used/used.module#UsedPageModule', name: 'UsedPage', segment: 'used', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-list/task-list.module#TaskListPageModule', name: 'TaskListPage', segment: 'task-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendor-list/vendor-list.module#VendorListPageModule', name: 'VendorListPage', segment: 'vendor-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendor/vendor.module#VendorPageModule', name: 'VendorPage', segment: 'vendor', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // AboutPage,
                // ContactPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notif_notif__["a" /* NotifPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_completed_completed__["a" /* CompletedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_total_total__["a" /* TotalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_used_used__["a" /* UsedPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_guest_guest__["a" /* GuestPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirmed_confirmed__["a" /* ConfirmedPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_vendor_vendor__["a" /* VendorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reserved_reserved__["a" /* ReservedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_task_list_task_list__["a" /* TaskListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_budget_list_budget_list__["a" /* BudgetListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_guest_list_guest_list__["a" /* GuestListPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_vendor_list_vendor_list__["a" /* VendorListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ASUS\Azuria\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<!-- <div class="spinner">\n\n    <div class="double-bounce1"></div>\n\n    <div class="double-bounce2"></div>\n\n  </div> -->\n\n'/*ion-inline-end:"C:\Users\ASUS\Azuria\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map