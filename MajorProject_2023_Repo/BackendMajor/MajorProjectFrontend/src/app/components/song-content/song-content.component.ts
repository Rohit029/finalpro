import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/service/media-service.service';
import { Song } from '../song/songmodel';

@Component({
  selector: 'app-song-content',
  templateUrl: './song-content.component.html',
  styleUrls: ['./song-content.component.css']
})
export class SongContentComponent {

  
  songs: Song[]=[];
  

  constructor(private service:MovieServiceService, private router:Router){
  }

   ngOnInit(): void {
    this.getSongs()   
   }

  getSongs(){
    this.service.getSongs().subscribe((data)=>{
      this.songs=data;
    })
  }

  name:any="";
  poster:any="../../../assets/images/songposters/song1.jfif";
  audio:any="../../../assets/images/songaudios/music1.mp3";


  playSong(title:string, posterUrl:string, audioUrl:string){
    this.poster=posterUrl;
    this.audio=audioUrl;
  }


  searchText: string = '';

  onSearchTextEntered(searchValue: string){
   this.searchText = searchValue
    console.log(this.searchText);
  }

}
