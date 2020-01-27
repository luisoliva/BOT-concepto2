import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from 'src/services/loginGuard.service';
import { EgxLoginPageComponent } from './modules/egx-login-page/egx-login-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  {
    path: 'roles',
    loadChildren: './modules/egx-page-rol/egx-page-rol.module#EgxPageRolModule',
    canActivate: [LoginGuardService]
  },
  {
    path: 'users',
    loadChildren: './modules/egx-page-user/egx-page-user.module#EgxPageUserModule',
    canActivate: [LoginGuardService],
    data: { animation: 'articles' }
  },
  { path: 'login', component: EgxLoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
