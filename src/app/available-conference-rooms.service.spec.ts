import { TestBed } from '@angular/core/testing';

import { AvailableConferenceRoomsService } from './available-conference-rooms.service';

describe('AvailableConferenceRoomsService', () => {
  let service: AvailableConferenceRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableConferenceRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
