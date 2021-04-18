import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldSixComponent } from './fold-six.component';

describe('FoldSixComponent', () => {
  let component: FoldSixComponent;
  let fixture: ComponentFixture<FoldSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
