import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module')
      .then(m => m.LayoutModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.module')
      .then(m => m.AdminDashboardModule)
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
