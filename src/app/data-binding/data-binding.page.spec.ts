import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBindingPage } from './data-binding.page';

describe('DataBindingPage', () => {
  let component: DataBindingPage;
  let fixture: ComponentFixture<DataBindingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataBindingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
