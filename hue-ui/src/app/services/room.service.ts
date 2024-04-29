import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Room } from "@common/dtos";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class RoomService {
  constructor(private _http: HttpClient) {}

  public getAll(): Observable<Room[]> {
    return this._http.get<Room[]>("room");
  }
}
