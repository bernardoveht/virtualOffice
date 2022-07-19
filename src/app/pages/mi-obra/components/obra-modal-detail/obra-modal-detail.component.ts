import { Component, Input, OnInit  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
import { Works } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import * as worksActions from 'src/app/store/actions/works/works.actions';


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


  constructor(
    public activeModal: NgbActiveModal,
    private readonly store:Store<AppState>
    ) { }

  ngOnInit(): void {
    this.work = this.data;
  }

  public itemActionButton() {
    this.activeModal.close();
    this.actionButton();
    const work = {...this.work};
    this.store.dispatch(worksActions.getCurrentWorks({currentWork:work}));
  }

}
