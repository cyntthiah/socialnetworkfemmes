import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [ // ruta + componente
  {
    path : '', // si no pone nada es la ruta principal
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
    path: 'info',
    component: InfoComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
