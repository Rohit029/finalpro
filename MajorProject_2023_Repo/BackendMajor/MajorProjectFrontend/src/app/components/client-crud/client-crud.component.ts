import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieServiceService } from '../../service/media-service.service';
import { ClientComponent } from '../client/client.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Movie } from '../../components/client-crud/moviemodel';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { SongComponent } from '../song/song.component';
import { Song } from '../song/songmodel';
import { TvshowComponent } from '../tvshow/tvshow.component';
import { TvShow } from '../tvshow/tvshowmodel';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private dialog : MatDialog, private movieService : MovieServiceService, private authService : AuthService, private alertService : SnackbarService){ }
  ngOnInit(): void {
    this.getMovieList();
    this.authService.getUserIdFromToken();
  
  }

  openAddMovieForm(){
    const dialogRef = this.dialog.open(ClientComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getMovieList();
        }
      }
    })
  }

  openEditMovieForm(data : Movie){
    const dialogRef = this.dialog.open(ClientComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getMovieList();
        }
      }
    })
  }

  getMovieList(){
   
  this.movieService.getMovies().subscribe({
    next: (res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
  })
}

 //   this.movieService.getMovieClientId(id).subscribe((result):any=>{
    //     console.log(result, 'getMovieDetail');
    //     this.movieList=result;
    //     console.log(this.movieList, 'Moviedetails');
    //   })
    // }

  deleteMovieData(id:number){
    this.movieService.deleteMovie(id).subscribe({
      next: (res) => {
        this.alertService.openSnackBar('Movie deleted!', 'done');
        this.getMovieList();
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

  
