import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageModule } from './modules/components/home-page/home-page.modules';
import { AppRoutingModule } from './route/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
