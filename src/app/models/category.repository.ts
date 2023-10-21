import { category } from "./category";

export class CategoryRepository{
    private category:category[] = [
        {
            id:1,
            name:'men',
        },
        {
            id:2,
            name:'women',
        }
    ]
    getCategories():category[]{
        return this.category
    }
}