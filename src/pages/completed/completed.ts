import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the CompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completed',
  templateUrl: 'completed.html',
})
export class CompletedPage {
  tasksData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,
    private db:DatabaseProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedPage');
    this.getTask();
  }
  close(){
    this.viewCtrl.dismiss();
  }

  getTask(){
    this.db.getTask().subscribe(data=>{
      this.tasksData = data;
      console.log(data)
    })

}
}
