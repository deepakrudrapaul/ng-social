import { TestBed, inject } from '@angular/core/testing';

import { SocialAuthService } from './ng-social.service';

describe('NgSocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialAuthService]
    });
  });

  it('should be created', inject([SocialAuthService], (service: SocialAuthService) => {
    expect(service).toBeTruthy();
  }));
});
