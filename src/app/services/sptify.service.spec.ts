import { TestBed } from '@angular/core/testing';

import { SptifyService } from './sptify.service';

describe('SptifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SptifyService = TestBed.get(SptifyService);
    expect(service).toBeTruthy();
  });
});
