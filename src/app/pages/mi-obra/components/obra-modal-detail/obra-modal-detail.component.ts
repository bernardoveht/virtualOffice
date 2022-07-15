import { Component, Input, OnInit  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
import { Works } from 'src/app/models/works.model';


@Component({
  selector: 'app-obra-modal-detail',
  templateUrl: './obra-modal-detail.component.html',
  styleUrls: ['./obra-modal-detail.component.scss']
})
export class ObraModalDetailComponent implements OnInit {

  @Input() data: any;
  @Input() color!: string;
  @Input() title!: string;
  @Input() icon: string = 'file-lines';
  @Input() actionButton: any;
  @Input() successBtnText: string = 'Ir';
  @Input() cancelBtnText: string = 'Cancelar';
  public work!:Works;
  public workSteps = WorkSteps;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.work = this.data;
  }

  public itemActionButton() {
    this.activeModal.close();
    this.actionButton();
  }

}
