import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css']
})
export class ProductElementComponent{
  
  newProducts:Product[];
  productRepository:ProductRepository; 
  selectProduct:Product|null=null;

  constructor(){
    this.productRepository=new ProductRepository();
    this.newProducts=this.productRepository.getProducts();
  }
  selectedProduct(product:Product){
    this.selectProduct=product;
  }
  unselectedProduct(){
    this.selectProduct=null;
  }
  
}

let newInstance = new ProductElementComponent();
console.log(newInstance.newProducts);
console.log(newInstance.newProducts.length);