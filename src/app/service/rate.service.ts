import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from '../model/rate.model';

@Injectable()
export class RateService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/api/rate';

  getUsers() {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<Rate[]>(this.baseUrl);
  }

  createUser(rate: Rate) {
    return this.http.post(this.baseUrl, rate);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
