import { Component, Input, OnInit } from '@angular/core';
import { AmountInformationItem, AmountInformationTitle } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-amount-information',
  templateUrl: './amount-information.component.html',
  styleUrls: ['./amount-information.component.scss']
})
export class AmountInformationComponent implements OnInit {

  @Input() color:string = '';
  @Input() title!:AmountInformationTitle;
  @Input() items:AmountInformationItem[] = [];
  @Input() haveCard:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
