import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ConferenceRoom {
  roomNo: String,
  roomName: String,
  wing: String,
  building: String,
  floor: any;
}

@Injectable({
  providedIn: 'root'
})
export class AvailableConferenceRoomsService {

  constructor(private http: HttpClient) {
  }

  conferenceRoomsUrl = 'http://localhost:8080/conferenceRooms';

  getConferenceRooms() {
    return this.http.get<ConferenceRoom[]>(this.conferenceRoomsUrl);
  }

  getRoomsList() {
    let response = this.http.get<ConferenceRoom[]>("http://localhost:8080/conferenceRooms");
    console.log(response);
    return response;
  }
}
