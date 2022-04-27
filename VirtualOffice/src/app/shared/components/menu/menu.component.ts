import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setItemsMenu();
  }


  private setItemsMenu() {
    this.menuList = [
      {
        name: 'Inicio',
        classColor: 'menu-blue',
        icon: '',
        url: '',
      },
      {
        name: 'Mis obras',
        classColor: 'menu-green',
        icon: '',
        url: '',
      },
      {
        name: 'Mis Desembolsos',
        classColor: 'menu-pink',
        icon: '',
        url: '',
      },
      {
        name: 'Mis Rendiciones',
        classColor: 'menu-green-light',
        icon: '',
        url: '',
      },
      {
        name: 'Mis Convenios',
        classColor: 'menu-violet',
        icon: '',
        url: '',
      },
      {
        name: 'Mi Gestión',
        classColor: 'menu-blue-light',
        icon: '',
        url: '',
      }
    ]
  }

}
