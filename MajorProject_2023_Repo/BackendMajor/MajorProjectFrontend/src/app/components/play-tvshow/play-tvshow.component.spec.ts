import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTvshowComponent } from './play-tvshow.component';

describe('PlayTvshowComponent', () => {
  let component: PlayTvshowComponent;
  let fixture: ComponentFixture<PlayTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayTvshowComponent]
    });
    fixture = TestBed.createComponent(PlayTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
