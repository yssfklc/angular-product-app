import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css'],
  providers:[CategoryService]
})
export class CategoryComponentComponent {
  category:Category|undefined;
  constructor(private categoryService:CategoryService, private router:Router){
    
  }
  saveCategory(name:any){
    this.category={
      id:0,
      name:name.value
    }
    this.categoryService.createCategories(this.category).subscribe(data=>{
      this.router.navigate(['/products'])
    })
    
  }
}
