import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeningLevelComponent } from './ListeningLevel/listening.level.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listening',
    pathMatch: 'full'
  },{
    path: 'listening',
    component: ListeningLevelComponent,
  },{
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
