import { Component } from '@angular/core';
import { User } from './address-book/user.module';
import { FormsModule } from '@angular/forms';
      imports: [
         FormsModule
      ]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forLoop';
  user!:User;
  something: string="random";

  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Engineer";
    this.user.address = "123 street road Jamnagar";
    this.user.phone=["8213456782","8906785267"];
  }
}
