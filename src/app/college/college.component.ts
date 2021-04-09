import {Component, Inject, OnInit} from '@angular/core';
import {COLLEGE$, collegeProvider} from './college.provider';
import {Observable} from 'rxjs';
import {CollegeInterface} from './college.interface';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers: [collegeProvider]
})
export class CollegeComponent implements OnInit {
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
