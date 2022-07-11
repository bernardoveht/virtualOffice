import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendicion-certificados',
  templateUrl: './rendicion-certificados.component.html',
  styleUrls: ['./rendicion-certificados.component.scss']
})
export class RendicionCertificadosComponent implements OnInit {
  public title:string = "Mis rendiciones";
  public icon:string = "file-invoice-dollar";
  public titleColor:string = "green-light";

  constructor() { }

  ngOnInit(): void {
  }

}
