import { Component } from '@angular/core';
import { User } from './address-book/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forLoop';
  user!:User;
  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Engineer";
    this.user.address = "123 street road blah";
    this.user.phone=["12345666","890678567"];
  }
}
