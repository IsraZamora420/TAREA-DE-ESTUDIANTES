import { Component } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './ingreso-calificaciones.component.html',
  styles: ''
})
export class CalificacionesComponent {
  calificaciones: any[] = [];
  modalVisible = false;
  calificacion = {
    nombreTarea: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    calificacion: 0,
    estado: ''
  };

  openModal() {
    this.modalVisible = true;
  }

  onSubmit() {
    this.calificacion.estado = this.calificacion.calificacion >= 7 ? 'Aprobado' : 'Reprobado';
    this.calificaciones.push({ ...this.calificacion });
    console.log('Calificaciones:', JSON.stringify(this.calificaciones));
    this.modalVisible = false;
  }
}
