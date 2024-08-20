import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePartSectionComponent } from './three-part-section.component';

describe('ThreePartSectionComponent', () => {
  let component: ThreePartSectionComponent;
  let fixture: ComponentFixture<ThreePartSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreePartSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreePartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
