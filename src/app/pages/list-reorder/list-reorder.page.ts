import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes:string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  personajes2:string[] = ['Aquaman2', 'Superman2', 'Batman2', 'Mujer Maravilla2', 'Flash2'];
  disableOrder:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){
    console.log(event);

    // El siguiente script es para que los cambios de orden del array persistan
    const itemMover = this.personajes.splice(event.detail.from, 1)[0]; // quitamos el elemento que hemos movido del array (ver con console.log la propiedad 'from' del objeto event)
    this.personajes.splice(event.detail.to, 0, itemMover); // insertamos el elemento quitado en la nueva posición (ver con console.log la propiedad 'to' del objeto event)

    event.detail.complete(); //si no pones esto se traba

    console.log(this.personajes);
  }

  doReorderX(evento:any){
    console.log(evento);

    // El siguiente script es para que los cambios de orden del array persistan
    const itemMover = this.personajes2.splice(evento.detail.from, 1)[0]; // quitamos el elemento que hemos movido del array (ver con console.log la propiedad 'from' del objeto event)
    this.personajes2.splice(evento.detail.to, 0, itemMover); // insertamos el elemento quitado en la nueva posición (ver con console.log la propiedad 'to' del objeto event)

    evento.detail.complete(); //si no pones esto se traba

    console.log(this.personajes2);
  }

  toogle(){
    this.disableOrder = !this.disableOrder;
  }

}
