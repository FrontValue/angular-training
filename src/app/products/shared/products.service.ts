import { Injectable } from '@angular/core';
import { Product } from "../../shared/product";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]>;
  error$: Observable<unknown>;

  private productsSubject = new Subject<Product[]>();
  private errorSubject = new Subject<unknown>();

  constructor(private httpClient: HttpClient) {
    this.products$ = this.productsSubject.asObservable();
    this.error$ = this.errorSubject.asObservable();
  }

  get({ filter}: { filter?: string} = {}): void {
    this.httpClient.get<Product[]>(`/api/products${filter ? `?filter=${filter}` : ''}`)
      .subscribe(
        products => this.productsSubject.next(products),
          error => this.errorSubject.next(error)
      );
  }
}
