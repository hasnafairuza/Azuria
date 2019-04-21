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

  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }
  addTask(title, type, detail, date){
var url = "http://localhost/azuria_db/addTask.php";
let body = new FormData();
body.append('title',title);
body.append('type',type);
body.append('detail',detail);
body.append('date',date);

var response = this.http.post(url,body).map(res=>res.json());
return response;
  }

  addTotal(title, type, detail, amount){
    var url = "http://localhost/azuria_db/addTotal.php";
    let body = new FormData();
    body.append('title',title);
    body.append('type',type);
    body.append('detail',detail);
    body.append('amount',amount);
    
    var response = this.http.post(url,body).map(res=>res.json());
    return response;
      }

      addGuest(fname, lname, sex, detail, phone, email, address){
        var url = "http://localhost/azuria_db/addGuest.php";
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
    var url = "http://localhost/azuria_db/addVendor.php";
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
        return this.http.get("http://localhost/azuria_db/getTask.php")
               .map((response:Response)=> response.json());
      }

      getTotal(){
        return this.http.get("http://localhost/azuria_db/getTotal.php")
               .map((response:Response)=> response.json());
      }

    

}
