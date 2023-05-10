import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presencia',
  templateUrl: './presencia.page.html',
  styleUrls: ['./presencia.page.scss'],
})
export class PresenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Página de control de presencia mostrada");
  }

  
}
