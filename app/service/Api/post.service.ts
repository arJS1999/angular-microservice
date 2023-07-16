import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseURL = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseURL + 'login', data);
  }

  signupUser(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseURL + 'register_user', data);
  }

  signupSeller(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseURL + 'register_seller', data);
  }

  getUser() {
    return this.http.get(this.baseURL + 'get_user');
  }

  getSeller() {
    return this.http.get(this.baseURL + 'get_seller');
  }

  getCategory(limit:number,page:number) {
    return this.http.get(`${this.baseURL}get_category?limit=${limit}&page=${page}`);
  }

  getProduct(limit:number,page:number) {
    return this.http.get(`${this.baseURL}get_product?limit=${limit}&page=${page}`);
  }

  updateCategory(data: Partial<Category>, id: number): Observable<any> {
    return this.http.post(`${this.baseURL}update_category/${id}`, data);
  }

  updateProduct(data: any, id: number): Observable<any> {
    return this.http.post(`${this.baseURL}update_product/${id}`, data);
  }

  addCategory(data: Partial<Category>): Observable<any> {
    return this.http.post(this.baseURL + 'add_category', data);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(this.baseURL + 'add_product', data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}delete_product/${id}`, {});
  }

  deleteSeller(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}delete_seller/${id}`, {});
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}delete_user/${id}`, {});
  }

  relationProduct() {
    return this.http.get(this.baseURL + 'relation');
  }

  addCart(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseURL + 'add_cart', {product_id:data});
  }

  listCart():Observable<any>{
    return this.http.get(this.baseURL+'list_cart');
  }

  cartProduct(data:any):Observable<any>{
    return this.http.post(this.baseURL+'cart_product',{product_id:data});
  }
}
