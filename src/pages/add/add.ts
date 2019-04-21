import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TaskPage } from '../task/task';
import { CompletedPage } from '../completed/completed';
import { TotalPage } from '../total/total';
import { UsedPage } from '../used/used';
import { GuestPage } from '../guest/guest';
import { ConfirmedPage } from '../confirmed/confirmed';
import { VendorPage } from '../vendor/vendor';
import { ReservedPage } from '../reserved/reserved';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addtask() {
    let profileModal = this.modalCtrl.create(TaskPage, { userId: 8675309 });
    profileModal.present();
  }
  completed() {
    let profileModal = this.modalCtrl.create(CompletedPage, { userId: 8675309 });
    profileModal.present();
  }
  total() {
    let profileModal = this.modalCtrl.create(TotalPage, { userId: 8675309 });
    profileModal.present();
  }
  used() {
    let profileModal = this.modalCtrl.create(UsedPage, { userId: 8675309 });
    profileModal.present();
  }
  guest() {
    let profileModal = this.modalCtrl.create(GuestPage, { userId: 8675309 });
    profileModal.present();
  }
  confirmed() {
    let profileModal = this.modalCtrl.create(ConfirmedPage, { userId: 8675309 });
    profileModal.present();
  }
  vendor() {
    let profileModal = this.modalCtrl.create(VendorPage, { userId: 8675309 });
    profileModal.present();
  }
  reserved() {
    let profileModal = this.modalCtrl.create(ReservedPage, { userId: 8675309 });
    profileModal.present();
  }

}
