import { Component } from '@angular/core';
import { CourseCardComponent } from '../courses/course-card/course-card.component';
import { COURSES } from '../../db-data';
import { Course } from '../shared/model/course';

@Component({
  selector: 'app-fooder',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './fooder.component.html',
  styleUrl: './fooder.component.scss'
})
export class FooderComponent {
  courses: Course[] = COURSES; 

  constructor(){}
  onCourseSelected(course:Course){
    console.log('fooder- click event',course)
  }
  
}
