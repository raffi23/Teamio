import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldTenComponent } from './fold-ten.component';

describe('FoldTenComponent', () => {
  let component: FoldTenComponent;
  let fixture: ComponentFixture<FoldTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
