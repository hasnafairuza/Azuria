import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the ReservedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserved',
  templateUrl: 'reserved.html',
})
export class ReservedPage {
  vendorData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservedPage');
    this.getVendor();
  }
  close(){
    this.viewCtrl.dismiss();
  }
  getVendor(){
    this.db.getVendor().subscribe(data=>{
      this.vendorData = data;
      console.log(data)
    })

}

}
