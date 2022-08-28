import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  idPestana: string = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){

    // el if se pone para que funcione la pestaña 'todos', el valor que hay que mandarle al pipe es string vacío
    if(event.detail.value == 'todos'){
      return this.idPestana = '';
    }else{
      this.idPestana = event.detail.value;
    }
    

  }

}
