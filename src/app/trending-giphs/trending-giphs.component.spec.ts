import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingGiphsComponent } from './trending-giphs.component';

describe('TrendingGiphsComponent', () => {
  let component: TrendingGiphsComponent;
  let fixture: ComponentFixture<TrendingGiphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingGiphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingGiphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
