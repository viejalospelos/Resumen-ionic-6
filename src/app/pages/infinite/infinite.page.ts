import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild (IonInfiniteScroll) infiniteScroll: IonInfiniteScroll

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);

    setTimeout(() =>{
      if(this.data.length > 50){ //control para finalizar cuando existan más de 50 elementos
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr ); //operador spread para convertir array en lista de valores; ej: [1,2,3] lo pasa a (1,2,3)
      // event.target.complete();
      this.infiniteScroll.complete();
    }, 1500)
  }

}
