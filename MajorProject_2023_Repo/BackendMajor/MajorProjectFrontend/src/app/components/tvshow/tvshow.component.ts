import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { Movie } from '../client-crud/moviemodel';
import { TvShow } from './tvshowmodel';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit{


  tvshows : TvShow[] = [];

  mediaForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private movieService : MovieServiceService, private route: ActivatedRoute, private alertService : SnackbarService, private dialogRef : MatDialogRef<TvshowComponent>, @Inject(MAT_DIALOG_DATA) public data : TvShow) {
    this.mediaForm = this.formBuilder.group({
      id : 0,
      title : '',
      description : '',
      releaseDate : '',
      genre : '',
      country : '',
      subscription : '',
      posterUrl : '',
      trailerUrl : '',
      tvshowUrl : '',
    })
  }
  ngOnInit(): void {
    this.mediaForm.patchValue(this.data);
  }

    onAddTvShow(){
      if(this.mediaForm.valid){
        if(this.data){
          this.movieService.editTvshow(this.data.id,this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
            this.alertService.openSnackBar('Tv show updated!');
             this.dialogRef.close(true);
            },
            error: (err : any) => {
              console.error(err);
            }
          })
        }else{
          this.movieService.postTvshow(this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
              this.alertService.openSnackBar('Tv show added!');
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
