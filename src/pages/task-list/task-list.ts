import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  taskListData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
    this.getTaskList();
  }
  getTaskList() {
    this.db.getTaskList().subscribe(data=>{
      this.taskListData = data;
      console.log(data)
    })
  }
    

}
