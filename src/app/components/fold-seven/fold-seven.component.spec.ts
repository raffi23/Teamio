import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldSevenComponent } from './fold-seven.component';

describe('FoldSevenComponent', () => {
  let component: FoldSevenComponent;
  let fixture: ComponentFixture<FoldSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
