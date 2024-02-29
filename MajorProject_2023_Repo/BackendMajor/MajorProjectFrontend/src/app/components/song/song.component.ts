import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { Song } from './songmodel';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit{

  movies : Song[] = [];
  mediaForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private movieService : MovieServiceService, private route: ActivatedRoute, private alertService : SnackbarService, private dialogRef : MatDialogRef<SongComponent>, @Inject(MAT_DIALOG_DATA) public data : Song) {
    this.mediaForm = this.formBuilder.group({
      id : 0,
      title : '',
      releaseDate : '',
      lyrics : '',
      singer : '',
      genre : '',
      country : '',
      posterUrl : '',
      audioUrl : ''
    })
  }



  ngOnInit(): void {
    this.mediaForm.patchValue(this.data);
  }

    onAddSong(){
      if(this.mediaForm.valid){
        if(this.data){
          this.movieService.editSong(this.data.id,this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
            this.alertService.openSnackBar('Song updated!');
             this.dialogRef.close(true);
            },
            error: (err : any) => {
              console.error(err);
            }
          })
        }else{
          this.movieService.postSong(this.mediaForm.value)
          .subscribe({
            next: (res : any) => {
              this.alertService.openSnackBar('Song added!');
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
