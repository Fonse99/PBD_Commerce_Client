import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  credits: any = [
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    },
    {
      img: "./../../../favicon.ico",
      firstName: "Pablo",
      dni: "1231234560000L",
      amount: 2000.00
    }
  ]
  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.creditService.getAllCredits().subscribe(data =>{
      this.credits = data;
    });
  }

}
