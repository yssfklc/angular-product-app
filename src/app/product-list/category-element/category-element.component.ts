import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryRepository } from 'src/app/models/category.repository';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrls: ['./category-element.component.css'],
  providers:[CategoryService]
})
export class CategoryElementComponent {
  category:Category[]=[];
  selectCategory:number|null=null;
  
  constructor(private route:ActivatedRoute, private categoryService:CategoryService){
    // this.categoryRepository=new CategoryRepository();
    // this.category=this.categoryRepository.getCategories();
    this.route.params.subscribe(params=>{
      return this.selectCategory=params["categoryId"];
      
    })
    this.categoryService.getCategories().subscribe(result=>{

      this.category=result
      }
    );
  }
  selectedCategory(category:Category | null){

    if(category?.id){
      console.log(category?.id);
      return this.selectCategory=category?.id;
    }else{
      return this.selectCategory;
    }
    
  }
}
