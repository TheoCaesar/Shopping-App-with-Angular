import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { categoryData } from 'src/app/static-data/category-data';
import { productData } from 'src/app/static-data/product-data';

@Component({
    selector: 'app-products-view',
    templateUrl: 'products-view.component.html'
})

export class ProductsViewComponent implements OnInit {
    products!: Product[];
    categories: Category[] = [];
    constructor() { }
  
    ngOnInit(): void {
      setTimeout(()=>{
         this.products = productData;
        this.categories = categoryData;
      }, 8000) //mimic API returning data after 8s
     
    }
  
    getCategoryName(id:number):string {
      return this.categories.find((category) =>category.id === id) ?.name || "";
    }
  
    getShortenTitle(title:string):string {
      return `${title.substring(0, 50)}...`
    }
}