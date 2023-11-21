import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private menuController: MenuController) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.usuario = user;
    });
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  cerrarSesion() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/inicio']);
    });
  }

}
