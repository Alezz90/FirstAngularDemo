import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {



 public student=[
  {'name':'name1','Email':'name1@gmail','Marks':55},
  {'name':'name2','Email':'name2@gmail','Marks':50},
  {'name':'name3','Email':'name3@gmail','Marks':45}
 ]

}
