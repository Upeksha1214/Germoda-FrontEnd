import { TestBed } from '@angular/core/testing';
import { GermadoService } from './germado.service';

describe('GermadoService', () => {
  let service: GermadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GermadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
