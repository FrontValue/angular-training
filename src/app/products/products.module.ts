import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsFilterPipe } from './shared/products-filter.pipe';
import { ProductsListComponent } from './list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent}
];

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductComponent, SearchComponent, ProductsFilterPipe],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductsModule { }
