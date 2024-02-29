import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsContentComponent } from './tvshows-content.component';

describe('TvshowsContentComponent', () => {
  let component: TvshowsContentComponent;
  let fixture: ComponentFixture<TvshowsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshowsContentComponent]
    });
    fixture = TestBed.createComponent(TvshowsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
