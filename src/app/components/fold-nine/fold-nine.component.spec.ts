import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldNineComponent } from './fold-nine.component';

describe('FoldNineComponent', () => {
  let component: FoldNineComponent;
  let fixture: ComponentFixture<FoldNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
