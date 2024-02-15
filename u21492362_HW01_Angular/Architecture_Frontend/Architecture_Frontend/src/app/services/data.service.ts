import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5116/api/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }
  defaultView: any;

  constructor(private httpClient: HttpClient) { 
  }

 /* GetAllCourses(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}Course/GetAllCourses`)
    .pipe(map(result => result))
  }
  */
   /* Create Course */

  AddCourse(course:Course){
  return this.httpClient.post(this.apiUrl + 'Course/AddCourse', course);
  }

  GetAllCourses(): Observable<any>{

  return this.httpClient.get(this.apiUrl + 'Course/GetAllCourses');
  }
GetAllCoursesById
  (CourseId: Number) {
    return this.httpClient.get(this.apiUrl + 'Course/GetAllCourses/' + CourseId)
}

  /* Edit Course */
  EditCourse(CourseId:Number, course:Course){
  return this.httpClient.put(this.apiUrl + 'Course/EditCourse/' + CourseId, course);
  }

  /* Delete Course */
  DeleteCourse(CourseId:Number){
    let course = 0;
    course = CourseId as number;
    console.log(course)
  return this.httpClient.delete(this.apiUrl + 'Course/DeleteCourse/' + CourseId);
  }
}



