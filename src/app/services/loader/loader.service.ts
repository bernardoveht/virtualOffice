import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading: BehaviorSubject<boolean>;
  public classLoading: BehaviorSubject<string>;

  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
    this.classLoading = new BehaviorSubject<string>('loader');
  }

  public show(): void {
    this.isLoading.next(true);
  }

  public hide(): void {
    this.classLoading.next('loader');
    this.isLoading.next(false);
  }

  public blockUI() {
    this.classLoading.next('overlay');
  }
}
