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

  url:string="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACqAtmoOYOnIlaVtOcFFRQoIVzRidJuCs"
  
  constructor(private http:HttpClient) { 

  }

  register(email:string, password:string){
    return this.http.post<AuthResponse>(this.url, {
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
