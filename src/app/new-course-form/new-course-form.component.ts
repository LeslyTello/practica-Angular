import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

form= new FormGroup({
  topic: new FormArray([])
})

form1;
constructor(fb:FormBuilder){
  this.form1= fb.group({
    name: ['',Validators.required],
    contact: fb.group({
      email:[],
      phone:[]
    }),
    topics: fb.array
  })
}

    addTopic(topic:HTMLInputElement){
      (this.form.get('topic') as FormArray).push(new FormControl(topic.value))
  }
}
