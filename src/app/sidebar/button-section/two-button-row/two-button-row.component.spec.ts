import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonRowComponent } from './two-button-row.component';

describe('TwoButtonRowComponent', () => {
  let component: TwoButtonRowComponent;
  let fixture: ComponentFixture<TwoButtonRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoButtonRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
