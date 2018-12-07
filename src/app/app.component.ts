import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gauravssnl';
  aboutFlag = false;
  setFlag(link) {
    // alert(link);
    if(link == "about") {
      this.aboutFlag = true;
    }
  
  }
}
