import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:BehaviorSubject<User> =  new BehaviorSubject(null);
  apiUser = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable <User[]> {
    return this.http.get<User[]>('https://reqres.in/api/users?page=2');
  }
  getOne(id): Observable <User> {
    return this.http.get<User>(this.apiUser + '/' + id);
  }
}
