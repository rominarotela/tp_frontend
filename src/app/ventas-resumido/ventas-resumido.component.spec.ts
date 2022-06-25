import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasResumidoComponent } from './ventas-resumido.component';

describe('VentasResumidoComponent', () => {
  let component: VentasResumidoComponent;
  let fixture: ComponentFixture<VentasResumidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasResumidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasResumidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
