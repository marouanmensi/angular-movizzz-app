import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { trendingComponent } from './trending.component';

describe('trendingComponent', () => {
  let component: trendingComponent;
  let fixture: ComponentFixture<trendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ trendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(trendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
