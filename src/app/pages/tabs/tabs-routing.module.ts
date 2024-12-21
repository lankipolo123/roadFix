import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsPageModule),
      },
      {
        path: 'on-going',
        loadChildren: () => import('./on-going/on-going.module').then((m) => m.OnGoingPageModule),
      },
      {
        path: 'fixed',
        loadChildren: () => import('./fixed/fixed.module').then((m) => m.FixedPageModule),
      },
      {
        path: 'camera',
        loadChildren: () => import('./camera/camera.module').then((m) => m.CameraPageModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: 'home', // Default tab
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
