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
    
        alert("Registro con exito");
      })
      .catch(() => {
        
        alert("Algo salio mal");
      });
  }
  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
      
        alert("Login Con exito");
      })
      .catch(() => {

        alert("Algo Salio mal");
      });
  }

  onLogout() {
    this.authService.logout()
      .then(() => {

        alert("Adiosin");
      })
      .catch(() => {
   
        alert("Algo salio mal");
      });
  }

  doFace(){
    this.authService.conFacebook()
    .then(() => {

      alert("Exito");
    })
    .catch(() => {
 
      alert("Algo salio mal");
    });
  }
}

