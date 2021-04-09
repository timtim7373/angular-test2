import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
    {path: '', loadChildren: () => import('./college/college.module').then(m => m.CollegeModule)},
    {path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
