import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obra-search',
  templateUrl: './obra-search.component.html',
  styleUrls: ['./obra-search.component.scss']
})
export class ObraSearchComponent implements OnInit {

  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }

}
