import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyecto-modal-detail',
  templateUrl: './proyecto-modal-detail.component.html',
  styleUrls: ['./proyecto-modal-detail.component.scss']
})
export class ProyectoModalDetailComponent implements OnInit {

  @Input() data:any;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
