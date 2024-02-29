import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder:FormBuilder, private router : Router, private toastr : ToastrService){
    this.loginForm=this.formBuilder.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),

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


ngOnInit() {this.password = 'password';}
onRegistrationFormSubmit() {
  this.isSubmitted = true;
  if(this.loginForm.valid){      
    console.log(this.loginForm.value);
    this.toastr.success("Welcome!", "enjoy unlimited streaming now!")
    this.router.navigate(["/home"])
  }
}
}
  
