import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: req.headers.append('AUTH_TOKEN', 'token123'),
    withCredentials: true,
  });
  return next(newReq);
};
