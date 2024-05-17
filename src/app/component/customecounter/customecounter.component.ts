import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/master/store/counter.action';
import { CounterModel } from '../../shared/model/counterModel';
import { getchannelname } from '../../shared/master/store/counter.selector';
import { Subscription } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card"


@Component({
  selector: 'app-customecounter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
    
  ],
  templateUrl: './customecounter.component.html',
  styleUrl: './customecounter.component.scss',
})
export class CustomecounterComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterModel }>) {}
  counterinput!: number;
  actionType = 'add';
  countersubscription!: Subscription;
  channalname = '';
  ngOnInit(): void {
    //this.counterdisplay$ =  this.store.select('counter');
    this.countersubscription = this.store
      .select(getchannelname)
      .subscribe((data) => {
        //  this.counterdisplay = data;
        this.channalname = data;
      });
  }
  oncustomIncrement() {
    this.store.dispatch(
      customincrement({
        value: +this.counterinput,
        actionType: this.actionType,
      })
    );
  }
}
