import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('../modules/auth/auth.module')
          .then(m => m.AuthModule)
      },
      {
        path: 'admin-dashboard',
        loadChildren: () => import('../modules/admin-dashboard/admin-dashboard.module')
          .then(m => m.AdminDashboardModule)
        // router guard for admin here
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
