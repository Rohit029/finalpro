import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { TvShow } from '../tvshow/tvshowmodel';
import { FavTvShow } from './favtvshow';

@Component({
  selector: 'app-tvshows-content',
  templateUrl: './tvshows-content.component.html',
  styleUrls: ['./tvshows-content.component.css']
})
export class TvshowsContentComponent {

  showVideo: boolean = false;

  playVideo() {
    this.showVideo = true;
 
  }
  stopVideo() {
    this.showVideo = false;
  }

  tvshows: TvShow[]=[];
  favtvshows: FavTvShow[]=[
    
  ];


  constructor(private service:MovieServiceService, private router:Router){
  }

   ngOnInit(): void {
    this.getTvshows()   
   }

  getTvshows(){
    this.service.getTvshows().subscribe((data)=>{
      this.tvshows=data;
    })
  }


  //Search
  searchText: string = '';

  onSearchTextEntered(searchValue: string){
   this.searchText = searchValue
    console.log(this.searchText);
  }

}
