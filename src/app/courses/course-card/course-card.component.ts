import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../shared/model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {
  @Input() course! : Course ;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>()
  constructor(){

  }
ngOnInit(): void {
  
}
onSaveClicked(){
  this.courseEmitter.emit(this.course);
  console.log('card click event')
}

}
