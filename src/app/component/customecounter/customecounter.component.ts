import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/master/store/counter.action';

@Component({
  selector: 'app-customecounter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customecounter.component.html',
  styleUrl: './customecounter.component.scss',
})
export class CustomecounterComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  counterinput!: number;
  actionType!: 'add';

  oncustomIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterinput, actionType:this.actionType }));
  }
}
