import { TestBed } from '@angular/core/testing';

import { BirdService } from './bird.service';

describe('DataService', () => {
  let service: BirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
