import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.scss']
})
export class DocumentsDetailComponent implements OnInit {
  public title: string = "Documentos cargados";
  public icon: string = "file-lines";
  public titleColor: string = "green";

  constructor() { }

  ngOnInit(): void {
  }

  public openFile(fileName:string): void {
    window.open(fileName);
  }

}
