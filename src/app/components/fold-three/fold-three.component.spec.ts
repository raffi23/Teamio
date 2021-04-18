import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldThreeComponent } from './fold-three.component';

describe('FoldThreeComponent', () => {
  let component: FoldThreeComponent;
  let fixture: ComponentFixture<FoldThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
