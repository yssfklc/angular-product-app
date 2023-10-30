import { Component } from '@angular/core';
import { category } from 'src/app/models/category';
import { CategoryRepository } from 'src/app/models/category.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrls: ['./category-element.component.css']
})
export class CategoryElementComponent {
  category:category[];
  categoryRepository:CategoryRepository;
  selectCategory:number|null=null;
  
  constructor(private route:ActivatedRoute,){
    this.categoryRepository=new CategoryRepository();
    this.category=this.categoryRepository.getCategories();
    this.route.params.subscribe(params=>{
      return this.selectCategory=params["categoryId"];
      
    })
  }
  selectedCategory(category:category | null){

    if(category?.id){
      console.log(category?.id);
      return this.selectCategory=category?.id;
    }else{
      return this.selectCategory;
    }
    
  }
}
