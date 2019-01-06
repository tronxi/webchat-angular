import { TestBed } from '@angular/core/testing';

import { ConexionNodeService } from './conexion-node.service';

describe('ConexionNodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexionNodeService = TestBed.get(ConexionNodeService);
    expect(service).toBeTruthy();
  });
});
