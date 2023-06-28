import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeContentComponent } from './native-content.component';

describe('NativeContentComponent', () => {
  let component: NativeContentComponent;
  let fixture: ComponentFixture<NativeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
