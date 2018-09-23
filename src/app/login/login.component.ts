import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createAuthForm();
  }

  ngOnInit() {
  }
  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }
  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        //Registro exitoso, celebremos esto!
        alert("Registro con exito");
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        alert("Algo salio mal");
      });
  }
  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        //Login exitoso, así que celebramos con el usuario (?)
        alert("Login Con exito");
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        alert("Algo Salio mal");
      });
  }

  onLogout() {
    this.authService.logout()
      .then(() => {
        //Logout exitoso, adios usuario!
        alert("Te juiste");
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        alert("Algo salio mal");
      });
  }
}

