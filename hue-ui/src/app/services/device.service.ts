import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Device } from "@common/dtos";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class DeviceService {
  constructor(private _http: HttpClient) {}

  public getAll(): Observable<Device[]> {
    return this._http.get<Device[]>("");
  }
}
