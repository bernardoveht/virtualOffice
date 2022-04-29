import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  collapseMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  collapseEvent(){
    this.collapseMenu = !this.collapseMenu;
  }

}
