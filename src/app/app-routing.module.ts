import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductElementDetailsComponent } from './product-list/product-element-details/product-element-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CategoryComponentComponent } from './category-component/category-component.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products/create', component:ProductCreateComponent},
  {path:'categories/create', component:CategoryComponentComponent},
  {path:'products', component:ProductListComponent},
  {path:'products/:productId', component:ProductElementDetailsComponent},
  {path:'products/category/:categoryId', component:ProductListComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
