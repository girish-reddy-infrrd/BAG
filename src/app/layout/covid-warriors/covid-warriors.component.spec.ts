import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidWarriorsComponent } from './covid-warriors.component';

describe('CovidWarriorsComponent', () => {
  let component: CovidWarriorsComponent;
  let fixture: ComponentFixture<CovidWarriorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidWarriorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidWarriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
