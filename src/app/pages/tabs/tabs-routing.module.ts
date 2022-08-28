import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  // esto es para poner la pagina que carga por defecto
  {
    path:'',
    redirectTo: '/tabs/account',
    pathMatch: 'full'

  },

  // aquí ya defonimos las rutas hijas que van a enlazar los tabs
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },

      {
        path: 'contact',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },

      {
        path: 'settings',
        loadChildren: () => import('../infinite/infinite.module').then( m => m.InfinitePageModule)
      }


    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
