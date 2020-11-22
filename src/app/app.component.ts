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
  userModel=new User('Rob','s@gmail.cpm',3242432,'Vue','evening',true);
}
