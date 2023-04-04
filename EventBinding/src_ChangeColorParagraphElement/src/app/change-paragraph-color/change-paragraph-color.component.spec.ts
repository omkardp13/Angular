import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParagraphColorComponent } from './change-paragraph-color.component';

describe('ChangeParagraphColorComponent', () => {
  let component: ChangeParagraphColorComponent;
  let fixture: ComponentFixture<ChangeParagraphColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeParagraphColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeParagraphColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
