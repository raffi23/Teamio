import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldEightComponent } from './fold-eight.component';

describe('FoldEightComponent', () => {
  let component: FoldEightComponent;
  let fixture: ComponentFixture<FoldEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
