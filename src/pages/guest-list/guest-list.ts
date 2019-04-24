import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the GuestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest-list',
  templateUrl: 'guest-list.html',
})
export class GuestListPage {
  guestList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestListPage');
    this.getGuesLists();
  }

  getGuesLists() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.getGuestList().subscribe(data=>{
      this.guestList = data;
      console.log(data)
      loading.dismiss();
    })
  }

}
