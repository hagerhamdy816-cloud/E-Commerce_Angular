import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gaurdsGuard } from './gaurds.guard';

describe('gaurdsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gaurdsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
