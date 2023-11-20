import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isAuthenticated:boolean=false;

    constructor(private service:AuthService){
      this.service.user.subscribe(user=>
        {
          return this.isAuthenticated=!!user;
        }
      )
      
    }

    logout(){
      this.service.logout();
    }
}
