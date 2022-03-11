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
        name: 'item1',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item2',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item3',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item4',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
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
        name: 'item1',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item2',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item3',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
        itemCount: 234,
        createdDate: new Date().valueOf(),
      },
      {
        imageUrl: '',
        name: 'item4',
        price: 345,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sit amet nisi ac ultricies. Praesent vulputate gravida rutrum. Nam.',
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
