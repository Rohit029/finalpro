import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { TvShow } from '../tvshow/tvshowmodel';

@Component({
  selector: 'app-play-tvshow',
  templateUrl: './play-tvshow.component.html',
  styleUrls: ['./play-tvshow.component.css']
})
export class PlayTvshowComponent {

  tvshow: TvShow = {
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
  }

  constructor(private route: ActivatedRoute, private service: MovieServiceService, private router: Router, private authService : AuthService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.playTvshow(id);
    });
    this.authService.getUserInfo();
  }

  playTvshow(id:number){
    this.service.getTvshowById(id).subscribe((data) => {
      this.tvshow = data;
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
