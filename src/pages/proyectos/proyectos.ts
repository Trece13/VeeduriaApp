import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';

/**
 * Generated class for the ProyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proyectos',
  templateUrl: 'proyectos.html',
})
export class ProyectosPage {
  
  lista : Array<any> = [
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
    {
      nombre: "Colegio la merced",
      entidad:"constructora bolivar",
      inicio:"15/04/2018",
      fin:"15/04/2020",
      objetivoGeneral:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revistió para hacer un libro tipo de espécimen. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker, incluidas las versiones de Lorem Ipsum.",
      objetivosEspecificos:{
        uno:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        dos:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        tres:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I",
        cuatro:"Lorem Ipsum es simplemente texto ficticio de la industria de impresión y composición tipográfica. Lorem I"
      }
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectosPage');
  }

  verMas(item){
    this.navCtrl.push(ProyectoPage,{item:item});
  }
}
