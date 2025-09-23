import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTemplate } from './image-template';

describe('ImageTemplate', () => {
  let component: ImageTemplate;
  let fixture: ComponentFixture<ImageTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
