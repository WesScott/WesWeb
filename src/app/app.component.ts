import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WesWeb';
  home = true;
  about = false;
  projects = false;

  toHome() {
    this.home = true;
    this.about = false;
    this.projects = false;
  }


  toAbout() {
    this.home = false;
    this.about = true;
    this.projects = false;
  }

  toProject() {
    this.home = false;
    this.about = false;
    this.projects = true;
  }

}
