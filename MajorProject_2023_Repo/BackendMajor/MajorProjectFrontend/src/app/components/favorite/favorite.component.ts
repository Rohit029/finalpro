import { Component, OnInit } from '@angular/core';
import { Movie } from '../client-crud/moviemodel';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

//  public favPage : FavPage[] = [];
//   favMovie : Movie[] = [];
  movie : Movie[] = [];
//   favoriteMovie : FavMovie ={
//     personId:0,
//     movieId:0
//   }

// userId : number = 0;

// constructor(private favService : MovieServiceService, private router : ActivatedRoute){}
//   ngOnInit(): void {
//     this.router.paramMap.subscribe((param) => {
//       this.userId = Number(param.get('id'));
//       this.getFavMovieById(this.userId);
//     });
//   }
//   getFavMovieById(id:number){
//     this.favService.favMovie(id).subscribe({
//       next: (res => {
//         this.favMovie = res;
//         this.favPage.push({
//           favMoviePage:res
//         });
//       }),
//       error: (err => {
//         console.log(err);
//       })
//     })
//   }

  // isFavorite(id:number):boolean{
  //   for(const e of this.favMovie){
  //     if(e.id == id){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // addToFavMovie(id:number){
  //   this.favoriteMovie.movieId = id;
  //   this.favoriteMovie.personId = this.userId;
  //   this.favService.addFavMovie(this.favoriteMovie).subscribe({
  //     next: (res =>{
  //       this.ngOnInit();
  //     })
  //   })
  // }
  
  
}
