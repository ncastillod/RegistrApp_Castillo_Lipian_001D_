import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  qrCodeString= 'String qr';

  uid: string | null = null;

  constructor(private menuController: MenuController, private authService: AuthService,) { }

  ngOnInit() {
   
 
    // Inicializar el UID al cargar el componente
    this.authService.getUid().subscribe(uid => {
      this.uid = uid;
    });
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  

  mostrarUid() {
    // Esta función se llama al hacer clic en el botón
    console.log('UID del usuario:', this.uid);
  }

  

  escanearCodigoQR() {
    // Lógica de escaneo de código QR (puede estar vacía para un marcador de posición).
  }


  // Ejemplo de función para iniciar sesión
  login() {
    this.authService.login('correo@ejemplo.com', 'contraseña123')
      .then(response => {
        console.log('Inicio de sesión exitoso', response);
      })
      .catch(error => {
        console.error('Error al iniciar sesión', error);
      });
  }

  // Ejemplo de función para cerrar sesión
  logout() {
    this.authService.logout()
      .then(() => {
        console.log('Cierre de sesión exitoso');
      })
      .catch(error => {
        console.error('Error al cerrar sesión', error);
      });
  }
}
