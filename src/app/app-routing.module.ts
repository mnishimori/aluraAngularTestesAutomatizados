import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './components/photo-list/photo-list.component';
import {PhotoListResolver} from './components/photo-list/photo-list.resolver';

const routes: Routes = [
  { path: 'photos',
    component: PhotoListComponent
  },
  {path: '**', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
