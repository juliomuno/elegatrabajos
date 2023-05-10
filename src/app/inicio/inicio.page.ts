import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log("Menú de inicio de elegatrabajos");
  }

  mostrarControlPresencia() {
    this.navCtrl.navigateForward('/presencia');
    console.log("Página de control mostrada correctamente");
  }

  mostrarTrabajos() {
    this.navCtrl.navigateForward('/trabajos');
    console.log("Página de lista de trabajos mostrada correctamente");
  }

}
