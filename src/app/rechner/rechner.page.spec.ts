import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechnerPage } from './rechner.page';

describe('RechnerPage', () => {
  let component: RechnerPage;
  let fixture: ComponentFixture<RechnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RechnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
