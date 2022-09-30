import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'campo',
        pathMatch: 'full'

    },
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'campo',
                loadChildren: './citys/campo.module#campoModule'
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }