import { TestBed } from '@angular/core/testing';

import { CoffeesService } from './coffees.service';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
