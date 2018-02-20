import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  constructor(private usuarioSrv: UsuarioService) {
    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        this.usuarios = d;
    });
  }

  ngOnInit() {
  }

}
