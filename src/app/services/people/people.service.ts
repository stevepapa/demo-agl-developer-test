import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPeople():Observable<Person[]> {
    return this.http.get<Person[]>(environment.apiUrl);
  }
}
