import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContentComponent } from './movie-content.component';

describe('MovieContentComponent', () => {
  let component: MovieContentComponent;
  let fixture: ComponentFixture<MovieContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieContentComponent]
    });
    fixture = TestBed.createComponent(MovieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
