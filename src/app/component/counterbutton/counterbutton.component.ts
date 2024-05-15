import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { channelname, decrement, increment, reset } from '../../shared/master/store/counter.action';
import { CounterModel } from '../../shared/model/counterModel';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {
  // constructor(private store: Store<{ counter:  number  }>) {}
  constructor(private store: Store<{counter:CounterModel}>){  }
  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onRest(){
    this.store.dispatch(reset());
  }
  onRename(){
    this.store.dispatch(channelname({channel:'welcome to NGRX'}))
  }
}
