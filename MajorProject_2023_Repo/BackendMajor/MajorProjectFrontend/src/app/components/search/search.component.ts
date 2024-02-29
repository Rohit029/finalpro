import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieServiceService } from 'src/app/service/media-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor( private service : MovieServiceService ){ }


  control = new FormControl('');


  myControl : FormControl = new FormControl();
  movies:any=[];
  searchResult:any=[];
  searchForm = new FormGroup({
    'movieTitle':new FormControl(null)
  });


  ngOnInit(): void {
  
  }


}
