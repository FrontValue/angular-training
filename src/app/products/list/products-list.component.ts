import { Component } from '@angular/core';
import { Product } from "../../shared/product";
import { ProductsService } from "../shared/products.service";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  private readonly searchSubj = new Subject<string>();
  public readonly products$: Observable<Product[]>

  query: string;

  constructor(private productsService: ProductsService) {
    const search$ = this.searchSubj.asObservable().pipe(
      map(s => s.toLowerCase()),
      distinctUntilChanged(),
      startWith('')
    );
    this.products$ = search$.pipe(
      switchMap(filter => this.productsService.getFiltered$({filter}))
    );
  }

  onSearch(query: string): void {
    this.searchSubj.next(query);
  }

}
