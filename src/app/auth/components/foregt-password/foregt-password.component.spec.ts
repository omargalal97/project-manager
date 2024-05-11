import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegtPasswordComponent } from './foregt-password.component';

describe('ForegtPasswordComponent', () => {
  let component: ForegtPasswordComponent;
  let fixture: ComponentFixture<ForegtPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForegtPasswordComponent]
    });
    fixture = TestBed.createComponent(ForegtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
