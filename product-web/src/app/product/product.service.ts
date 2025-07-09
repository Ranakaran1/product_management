import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  
  private baseUrl=  "/api/v1/products";

  fetchAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`)

  }

  getById(id:Number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`)
  }

  create(product : Product){
    console.log('Sending product:', product);
    return this.httpClient.post<Product>(`${this.baseUrl}`,product,{
    headers: { 'Content-Type': 'application/json' }
  });
  }

  update(product: Product){
    return this.httpClient.put<Product>(`${this.baseUrl}/${product.id}`,product);
  }
  delete(id: Number){
    return this.httpClient.delete<Product>(`${this.baseUrl}/${id}` );
  }
}
