import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedPage');
  }
  close(){
    this.viewCtrl.dismiss();
  }

}
