import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module')
      .then(m => m.LayoutModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.module')
      .then(m => m.AdminDashboardModule),
    canActivate: [AuthGuard]
    // router guard for admin here
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
