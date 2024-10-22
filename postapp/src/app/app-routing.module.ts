import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostformComponent } from './postform/postform.component';

const routes: Routes = [
  {
    path:"",
    component:PostsComponent
  },
  {
    path:"add",
    component:PostformComponent
  },
  {
    path:"edit/:id",
    component:PostformComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
