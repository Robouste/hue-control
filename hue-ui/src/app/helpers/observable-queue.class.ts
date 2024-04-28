import { Observable, catchError, concatMap, last, of, shareReplay } from "rxjs";

export class ObservableQueue {
  private _jobQueue: Observable<unknown> = of(undefined);

  public add<T>(obs: Observable<T>): Observable<T> {
    const newjob = this._jobQueue.pipe(
      concatMap(() => obs),
      shareReplay(),
    );

    this._jobQueue = newjob.pipe(
      last(),
      catchError(() => of(undefined)),
    );

    return newjob;
  }
}
