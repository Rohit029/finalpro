import { Component, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { MovieServiceService } from 'src/app/movie-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();

  constructor(private searchService: MovieServiceService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe(query => {
      this.performSearch(query);
    });
  }

  performSearch(query: string): void {
    this.searchResults = this.searchService.searchBooks(query);
  }

  onSearchInput(): void {
    this.searchSubject.next(this.searchQuery);
  }
}
