import { Component } from '@angular/core';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MajorProject';

  public showFooter = true;

  toggleNavBar(component: any) {
    if (component instanceof LoginComponent) {
      this.showFooter = false;
    } else if (component instanceof RegisterComponent) {
      this.showFooter = false;
    } else if (component instanceof FavoritePageComponent) {
      this.showFooter = false;
    }
    else {
      this.showFooter = true;
    }
  }
  
}
