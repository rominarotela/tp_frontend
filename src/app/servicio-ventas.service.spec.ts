import { TestBed } from '@angular/core/testing';

import { ServicioVentasService } from './servicio-ventas.service';

describe('ServicioVentasService', () => {
  let service: ServicioVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
