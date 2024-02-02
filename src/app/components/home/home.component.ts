import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { categoryData } from 'src/app/static-data/category-data';
import { productData } from 'src/app/static-data/product-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!: Product[];
  categories: Category[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = productData;
    this.categories = categoryData;
  }

  getCategoryName(id:number):string {
    return this.categories.find((category) =>category.id === id) ?.name || "";
  }

  getShortenTitle(title:string):string {
    return `${title.substring(0, 50)}...`
  }

}
