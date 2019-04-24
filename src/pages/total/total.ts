import { Component } from '@angular/core';
import {  LoadingController,AlertController,IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
    private db:DatabaseProvider,private alertCtrl:AlertController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
  }

  addTotal(title, type, detail, amount){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.addTotal(title, type, detail, amount).subscribe(data=>{
      console.log(data)
      if(data.status == 'success'){
        loading.dismiss();

      let alert = this.alertCtrl.create({
        title: "Info",
        subTitle: "Add Success",
        buttons:[{
          text:"OK",
          handler: data =>{
            loading.dismiss();
            this.viewCtrl.dismiss();
          }
        }]
      })
      alert.present();
    }else{
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "Info",
        subTitle: "Add Fail",
        buttons:[{
          text:"OK",
          handler: data =>{
            loading.dismiss();
            this.viewCtrl.dismiss();
          }
        }]
      })
      alert.present();
    }

    })

    }

}
