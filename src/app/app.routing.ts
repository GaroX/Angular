import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactComponent } from './components/list-contact/list-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/list-contact',
    pathMatch: 'full'
  },
  {
    path: 'list-contact',
    component: ListContactComponent
  },
  {
    path: 'new-contact',
    component: NewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
