import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUser', () => {
    service.getUser('4nuquet');
    expect(service).toBeTruthy();
  });
  it('should call searchRepository', () => {
    service.searchRepository('4nuquet', 'app');
    expect(service).toBeTruthy();
  });
  it('should call searchCommits', () => {
    service.searchCommits('4nuquet', 'first');
    expect(service).toBeTruthy();
  });
});
