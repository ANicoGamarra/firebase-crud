import { TestBed } from '@angular/core/testing';

import { DatabaseFirebaseService } from './database-firebase.service';

describe('DatabaseFirebaseService', () => {
  let service: DatabaseFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
