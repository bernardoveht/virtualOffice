import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendiciones-search',
  templateUrl: './rendiciones-search.component.html',
  styleUrls: ['./rendiciones-search.component.scss']
})
export class RendicionesSearchComponent implements OnInit {

  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }

}
