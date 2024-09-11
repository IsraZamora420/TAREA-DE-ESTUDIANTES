import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { DatospersonalesComponent } from './mantenimiento/subcomponentes/datospersonales/datospersonales.component';
import { DatosautoComponent } from './mantenimiento/subcomponentes/datosauto/datosauto.component';
import { DatospagoComponent } from './mantenimiento/subcomponentes/datospago/datospago.component';
import { DatosgaranteComponent } from './mantenimiento/subcomponentes/datosgarante/datosgarante.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MantenimientoComponent,
    DatospersonalesComponent,
    DatosautoComponent,
    DatospagoComponent,
    DatosgaranteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MantenimientoComponent
  ]
})
export class PersonaModule { }
