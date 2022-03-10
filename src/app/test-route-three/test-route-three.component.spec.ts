import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteThreeComponent } from './test-route-three.component';

describe('TestRouteThreeComponent', () => {
  let component: TestRouteThreeComponent;
  let fixture: ComponentFixture<TestRouteThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouteThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouteThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
