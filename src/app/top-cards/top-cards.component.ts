import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface ListofItems<Array> {}

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css'],
})
export class TopCardsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.apiService.getCards().subscribe({
      next(items) {
        console.log('Current items', items);
        const listOfItems = new Array();
        items.map((item) => {
          listOfItems.push(item);
        });
        console.log(listOfItems);
      },
      error(msg) {
        console.log('Error getting location', msg);
      },
    });
  }
}
