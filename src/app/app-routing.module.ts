import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostMessageComponent} from '../app/post-message/post-message.component'


const routes: Routes = [
  {path: '', component: PostMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
