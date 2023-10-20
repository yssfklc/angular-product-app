import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Welcome My First Angular App';

  getTitle(){
    return this.title;
  }
}
