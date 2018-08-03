import { Component } from '@angular/core';

import { NoticiasPage } from '../noticias/noticias';
import { ProyectosPage } from '../proyectos/proyectos';
import { DenunciasPage } from '../denuncias/denuncias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NoticiasPage;
  tab2Root = ProyectosPage;
  tab3Root = DenunciasPage;

  constructor() {

  }
}
