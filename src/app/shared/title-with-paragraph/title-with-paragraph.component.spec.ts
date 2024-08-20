import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithParagraphComponent } from './title-with-paragraph.component';

describe('TitleWithParagraphComponent', () => {
  let component: TitleWithParagraphComponent;
  let fixture: ComponentFixture<TitleWithParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleWithParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleWithParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
