import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnGoingPage } from './on-going.page';

describe('OnGoingPage', () => {
  let component: OnGoingPage;
  let fixture: ComponentFixture<OnGoingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
