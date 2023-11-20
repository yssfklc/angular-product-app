import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';

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
  user = new BehaviorSubject<User|null>(null);
  constructor(private http:HttpClient) { 

  }

  register(email:string, password:string){
    return this.http.post<AuthResponse>(this.url, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap((response:any)=>{
       this.handleUser( response.email,
        response.localId,
        response.idToken,
        response.expiresIn )
      }),
      catchError(this.handleError)    
      )
  }

  login(email:string, password:string){

    return this.http.post<AuthResponse>(this.url2, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap((response:any)=>{
        this.handleUser( response.email,
         response.localId,
         response.idToken,
         response.expiresIn )
       }),
      catchError(this.handleError)    
      )

  }

  private handleError(err: HttpErrorResponse){
    let message="An error exists";

    switch(err.error.error.errors[0].message){
      case "EMAIL_EXISTS":
        message="This email already exist"
        break;
      case "INVALID_EMAIL":
        message="Check your email and password"
        break;
      case "EMAIL_NOT_FOUND":
        message="There is no user record corresponding to this identifier."
        break;
      case"INVALID_PASSWORD":
      case "INVALID_LOGIN_CREDENTIALS":
        message="The password is invalid or the user does not have a password."
        break;
      case "USER_DISABLED":
        message="The user account has been disabled by an administrator."
        break;
      default:
        message=err.error.error.errors[0].message
    }
    return throwError(()=>message);
  }

  private handleUser(email:string,
    localId:string,
    idToken:string,
    expiresIn:string){
    const expirationDate = new Date(new Date().getTime() + (+expiresIn*1000))
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    )
    console.log(user);
    this.user.next(user)
  }

}
