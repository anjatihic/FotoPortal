import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSizeEntryComponent } from './table-size-entry.component';

describe('TableSizeEntryComponent', () => {
  let component: TableSizeEntryComponent;
  let fixture: ComponentFixture<TableSizeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSizeEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSizeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
