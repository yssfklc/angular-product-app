import { Product } from "./product"

export class ProductRepository {
     products:Product[] = [
        {
          id: 1,
          name:'iphone 15',
          price : 20000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:1,
          isActive:true
        },
        {
          id: 2,
          name:'iphone 16',
          price : 30000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:1,
          isActive:true
        },
        {
          id: 3,
          name:'iphone 17',
          price : 40000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:2,
          isActive:true
        },
        {
          id: 4,
          name:'iphone 17',
          price : 40000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:2,
          isActive:true
        },
        {
          id: 5,
          name:'iphone 17',
          price : 40000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:2,
          isActive:true
        },
        {
          id: 6,
          name:'iphone 17',
          price : 40000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:2,
          isActive:true
        },
        {
          id: 7,
          name:'iphone 17',
          price : 40000,
          imageUrl: "1.jpg",
          description : 'newest phone',
          categoryId:3,
          isActive:true
        }
      ]
      
        getProducts ():Product[] {
          return this.products.filter(product=>product.isActive)
        }
        getProductsById(id:number):Product | undefined{
          return this.products.find(product=>product.id===id)
        }
        getProductsByCategoryId(id:number){
          return this.products.filter(product=>product.categoryId===id)
        }
}