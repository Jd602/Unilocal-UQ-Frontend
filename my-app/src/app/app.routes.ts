import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { OlvidarPasswordComponent } from './componentes/olvidar-password/olvidar-password.component';
import { N404Component } from './componentes/404/404.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'olvidar-password', component: OlvidarPasswordComponent},
/* { path: "**", component: N404Component } */
];