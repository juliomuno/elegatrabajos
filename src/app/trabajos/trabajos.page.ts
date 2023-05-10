import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.page.html',
  styleUrls: ['./trabajos.page.scss'],
})
export class TrabajosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Página de lista de trabajos mostrada");
  }

  realizarTrabajo() {
    console.warn("Trabajo realizado correctamente.");
  }
}
