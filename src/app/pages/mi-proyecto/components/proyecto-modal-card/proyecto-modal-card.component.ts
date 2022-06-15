import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyecto-modal-card',
  templateUrl: './proyecto-modal-card.component.html',
  styleUrls: ['./proyecto-modal-card.component.scss']
})
export class ProyectoModalCardComponent implements OnInit {

  @Input() data:any;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
