import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http:HttpClient) {}

  //name
  getNameDetails(){
    return this.http.get('http://localhost:3000/customers')
  }

  getTransactionDetails(){
    return this.http.get("http://localhost:3000/transactions")
  }
}
