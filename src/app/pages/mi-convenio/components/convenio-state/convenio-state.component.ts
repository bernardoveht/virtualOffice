import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProjectWorkflowTypes } from 'src/app/constants/enums/agreements.enum';
import { AppState } from 'src/app/store/app.reducers';
import { getAgreementsDetail } from 'src/app/store/selectors/agreement/agreement.selector';

@Component({
  selector: 'app-convenio-state',
  templateUrl: './convenio-state.component.html',
  styleUrls: ['./convenio-state.component.scss']
})
export class ConvenioStateComponent implements OnInit {

  public agreementState!:string;
  public allStates = ProjectWorkflowTypes;
  private agreementDetail$!:Subscription;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
        this.agreementDetail$ = this.store.pipe(select(getAgreementsDetail)).subscribe(a => {
      if (a) {
        this.agreementState = a.state;
      }
    });
  }
  ngOnDestroy(): void {
      this.agreementDetail$.unsubscribe();
  }
}
