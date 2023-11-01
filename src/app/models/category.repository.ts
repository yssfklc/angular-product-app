import { Category } from "./category";

export class CategoryRepository{
    private category:Category[] = [
        {
            id:1,
            name:'Phones',
        },
        {
            id:2,
            name:'Computers',
        },
        {
            id:3,
            name:'Tablets',
        }
    ]
    getCategories():Category[]{
        return this.category
    }
}