import { Component, ViewEncapsulation } from '@angular/core';

// models
import { CourseModel } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  courses: CourseModel[] = [];
  checkedCourses: string[] = [];
  courseTitle = '';
  courseDescription = '';

  constructor() {}

  addCourse(event: MouseEvent): void {
    event.preventDefault();

    this.courses.push({
      title: this.courseTitle,
      description: this.courseDescription,
    });

    this.courseTitle = '';
    this.courseDescription = '';
  }

  deleteCourse(event: MouseEvent, courseTitle: string): void {
    event.preventDefault();

    this.courses = this.courses.filter(({ title }) => title !== courseTitle);
    this.checkedCourses = this.checkedCourses.filter((title: string) => title !== courseTitle);
  }

  handleSelect(event: Event, courseTitle: string): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;

    if (target.checked) {
      this.checkedCourses.push(courseTitle);
    } else {
      this.checkedCourses = this.checkedCourses.filter((title: string) => title !== courseTitle);
    }
  }

}
