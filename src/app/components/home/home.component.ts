import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home Component"; //type inference  - define variable
  description!:string;     //non null assertion - decl variable

  constructor() { }
  ngOnInit(): void {
    this.description = "Welcome to Teley's Corner Store; your one-stop shop"
  }
  
  newDesc!:string;
  btnClicked(data:string) {
    alert(data);
    console.log(this.newDesc = this.description);
  }
}
