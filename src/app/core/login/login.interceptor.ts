import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessagesService } from 'src/app/services/messages.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private readonly messageSv:MessagesService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        if(httpErrorResponse.status === 400){
          return this.handle400Error(httpErrorResponse);
        }
        return throwError(httpErrorResponse);
      })
    );
  }
  private handle400Error(httpErrorResponse: HttpErrorResponse): Observable<never> {
    const error = httpErrorResponse.error;

    if (error.errorDescription && error.errorDescription.length) {
      const message = error.errorDescription;
        this.messageSv.createToastError(message);        
    } else {
        this.messageSv.createToastError('Error inesperado');
    }
    return throwError(httpErrorResponse.error);
  }
}
