import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NavigationDetailPage } from './navigation-detail.page';

describe('NavigationDetailPage', () => {
  let component: NavigationDetailPage;
  let fixture: ComponentFixture<NavigationDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavigationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
