import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDetalladoComponent } from './ventas-detallado.component';

describe('VentasDetalladoComponent', () => {
  let component: VentasDetalladoComponent;
  let fixture: ComponentFixture<VentasDetalladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasDetalladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
