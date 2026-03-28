import { Component, Input, OnChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../services/api-service';
import { Item } from '../models/item.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [AsyncPipe],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History implements OnChanges {
  @Input() selectedItemId: number | null = null;

  item$!: Observable<Item | null>;

  constructor(private readonly apiService: ApiService) {}

  ngOnChanges() {
    this.item$ = this.apiService.items$.pipe(
      map((items: Item[]) => items.find((i) => i['id'] === this.selectedItemId) ?? null),
    );
  }
}
