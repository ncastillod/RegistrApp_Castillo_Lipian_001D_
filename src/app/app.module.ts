import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';






//=======firebase============
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HomePage } from './pages/main/home/home.page';

const routes: Routes = [
  { path: 'inicio', component: HomePage }, 
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,  IonicModule.forRoot(),RouterModule.forRoot(routes),  AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig)],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , ],
  bootstrap: [AppComponent],
})
export class AppModule {}
