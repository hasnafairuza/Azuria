import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';
/**
 * Generated class for the NotifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html',
})
export class NotifPage {
  taskDate: any
  currentDate: String;
  dataNotificate:any = [];
  date:any = []
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
    this.getCurrentData();
    this.getDate();
  }

  ionViewWillLoad(){
    this.getCurrentData();
    this.getDate();
  }

  getCurrentData(){
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    var monthInt = parseInt(month);
    if(monthInt < 10){
      // console.log(year+"-"+'0'+month+"-"+day);
      this.currentDate = year+"-"+'0'+month+"-"+day
    }else{
      // console.log(year+"-"+month+"-"+day);
      this.currentDate = year+"-"+month+"-"+day
    }
  }

  getDate(){
      this.db.getTask().subscribe(data=>{
        console.log(data)
        for(var i=0 ; i<data.length ; i++){
          if(data[i].t_date == this.currentDate){
            this.dataNotificate[i] = data[i].t_title
            console.log(this.dataNotificate[i]);
            localStorage.setItem('count',i.toString());
          }
        }
      })

    }
    


}
