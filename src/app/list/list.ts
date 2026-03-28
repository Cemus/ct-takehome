import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  items$!: Observable<any>;
  constructor(private readonly apiService: ApiService) {
    this.items$ = this.apiService.items$;
  }

  ngOnInit(): void {
    console.log(this.apiService.getItems());
  }
}
