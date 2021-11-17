import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  @Input() word: string | undefined;
  @Input() color: string | undefined;

  //imageURL : string = 'http://lorempixel.com/400/200/';
  imageURL = '../assets/telaMeusInvestimentos.jpg';
  initialValue ='Valor Inicial';
  isDisabled = true;
  accessibilityText ='Um texto acessível';

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
    console.log($event);
  }
}
