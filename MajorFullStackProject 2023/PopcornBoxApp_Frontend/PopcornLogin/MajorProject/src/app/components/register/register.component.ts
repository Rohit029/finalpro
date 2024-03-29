import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder:FormBuilder, private router : Router, private toastr: ToastrService){
    this.myform=this.formBuilder.group({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    phone:new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]) ,
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')]],
    confirmPassword: ['', Validators.required]
}, {
    validators: this.MustMatch('password', 'confirmPassword')
});
 
  }
    ngOnInit() {}
    onRegistrationFormSubmit() {
      this.isSubmitted = true;
      if(this.myform.valid){      
        console.log(this.myform.value);
        this.toastr.success("Registered successfully!")
        this.router.navigate(["/home"])
      }
}

     MustMatch(controlName: string, matchingControlName: string) {
      return (group: AbstractControl) => {
          const control = group.get(controlName);
          const matchingControl = group.get(matchingControlName);
  
          if (!control || !matchingControl) {
              return null;
          }
  
          // return if another validator has already found an error on the matchingControl
          if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
              return null;
          }
  
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
          return null;
      }
  }


  
}








