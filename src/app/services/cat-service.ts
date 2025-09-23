import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseUrl = "http://localhost:8090";
  constructor(private http : HttpClient){}

  getCats(){

   return this.http.get<any[]>(`${this.baseUrl}/cats/get-cats`);
  }


  
}
