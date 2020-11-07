import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StaticComponent} from './components/static/static.component';
import {OrderComponent} from './components/order/order.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: StaticComponent},
  {path: 'order', component: OrderComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
