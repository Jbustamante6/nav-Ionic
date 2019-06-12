import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre:string = "";
  edad:number = 0;

  constructor(public navParams: NavParams, public viewCtrl:ViewController) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");
  }

  cerrarP(){
    let data= {
      nombre: "Juan",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    }
    this.viewCtrl.dismiss(data)
  }

  cerrar(){
    this.viewCtrl.dismiss()
    
  }

}
