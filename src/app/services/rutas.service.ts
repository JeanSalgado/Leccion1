import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas:Ruta[]=[
    {
      ciuOrig: "Machala",
      ciuDes: "Cuenca",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "15",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Guayaquil",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "20",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Guaquillas",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "5",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Quito",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "20",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Puyo",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "25",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Peru",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "30",
      tipo:"Externo"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Colombia",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "45",
      tipo:"Externo"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Quito",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "50",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Esmeraldas",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "25",
      tipo:"Interno"
    },
    {
      ciuOrig: "Machala",
      ciuDes: "Pasaje",
      img: "assets/img/img.jpg",
      descrip: "Tiene Aire acondicionado y muy bien equipado",
      precio: "3",
      tipo:"Interno"
    },
  ];

  constructor() { 
    console.log("Servicio listo para usar...");

  }

  getHeroes(){
    return this.rutas;
  }

  getHeroe(idx:number):Ruta{
    return this.rutas[idx];
  }

  buscarRuta(dato:string) : Ruta[] {
    let heroesArr:Ruta[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.rutas.length; i++) {
      let ruta = this.rutas[i];
      let tipo = ruta.tipo.toLocaleLowerCase();
      if(tipo.indexOf(dato) >= 0) {
        ruta.idx = i;
        heroesArr.push(ruta);
      }
    }
    return heroesArr;
  }

  IngRutas(dato:any) {
    this.rutas.push(dato)
  }

}
export interface Ruta{
  ciuOrig: string;
  ciuDes: string;
  img: string;
  precio: string;
  tipo: string;
  descrip: string;
  idx?: number;
}