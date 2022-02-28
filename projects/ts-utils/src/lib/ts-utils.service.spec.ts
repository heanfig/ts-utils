import { TestBed } from '@angular/core/testing';

import { TsUtilsService } from './ts-utils.service';

describe('TsUtilsService', () => {
  let service: TsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
