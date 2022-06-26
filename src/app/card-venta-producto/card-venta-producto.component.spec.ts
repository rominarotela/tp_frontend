import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVentaProductoComponent } from './card-venta-producto.component';

describe('CardVentaProductoComponent', () => {
  let component: CardVentaProductoComponent;
  let fixture: ComponentFixture<CardVentaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVentaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVentaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
