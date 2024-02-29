import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { MovieServiceService } from '../service/media-service.service';
import { Person } from './personmodel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  // profileImage = "https://bootdey.com/img/Content/avatar/avatar1.png";



  // ChangeDp(event :any) {
    
  //   if(event.target.files) {
  //     const reder = new FileReader()
  //     reder.readAsDataURL(event.target.files[0])  
  //       reder.onload = (eve : any) =>{
  //         this.profileImage = eve.target.result;
  //       }
      
  //   }

  editUser:Person={
    id:0,
    name:'',
    password:'',
    address:''
  };

  constructor(private route: ActivatedRoute, private service:ApiService, private router:Router, private toastr : ToastrService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.service.getUserById(id).subscribe((data) => {
      this.editUser = data;
    });
  }

  editProfile() {
    let personId : number = 0;
    this.route.paramMap.subscribe((param) => {
      personId = Number(param.get('id'));
    });
    this.service.editUser(personId,this.editUser)
    .subscribe({
      next:(data) => {
        this.toastr.success("Profile updated.")
        // this.router.navigate(["/students/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  }

