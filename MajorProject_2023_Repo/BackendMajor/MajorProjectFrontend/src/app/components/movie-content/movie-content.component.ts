import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { Movie } from '../client-crud/moviemodel';
import { Person } from './person';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent {

  showVideo: boolean = false;

  playVideo() {
    this.showVideo = true;
 
  }
  stopVideo() {
    this.showVideo = false;
  }


  movies: Movie[]=[];

  constructor(private service:MovieServiceService, private router:Router, private route:ActivatedRoute , private authService:AuthService){
  }

   ngOnInit(): void {
    this.getMovies(),
    this.authService.getUserIdFromToken();
   }

  
  getMovies(){
    this.service.getMovies().subscribe((data)=>{
      this.movies=data;
    })
  }

  getMovieById(id:number){
    this.service.getMovieById(id).subscribe((result):any=>{
      console.log(result, 'getMovieDetail');
      this.getMovieDetails=result;
      console.log(this.getMovieDetails, 'Moviedetails');
    })
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
   this.searchText = searchValue
  }

  getMovieDetails:any=[];
  public str:string="";
  favoriteMoviePayload:any={
    userId:0,
    movieId:0
  }

  addToFavMovie(){
    this.favoriteMoviePayload.userId=this.authService.getUserIdFromToken();
    this.favoriteMoviePayload.movieId=this.route.snapshot.paramMap.get('id');

    console.log(this.favoriteMoviePayload, "payload");

    this.service.addFavMovie(this.favoriteMoviePayload).subscribe((result)=>{
      alert("Movie added successfully");
    })
  }

}
