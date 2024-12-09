import { Component, Input } from '@angular/core';


export interface Employee{

  id:Number;
  name:String;
  email:String;
  phone:String;
 
};
@Component({
  selector: 'app-employeecard',
  standalone: true,
  imports: [],
  templateUrl: './employeecard.component.html',
  styleUrl: './employeecard.component.css'
})
export class EmployeecardComponent {
  @Input()
 employee: Employee={id:0,name:'',email:'',phone:''};
}
