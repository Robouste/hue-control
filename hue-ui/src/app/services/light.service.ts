import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObservableQueue } from "@helpers/observable-queue.class";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class LightService {
  private _queue = new ObservableQueue();

  constructor(private _http: HttpClient) {}

  public getStatus(serviceId: string): Observable<unknown> {
    return this._queue.add(
      this._http.get<unknown>(`light-status/${serviceId}`),
    );
  }
}
