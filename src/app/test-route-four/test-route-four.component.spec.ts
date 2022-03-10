import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteFourComponent } from './test-route-four.component';

describe('TestRouteFourComponent', () => {
  let component: TestRouteFourComponent;
  let fixture: ComponentFixture<TestRouteFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouteFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
