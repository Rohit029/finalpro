import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/movie-service.service';
import { Movie } from './homecontent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  
  movies:Movie[]=[];
  constructor(private service:MovieServiceService, private router:Router){}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.service.getMovies().subscribe((data)=>{
      this.movies=data;
    })
  }

 
}



