import { Component, OnInit } from '@angular/core';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-convenio-datos-generales',
  templateUrl: './convenio-datos-generales.component.html',
  styleUrls: ['./convenio-datos-generales.component.scss']
})
export class ConvenioDatosGeneralesComponent implements OnInit {

  public itemsTotal:AmountInformationItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto Total',
      amount: 3000,
      type: 'money',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
