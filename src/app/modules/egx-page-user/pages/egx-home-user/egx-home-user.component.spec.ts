import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxHomeUserComponent } from './egx-home-user.component';

describe('EgxHomeUserComponent', () => {
  let component: EgxHomeUserComponent;
  let fixture: ComponentFixture<EgxHomeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxHomeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxHomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
