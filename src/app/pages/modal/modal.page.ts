import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      // componentProps sirve para mandar propiedades al hijo (modal-info)
      componentProps: {
        nombre: 'fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();

    // para recuperar información del padre:
    const resp = await modal.onDidDismiss();
    // también se podría usar onWillDismiss; la diferencia es que este último se ejecuta al instante de pulsar el botón 
    // mientras que onDidDismiss se ejecuta al terminar la animación de salida de la modal
    console.log(resp);

  }

}
