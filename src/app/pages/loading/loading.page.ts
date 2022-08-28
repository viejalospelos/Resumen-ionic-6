import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    //mostramos el loading
    this.showLoading('ola k ase cargando'); 

    // lo cancelamos a los 2 segundos
    setTimeout(()=> {
      this.loading.dismiss();
    }, 2000)
  }


  async showLoading(message:string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    this.loading.present();
  }

}
