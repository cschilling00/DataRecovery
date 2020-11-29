import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OrderComponent} from './components/order/order.component';
import {FaqComponent} from './components/faq/faq.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'order', component: OrderComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
