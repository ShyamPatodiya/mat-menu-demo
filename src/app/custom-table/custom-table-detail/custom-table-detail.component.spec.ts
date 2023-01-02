import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableDetailComponent } from './custom-table-detail.component';

describe('CustomTableDetailComponent', () => {
  let component: CustomTableDetailComponent;
  let fixture: ComponentFixture<CustomTableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTableDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
