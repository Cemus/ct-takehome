import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpError } from '../../../models/http-error.model';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      const customError: HttpError = {
        status: err.status,
        message: err.error?.error || err.message || 'Erreur inconnue',
      };

      return throwError(() => customError);
    }),
  );
};
