import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../service/user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  name! : string
  role! : string
  loggedin : boolean =false
  constructor(private auth : AuthService, private router : Router, private userStore : UserStoreService   ){}


  ngAfterViewInit(): void {
    this.userStore.getLoggedIn()
    .subscribe(val=>{
      const valu = this.auth.isLoggedIn()
      this.loggedin = val || valu
      
    })
  }

  ngOnInit(): void {
    this.loggedin = this.auth.isLoggedIn()
    
    this.role = this.auth.getRoleFromToken();

    this.userStore.getNameFromStore()
    .subscribe(val=>{
      const nameformtoken = this.auth.getNameFromToken()
      this.name = val || nameformtoken
    })

    this.userStore.getRoleFromStore()
    .subscribe(val =>{
      const rolefromtoken = this.auth.getRoleFromToken()
      this.role = val || rolefromtoken
    })
  }
  
  Logout() { this.auth.signout();
  this.userStore.setLoggedIn(false)
  this.loggedin = false;
 }


}
