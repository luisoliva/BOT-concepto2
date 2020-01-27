import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxFormComponent } from './egx-form.component';

describe('EgxFormComponent', () => {
  let component: EgxFormComponent;
  let fixture: ComponentFixture<EgxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
