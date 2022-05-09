import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaCepComponent } from './via-cep.component';

describe('ViaCepComponent', () => {
  let component: ViaCepComponent;
  let fixture: ComponentFixture<ViaCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
