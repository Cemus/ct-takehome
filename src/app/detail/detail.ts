import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Item } from '../models/item.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnChanges {
  @Input() selectedItemId: number | null = null;

  protected item: Item | null = null;
  readonly title = new FormControl('');

  constructor(private readonly apiService: ApiService) {}

  ngOnChanges(): void {
    this.item = this.apiService.getItemById(this.selectedItemId!);
  }

  onSubmit() {
    console.log('item id', this.selectedItemId);

    if (!this.title.value) return;
    if (this.selectedItemId === null) return;

    this.item = this.apiService.getItemById(this.selectedItemId!) ?? null;

    if (!this.item) return;

    const updatedItem: Item = {
      id: this.item.id,
      title: this.title.value,
      description: this.item.description,
      date: this.item.date,
      titleHistory: [...this.item.titleHistory, this.item.title],
    };

    this.apiService.modifyItemTitle(updatedItem);

    this.title.reset();
  }
}
