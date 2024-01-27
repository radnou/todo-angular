import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';

  filter: 'done' | 'active' | 'all' = 'all';
  items: Item[] = [];

  getItems() {
    if (this.filter === 'all') {
      return this.items;
    }
    return this.items.filter((item) =>
      this.filter === 'done' ? item.done : !item.done,
    );
  }

  addItem(description: string) {
    if (description.trim().length > 0) {
      this.items.unshift({ description, done: false });
    }
  }

  remove(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
