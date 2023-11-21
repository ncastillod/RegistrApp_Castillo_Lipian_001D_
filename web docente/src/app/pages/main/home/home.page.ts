import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  clases$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    // Consulta la colección "clases" y obtén los documentos
    this.clases$ = this.firestore.collection('clases').valueChanges();
  }

  ngOnInit() {
  }

  verDetalle(clase: any) {
    console.log('Detalle de la clase:', clase);
  }

  generarQR(clase: any) {
    console.log('Generar QR para la clase:', clase);
  }
}