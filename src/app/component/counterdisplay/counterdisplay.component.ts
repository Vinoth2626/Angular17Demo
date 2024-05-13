import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.scss',
})
export class CounterdisplayComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  // constructor(private store: Store<{ counter:  number  }>) {}
  counterdisplay$!: Observable <any>;
  // counterdisplay$!: <number>;
  ngOnInit(): void {
    this.counterdisplay$ =  this.store.select('counter');
    // this.store.select('counter').subscribe((data) => {
    //   this.counterdisplay = data.counter;
    // });
  }
}
