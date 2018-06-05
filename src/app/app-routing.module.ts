import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }   from './components/list/list';
import { ItemComponent }   from './components/item/item';
import { UserComponent }   from './components/user/user';

const routes : Routes = [
  // top
  {
    path:'top',
    component: ListComponent
  },
  {
    path: 'top/:page',
    component: ListComponent
  },
  // new
  {
    path: 'new',
    component: ListComponent
  },
  {
    path: 'new/:page',
    component: ListComponent
  },
  // show
  {
    path: 'show',
    component: ListComponent
  },
  {
    path: 'show/:page',
    component: ListComponent
  },
  // ask
  {
    path: 'ask',
    component: ListComponent
  },
  {
    path: 'ask/:page',
    component: ListComponent
  },
  // job
  {
    path: 'job',
    component: ListComponent
  },
  {
    path: 'job/:page',
    component: ListComponent
  },
  // best
  {
    path: 'best',
    component: ListComponent
  },
  {
    path: 'best/:page',
    component: ListComponent
  },
  // item
  {
    path: 'item/:id',
    component: ItemComponent
  },
  // user
  {
    path: 'user/:username',
    component: UserComponent
  },
  // homepage redirect
  { path: '',
    redirectTo: '/top',
    pathMatch: 'full'
  },
  // catchall redirect
  {
  	path: '**',
  	redirectTo: '/top'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}