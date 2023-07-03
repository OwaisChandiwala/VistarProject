import { Component } from '@angular/core';
import { ConnectService } from './connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vistartest';
  ConnectService: any;


  constructor(private serv:ConnectService){

  }

  ngOnInit(){
    this.getaccounts()
  }
  customers:any
  getaccounts(){
    this.serv.getNameDetails().subscribe((mongoDBdata: any)=>{
      this.customers = mongoDBdata
      console.log(this.customers)
    })
  }



}
