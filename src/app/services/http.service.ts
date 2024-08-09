import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUr2 = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

   // Méthode pour obtenir tous les utilisateurs
   getUsers(): Observable<any> {
    return this.http.get(this.apiUr2);
  }
}
