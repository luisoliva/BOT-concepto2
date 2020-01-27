import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxLoginPageComponent } from './egx-login-page.component';

describe('EgxLoginPageComponent', () => {
  let component: EgxLoginPageComponent;
  let fixture: ComponentFixture<EgxLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
