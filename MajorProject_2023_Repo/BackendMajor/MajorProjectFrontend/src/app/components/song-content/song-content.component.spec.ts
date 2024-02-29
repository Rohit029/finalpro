import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongContentComponent } from './song-content.component';

describe('SongContentComponent', () => {
  let component: SongContentComponent;
  let fixture: ComponentFixture<SongContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongContentComponent]
    });
    fixture = TestBed.createComponent(SongContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
