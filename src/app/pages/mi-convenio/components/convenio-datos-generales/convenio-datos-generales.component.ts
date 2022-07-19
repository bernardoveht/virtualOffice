import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Agreements } from 'src/app/models/agreements.model';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { AppState } from 'src/app/store/app.reducers';
import { getAgreementsDetail } from 'src/app/store/selectors/agreement/agreement.selector';

@Component({
  selector: 'app-convenio-datos-generales',
  templateUrl: './convenio-datos-generales.component.html',
  styleUrls: ['./convenio-datos-generales.component.scss']
})
export class ConvenioDatosGeneralesComponent implements OnInit, OnDestroy {
  public itemsTotal: AmountInformationItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto Total',
      amount: 3000,
      type: 'money',
    }
  ];
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
