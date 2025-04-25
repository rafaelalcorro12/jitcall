import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
// import { RegisterPage } from './register.page'; <- Elimina esta importación

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Mantén esto si usas formularios basados en template
    IonicModule,
    RegisterPageRoutingModule,
    // RegisterPage <- Elimina esto de los imports
  ],
  // declarations: [], // No necesitas declarations para componentes standalone importados
})
export class RegisterPageModule {}
