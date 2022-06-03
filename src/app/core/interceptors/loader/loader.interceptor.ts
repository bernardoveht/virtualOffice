import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader/loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requestCounter = 0;

  constructor(private loaderSv: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    // count new request
    this.requestCounter++;
    if (!this.loaderSv.isLoading.value) {
      // show loader
      this.loaderSv.show();
    }

    return next.handle(req).pipe(
      finalize(() => {debugger
        this.requestCounter--;
        if (this.requestCounter === 0) {
          // all request finalize
          this.loaderSv.hide();
        }
      })
    );
  }
}
