import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class LightService {
  constructor(private _http: HttpClient) {}

  public getStatus(serviceId: string): Observable<unknown> {
    return this._http.get<unknown>(`light-status/${serviceId}`);
  }
}
