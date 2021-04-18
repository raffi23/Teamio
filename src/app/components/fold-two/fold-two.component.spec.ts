import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldTwoComponent } from './fold-two.component';

describe('FoldTwoComponent', () => {
  let component: FoldTwoComponent;
  let fixture: ComponentFixture<FoldTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
