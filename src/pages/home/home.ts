import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  constructor(public navCtrl: NavController) {
    // this.countDown();
  }

  countDown(){
    var hicon = '<img src="../../assets/imgs/hi.png" alt="" width="10px" style="top:60px;position: positive;">';
    var hgif = '<img src="../../assets/imgs/wedding.gif" alt="">';
    var m = "May";
    var d = "19";
    var y = "2019";

    var date = m+" "+d+","+" "+y+" 22:25:00";

    let countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = "<center>"+
      "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>"+
      "<div style='text-align: center;font-size:50px;'>"+days+"</div>"+
      "<div style='font-size: 15px;text-align: center;'>Days</div></div> "+
      
      "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>"+
      "<div style='text-align: center;font-size:50px;'>"+hours+"</div>"+
      "<div style='font-size: 15px;text-align: center;'>Hours</div></div> "+

      "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>"+
      "<div style='text-align: center;font-size:50px;'>"+minutes+"</div>"+
      "<div style='font-size: 15px;text-align: center;'>Minutes</div></div> "+
      
      "<div style='background: #FFDFD3;padding: 2%;width: 22%;border-radius: 8px;display:inline-block'>"+
      "<div style='text-align: center;font-size:50px;'>"+seconds+"</div>"+
      "<div style='font-size: 15px;text-align: center;'>Seconds</div></div> "+
      "</center>";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "<img src='../../assets/imgs/wedding.gif'>";
      }
    }, 1000);
  }
}
