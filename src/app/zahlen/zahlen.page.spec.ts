import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZahlenPage } from './zahlen.page';

describe('ZahlenPage', () => {
  let component: ZahlenPage;
  let fixture: ComponentFixture<ZahlenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZahlenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
