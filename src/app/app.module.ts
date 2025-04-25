import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // <- Importa IonicModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de tener estos si los usas globalmente

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // <- Importa IonicModule.forRoot()
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Otros módulos globales de tu aplicación
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
