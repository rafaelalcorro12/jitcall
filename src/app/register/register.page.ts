import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone'; // Importa los componentes de Ionic que usas
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa los módulos de formulario si los usas

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    FormsModule, // Si usas formularios basados en template
    ReactiveFormsModule, // Si usas formularios reactivos
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    // Importa aquí todos los demás componentes de Ionic que uses en register.page.html
  ],
})
export class RegisterPage implements OnInit {
  userData = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async register() {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando...',
    });
    await loading.present();

    this.authService.registerUser(this.userData)
      .then(async (/* res: any */) => { // Puedes tipar 'res' si lo deseas
        await loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Registro exitoso. ¡Inicia sesión!',
          duration: 2000
        });
        await toast.present();
        this.router.navigate(['/login']);
      })
      .catch(async (err: any) => { // Puedes tipar 'err' como 'any' o un tipo de error específico
        await loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Error en el registro: ' + err.message,
          duration: 3000
        });
        await toast.present();
      });
  }
}
