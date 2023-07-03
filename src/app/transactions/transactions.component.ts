import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  title = 'vistartest';
  ConnectService: any;
  // date:any

  constructor(private service:ConnectService){

  }

  ngOnInit(){
    this.getTransactions()
  }
  transactions:any
  getTransactions(){
    this.service.getTransactionDetails().subscribe((mongoDBdata: any)=>{
      this.transactions = mongoDBdata
      console.log(this.transactions)
    })
  }
}
