import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  mostrarNome: boolean = true;

  trocar(){
    this.mostrarNome = !this.mostrarNome;
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
