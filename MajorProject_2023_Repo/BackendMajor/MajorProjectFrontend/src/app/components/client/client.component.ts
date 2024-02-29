import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { Movie } from '../../components/client-crud/moviemodel';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  movies : Movie[] = [];

  mediaForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private movieService : MovieServiceService, private authService : AuthService ,private route: ActivatedRoute, private alertService : SnackbarService, private dialogRef : MatDialogRef<ClientComponent>, @Inject(MAT_DIALOG_DATA) public data : Movie) {
    this.mediaForm = this.formBuilder.group({
      id:0,
      title:'',
      releaseDate:'',
      description:'',
      posterUrl: '',
      trailerUrl:'',
      movieUrl:''
    })
  }
  ngOnInit(): void {
    this.mediaForm.patchValue(this.data);
    this.authService.getUserIdFromToken();
  }

  // readUrl(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  
  //     reader.onload = (event: ProgressEvent) => {
  //       let poster = this.mediaForm.get('posterUrl')?.value;
  //       poster = (<FileReader>event.target).result;
  //     }
  
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

    onAddMedia(){
      if(this.mediaForm.valid){
        if(this.data){
          this.movieService.editMovie(this.data.id,this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
            this.alertService.openSnackBar('Movie updated!');
             this.dialogRef.close(true);
            },
            error: (err : any) => {
              console.error(err);
            }
          })
        }else{         
          let poster = this.mediaForm.get('posterUrl')?.value;
          poster = "../../../assets/images/movieposters/" + poster.substring(12);
          
          this.movieService.postMovie(this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
              this.alertService.openSnackBar('Movie added!');
             this.dialogRef.close(true);
            },
            error: (err : any) => {
              console.error(err);
            }
          })
        }
       
      }
    }
  
 
  }

  
  
  
  

