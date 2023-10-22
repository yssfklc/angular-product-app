import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
    url:string='https://e-commerce-app-398415-default-rtdb.firebaseio.com'

    constructor(private http:HttpClient){

    }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.url + '/product.json')
    }
    getProductsById(id:number):Observable<Product>{
        return this.http.get<Product>(this.url + '/product' + id)
    }
    createProducts(product:Product): Observable<Product>{
       return this.http.post<Product>(this.url + '/product.json', product)
    }

}