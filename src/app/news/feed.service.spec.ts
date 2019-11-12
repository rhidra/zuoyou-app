import { TestBed } from '@angular/core/testing';

import { NewsFeedService } from './feed.service';

describe('FeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsFeedService = TestBed.get(NewsFeedService);
    expect(service).toBeTruthy();
  });
});
