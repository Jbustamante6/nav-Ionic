import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(private navCtrl: NavController, 
              private modalCtrl: ModalController,
              ) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(0);
  }

  abrirModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre: "Jefersson Bustamante", edad: 26});
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data)
    })
  }
  
}
