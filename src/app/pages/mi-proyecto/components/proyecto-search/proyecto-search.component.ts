import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-search',
  templateUrl: './proyecto-search.component.html',
  styleUrls: ['./proyecto-search.component.scss']
})
export class ProyectoSearchComponent implements OnInit {

  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }

}
