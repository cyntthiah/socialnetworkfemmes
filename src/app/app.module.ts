import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// firebase
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
import { MainComponent } from './main/main.component';
import { SectionComponent } from './components/section/section.component';
import { ImgUserComponent } from './components/img-user/img-user.component';
import { InfoComponent } from './info/info.component';
import { FriendsComponent } from './friends/friends.component';
import { PicturesComponent } from './pictures/pictures.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
//  { path: 'main', component: MainComponent },
//  { path: 'wall', component: WallComponent },
//  { path: 'info', component: InfoComponent },
//  { path: 'friends', component: FriendsComponent },
//  { path: 'pictures', component: PicturesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    UserComponent,
    WallComponent,
    MainComponent,
    SectionComponent,
    ImgUserComponent,
    InfoComponent,
    FriendsComponent,
    PicturesComponent
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
  HttpModule
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
