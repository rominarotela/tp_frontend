import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVentaComponent } from './button-venta.component';

describe('ButtonVentaComponent', () => {
  let component: ButtonVentaComponent;
  let fixture: ComponentFixture<ButtonVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
