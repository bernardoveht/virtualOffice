import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-grid',
  templateUrl: './pagination-grid.component.html',
  styleUrls: ['./pagination-grid.component.scss']
})
export class PaginationGridComponent implements OnInit {

  @Output() public readonly changePageEvent = new EventEmitter<any>();
  @Input() color:string = '';
  @Input() totalCount:number = 0;
  totalPages:number = 0;
  itemPerPage:number = 50;
  currentPage:number = 0;
  pagesArray:any;

  constructor() { }

  ngOnInit(): void {
    debugger
    this.totalPages = this.totalCount / this.itemPerPage;
    this.pagesArray = Array.from({length: this.totalPages}, (_, i) => i);
    
  }

  public changePage(pageNumber:number){
    if(pageNumber === this.currentPage){
      return;
    }
    this.currentPage = pageNumber;    
    this.changePageEvent.emit(pageNumber);
  }

}
