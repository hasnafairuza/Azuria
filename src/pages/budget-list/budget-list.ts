import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the BudgetListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-list',
  templateUrl: 'budget-list.html',
})
export class BudgetListPage {
  budgetList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetListPage');
    this.getBudgetLists();
  }

  getBudgetLists() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.getBudgetList().subscribe(data=>{
      this.budgetList = data;
      console.log(data)
      loading.dismiss();
    })
  }

}
