import { category } from "./category";

export class CategoryRepository{
    private category:category[] = [
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
    getCategories():category[]{
        return this.category
    }
}