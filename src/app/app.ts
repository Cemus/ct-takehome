import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Detail } from './detail/detail';
import { History } from './history/history';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Detail, History, List],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ct-takehome');
  protected selectedItemId: number | null = null;

  handleSelectTitle(selectedItemId: number | null) {
    this.selectedItemId = selectedItemId;
    console.log(this.selectedItemId);
  }
}
