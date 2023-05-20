import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableConferenceRoomsComponent } from './available-conference-rooms.component';

describe('AvailableConferenceRoomsComponent', () => {
  let component: AvailableConferenceRoomsComponent;
  let fixture: ComponentFixture<AvailableConferenceRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableConferenceRoomsComponent]
    });
    fixture = TestBed.createComponent(AvailableConferenceRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
