import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  constructor(private usuarioSrv: UsuariosService) {
    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        this.usuarios = d;
    });
  }

  ngOnInit() {
  }

}
