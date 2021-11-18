import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phase = 'Minha cor favorita é:';
  favoriteColor = 'Azul';
  title = 'Seja bem vindx! '
  constructor(){
  }
  eventoRecebido($event: any){
    console.log('AppComponent: Evento Recebido!!!', $event);
  }
}
