import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, CommonModule]
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async logout() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando sesión...',
    });
    await loading.present();

    this.authService.logoutUser()
      .then(() => {
        loading.dismiss();
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
        loading.dismiss();
        // Puedes mostrar un mensaje de error si lo deseas
      });
  }

}
