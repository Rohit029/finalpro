import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './components/home/homecontent';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movies: Movie[] = [];
  constructor(private http : HttpClient) { }

  getMovies() {
    return  this.http.get<Movie[]>('https://localhost:7248/api/Movies');
  }


  // private books: any[] = [
  //   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A classic novel about teenage angst.' },
  //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A powerful story addressing racial injustice.' },
  //   { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A tale of love and societal expectations.' },
    
  // ];

  searchBooks(query: string): any[] {
    query = query.toLowerCase();
    return this.movies.filter(movie => movie.title.toLowerCase().includes(query));
  }
}
