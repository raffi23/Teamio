import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExtrasComponent } from './navbar-extras.component';

describe('NavbarExtrasComponent', () => {
  let component: NavbarExtrasComponent;
  let fixture: ComponentFixture<NavbarExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
