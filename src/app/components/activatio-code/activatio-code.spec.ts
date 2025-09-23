import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatioCode } from './activatio-code';

describe('ActivatioCode', () => {
  let component: ActivatioCode;
  let fixture: ComponentFixture<ActivatioCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivatioCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatioCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
