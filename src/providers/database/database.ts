// import { HttpClient } from '@angular/common/http';
import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  ip:string;
  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
    this.ip = 'localhost';
  }
  addTask(title, type, detail, date){
var url = "http://"+this.ip+"/azuria_db/addTask.php";
let body = new FormData();
body.append('title',title);
body.append('type',type);
body.append('detail',detail);
body.append('date',date);

var response = this.http.post(url,body).map(res=>res.json());
return response;
  }

  addTotal(title, type, detail, amount){
    var url = "http://"+this.ip+"/azuria_db/addTotal.php";
    let body = new FormData();
    body.append('title',title);
    body.append('type',type);
    body.append('detail',detail);
    body.append('amount',amount);
    
    var response = this.http.post(url,body).map(res=>res.json());
    return response;
      }

      addGuest(fname, lname, sex, detail, phone, email, address){
        var url = "http://"+this.ip+"/azuria_db/addGuest.php";
        let body = new FormData();
        body.append('fname',fname);
        body.append('lname',lname);
        body.append('sex',sex);
        body.append('detail',detail);
        body.append('phone',phone);
        body.append('email',email);
        body.append('address',address);
        
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
          }

     addVendor(name, type, detail, phone, email, address, amount){
    var url = "http://"+this.ip+"/azuria_db/addVendor.php";
    let body = new FormData();
    body.append('name',name);
    body.append('type',type);
    body.append('detail',detail);
    body.append('phone',phone);
    body.append('email',email);
    body.append('address',address);
    body.append('amount',amount);
    
    var response = this.http.post(url,body).map(res=>res.json());
    return response;
      }

      getTask(){
        return this.http.get("http://"+this.ip+"/azuria_db/getTask.php")
               .map((response:Response)=> response.json());
      }

      getTotal(){
        return this.http.get("http://"+this.ip+"/azuria_db/getTotal.php")
               .map((response:Response)=> response.json());
      }

      getGuest(){
        return this.http.get("http://"+this.ip+"/azuria_db/getGuest.php")
               .map((response:Response)=> response.json());
      }

      getVendor(){
        return this.http.get("http://"+this.ip+"/azuria_db/getVendor.php")
               .map((response:Response)=> response.json());
      }
      getTaskList(){
        return this.http.get("http://"+this.ip+"/azuria_db/getTaskComplete.php")
               .map((response:Response)=> response.json());
      }
      getBudgetList(){
        return this.http.get("http://"+this.ip+"/azuria_db/getBudgetList.php")
               .map((response:Response)=> response.json());
      }
      getGuestList(){
        return this.http.get("http://"+this.ip+"/azuria_db/getGuestList.php")
               .map((response:Response)=> response.json());
      }
      getVendorList(){
        return this.http.get("http://"+this.ip+"/azuria_db/getVendorList.php")
               .map((response:Response)=> response.json());
      }

      setTaskComplete(t_id,t_status){
        var url = "http://"+this.ip+"/azuria_db/setTaskComplete.php";
        let body = new FormData();
        body.append('t_id',t_id);
        body.append('t_status',t_status);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }

      setBudgetUsed(c_id,c_status){
        var url = "http://"+this.ip+"/azuria_db/setBudgetUsed.php";
        let body = new FormData();
        body.append('c_id',c_id);
        body.append('c_status',c_status);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }
      setGuestConfirmed(g_id,g_status){
        var url = "http://"+this.ip+"/azuria_db/setGuestConfirmed.php";
        let body = new FormData();
        body.append('g_id',g_id);
        body.append('g_status',g_status);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }
      setVendorReserved(v_id,v_status){
        var url = "http://"+this.ip+"/azuria_db/setVendorReserved.php";
        let body = new FormData();
        body.append('v_id',v_id);
        body.append('v_status',v_status);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }

      deleteTask(t_id){
        var url = "http://"+this.ip+"/azuria_db/deleteTask.php";
        let body = new FormData();
        body.append('t_id',t_id);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }

      deleteBudget(c_id){
        var url = "http://"+this.ip+"/azuria_db/deleteBudget.php";
        let body = new FormData();
        body.append('c_id',c_id);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }
      deleteGuest(g_id){
        var url = "http://"+this.ip+"/azuria_db/deleteGuest.php";
        let body = new FormData();
        body.append('g_id',g_id);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }

      deleteVendor(v_id){
        var url = "http://"+this.ip+"/azuria_db/deleteVendor.php";
        let body = new FormData();
        body.append('v_id',v_id);
        var response = this.http.post(url,body).map(res=>res.json());
        return response;
      }





    

}
