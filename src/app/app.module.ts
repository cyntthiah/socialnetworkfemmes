import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenu, MatMenuModule, MatIconModule, MatListModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WallComponent } from './wall/wall.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: LoginComponent }
 
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    UserComponent,
    WallComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    AngularFireAuthModule,
  RouterModule.forRoot(appRoutes),
  AngularFireModule.initializeApp(environment.firebase),
    ],
  
  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class NgbdButtonsCheckbox {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
