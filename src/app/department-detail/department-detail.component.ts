import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> you selected department with id  = {{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <button (click)="goPrev()">Previous</button>
    <button (click)="goNext()">Next</button><br>

    <button (click)="goBack()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: number;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    //  const id = parseInt(this.route.snapshot.paramMap.get('id'));
    //  this.departmentId = id;
     this.route.paramMap.subscribe((params: ParamMap) => {
       let id = parseInt(params.get('id'));
       this.departmentId = id;
     });
  }

  goPrev() {
    const prevId = this.departmentId - 1;
    this.router.navigate(['/department', prevId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }

  goBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // // this.router.navigate(['/department', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
