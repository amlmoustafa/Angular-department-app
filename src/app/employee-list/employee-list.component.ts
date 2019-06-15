import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h3>
  Employees list:
</h3>
<ul class="items">
  <li *ngFor = "let employee of employees">
    <span class="badge">{{employee.id}}</span> {{employee.name}}
  </li>
</ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  employees = [
    { id: 1, name: 'aml' },
    { id: 2, name: 'ahmed' },
    { id: 3, name: 'ali' },
    { id: 4, name: 'mariam' },
    { id: 5, name: 'marwan' },
    { id: 6, name: 'basma' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
