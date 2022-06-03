import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  public isLoading: Subject<boolean>;
  public classLoading: Subject<string>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
    this.classLoading = this.loaderService.classLoading;
  }
}
