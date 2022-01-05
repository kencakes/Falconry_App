import { TestBed } from '@angular/core/testing';

import { LocalnotificationService } from './localnotification.service';

describe('LocalnotificationService', () => {
  let service: LocalnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
