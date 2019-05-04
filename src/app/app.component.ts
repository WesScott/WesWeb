import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toastr: ToastrService;
  private _opened: boolean = false;
 
  title = 'WesWeb';
  home = true;
  about = false;
  projects = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }	
	  
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
