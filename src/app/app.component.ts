import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeecardComponent, Employee } from "./employeecard/employeecard.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeecardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd-day1';
  employee: Employee={id:0,name:'Khaled Hosni',email:'',phone:'97839761'};

}
