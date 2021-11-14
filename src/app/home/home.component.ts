import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home da aplicação';
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
