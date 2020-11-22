import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFormTutorial';
  topics=['Angular','React','Vue'];
  public langError= true;
  submitted = false;
  userModel=new User('d','s@gmail.cpm',3243452432,'default','evening',true);

  constructor(private _registerService: RegisterService){}

  validateLan(value){
    if(value === 'default'){
      this.langError=true;
    }else{
      this.langError=false;
    }

  }
  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);
    this._registerService.insert(this.userModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
      )
  }
}

