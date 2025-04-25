import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {
  loginData = {
    correo: '',
    password: ''
  };

  constructor(
    private authservice: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
    });
    await loading.present();

    this.authservice.loginUser(this.loginData)
      .then(async () => {
        await loading.dismiss();
        this.router.navigate(['/home']);
      })
      .catch(async (err: any) => {
        await loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Error al iniciar sesión: ' + err.message,
          duration: 3000
        });
        await toast.present();
      });
  }
}
