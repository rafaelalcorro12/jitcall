import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomePage // Importa HomePage si otros componentes en este módulo lo usan
  ],
  // declarations: [], // Elimina la declaración
  // exports: [HomePage] // Elimina la exportación si solo se usa en las rutas
})
export class HomePageModule {}
