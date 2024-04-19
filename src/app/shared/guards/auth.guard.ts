import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  //χρησιμοποιεί το userService για να δει αν κάποιος είναι logged in
  const userService = inject(UserService); //= user.service.ts στον φάκελο services, εμείς το έχουμε φτιάξει
  const router = inject(Router); //= angular

  // TO ΠΑΡΟΝ ΤΟ χρησιμοποιούμε στο app.routes.ts (δες path: 'restricted-content-example, προσθέσαμε το canActivate:[authGuard])

  if (userService.user()) {
    return true; //true = επιτρέπει την πρόσβαση
  }

  return router.navigate(['login']); //= false το παραπάνω if -> εδώ κάνουμε redirect στο 'login' το οποίο στο app.routes.ts είναι:     path: 'login',
  //component: UserLoginComponent δηλ κάνουμε redirect στο UserLoginComponent
};
