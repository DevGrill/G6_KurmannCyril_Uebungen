import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipePage } from './pipe.page';

describe('PipePage', () => {
  let component: PipePage;
  let fixture: ComponentFixture<PipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
