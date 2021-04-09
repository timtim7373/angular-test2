import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeComponent } from './college.component';
import {AboutComponent} from './about/about.component';
import {CoursesComponent} from './courses/courses.component';
import {ContactsComponent} from './contacts/contacts.component';
import {TeachersComponent} from './teachers/teachers.component';

const collegeRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];
const routes: Routes = [
  {
    path: '',
    component: CollegeComponent,
    children: collegeRoutes,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule {}
