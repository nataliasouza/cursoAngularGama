import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  @Input() word: string | undefined;
  @Input() color: string | undefined;
  @Output() clicado = new EventEmitter();

  //imageURL : string = 'http://lorempixel.com/400/200/';
  imageURL = '../assets/telaMeusInvestimentos.jpg';
  initialValue ='Valor Inicial';
  isDisabled = true;
  accessibilityText ='Um texto acessível';
  valorDoInput = ' ';

  constructor() {
    setTimeout(() =>{
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
   }
  ngOnInit(): void {
  }
  onClick($event: any){
    console.log('Clicou!', $event);
  }

  digitouAlgo($event: any) {
    this.valorDoInput = $event.target.value;
    console.log($event)
  }

  passouMouseAqui(){
    console.log('Você passou o mouse');
  }
  onClickBotaoEmissor($event: any){
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit($event);
  }
}
