import { Component } from '@angular/core';
import { LoadingController, AlertController,IonicPage, NavController, NavParams, ViewController,ActionSheetController} from 'ionic-angular';
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
  dataNull:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private db:DatabaseProvider,public actionSheetCtrl: ActionSheetController,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ReservedPage');
    this.getVendor();
  }
  close(){
    this.viewCtrl.dismiss();
  }
  getVendor(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.getVendor().subscribe(data=>{
      if(data.result == '0'){
        this.dataNull = true;
        loading.dismiss();
      }else{
        this.vendorData = data;
        loading.dismiss();
      }
    })
  }
  presentActionSheet(v_id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Confirm',
          role: 'Confirm',
          handler: () => {
            console.log('Confirm clicked',v_id);
            this.db.setVendorReserved(v_id,1).subscribe(data=>{
              console.log(data);
              this.setAlert(data.status,'confirmed')
            })
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked',v_id);
            this.db.deleteVendor(v_id).subscribe(data=>{
              console.log(data);
              this.setAlert(data.status,'deleted')
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  setAlert(status,info){
    if(status == 'success'){
      let alert = this.alertCtrl.create({
        title: "Info",
        subTitle: "Task has "+info+"!!",
        buttons:[{
          text:"OK",
          handler: data =>{
            this.ionViewDidLoad();
          }
        }]
      })
      alert.present();
    }
  }

}
