import { Component, OnInit } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loggedIn = false;
  constructor(
    private variableSrv: VariableService
  ) { }

  ngOnInit() {
    this.variableSrv.bloggIn.subscribe(
      v => this.loggedIn = v
    );
  }

  logout() {
    this.variableSrv.bloggIn.next(false);
  }

}
