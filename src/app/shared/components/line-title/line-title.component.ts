import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-title',
  templateUrl: './line-title.component.html',
  styleUrls: ['./line-title.component.scss']
})
export class LineTitleComponent implements OnInit {

  @Input() title:string = '';
  @Input() icon:string = '';
  @Input() margin:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
