import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteTwoComponent } from './test-route-two.component';

describe('TestRouteTwoComponent', () => {
  let component: TestRouteTwoComponent;
  let fixture: ComponentFixture<TestRouteTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouteTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
