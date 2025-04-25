import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page'; // Importa el componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LoginPage // Importa el componente standalone
  ],
  // declarations: [], // Elimina declarations
  // exports: [] // Elimina exports
})
export class LoginPageModule {}
