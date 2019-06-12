import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.pages';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3:any = Pagina3Page;
  mutantes: any[]=[
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneración Acelerada"
    },
    {
      nombre: "Profesosr X",
      poder: "Poderes Siquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimado con energía"
    }
    
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){
    this.navCtrl.push( Pagina3Page,  {mutante} );
  }

}
