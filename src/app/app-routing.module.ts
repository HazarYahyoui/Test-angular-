import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { ListPostComponent } from './Components/list-post/list-post.component';
import { Page404Component } from './Components/page404/page404.component';
import { UpdatePostComponent } from './Components/update-post/update-post.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list-post',
    pathMatch: 'full'
  },
  {
    path:'list-post',
    component: ListPostComponent
  },
  {
    path:'add-post',
    component: AddPostComponent,
  },
  {
    path:'update/:id',
    component: UpdatePostComponent
  },
  {
    path:'**',
    component: Page404Component
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
