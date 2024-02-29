import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../components/client-crud/moviemodel';
import { FavMovie } from '../components/favorite/favmoviemodel';
import { Song } from '../components/song/songmodel';
import { TvShow } from '../components/tvshow/tvshowmodel';
import { FavTvShow } from '../components/tvshows-content/favtvshow';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movies: Movie[] = [];
  tvshows: TvShow[] = [];
  favtvshows: FavTvShow[]=[];
  songs: Song[] = [];
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>('https://localhost:7243/getallmovies');
  }

  getMovieById(id: number) {
    return this.http.get<Movie>('https://localhost:7243/api/Client/movieid/' + id);
  }

  postMovie(payload: Movie) {
    return this.http.post<Movie>('https://localhost:7243/addmovie', payload);
  }

  editMovie(id: number, data: Movie) {
    return this.http.put<Movie>('https://localhost:7243/api/Client/editmovie/' + id, data);
  }

  deleteMovie(id: number) {
    return this.http.delete<Movie>('https://localhost:7243/api/Client/deletemovie/' + id);
  }

  favMovie(id: number){
    return this.http.get<Movie[]>('https://localhost:7243/Person/favouriteMovie/' + id)
  }

  addFavMovie(payload : any):Observable<any>{
    return this.http.post('https://localhost:7243/Person/favouriteMovie/add', payload)
  }

  getMovieClientId(id:number){
    return this.http.get<Movie>('https://localhost:7243/api/Client/movList/' + id)
  }


  
  getTvshows() {
    return this.http.get<TvShow[]>('https://localhost:7243/getalltvshows');
  }

  getTvshowById(id: number) {
    return this.http.get<TvShow>('https://localhost:7243/api/Client/tvshowid/' + id);
  }

  postTvshow(payload: TvShow) {
    return this.http.post<TvShow>('https://localhost:7243/addtvshow', payload);
  }

  editTvshow(id: number, data: TvShow) {
    return this.http.put<TvShow>('https://localhost:7243/api/Client/edittvshow/' + id, data);
  }

  deleteTvshow(id: number) {
    return this.http.delete<TvShow>('https://localhost:7243/api/Client/deletetvshow/' + id);
  }

  getFavTvshows(){}

  addFavTvshow(tvshowId: FavTvShow){
    return this.http.post<FavTvShow>('https://localhost:7243/api/FavTvShows', tvshowId)
  }

  removeFavTvshow(tvshowId: FavTvShow){
    return this.http.delete<FavTvShow>('https://localhost:7243/api/FavTvShows/' + tvshowId)
  }



  //SONGS

  getSongs() {
    return this.http.get<Song[]>('https://localhost:7243/getallsongs');
  }

  getSongById(id: number) {
    return this.http.get<Song>('https://localhost:7243/api/Client/songid/' + id);
  }

  postSong(payload: Song) {
    return this.http.post<Song>('https://localhost:7243/addsong', payload);
  }

  editSong(id: number, data: Song) {
    return this.http.put<Song>('https://localhost:7243/api/Client/editsong/' + id, data);
  }

  deleteSong(id: number) {
    return this.http.delete<Song>('https://localhost:7243/api/Client/deletesong/' + id);
  }
}
