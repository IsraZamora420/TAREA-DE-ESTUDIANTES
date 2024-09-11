import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './componentes/subcomponentes/ingreso-estudiantes/ingreso-estudiantes.component';
import { RepresentantesComponent } from './componentes/subcomponentes/ingreso-representantes/ingreso-representantes.component';
import { CalificacionesComponent } from './componentes/subcomponentes/ingreso-calificaciones/ingreso-calificaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstudiantesComponent,
    RepresentantesComponent,
    CalificacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EstudiantesComponent,
    RepresentantesComponent,
    CalificacionesComponent
  ]
})
export class ModuloIngresoEstudiantesModule { }
