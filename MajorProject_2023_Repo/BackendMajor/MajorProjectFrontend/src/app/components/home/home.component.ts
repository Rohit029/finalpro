import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { Movie } from '../../components/client-crud/moviemodel';
import { TvShow } from '../tvshow/tvshowmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('videoPlayer') videoPlayer: any;

  showVideo: boolean = false;

  playVideo() {
    this.showVideo = true;
 
  }
  stopVideo() {
    this.showVideo = false;
  }

  
  movies: Movie[]=[];
  tvshows: TvShow[]=[];
  

  constructor(private service:MovieServiceService, private router:Router){
  }

   ngOnInit(): void {
    this.getMovies(),
    this.getTvshows() 
  

   }

  
  getMovies(){
    this.service.getMovies().subscribe((data)=>{
      this.movies=data;
    })
  }

  getTvshows(){
    this.service.getTvshows().subscribe((data)=>{
      this.tvshows=data;
    })
  }
 

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
   this.searchText = searchValue
    console.log(this.searchText);
  }

  getMovieDetails:any=[];
  public str:string="";
  favoriteMoviePayload:any={
    userId:0,
    movieId:0
  }










}














