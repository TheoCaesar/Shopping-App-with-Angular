import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductsViewComponent } from './components/products-view/products-view.component';


@NgModule({
    imports: [CommonModule],    //Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
    exports: [SpinnerComponent, ProductsViewComponent],
    declarations: [SpinnerComponent, ProductsViewComponent],
    providers: [],
})
export class SharedModule { }
