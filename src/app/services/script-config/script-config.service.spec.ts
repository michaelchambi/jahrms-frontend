import { TestBed } from '@angular/core/testing';

import { ScriptConfigService } from './script-config.service';

describe('ScriptConfigService', () => {
  let service: ScriptConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
