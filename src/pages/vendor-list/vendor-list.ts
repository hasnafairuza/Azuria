import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the VendorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-list',
  templateUrl: 'vendor-list.html',
})
export class VendorListPage {
  vendorList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorListPage');
    this.getVendorLists()
  }

  getVendorLists() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.getVendorList().subscribe(data=>{
      this.vendorList = data;
      console.log(data)
      loading.dismiss();
    })
  }

}
