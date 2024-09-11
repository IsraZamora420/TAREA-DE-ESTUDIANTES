import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './ingreso-estudiantes.component.html',
  styles: ''
})
export class EstudiantesComponent {
  estudiante = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    curso: ''
  };

  onSubmit() {
    console.log('Datos del Estudiante:', JSON.stringify(this.estudiante));
  }
}
