import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode:boolean=false
  authForm:any={}
  error:any={};
  constructor(private authService:AuthService, private router:Router){
    
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
          this.router.navigate(['/'])
        },

        error: (err:any)=>{
          this.error.exist=true
          this.error.message=err
        }
      })
    }
  }
}
