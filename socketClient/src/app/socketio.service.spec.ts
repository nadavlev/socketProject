import { TestBed } from '@angular/core/testing';

import { SocketIoMessagingService } from './socketIoMessaging.service';

describe('SocketIoMessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketIoMessagingService = TestBed.get(SocketIoMessagingService);
    expect(service).toBeTruthy();
  });
});
