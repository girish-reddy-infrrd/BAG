import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenGroupsComponent } from './citizen-groups.component';

describe('CitizenGroupsComponent', () => {
  let component: CitizenGroupsComponent;
  let fixture: ComponentFixture<CitizenGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
