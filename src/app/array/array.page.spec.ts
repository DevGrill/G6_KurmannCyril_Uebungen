import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayPage } from './array.page';

describe('ArrayPage', () => {
  let component: ArrayPage;
  let fixture: ComponentFixture<ArrayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
