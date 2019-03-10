import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgreeComponent } from './user-agree.component';

describe('UserAgreeComponent', () => {
  let component: UserAgreeComponent;
  let fixture: ComponentFixture<UserAgreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAgreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
