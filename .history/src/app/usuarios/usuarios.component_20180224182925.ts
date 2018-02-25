import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

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
