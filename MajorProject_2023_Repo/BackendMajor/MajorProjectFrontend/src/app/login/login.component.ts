import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { UserStoreService } from '../service/user-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private auth: AuthService, private userStore: UserStoreService, private api : ApiService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    })
  }

  password!: string;

  show = false;
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  ngOnInit() { this.password = 'password'; }

  Login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      
      this.auth.signin(this.loginForm.value)
        .subscribe({
          next: (res) => {
            // if(this.auth.getRoleFromToken()=="client" )
            this.toastr.success(res.message)
            this.auth.setToken(res.token)
            this.userStore.setNameForStore(this.auth.decodeToken().unique_name)
            this.userStore.setRoleForStore(this.auth.decodeToken().role)
            this.userStore.setUserIdForStore(this.auth.decodeToken().nameid)
            this.userStore.setLoggedIn(this.auth.isLoggedIn())
            if (this.auth.decodeToken().role == "admin") {
              this.router.navigate(['/admin'])
            } else { this.router.navigate(["/home"]) }
          },
          error: (err) => {
            this.toastr.error(err.error.message)
          }
        })
    }
  }

  // approve(id :number,body : any) : boolean {
  //   this.api.clientApproved(id, body)
  //   .subscribe(val=>{
  //     val.id;
  //     return id;
  //   })
    
    
  }


