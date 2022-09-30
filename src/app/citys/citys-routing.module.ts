import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {citysComponent} from './citys.component';
export const routes: Routes = [

{
    path:'',
    component:citysComponent,
    data:{
        title:'Citys'
    },
}

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class citysRoutingModule{}