import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxEditRoleComponent } from './egx-edit-role.component';

describe('EgxEditRoleComponent', () => {
  let component: EgxEditRoleComponent;
  let fixture: ComponentFixture<EgxEditRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxEditRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
