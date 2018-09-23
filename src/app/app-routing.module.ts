import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [ // ruta + componente
  {
    path : 'login', // si no pone nada es la ruta principal
    component : LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'wall',
    component: WallComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
