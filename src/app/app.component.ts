import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'Welcome My First Angular App';

  constructor(private authService:AuthService){

  }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  getTitle(){
    return this.title;
  }
}
