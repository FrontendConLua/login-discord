import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputField2Component } from './input-field2.component';

describe('InputField2Component', () => {
  let component: InputField2Component;
  let fixture: ComponentFixture<InputField2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputField2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputField2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
