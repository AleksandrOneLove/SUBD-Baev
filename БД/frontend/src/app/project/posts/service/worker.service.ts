import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkerUpdate } from 'src/app/models/workerUpdate.inteface';
import { IWorker } from '../../../models/worker.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://localhost:3000';

  public getAll(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(`${this.URL}/worker`) as Observable<
    IWorker[]
    >;
  }

  public getById(id: number): Observable<IWorker> {
    return this.http.get<IWorker>(
      `${this.URL}/worker/:id=${id}`
    ) as Observable<IWorker>;
  }

  public post(Iworker: IWorker): Observable<IWorker> {
    return this.http.post<IWorker>(
      `${this.URL}/worker`,
      Iworker
    ) as Observable<IWorker>;
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<IWorker>(`${this.URL}/worker/` + id);
  }

  public put(Iworker: IWorker): Observable<IWorker> {
    return this.http.put<IWorker>(
      `${this.URL}/worker`,
      Iworker
    ) as Observable<IWorker>;
  }
}