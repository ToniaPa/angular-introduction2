import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

// CanActivateFn = The signature of a function used as a canActivate guard on a Route. If all guards return true, navigation continues. If any guard returns false, navigation is cancelled. If any guard returns a UrlTree, the current navigation is cancelled and a new navigation begins to the UrlTree returned from the guard.
export const authGuard: CanActivateFn = (route, state) => { //έτσι δηλώνεται (=angular), η callback είναι async (=angular), επιστρέφει μία τιμή 

  //χρησιμοποιούμε το userService για να δει αν κάποιος είναι logged in
  const userService = inject(UserService); //= user.service.ts στον φάκελο services, εμείς το έχουμε φτιάξει
  const router = inject(Router); //= angular Router

  // TO ΠΑΡΟΝ ΤΟ χρησιμοποιούμε στο app.routes.ts (δες path: 'restricted-content-example, προσθέσαμε το canActivate:[authGuard])

  if (userService.user()) { //= getter του signal το οποίο είναι στην user.service.ts (γρ.17: user = signal<LoggedInUser | null>(null)) -> εδώ ελέγχουμε εάν έχει τιμή και δεν είναι Null και
    //= ελέγχει αν ο user έχει τα credentials που πρέπει
    return true; //true = επιτρέπει την πρόσβαση
  }

  return router.navigate(['login']); //= false του παραπάνω if -> εδώ κάνουμε redirect στο 'login' το οποίο στο app.routes.ts είναι:     path: 'login',
  //component: UserLoginComponent δηλ κάνουμε redirect στο UserLoginComponent
};
