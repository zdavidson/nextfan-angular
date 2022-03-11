import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TestRouteOneComponent } from './test-route-one/test-route-one.component';
import { TestRouteTwoComponent } from './test-route-two/test-route-two.component';
import { TestRouteThreeComponent } from './test-route-three/test-route-three.component';
import { TestRouteFourComponent } from './test-route-four/test-route-four.component';
import { TopCardsComponent } from './top-cards/top-cards.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'test-route-one', component: TestRouteOneComponent },
  { path: 'test-route-two', component: TestRouteTwoComponent },
  { path: 'test-route-three', component: TestRouteThreeComponent },
  { path: 'test-route-four', component: TestRouteFourComponent },
  { path: 'top-cards', component: TopCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
