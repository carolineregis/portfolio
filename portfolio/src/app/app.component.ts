import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isActive: boolean = false;
   public showMenu() {
    this.isActive = !this.isActive;
  }
}
