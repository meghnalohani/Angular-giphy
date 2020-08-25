import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGiphsComponent } from './search-giphs.component';

describe('SearchGiphsComponent', () => {
  let component: SearchGiphsComponent;
  let fixture: ComponentFixture<SearchGiphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGiphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGiphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
