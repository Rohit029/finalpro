import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { Movie } from '../../components/client-crud/moviemodel';
import { MovieServiceService } from '../../service/media-service.service';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit{
  movie: Movie = {
    id:0,
    title: '',
    personId:0,
    releaseDate: '',
    genre: '',
    description: '',
    posterUrl: '',
    trailerUrl: '',
    movieUrl: ''
  }

  constructor(private route: ActivatedRoute, private service: MovieServiceService, private router: Router,  private authService:AuthService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.playMovie(id);
    });
    this.authService.getUserInfo();
  }

  playMovie(id:number){
    this.service.getMovieById(id).subscribe((data) => {
      this.movie = data;
      console.log(data);
    });
  }


  getMovieDetails:any=[];
  public str:string="";
  favoriteMoviePayload:any={
    user_Id:0,
    movie_Id:0
  }

  addToFavMovie(){
    this.favoriteMoviePayload.user_Id=this.authService.userId;
   
    this.favoriteMoviePayload.movie_Id=this.route.snapshot.paramMap.get('id');
  

    console.log(this.favoriteMoviePayload, "payload");

    this.service.addFavMovie(this.favoriteMoviePayload).subscribe((result)=>{
      this.toastr.success("Movie added to favorite list");
    })
  }
}

