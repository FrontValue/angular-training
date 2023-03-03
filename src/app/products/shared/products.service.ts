import { Injectable } from '@angular/core';
import { Product } from "../../shared/product";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getFiltered$({ filter}: { filter?: string} = {}): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`/api/products${filter ? `?filter=${filter}` : ''}`);
  }
}
