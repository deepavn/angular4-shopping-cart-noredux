import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor() { }
  product = {productname: 'Jewelry', description: 'Diamond studded rubies inset gold ornaments'};

  clickMessage: string
  onClickMe(e: string) {
    this.clickMessage = "My best buddy is " + e;
  }
}

