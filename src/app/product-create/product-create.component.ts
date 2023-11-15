import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.services';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers:[ProductService, CategoryService]
})
export class ProductCreateComponent {
  url:string='https://e-commerce-app-398415-default-rtdb.firebaseio.com'
  categories:Category[]=[];
  model:any={
    name:"Iphone 15"
  }
  
  constructor(private productService: ProductService, private router: Router, private categoryService:CategoryService){
    
    this.categoryService.getCategories().subscribe(result=>{
      this.categories=result;
    }
      );
  }

  save(form: NgForm){
    
    console.log(form.valid)
   
    const productsToCreate={
      id: 1,
      name:this.model.name,
      price: this.model.price,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      categoryId:this.model.category,
      isActive:this.model.checkbox
    }
    
    if(form.valid){
      this.productService.createProducts(productsToCreate).subscribe(data=>{
        this.router.navigate(['/products']);
      });
      
    }else {
      return
    }
    
  }

}
