import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteOneComponent } from './test-route-one.component';

describe('TestRouteOneComponent', () => {
  let component: TestRouteOneComponent;
  let fixture: ComponentFixture<TestRouteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
