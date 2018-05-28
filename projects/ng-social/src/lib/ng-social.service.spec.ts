import { TestBed, inject } from '@angular/core/testing';

import { NgSocialService } from './ng-social.service';

describe('NgSocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgSocialService]
    });
  });

  it('should be created', inject([NgSocialService], (service: NgSocialService) => {
    expect(service).toBeTruthy();
  }));
});
