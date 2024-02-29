import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MovieServiceService } from 'src/app/service/media-service.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit{

  favoriteMovieList:any=[];

  constructor( private service : MovieServiceService, private authService : AuthService){}
  ngOnInit(): void {
    this.getFavoriteMovies();
   this.authService.getUserInfo();
   console.log(this.authService.userId,"userId")
  }

  getFavoriteMovies(){
    this.service.favMovie(this.authService.userId).subscribe((result)=>{
      this.favoriteMovieList=result;
      console.log(this.favoriteMovieList,"fav list");
    })
  }
}
