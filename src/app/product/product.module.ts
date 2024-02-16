import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductViewFilterComponent } from './components/product-view-filter/product-view-filter.component';
import { ProductViewContentComponent } from './components/product-view-content/product-view-content.component';
import { ProductViewLayoutComponent } from './components/product-view-layout/product-view-layout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [],
    declarations: [
    ProductDetailComponent,
    ProductViewFilterComponent,
    ProductViewContentComponent,
    ProductViewLayoutComponent,
    WishlistComponent
  ],
    providers: [],
})
export class ProductModule { }
