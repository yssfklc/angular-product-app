import { Component } from '@angular/core';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css']
})
export class ProductElementComponent {
 
  private products:any[] = [
  {
    id: 1,
    name:'iphone 15',
    price : 20000,
    imageUrl: "1.jpg",
    description : 'newest phone',
    isActive:true
  },
  {
    id: 2,
    name:'iphone 16',
    price : 30000,
    imageUrl: "1.jpg",
    description : 'newest phone',
    isActive:true
  },
  {
    id: 3,
    name:'iphone 17',
    price : 40000,
    imageUrl: "1.jpg",
    description : 'newest phone',
    isActive:true
  }
]

  getProducts () {
    return this.products.filter(product=>product.isActive)
  }
}
