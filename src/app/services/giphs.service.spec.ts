import { TestBed } from '@angular/core/testing';

import { GiphsService } from './giphs.service';

describe('GiphsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphsService = TestBed.get(GiphsService);
    expect(service).toBeTruthy();
  });
});
