import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';
import {ProductService} from 'src/app/services/product.services'

@Component({
  selector: 'app-product-element-details',
  templateUrl: './product-element-details.component.html',
  styleUrls: ['./product-element-details.component.css'],
  providers:[ProductService]
})
export class ProductElementDetailsComponent implements OnInit{

  products:Product | undefined;
  

  constructor(private route: ActivatedRoute, private ProductService:ProductService){
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id = params["productId"];
      
      
      this.ProductService.getProductsById(id).subscribe((data:any)=>{
        console.log(data)
        this.products = {...data, id:id}
      });
    })
  }
}
