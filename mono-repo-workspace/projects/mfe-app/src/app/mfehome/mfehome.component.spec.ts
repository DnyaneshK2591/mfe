import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfehomeComponent } from './mfehome.component';

describe('MfehomeComponent', () => {
  let component: MfehomeComponent;
  let fixture: ComponentFixture<MfehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfehomeComponent]
    });
    fixture = TestBed.createComponent(MfehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
