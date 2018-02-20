import { Component, OnInit } from '@angular/core';
import { VuelosService } from './vuelos.service';
import { Vuelo } from '../modelos/vuelo.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vuelos: Vuelo[];
  vuelo: Vuelo;
  constructor(
    private vueloSrv: VuelosService,
    private modalService: NgbModal
  ) {
    this.vueloSrv.getVuelo()
    .then((d: Vuelo[]) => {
        this.vuelos = d;
    });
  }

  ngOnInit() {
  }

  open(content) {
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

}
