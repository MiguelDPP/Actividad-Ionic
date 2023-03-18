import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabPage } from './main-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabPage,
    children: [
      {
        path: 'mision-and-vision',
        loadChildren: () => import('../../pages/mision-and-vision/mision-and-vision.module').then( m => m.MisionAndVisionPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../../pages/products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'directory',
        loadChildren: () => import('../../pages/directory/directory.module').then( m => m.DirectoryPageModule)
      },
      {
        path: 'customers',
        loadChildren: () => import('../../pages/customers/customers.module').then( m => m.CustomersPageModule)
      },
      {
        path: '',
        redirectTo: '/main/mision-and-vision',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class MainTabPageRoutingModule {}
