import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  mensaje = 'Bienvenido dal programa';
  tipo = 'info';
  constructor(private notificaSrv: NotificationService) {
    this.borraMensaje();
    this.notificaSrv.emiter.subscribe((d) => {
      this.mensaje = d.mensaje;
      this.tipo = d.tipo;
      this.borraMensaje();
    });
  }

  ngOnInit() {
  }

  borraMensaje() {
    setTimeout(() => {
      this.mensaje = null;
      this.tipo = null;
    }, 2000);
  }

}
