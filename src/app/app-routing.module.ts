import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProyectComponent } from './components/facebook/proyect/proyect.component'
const routes: Routes = [
    { path: '',                   component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'inicio',             component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'facebook',           component: ProyectComponent, canActivate: [AuthGuard]},
    { path: 'login',              component: LoginComponent },
    { path: '**',                 component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
