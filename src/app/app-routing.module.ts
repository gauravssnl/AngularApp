import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from '../app/about/about.component';
import {ContactComponent} from '../app/contact/contact.component'
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
