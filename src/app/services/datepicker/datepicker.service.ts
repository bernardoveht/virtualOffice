import { TranslationWidth } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES_ES: any = {
  weekdays: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
};

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }
  getWeekdayLabel(weekday: number, width?: TranslationWidth | undefined): any {
    return I18N_VALUES_ES.weekdays[weekday - 1];
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }

  getWeekdayShortName(weekday: number): any {
    return I18N_VALUES_ES.weekdays[weekday - 1];
  }
  getMonthShortName(month: number): any {
    return I18N_VALUES_ES.months[month - 1];
  }
  getMonthFullName(month: number): any {
    return this.getMonthShortName(month);
  }
}