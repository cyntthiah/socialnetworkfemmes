import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

// database
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Componentes Red Social
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';
import { SectionComponent } from './components/section/section.component';
import { ImgUserComponent } from './components/img-user/img-user.component';
import { InfoComponent } from './info/info.component';
import { FriendsComponent } from './friends/friends.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

// Post
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostService } from '../app/services/post.service';
import { PostUserComponent } from './components/post-user/post-user.component';

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
    NavbarComponent,
    PostListComponent,
    PostComponent,
    PostUserComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AppRoutingModule, // ruta
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AuthService,
    PostService
  ],
  bootstrap: [AppComponent]
})
 export class AppModule { }
