import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {campoComponent} from './campo.component';
export const routes: Routes = [

{
    path:'',
    component:campoComponent,
    data:{
        title:'Campo'
    },
}

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class campoRoutingModule{}