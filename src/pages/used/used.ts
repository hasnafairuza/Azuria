import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the UsedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-used',
  templateUrl: 'used.html',
})
export class UsedPage {
  totalData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsedPage');
    this.getTotal();
  }
  close(){
    this.viewCtrl.dismiss();
  }

  getTotal(){
    this.db.getTotal().subscribe(data=>{
      this.totalData = data;
      console.log(data)
    })

}
}
