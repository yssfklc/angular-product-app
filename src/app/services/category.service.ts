import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  url:string='https://storied-fuze-404205-default-rtdb.firebaseio.com/';


  constructor(private http: HttpClient) { 

  }

  getCategories() :Observable<Category[]>{
    return this.http.get<Category[]>(this.url + '/categories.json').pipe(
      map(data=>{
        const categories:Category[]=[];

        for(const key in data){
          categories.push({...data[key], id: key});
        }
        return categories
      })
    )
  }

  createCategories(newCategory:Category){
    return this.http.post<Category[]>(this.url + '/categories.json', newCategory)
  }
}
