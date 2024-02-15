import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  CourseId: number = 0;
  Courses: Course = new Course();

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

    editform: FormGroup = new FormGroup({
      name: new FormControl('',[Validators.required]),
      duration: new FormControl('',[Validators.required]),
      description: new FormControl(null,[Validators.required])
   })

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dataService.GetAllCoursesById(params['CourseId']).subscribe(edit => {
      this.Courses = edit as Course;
      this.editform.controls['name'].setValue(this. Courses.name);
      this.editform.controls['duration'].setValue(this. Courses.duration);
      this.editform.controls['description'].setValue(this. Courses.description);
    });
   });
  }
  
  save()
  {
    let course = new Course();
    course.name = this.editform.value.name;
    course.description = this.editform.value.description;
    course.duration = this.editform.value.duration;
    this.dataService.EditCourse(this. Courses.courseId,course).subscribe((edit:any) => {
    this.router.navigate(['/courses'])
   
   });
  }
}
