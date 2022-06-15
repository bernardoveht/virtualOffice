import { TestBed } from '@angular/core/testing';

import { OrganismsService } from './organisms.service';

describe('OrganismsService', () => {
  let service: OrganismsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
