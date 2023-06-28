import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdContentComponent } from './fd-content.component';

describe('FdContentComponent', () => {
  let component: FdContentComponent;
  let fixture: ComponentFixture<FdContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
