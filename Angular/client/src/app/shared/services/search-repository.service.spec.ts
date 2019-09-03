import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchRepository]
    })
  );

  it('should be created Search service', () => {
    const service: SearchRepository = TestBed.get(SearchRepository);
    expect(service).toBeTruthy();
  });

  it('should have get fetchAll function', () => {
    const service: SearchRepository = TestBed.get(SearchRepository);
    expect(service.fetchAll).toBeTruthy();
  });
});
