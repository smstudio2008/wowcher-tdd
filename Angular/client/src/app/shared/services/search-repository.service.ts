import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/OrderInterface';

@Injectable()
export class OrderService {
  public constructor(private http: HttpClient) {}

  // 1. getOrderCountForProduct - This should return the number of times a product has been ordered given the product name.
  // 2. getCustomerNamesForProduct - This should return the names of customers that have ordered a product in an array, with no duplication.
  // 3. getMostPopularProduct - This should return an array containing the most popular product(s).

  public getOrderCountForProduct(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/products');
  }

  public getCustomerNamesForProduct(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/users');
  }

  public getMostPopularProduct(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/order');
  }
}
