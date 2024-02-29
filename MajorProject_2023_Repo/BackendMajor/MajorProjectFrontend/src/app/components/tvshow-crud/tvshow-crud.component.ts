import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { TvshowComponent } from '../tvshow/tvshow.component';
import { TvShow } from '../tvshow/tvshowmodel';

@Component({
  selector: 'app-tvshow-crud',
  templateUrl: './tvshow-crud.component.html',
  styleUrls: ['./tvshow-crud.component.css']
})
export class TvshowCrudComponent implements OnInit {


  displayedColumns: string[] = ['id', 'title', 'description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private dialog : MatDialog, private movieService : MovieServiceService, private alertService : SnackbarService){ }
  ngOnInit(): void {
    this.getTvshowList();
  }

  //tv shows 

  openAddTvshowForm(){
    const dialogRef = this.dialog.open(TvshowComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getTvshowList();
        }
      }
    })
  }

  openEditTvshowForm(data : TvShow){
    const dialogRef = this.dialog.open(TvshowComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getTvshowList();
        }
      }
    })
  }
  
  getTvshowList(){
    this.movieService.getTvshows().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  deleteTvshowData(id:number){
    this.movieService.deleteMovie(id).subscribe({
      next: (res) => {
        this.alertService.openSnackBar('Movie deleted!', 'done');
        this.getTvshowList();
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
