import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Item, RawItem } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'http://localhost/takehome-api/items';
  private headers = new HttpHeaders().set('AUTH_TOKEN', 'token123');

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getItems() {
    this.http
      .get<Record<string, RawItem>>(this.url, { headers: this.headers })
      .pipe(
        map((d) =>
          Object.entries(d).map(([key, item]) => ({
            id: Number(key),
            ...item,
          })),
        ),
      )
      .subscribe({
        next: (res) => {
          this.itemsSubject.next(res);
          console.log(res);
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }
}
