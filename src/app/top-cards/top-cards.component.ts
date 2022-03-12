import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css'],
})
export class TopCardsComponent implements OnInit {
  allItems = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  ngAfterContentInit(childItems: any) {
    this.apiService.getCards().subscribe({
      next(items) {
        console.log('Current items', items);
        const listOfItems = new Array();
        items.map((item) => {
          listOfItems.push(item);
        });
        childItems = listOfItems;
        console.log(listOfItems);
        console.log(childItems);
      },
      error(msg) {
        console.log('Error', msg);
      },
    });
    this.allItems = childItems;
    console.log(this.allItems);
  }
}
