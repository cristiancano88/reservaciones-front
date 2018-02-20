import { Component, OnInit } from '@angular/core';
import { MisReservasService } from './mis-reservas.service';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  constructor(private usuarioSrv: MisReservasService) {
    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        let cedulas: Array<number>;

        console.log(d);
        this.usuarios = d;
    });
  }

  ngOnInit() {
  }

}
