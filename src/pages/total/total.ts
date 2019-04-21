import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider,
    private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
  }

  addTotal(title, type, detail, amount){
    this.db.addTotal(title, type, detail, amount).subscribe(data=>{
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
