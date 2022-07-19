import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Agreements } from 'src/app/models/agreements.model';
import { AppState } from 'src/app/store/app.reducers';
import { getAgreementsDetail } from 'src/app/store/selectors/agreement/agreement.selector';

@Component({
  selector: 'app-convenio-datos-generales-alternative',
  templateUrl: './convenio-datos-generales-alternative.component.html',
  styleUrls: ['../convenio-datos-generales/convenio-datos-generales.component.scss','./convenio-datos-generales-alternative.component.scss']
})
export class ConvenioDatosGeneralesAlternativeComponent implements OnInit,OnDestroy {
  public agreement!:Agreements;
  private agreementDetail$!:Subscription;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
        this.agreementDetail$ = this.store.pipe(select(getAgreementsDetail)).subscribe(a => {
      if (a) {
        this.agreement = a;
      }
    });
  }
  ngOnDestroy(): void {
      this.agreementDetail$.unsubscribe();
  }

}
