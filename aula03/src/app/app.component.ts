import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: '../AppComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula03';
  aluno = 'Juquinha';
  idade : number =23  ;
}
