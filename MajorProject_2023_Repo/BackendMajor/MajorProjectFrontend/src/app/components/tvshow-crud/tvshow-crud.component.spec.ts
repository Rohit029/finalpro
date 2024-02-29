import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowCrudComponent } from './tvshow-crud.component';

describe('TvshowCrudComponent', () => {
  let component: TvshowCrudComponent;
  let fixture: ComponentFixture<TvshowCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshowCrudComponent]
    });
    fixture = TestBed.createComponent(TvshowCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
