import { TestBed } from '@angular/core/testing';

import { CommonServiceLayerService } from './common-service-layer.service';

describe('CommonServiceLayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonServiceLayerService = TestBed.get(CommonServiceLayerService);
    expect(service).toBeTruthy();
  });
});
