import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuarantineComponent } from './home-quarantine.component';

describe('HomeQuarantineComponent', () => {
  let component: HomeQuarantineComponent;
  let fixture: ComponentFixture<HomeQuarantineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuarantineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuarantineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
