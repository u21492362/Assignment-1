import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})

export class AddCourseComponent implements OnInit {
  CourseId: number = 0;
  courseform: FormGroup;


  constructor(private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    
    ) {
      this.courseform = this.fb.group({
        name: ['', [Validators.required]],
        duration: ['', [Validators.required]],
        description: [null, [Validators.required]],
        CourseId: [0, [Validators.required]],
     })
    }

    ngOnInit(): void { 
    }
   
      save() {
        let course = new Course();
        course.name = this.courseform.value.name;
        course.description = this.courseform.value.description;
        course.duration = this.courseform.value.duration;
    
       this.dataService.AddCourse(course).subscribe((add:any) => {
       this.router.navigate(['/courses'])
        
       });
    
      }

    }




