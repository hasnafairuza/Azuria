import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskListPage } from '../task-list/task-list';
import { BudgetListPage } from '../budget-list/budget-list';
import { GuestListPage } from '../guest-list/guest-list';
import { VendorListPage } from '../vendor-list/vendor-list';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  TaskList(){
    this.navCtrl.push(TaskListPage);
  }
  BudgetList(){
    this.navCtrl.push(BudgetListPage);
  }
  GuestList(){
    this.navCtrl.push(GuestListPage);
  }
  VendorList(){
    this.navCtrl.push(VendorListPage);
  }

}
