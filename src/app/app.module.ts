

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DenunciasPage } from './../pages/denuncias/denuncias';
import { ProyectosPage } from './../pages/proyectos/proyectos';
import { NoticiasPage } from './../pages/noticias/noticias';
import { TabsPage } from '../pages/tabs/tabs';

import { NoticiaPage } from '../pages/noticia/noticia';
import { ProyectoPage } from './../pages/proyecto/proyecto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NoticiasPage,
    ProyectosPage,
    DenunciasPage,
    TabsPage,
    NoticiaPage,
    ProyectoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoticiasPage,
    ProyectosPage,
    DenunciasPage,
    TabsPage,
    NoticiaPage,
    ProyectoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
