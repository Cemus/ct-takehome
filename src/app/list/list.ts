import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api/api-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  @Input() selectedItemId: number | null = null;
  @Output() selectTitle: EventEmitter<number | null> = new EventEmitter<number | null>();

  items$!: Observable<any>;

  constructor(private readonly apiService: ApiService) {
    this.items$ = this.apiService.items$;
  }

  ngOnInit(): void {
    console.log(this.apiService.getItems());
  }

  selectItem(itemId: number) {
    if (this.selectedItemId === itemId) {
      this.selectTitle.emit(null);
      return;
    }

    this.selectTitle.emit(itemId);
  }
}
