import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isActive: boolean = false;
  isHidden: boolean = false;
  onScroll: boolean = false;
  changeView: boolean = false;

   public showMenu() {
    this.isActive = !this.isActive;
    this.changeView = this.isActive;
  }

  public hideMenu() {
   this.isActive = !this.changeView;
  }

  public scrollPage() {
    this.onScroll = !this.onScroll;
  }
}
