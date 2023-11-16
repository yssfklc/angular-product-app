import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode:boolean=false
  authForm:any={}
  error:any={};
  constructor(private authService:AuthService){

  }
  isLogin(){
    this.isLoginMode=!this.isLoginMode;
  }

  register(form: NgForm){
    if(this.authForm.email === "" || this.authForm.email===undefined){
      this.error.exist=true
      this.error.message="Email cannot be empty"
      return
    }
    if(this.authForm.password === "" || this.authForm.password===undefined){
      this.error.exist=true
      this.error.message="Password cannot be empty"
      return
    }

    if(form.valid){
      const email=this.authForm.email
      const password=this.authForm.password
      let authRequest:any;
      if(this.isLoginMode){
        authRequest = this.authService.login(email, password)
      }else{
        authRequest = this.authService.register(email, password)
      }

      authRequest.subscribe({

        next: (response:any)=>{
          console.log(response)
        },

        error: (err:any)=>{
          console.log(err.error.error.errors[0].message);
          this.error.exist=true
          switch(err.error.error.errors[0].message){
            case "EMAIL_EXISTS":
              this.error.message="This email already exist"
              break;
            case "INVALID_EMAIL":
              this.error.message="Check your email and password"
              break;
            case "EMAIL_NOT_FOUND":
              this.error.message="There is no user record corresponding to this identifier."
              break;
            case"INVALID_PASSWORD":
            case "INVALID_LOGIN_CREDENTIALS":
              this.error.message="The password is invalid or the user does not have a password."
              break;
            case "USER_DISABLED":
              this.error.message="The user account has been disabled by an administrator."
              break;
            default:
              this.error.message=err.error.error.errors[0].message
          }
        }
      })
    }
  }
}
