import { Component } from '@angular/core';

@Component({
  selector: 'app-representantes',
  templateUrl: './ingreso-representantes.component.html',
  styles: ''
})
export class RepresentantesComponent {
  representante = {
    nombresApellidos: '',
    relacion: '',
    telefono: '',
    email: ''
  };

  onSubmit() {
    console.log('Datos del Representante:', JSON.stringify(this.representante));
  }
}
