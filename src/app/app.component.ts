import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toastr: ToastrService;
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
