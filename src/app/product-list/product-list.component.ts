import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../models/product.repository';
import {ProductService} from 'src/app/services/product.services';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent {
  newProducts:Product[]=[];
  productRepository:ProductRepository; 
  selectProduct:Product|null=null;

  constructor(private route:ActivatedRoute, private productService:ProductService){
    this.productRepository=new ProductRepository();
    this.productService.getProducts().subscribe((result)=>{
      for(const key in result) {
        this.newProducts.push({ ...result[key], id: key})
      }
    })
    // this.newProducts=this.productRepository.getProducts();
    this.route.params.subscribe(params=>{
      if(params["categoryId"]){
        const categoryId = params["categoryId"];
        this.newProducts = this.productRepository.getProductsByCategoryId(Number(categoryId));
      }
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
