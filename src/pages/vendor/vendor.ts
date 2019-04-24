import { Component } from '@angular/core';
import {  LoadingController,AlertController,IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider,private alertCtrl:AlertController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
  }
  
  addVendor(name, type, detail, phone, email, address, amount){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.addVendor(name, type, detail, phone, email, address, amount).subscribe(data=>{
      console.log(data)
      if(data.status == 'success'){

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
