import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyBlockComponent } from './policy-block.component';

describe('PolicyBlockComponent', () => {
  let component: PolicyBlockComponent;
  let fixture: ComponentFixture<PolicyBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
