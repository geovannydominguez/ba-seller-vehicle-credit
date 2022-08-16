import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommisionsComponent } from './pages/commisions/commisions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'new-buyer' },
      // { path: 'waiting-validation' },
      // { path: 'credit-report' },
      // { path: 'credit-simulator' },
      { path: 'commissions', component: CommisionsComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SellerRoutingModule { }
