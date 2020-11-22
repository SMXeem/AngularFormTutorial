import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFormTutorial';
  topics=['Angular','React','Vue'];
  langError=true;
  userModel=new User('','s@gmail.cpm',3242432,'Vue','evening',true);

  validateLan(value){
    if(value === 'default'){
      this.langError=true;
    }else{
      this.langError=false;
    }

  }
}

