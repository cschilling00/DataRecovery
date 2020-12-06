import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OrderComponent} from './components/order/order.component';
import {FaqComponent} from './components/faq/faq.component';
import {AdminComponent} from './components/admin/admin.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
