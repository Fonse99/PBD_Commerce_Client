import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router) { }

  goSales(){
    this.route.navigateByUrl("/sales");
  }

  goCredits(){
    this.route.navigateByUrl("/credits")
  }

  goLogin(){
    this.route.navigateByUrl("/login")
  }

  goInventory() {
    this.route.navigateByUrl("/inventory")
  }

  goHome(){
    this.route.navigateByUrl("/home")
  }

}
