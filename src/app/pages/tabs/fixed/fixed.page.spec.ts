import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FixedPage } from './fixed.page';

describe('FixedPage', () => {
  let component: FixedPage;
  let fixture: ComponentFixture<FixedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
