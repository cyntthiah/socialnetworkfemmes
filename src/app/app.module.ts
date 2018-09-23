import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

// form
import { ReactiveFormsModule } from '@angular/forms';

// auth
import {AuthService} from './auth.service';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

// Router
import { RouterModule, Routes } from '@angular/router';

// Componentes Red Social
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';
import { MainComponent } from './main/main.component';
import { SectionComponent } from './components/section/section.component';
import { ImgUserComponent } from './components/img-user/img-user.component';
import { InfoComponent } from './info/info.component';
import { FriendsComponent } from './friends/friends.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'wall', component: WallComponent },
  { path: 'info', component: InfoComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'pictures', component: PicturesComponent }
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
    PicturesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule, // ruta
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
