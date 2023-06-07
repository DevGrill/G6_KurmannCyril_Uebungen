import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjektePage } from './objekte.page';

describe('ObjektePage', () => {
  let component: ObjektePage;
  let fixture: ComponentFixture<ObjektePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjektePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
