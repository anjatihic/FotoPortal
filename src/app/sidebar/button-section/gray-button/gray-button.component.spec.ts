import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayButtonComponent } from './gray-button.component';

describe('GrayButtonComponent', () => {
  let component: GrayButtonComponent;
  let fixture: ComponentFixture<GrayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
