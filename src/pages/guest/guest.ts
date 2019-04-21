import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider,
    private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
  }

  addGuest(fname, lname, sex, detail, phone, email, address){
    this.db.addGuest(fname, lname, sex, detail, phone, email, address).subscribe(data=>{
      console.log(data)
      if(data.status == 'success'){

      let alert = this.alertCtrl.create({
        title: "Info",
        subTitle: "Add Success",
        buttons:[{
          text:"OK",
          handler: data =>{
            this.viewCtrl.dismiss();
          }
        }]
      })
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: "Info",
        subTitle: "Add Fail",
        buttons:[{
          text:"OK",
          handler: data =>{
            this.viewCtrl.dismiss();
          }
        }]
      })
      alert.present();
    }

    })

    }

}
