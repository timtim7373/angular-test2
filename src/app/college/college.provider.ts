import {InjectionToken} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CollegeInterface} from './college.interface';
import {COLLEGE, COLLEGE_HE} from './mock-college';

export const COLLEGE$ = new InjectionToken('College');
export const  collegeFactory = (): Observable<CollegeInterface> => {
    return of(COLLEGE);
};
export let collegeProvider = {
    provide: COLLEGE$,
    useFactory: collegeFactory
};
