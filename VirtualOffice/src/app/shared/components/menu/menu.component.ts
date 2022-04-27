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
        icon: 'house',
        url: '',
      },
      {
        name: 'Mis obras',
        classColor: 'menu-green',
        icon: 'truck',
        url: '',
      },
      {
        name: 'Mis Desembolsos',
        classColor: 'menu-pink',
        icon: 'hand-holding-dollar',
        url: '',
      },
      {
        name: 'Mis Rendiciones',
        classColor: 'menu-green-light',
        icon: 'file-invoice-dollar',
        url: '',
      },
      {
        name: 'Mis Convenios',
        classColor: 'menu-violet',
        icon: 'file-contract',
        url: '',
      },
      {
        name: 'Mi Gestión',
        classColor: 'menu-blue-light',
        icon: 'chart-column',
        url: '',
      }
    ]
  }

}
