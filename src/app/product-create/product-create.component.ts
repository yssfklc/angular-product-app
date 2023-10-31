import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers:[ProductService]
})
export class ProductCreateComponent {
  url:string='https://e-commerce-app-398415-default-rtdb.firebaseio.com'
  
  constructor(private productService: ProductService, private router: Router){
    console.log("product is created");
    
  }

  save(name:any, price:any, imageUrl:any, description:any, checkbox:any,  category:any){
    
    const productsToCreate={
      id: 1,
      name:name.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
      categoryId:category.value,
      isActive:checkbox.checked
    }
    
    this.productService.createProducts(productsToCreate).subscribe(data=>{
      this.router.navigate(['/products']);
    });
    
  }

}
