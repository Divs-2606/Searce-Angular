import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.module';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  @Input('user')
  user!: User;
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
