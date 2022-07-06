import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-title',
  templateUrl: './line-title.component.html',
  styleUrls: ['./line-title.component.scss']
})
export class LineTitleComponent implements OnInit {

  @Input() title:string = '';
  @Input() icon:string = '';
  @Input() color:string = 'blue';
  @Input() margin:number = 0;
  @Input() backButton:boolean = false;
  @Input() subtitle:boolean = false;
  @Input() neutralLine:boolean = true;
  @Input() noLine:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
