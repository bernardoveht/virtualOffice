import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface modalDetalData {
  sippeCode:any,
  name:string,
  state:string,
}


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})

export class ModalDetailComponent implements OnInit {

  @Input() data!: modalDetalData;
  @Input() color!: string;
  @Input() title!: string;
  @Input() icon: string = 'file-lines';
  @Input() actionButton: any;
  @Input() successBtnText: string = 'Ir';
  @Input() cancelBtnText: string = 'Cancelar';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public itemActionButton() {
    this.activeModal.close();
    this.actionButton();
  }

}
