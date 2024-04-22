import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/user`; //δες src/environments/environment.ts;

@Injectable({ //εδώ ΔΕΝ έχουμε inject() αλλά @Injectable => το παρόν μπορεί να γίνει Inject σε άλλη κλάση (έτσι θα φτιάξουμε dependency injection στην άλλη κλάση)
  providedIn: 'root', //του λέμε ότι είναι @Injectable σε όλο το app => μπορούν όλες οι κλάσεις της app μας να το κάνουν inject
})

export class UserService {
  http: HttpClient = inject(HttpClient); //http: HttpClient του λέμε ότι η μεταβλητή μας http είναι data type HttpClient (= class)

  user = signal<LoggedInUser | null>(null) //signal = μου το δίνει το angular framework, εδώ του λέμε ότι θα γίνει null μετά που θα βάλουμε το username & password -> κι έτσι δεν φαίνονται

  // Signals, introduced in Angular 16, they are a wrapper around a value that can notify interested consumers when the value changes. Compared to observables, signals are much simpler to create and use, so they make sense for a wide range of asynchronous operations within Angular.
//   Signals can contain any value, from simple primitives to complex data structures.
// A signal's value is always read through a getter function, which allows Angular to track where the signal is used.
// Signals may be either writable or read-only.

router: Router = inject(Router);

  constructor() {
    // login με:
    // chfrag@aueb.gr
    // 1234

    const access_token = localStorage.getItem('access_token');   //-ΠΡΟΒΛΗΜΑ
    if(access_token) {
      const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser;
      this.user.set({
        // fullname: '', //test
        // email: '' //test
        fullname: decodedTokenSubject.fullname,
        email: decodedTokenSubject.email
      });
    }
    //-ΠΡΟΒΛΗΜΑ

    //διαβάζουμε το παραπάνω signal: το effect έχει πρόσβαση σε όλα τα signals
    //το βάζουμε στον constructor (υπάρχει λόγος, διάβασε παρακάτω)
    // Signals are useful because they can notify interested consumers when they change. An effect is an operation that runs whenever one or more signal values change. You can create an effect with the effect function
    // effect(() => {
    //   ...
    // });
    // Effects always execute asynchronously, during the change detection process
    effect(() => {
      if (this.user()) {//= διαβάζουμε το signal user καλώντας το σαν function!, έχει παρενθέσεις
        console.log('User Logged In', this.user().fullname)
      } else {
        console.log('No user Logged In')
      }
    })
    // By default, registering a new effect with the effect() function requires an injection context (access to the inject function). The easiest way to provide this is to call effect within a component, directive, or service constructor -> με το να το βάλουμε στον constructor το κάνουμε inject στην κλάση/component/directive (είναι ένας τρόπος για dependency injection, ένας άλλος τρόπος είναι με την εντολή inject(...))
  }

  registerUser(user: User) {
    return this.http.post<{ msg: string }>(`${API_URL}/register`, user);
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ msg: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ access_token: string }>(
      `${API_URL}/login/`,
      credentials,
    );
  };

  logoutUser() {
    this.user.set(null); // κάνουμε Null το signal
    //το signal θέλει setter
    localStorage.removeItem('access_token');
    this.router.navigate(['login']); //μπορούμε να το βάλουμε χωρίς /login γιατί θα ψάξει το όνομα και μετά θα το βάλει το angular σωστά, αυτό γίνεταιαι γιατί υπάρχουν path με πολλά / κι έτσι τα πράγματα γίνονται εύκολα
  }

}
