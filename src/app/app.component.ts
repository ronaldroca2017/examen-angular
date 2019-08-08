import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'EXAMEN ANGULAR';
  indice: any;
  modelAuxPersona: any = {};

  personas = [
    {codigo: '001', nombre: 'ronald', apellido: 'roca', edad: 35},
    {codigo: '002', nombre: 'ania', apellido: 'sari', edad: 30}
  ]

  editPersona(i):void {
      this.modelAuxPersona.codigo = this.personas[i].codigo;
      this.modelAuxPersona.nombre = this.personas[i].nombre;
      this.modelAuxPersona.apellido = this.personas[i].apellido;
      this.modelAuxPersona.edad = this.personas[i].edad;
      this.indice = i;  
  }

  modificarPersona():void {
    debugger;
    if(this.modelAuxPersona.hasOwnProperty('codigo')){
      let i = this.indice;
      for(let j = 0; j < this.personas.length; j++){
        if(i == j) {
          this.personas[i] = this.modelAuxPersona;
          this.modelAuxPersona = {};
        }
      }
    }else{
      alert('Debe seleccionar una persona');
    }
  }

  cancelar():void {
    this.modelAuxPersona = {};
  }

}
