import {Component, Inject, Input, OnInit} from '@angular/core';
import {CollegeInterface} from '../college.interface';
import {COLLEGE$, collegeProvider} from '../college.provider';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [collegeProvider]
})
export class AboutComponent implements OnInit {
  college?: CollegeInterface;
  constructor(@Inject(COLLEGE$) readonly college$: Observable<CollegeInterface>) {
  }
  ngOnInit() {
    this.getCollege();
  }
  getCollege(): void {
    this.college$.subscribe(college => {
      this.college = college;
    });
  }
}
