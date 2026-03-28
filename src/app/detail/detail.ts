import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnChanges {
  @Input() selectedItemId: number | null = null;

  protected item: Data | null = null;

  constructor(private readonly apiService: ApiService) {}

  ngOnChanges(): void {
    this.item = this.apiService.getItemById(this.selectedItemId!);
  }
}
