import { TestBed } from '@angular/core/testing';
import { UiKitAblService } from './ui-kit-abl.service';


describe('UiKitAblService', () => {
  let service: UiKitAblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiKitAblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
