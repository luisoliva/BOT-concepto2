import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgobXAlertComponent } from './egob-xalert.component';

describe('EgobXAlertComponent', () => {
  let component: EgobXAlertComponent;
  let fixture: ComponentFixture<EgobXAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgobXAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgobXAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
