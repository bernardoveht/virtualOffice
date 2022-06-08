import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenio-search',
  templateUrl: './convenio-search.component.html',
  styleUrls: ['./convenio-search.component.scss']
})
export class ConvenioSearchComponent implements OnInit {

  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }

}
