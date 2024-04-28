import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HueDevice } from "@common/dtos";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class DeviceService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<HueDevice[]> {
    return this._http.get<HueDevice[]>("");
  }
}
