import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaPage } from './../noticia/noticia';
import { NotificacionesPage } from '../notificaciones/notificaciones';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  lista1=[];
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lista1 = [
      {
        titulo:" hoteles más baratos en Bogotá",
        fecha:"13/04/2018",
        autor:"juanCubillos",
        contenido:"Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas."
        
      },
      {
        titulo:"Los sitios donde se consiguen los hoteles más baratos en Bogotá",
        fecha:"1/04/2068",
        autor:"juanCubillos",
        contenido:"tes la Insituto Distrital de Turismo presentó el últim, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas."
        
      },
      {
        titulo:"onde se consiguen los hoteles más baratos en Bogotá",
        fecha:"13/34/2058",
        autor:"juanCubillos",
        contenido:"Este Inalojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas."
        
      },
      {
        titulo:"Los sitios donde se  hoteles más baratos en Bogotá",
        fecha:"13/04/2018",
        autor:"juanCubillos",
        contenido:"Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas.Este martes la Insituto Distrital de Turismo presentó el último censo sobre alojamiento y hospedaje en Bogotá, en el que se caracterizaron 558 establecimientos de los 869 registrados en la capital. Cabe resaltar que 104 establecimeintos no fueron tenidos en cuenta debido a que prestan un servicio por horas."
        
      },
    ];
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  verMas(item){
    this.navCtrl.push(NoticiaPage,{item:item});
  }
  verNotificaciones(){
    console.log('att');
    this.navCtrl.push(NotificacionesPage);
  }
}
