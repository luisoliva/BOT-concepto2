import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxHomeRoleComponent } from './egx-home-role.component';

describe('EgxHomeRoleComponent', () => {
  let component: EgxHomeRoleComponent;
  let fixture: ComponentFixture<EgxHomeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxHomeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxHomeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
