import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams, ViewController,ActionSheetController,AlertController } from 'ionic-angular';
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
  dataNull:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,
    private db:DatabaseProvider,public actionSheetCtrl: ActionSheetController,
    public alertCtrl:AlertController,public loadingCtrl: LoadingController) {

      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedPage');
    this.getTask();
  }
  close(){
    this.viewCtrl.dismiss();
  }

  getTask(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.db.getTask().subscribe(data=>{
      if(data.result == '0'){
        this.dataNull = true;
        loading.dismiss();
      }else{
        this.tasksData = data;
        loading.dismiss();
      }
    })
  }

  presentActionSheet(t_id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Confirm',
          role: 'Confirm',
          handler: () => {
            console.log('Confirm clicked',t_id);
            this.db.setTaskComplete(t_id,1).subscribe(data=>{
              console.log(data);
              this.setAlert(data.status,'comfirmed')
            })
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked',t_id);
            this.db.deleteTask(t_id).subscribe(data=>{
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
