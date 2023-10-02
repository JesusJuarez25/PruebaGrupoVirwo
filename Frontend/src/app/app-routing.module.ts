import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes de las paginas
import { LoginComponent } from './components/login/login.component';
import { SingComponent } from './components/sig/sing.componet';
import { PrincipalComponent } from './components/principal/principal.componet';

//Rutas de las paginas
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sing', component: SingComponent},
  {path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
