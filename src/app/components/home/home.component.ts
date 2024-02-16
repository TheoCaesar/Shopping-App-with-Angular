import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!:Product[]; categories!:Category[]
  constructor(private prodService:ProductService, 
    private catService:CategoryService) { }

  getCategories() {
    this.catService.getCategories().subscribe((data)=>{
      this.categories = data;
    })
  }

  getProducts() {
    this.prodService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
  ngOnInit(): void {
    this.getCategories(); this.getProducts();
  }

}
