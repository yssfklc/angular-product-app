import { Component } from '@angular/core';
import { category } from 'src/app/models/category';
import { CategoryRepository } from 'src/app/models/category.repository';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrls: ['./category-element.component.css']
})
export class CategoryElementComponent {
  category:category[];
  categoryRepository:CategoryRepository;
  selectCategory:category|null=null;
  constructor(){
    this.categoryRepository=new CategoryRepository();
    this.category=this.categoryRepository.getCategories();
  }
  selectedCategory(category:category | null){
    
    
      return this.selectCategory=category;
    
  }
}
