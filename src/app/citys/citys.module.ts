import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { citysComponent } from './citys.component';
import { DataTableModule } from 'ng-angular8-datatable';
@NgModule({
  declarations: [
    citysComponent        
],
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    
  ],
  //declarations: [citysComponent]
})
export class CitysModule { }
