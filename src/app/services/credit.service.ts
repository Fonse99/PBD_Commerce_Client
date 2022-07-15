import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  getAllCredits(){
    return this.http.get("http://localhost:9700/api/credits/all")
  }
}
