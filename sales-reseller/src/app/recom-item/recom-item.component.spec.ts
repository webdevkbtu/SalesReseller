import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomItemComponent } from './recom-item.component';

describe('RecomItemComponent', () => {
  let component: RecomItemComponent;
  let fixture: ComponentFixture<RecomItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
