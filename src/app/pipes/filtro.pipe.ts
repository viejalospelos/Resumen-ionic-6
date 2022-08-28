import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(
    arreglo: any[], //array que le mandamos (pajar)
    texto: string, //texto que tiene que buscar en el pajar (aguja)
    columna: string = '' //si el array es de objetos, podemos buscar la aguja en una determinada propiedad de cada objeto; ej: buscamos texto 'marron' dentro de la propiedad 'color' de cada objeto caca que haya en la data
    ): any[]{


    if (texto === ''){
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      item =>  item[columna].toLowerCase().includes(texto)
    );
  }

}
