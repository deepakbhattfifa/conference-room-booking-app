import {Component, OnInit} from '@angular/core';
import {AvailableConferenceRoomsService, ConferenceRoom} from "../available-conference-rooms.service";


@Component({
  selector: 'app-available-conference-rooms',
  templateUrl: './available-conference-rooms.component.html',
  styleUrls: ['./available-conference-rooms.component.scss']
})
export class AvailableConferenceRoomsComponent implements OnInit {

  constructor(private conferenceRoomService: AvailableConferenceRoomsService) {
    this.availableRooms = [];
  }

  availableRooms: ConferenceRoom[];
  selectedRoom = 'null';

  showConfig() {

    this.conferenceRoomService.getConferenceRooms()
      .subscribe((data) => data.forEach(value => this.availableRooms.push({
          roomName: value.roomName,
          roomNo: value.roomNo,
          wing: value.wing,
          building: value.building,
          floor: value.floor
        }
      )));
  }

  ngOnInit(): void {
    this.showConfig();
  }


}
