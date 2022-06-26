import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRListarComponent } from './venta-r-listar.component';

describe('VentaRListarComponent', () => {
  let component: VentaRListarComponent;
  let fixture: ComponentFixture<VentaRListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaRListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaRListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
