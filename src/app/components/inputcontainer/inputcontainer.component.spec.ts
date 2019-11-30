import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcontainerComponent } from './inputcontainer.component';

describe('InputcontainerComponent', () => {
  let component: InputcontainerComponent;
  let fixture: ComponentFixture<InputcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
