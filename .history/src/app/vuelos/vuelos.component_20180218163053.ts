import { Component, OnInit } from '@angular/core';
import { VuelosService } from './vuelos.service';
import { Vuelo } from '../modelos/vuelo.model';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vuelos: Vuelo[];
  vuelo: Vuelo;
  constructor(private vueloSrv: VuelosService) {
    this.vueloSrv.getVuelo()
    .then((d: Vuelo[]) => {
        this.vuelos = d;
    });
  }

  ngOnInit() {
  }

}
