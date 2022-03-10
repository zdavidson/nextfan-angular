import { Injectable } from '@angular/core';
import { Http2ServerResponse } from 'http2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getCards(): Observable {}
}
