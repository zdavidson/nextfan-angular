import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() listOfItems = '';

  items = [
    {
      imageUrl: '',
      name: 'item1',
      price: 345,
      description: '',
      itemCount: 234,
      createdDate: new Date().valueOf(),
    },
    {
      imageUrl: '',
      name: 'item2',
      price: 345,
      description: '',
      itemCount: 234,
      createdDate: new Date().valueOf(),
    },
    {
      imageUrl: '',
      name: 'item3',
      price: 345,
      description: '',
      itemCount: 234,
      createdDate: new Date().valueOf(),
    },
    {
      imageUrl: '',
      name: 'item4',
      price: 345,
      description: '',
      itemCount: 234,
      createdDate: new Date().valueOf(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
