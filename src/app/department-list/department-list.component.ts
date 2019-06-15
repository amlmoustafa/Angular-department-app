import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department list:
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'JS' },
    { id: 3, name: 'Reactjs' },
    { id: 4, name: 'Nodejs' },
    { id: 5, name: 'Mongodb' },
    { id: 6, name: 'Laravel' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/department', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
