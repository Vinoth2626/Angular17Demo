import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from '../../shared/model/counterModel';
import { getcounter } from '../../shared/master/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.scss',
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: CounterModel}>) {}
  // constructor(private store: Store<{ counter:  number  }>) {}
  //counterdisplay$!: Observable <any>;
  ngOnDestroy(): void {
    if(this.countersubscription){
      this.countersubscription.unsubscribe()
    }
  }
  //counterdisplay$!: Observable <CounterModel>;
  countersubscription !:Subscription;
  channalname=''
  counterdisplay!: number;
  ngOnInit(): void {
     //this.counterdisplay$ =  this.store.select('counter');
    this.countersubscription = this.store.select(getcounter).subscribe((data) => {
      this.counterdisplay = data;
      // this.channalname = data.channelname;
    });
  }
}
