import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerRoutingModule } from './seller-routing.module';
import { CommisionsComponent } from './pages/commisions/commisions.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CommisionsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
