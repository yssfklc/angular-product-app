import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from 'src/app/services/product.services';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService, CategoryService]
})
export class ProductListComponent {
  newProducts:Product[]=[];
  categories:Category[]=[];
  selectProduct:Product|null=null;

  constructor(private route:ActivatedRoute, private productService:ProductService, private categoryService:CategoryService){
    this.productService.getProducts().subscribe((result)=>{
      for(const key in result) {
        this.newProducts.push({ ...result[key], id: key})
      }
    })
    this.route.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        return this.newProducts = data
      })
      
    })
   
  }
  selectedProduct(product:Product){
    this.selectProduct=product;
  }
  unselectedProduct(){
    this.selectProduct=null;
  }
  getProduct(){
    this.productService.getProducts().subscribe((result)=>{
      for(const key in result) {
        this.newProducts.push({ ...result[key], id: key})
      }
    })
  }
  createProduct(){
    this.productService.createProducts(this.newProducts[5])
    .subscribe(data=>console.log(data))
    
  }
  // getProductById(id:any){
  //   console.log(this.newProducts.filter(product=>product.id===id))
  //   return this.newProducts.filter(product=>product.id===id)
  // }
  
}
