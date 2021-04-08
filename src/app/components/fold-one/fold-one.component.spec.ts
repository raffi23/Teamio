import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldOneComponent } from './fold-one.component';

describe('FoldOneComponent', () => {
  let component: FoldOneComponent;
  let fixture: ComponentFixture<FoldOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
