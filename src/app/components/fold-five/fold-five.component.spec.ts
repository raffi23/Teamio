import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldFiveComponent } from './fold-five.component';

describe('FoldFiveComponent', () => {
  let component: FoldFiveComponent;
  let fixture: ComponentFixture<FoldFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
