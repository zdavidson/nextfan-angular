import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TestRouteOneComponent } from './test-route-one/test-route-one.component';
import { TestRouteTwoComponent } from './test-route-two/test-route-two.component';
import { TestRouteThreeComponent } from './test-route-three/test-route-three.component';
import { TestRouteFourComponent } from './test-route-four/test-route-four.component';
import { TopCardsComponent } from './top-cards/top-cards.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, TestRouteOneComponent, TestRouteTwoComponent, TestRouteThreeComponent, TestRouteFourComponent, TopCardsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
