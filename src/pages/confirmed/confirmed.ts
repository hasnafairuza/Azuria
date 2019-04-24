import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the ConfirmedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmed',
  templateUrl: 'confirmed.html',
})
export class ConfirmedPage {
  guestData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmedPage');
    this.getVendor();
  }
  close(){
    this.viewCtrl.dismiss();
    
  }
  getVendor(){
    this.db.getVendor().subscribe(data=>{
      this.guestData = data;
      console.log(data)
    })

}

}
