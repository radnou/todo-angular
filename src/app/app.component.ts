import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';

  filter: 'done' | 'active' | 'all' = 'all';

  allItems = [
    { description: 'eat', done: false },
    { description: 'walk', done: true },
    { description: 'wake up', done: true },
  ];

  getItems() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done,
    );
  }

  addItem(description: string) {
    if (description.trim().length > 0) {
      this.allItems.unshift({ description, done: false });
    }
  }
}
