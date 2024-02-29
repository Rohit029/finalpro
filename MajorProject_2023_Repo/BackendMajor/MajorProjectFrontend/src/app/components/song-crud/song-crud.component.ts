import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { SongComponent } from '../song/song.component';
import { Song } from '../song/songmodel';

@Component({
  selector: 'app-song-crud',
  templateUrl: './song-crud.component.html',
  styleUrls: ['./song-crud.component.css']
})
export class SongCrudComponent {

  displayedColumns: string[] = ['id', 'title', 'description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private dialog : MatDialog, private movieService : MovieServiceService, private alertService : SnackbarService){ }
  ngOnInit(): void {
    this.getSongList();
  }

  // songs
  openAddSongForm(){
    const dialogRef = this.dialog.open(SongComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getSongList();
        }
      }
    })
  }

  openEditSongForm(data : Song){
    const dialogRef = this.dialog.open(SongComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getSongList();
        }
      }
    })
  }
  
  getSongList(){
    this.movieService.getSongs().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  deleteSong(id:number){
    this.movieService.deleteSong(id).subscribe({
      next: (res) => {
        this.alertService.openSnackBar('song deleted!', 'done');
        this.getSongList();
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
