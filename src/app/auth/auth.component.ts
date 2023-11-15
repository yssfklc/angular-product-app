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

  authForm:any={}
  error:any={
  };
  constructor(private authService:AuthService){

  }

  register(form: NgForm){
    if(this.authForm.email === "" || this.authForm.email===undefined){
      this.error.exist=true
      this.error.message="Lütfen email bilgisi giriniz"
      return
    }
    if(this.authForm.password === "" || this.authForm.password===undefined){
      this.error.exist=true
      this.error.message="Lütfen password bilgisi giriniz"
      return
    }
    if(form.valid){
      const email=this.authForm.email
      const password=this.authForm.password
      this.authService.register(email, password).subscribe((response: any)=>{
        const result=response.json()
        if(result.error.code == "400"){
          this.error.exist=true
          this.error.message=result.error.message
          console.log("lale");
        }
        console.log(result)
      })
    }
  }
}
