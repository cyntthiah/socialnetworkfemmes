import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
//Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

//form
import { ReactiveFormsModule } from '@angular/forms';

//auth
import {AuthService} from './auth.service';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [ // ruta + componente
  {
    path : '',//si no pone nada es la ruta principal
    component : LoginComponent
  },

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
 export class AppModule { }
