import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  user : any; 
  constructor() { 
    this.user = {
      name:"Foo Bar",
      occupation:"Software Developer",
      address:"Air Force Station Jamnagar, 361001",
      phone:[
        '091-3773-2983',
        '+91-3875-7457'
      ]
    }
  }

  ngOnInit(): void {
  }

}
