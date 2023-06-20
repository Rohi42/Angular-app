import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdministrationLoginComponent } from './school-administration-login.component';

describe('SchoolAdministrationLoginComponent', () => {
  let component: SchoolAdministrationLoginComponent;
  let fixture: ComponentFixture<SchoolAdministrationLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolAdministrationLoginComponent]
    });
    fixture = TestBed.createComponent(SchoolAdministrationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
