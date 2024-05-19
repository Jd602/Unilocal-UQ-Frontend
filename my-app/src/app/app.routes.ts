import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { OlvidarPasswordComponent } from './componentes/olvidar-password/olvidar-password.component';
import { IndexUsuarioComponent } from './componentes/index-usuario/index-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MisFavoritosComponent } from './componentes/mis-favoritos/mis-favoritos.component';
import { N404Component } from './componentes/404/404.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'olvidar-password', component: OlvidarPasswordComponent},
{ path: 'index-usuario', component: IndexUsuarioComponent},
{ path: 'perfil', component: PerfilComponent},
{ path: 'mis-favoritos', component: MisFavoritosComponent}
/* { path: "**", component: N404Component } */
];