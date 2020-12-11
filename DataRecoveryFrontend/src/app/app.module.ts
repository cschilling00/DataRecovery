import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { StaticComponent } from './components/static/static.component';
import { AdminComponent } from './components/admin/admin.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import { OrderComponent } from './components/order/order.component';
import {NgxWigModule} from 'ngx-wig';
import {ReactiveFormsModule} from '@angular/forms';
import { FaqComponent } from './components/faq/faq.component';
import { OrderFormComponent } from './components/order-form/order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    StaticComponent,
    AdminComponent,
    OrderComponent,
    FaqComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,
    NgxWigModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
