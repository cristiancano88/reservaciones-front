import { Component, OnInit, NgModule  } from '@angular/core';
import { VuelosService } from './vuelos.service';
import { Vuelo } from '../modelos/vuelo.model';
import { UsuariosService } from '../usuarios/usuarios.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vuelos: Vuelo[];
  vuelo: Vuelo;
  closeResult: string;
  vueloInfo: Vuelo;
  usuarios: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor(
    private vueloSrv: VuelosService,
    private usuarioSrv: UsuariosService,
    private modalService: NgbModal
  ) {
    this.vueloSrv.getVuelo()
    .then((d: Vuelo[]) => {
        this.vuelos = d;
    });

    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        this.usuarios = d;
    });
  }

  ngOnInit() {
  }

  reservar() {
    console.log(this.usuarioSeleccionado);
    // console.log(this.usuarioSeleccionado);
  }

  open(usuario, content) {
    this.vueloInfo = usuario;

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  seleccionar(usuario) {
    this.vueloInfo = usuario;
  }

}
