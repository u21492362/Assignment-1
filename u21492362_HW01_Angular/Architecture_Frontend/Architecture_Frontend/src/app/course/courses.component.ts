import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

  
export class CoursesComponent implements OnInit {
  courses:Course[] = []

  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    this.GetAllCourses()
    console.log(this.courses)
  }

  GetAllCourses()
  {
    this.dataService.GetAllCourses().subscribe(result => {
      let courseList:any[] = result
      courseList.forEach((element) => {
        this.courses.push(element)
      });
    })
  }
  
  EditCourse(courseId:Number)
  {
    this.router.navigate(['./course', courseId])
  }

  DeleteCourse(courseId:Number)
  {
    this.dataService.DeleteCourse(courseId).subscribe(del =>{
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/courses', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    console.log(del);  
    })
  });
  }
}

