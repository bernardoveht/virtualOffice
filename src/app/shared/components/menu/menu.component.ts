import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() collapseEvent: EventEmitter<any> = new EventEmitter();
  collapse: boolean = false;

  public menuList: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setItemsMenu();
  }

  public collapseMenu() {
    this.collapseEvent.emit();
    this.collapse = !this.collapse;
  }


  private setItemsMenu() {
    this.menuList = [
      {
        name: 'Inicio',
        classColor: 'menu-blue',
        icon: 'house',
        url: '/pages/oficina-virtual',
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
        name: 'Mis Proyectos',
        classColor: 'menu-orange',
        icon: 'people-group',
        url: '/pages/mis-proyectos',
      },
      {
        name: 'Mis Rendiciones',
        classColor: 'menu-green-light',
        icon: 'file-invoice-dollar',
        url: '/pages/mis-rendiciones',
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
        url: '/pages/mi-gestion',
      }
    ]
  }

}
