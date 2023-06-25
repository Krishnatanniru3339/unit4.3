import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addData(body: any) {
    return this.http.post('http://localhost:3000/add-job', body);
  }
  public getAllData() {
    return this.http.get('http://localhost:3000/find-all-jobs');
  }
  public findOne(id: any) {
    return this.http.get(`http://localhost:3000/find-job/${id}`);
  }
  public delete(body: any) {
    return this.http.post('http://localhost:3000/delete-job', body);
  }
  public update(body: any) {
    return this.http.post('http://localhost:3000/update-job', body);
  }
}
