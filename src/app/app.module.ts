import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryElementComponent } from './product-list/category-element/category-element.component';
import { HomeComponent } from './home/home.component';
import { ProductElementDetailsComponent } from './product-list/product-element-details/product-element-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CategoryElementComponent,
    HomeComponent,
    ProductElementDetailsComponent,
    ProductCreateComponent,
    CategoryComponentComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
