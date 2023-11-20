import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable, exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class ProductService {
    url:string='https://storied-fuze-404205-default-rtdb.firebaseio.com'

    constructor(private http:HttpClient, private authService:AuthService){

    }

    getProducts(categoryId?:number): Observable<Product[]>{
        return this.http.get<Product[]>(this.url + '/product.json').pipe(
            map(data=>{
                const products: Product[]=[];
                for(const key in data){

                    if(categoryId){
                        if(categoryId == data[key].categoryId){
                            products.push({...data[key], id: key});
                        }
                    }else{
                        products.push({...data[key], id: key});
                    }
                }
            return products
            })
        )
    }
    getProductsById(id:any):Observable<Product>{
        console.log(id)
        return this.http.get<Product>(this.url + '/product/' + id + ".json")
    }
    createProducts(product:any): Observable<Product>{
        return this.authService.user.pipe(
            take(1),
            tap(user=>console.log(user)),
            exhaustMap(user=>{
                return this.http.post<Product>(this.url + '/product.json?auth=' + user?.token, product)
            })
        )
    }

}