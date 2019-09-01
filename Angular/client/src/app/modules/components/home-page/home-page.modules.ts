import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProductComponent } from './order-product/order-product.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';

@NgModule({
  declarations: [HomePageComponent, OrderProductComponent, PopularProductComponent, CustomerProductComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
