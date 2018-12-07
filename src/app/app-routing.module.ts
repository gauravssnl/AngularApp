import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from '../app/about/about.component'
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
