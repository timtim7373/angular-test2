import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollegeRoutingModule} from './college-routing.module';
import {CollegeComponent} from './college.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
    declarations: [CollegeComponent, AboutComponent, CoursesComponent, TeachersComponent, ContactsComponent],
    imports: [CommonModule, CollegeRoutingModule]
})
export class CollegeModule {
}
