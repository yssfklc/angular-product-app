import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable, map } from "rxjs";

@Injectable()
export class ProductService {
    url:string='https://e-commerce-app-398415-default-rtdb.firebaseio.com'

    constructor(private http:HttpClient){

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
       return this.http.post<Product>(this.url + '/product.json', product)
    }

}