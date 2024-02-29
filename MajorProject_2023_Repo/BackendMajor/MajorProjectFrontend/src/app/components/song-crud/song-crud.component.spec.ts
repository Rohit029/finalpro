import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCrudComponent } from './song-crud.component';

describe('SongCrudComponent', () => {
  let component: SongCrudComponent;
  let fixture: ComponentFixture<SongCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongCrudComponent]
    });
    fixture = TestBed.createComponent(SongCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
