import { Component } from '@angular/core';
import { AlertController ,IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public viewCtrl: ViewController,
      private db:DatabaseProvider,
      private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
  }
  addTask(title, type, detail, date){
    this.db.addTask(title, type, detail, date).subscribe(data=>{
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
