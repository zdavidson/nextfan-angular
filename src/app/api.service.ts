import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Card {}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public getCards(): Observable<Card[]> {
    const items: Card[] = [
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
    ];
    return of(items);
  }

  getCardsPromise() {
    const items = [
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: '',
        price: 345,
        description: '',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
    ];

    let promise = new Promise((resolve, reject) => {
      resolve(items);
    });
    return promise;
  }
}
