import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponse {
    idToken: string,
    refreshToken: string,
    expiresIn: string
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  key:string="AIzaSyACqAtmoOYOnIlaVtOcFFRQoIVzRidJuCs"
  url:string="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.key
  url2:string="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.key;
  constructor(private http:HttpClient) { 

  }

  register(email:string, password:string){
    return this.http.post<AuthResponse>(this.url, {
      email:email,
      password:password,
      returnSecureToken:true
    })
  }

  login(email:string, password:string){

    return this.http.post<AuthResponse>(this.url2, {
      email:email,
      password:password,
      returnSecureToken:true
    })

  }

}
