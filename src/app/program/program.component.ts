import { Component } from '@angular/core';
import { CounterbuttonComponent } from '../component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from '../component/counterdisplay/counterdisplay.component';
import { CustomecounterComponent } from '../component/customecounter/customecounter.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CounterbuttonComponent,CounterdisplayComponent,CustomecounterComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

}
