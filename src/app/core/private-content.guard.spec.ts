import { TestBed } from '@angular/core/testing';

import { PrivateContentGuard } from './private-content.guard';

describe('PrivateContentGuard', () => {
  let guard: PrivateContentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivateContentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
