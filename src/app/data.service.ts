import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClint: HttpClient) { }

  getDataWithParams(apiUrl: string): Observable<any> {
    return this._HttpClint.get(apiUrl)
  }

  getData(): Observable<any> {
    return this._HttpClint.get('https://fakestoreapi.com/products')
  }

  getSingleData(id: number): Observable<any> {
    return this._HttpClint.get(`https://fakestoreapi.com/products/${id}`)
  }

  getCategories(): Observable<any> {
    return this._HttpClint.get('https://fakestoreapi.com/products/categories')
  }

  login(loginData: any): Observable<any> {
    return this._HttpClint.post('https://fakestoreapi.com/auth/login', loginData)
  }
  isLogin = new BehaviorSubject(false)

  // getSort(): Observable<any> {
  //   return this._HttpClint.get('https://fakestoreapi.com/products?sort=desc')
  // }

  // getData():Observable<any>{
  //   return this._HttpClint.get('https://fakestoreapi.com/products')
  // }

  // getData():Observable<any>{
  //   return this._HttpClint.get('https://drawn-us.pockethost.io/api/collections/courses/records')
  // }

  // login(loginData:any):Observable<any>{
  //   return this._HttpClint.post('https://dummyjson.com/user/login',loginData)
  // }
  // isLogin=new BehaviorSubject(false)
}