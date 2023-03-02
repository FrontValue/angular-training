import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/product";
import { ProductsService } from "../shared/products.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>

  query: string;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.products$;
  }

  onSearch(query: string): void {
    this.query = query;
    this.productsService.get({filter: query});
  }

  ngOnInit(): void {
    this.productsService.get();
  }
}
