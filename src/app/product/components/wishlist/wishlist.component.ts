import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'], 
  providers: [CategoryService],
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
