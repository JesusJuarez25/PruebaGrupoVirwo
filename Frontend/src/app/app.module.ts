import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos importados
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//Componentes de las paginas
import { LoginComponent } from './components/login/login.component';
import { SingComponent } from './components/sig/sing.componet';
import { PrincipalComponent } from './components/principal/principal.componet';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingComponent,
    PrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
