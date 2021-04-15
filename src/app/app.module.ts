import { NavigationComponent } from './carousel/navigation/navigation.component';
import { LargeArrowComponent } from './cart/large-arrow/large-arrow.component';
import { SlideComponent } from './carousel/slide/slide.component';
import { ArrowComponent } from './carousel/arrow/arrow.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CartComponent,
    ArrowComponent,
    SlideComponent,
    LargeArrowComponent,
    NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
