import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { OlvidarPasswordComponent } from './componentes/olvidar-password/olvidar-password.component';
import { IndexUsuarioComponent } from './componentes/index-usuario/index-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MisFavoritosComponent } from './componentes/mis-favoritos/mis-favoritos.component';
import { MisNegociosComponent } from './componentes/mis-negocios/mis-negocios.component';
import { N404Component } from './componentes/404/404.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'olvidar-password', component: OlvidarPasswordComponent},
{ path: 'index-usuario', component: IndexUsuarioComponent},
{ path: 'perfil', component: PerfilComponent},
{ path: 'mis-favoritos', component: MisFavoritosComponent},
{ path: 'mis-negocios', component: MisNegociosComponent},
{ path: "gestion-negocios", component: GestionNegociosComponent },
{ path: "crear-negocio", component: CrearNegocioComponent },
 { path: "detalle-negocio/:codigo", component: DetalleNegocioComponent }
/* { path: "**", component: N404Component } */
];