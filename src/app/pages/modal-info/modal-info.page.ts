import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  // recibimos las propiedades que ha mandado el componente padre
  @Input() nombre: string;
  @Input() pais: string;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      // aquí mandamos propiedades al padre
      nombre: 'Felipe',
      pais: 'España'
    });
  }

}
