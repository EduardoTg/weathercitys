import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { campoComponent } from './campo.component';
import { campoRoutingModule } from './campo-routing.module';
import { DataTableModule } from 'ng-angular8-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    campoRoutingModule,
    DataTableModule,
  ],
  declarations: [campoComponent]
})
export class campoModule { }
