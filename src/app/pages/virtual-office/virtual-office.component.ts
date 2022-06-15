import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-office',
  templateUrl: './virtual-office.component.html',
  styleUrls: ['./virtual-office.component.scss']
})
export class VirtualOfficeComponent implements OnInit {

  collapseMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  collapseEvent(){
    this.collapseMenu = !this.collapseMenu;
  }
}
