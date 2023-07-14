import { CanActivateFn } from '@angular/router';

export const ProductDetailGuard: CanActivateFn = (route, state) => {
  return true;
};
