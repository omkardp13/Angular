import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleParaComponent } from './toggle-para.component';

describe('ToggleParaComponent', () => {
  let component: ToggleParaComponent;
  let fixture: ComponentFixture<ToggleParaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleParaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
