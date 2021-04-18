import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldFourComponent } from './fold-four.component';

describe('FoldFourComponent', () => {
  let component: FoldFourComponent;
  let fixture: ComponentFixture<FoldFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
