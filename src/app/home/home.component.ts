import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
}
