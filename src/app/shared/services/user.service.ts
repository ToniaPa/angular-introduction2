import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/user`; //δες src/environments/environment.ts: 
// export const environment = {
//   production: true,
//   apiURL: 'https://coding-factory-api.ddns.net',
// };

@Injectable({ //εδώ ΔΕΝ έχουμε inject() αλλά @Injectable => το παρόν μπορεί να γίνει Inject σε άλλη κλάση (έτσι θα φτιάξουμε dependency injection στην άλλη κλάση)
  providedIn: 'root', //του λέμε ότι είναι @Injectable σε όλο το app => μπορούν όλες οι κλάσεις της app μας να το κάνουν inject
})

export class UserService {
  http: HttpClient = inject(HttpClient); //http: HttpClient του λέμε ότι η μεταβλητή μας http είναι data type HttpClient (= class)

  user = signal<LoggedInUser | null>(null) //signal =  εδώ ΟΡΙΖΟΥΜΕ ένα signal, μου το δίνει το angular framework, & του λέμε ότι θα γίνει null μετά που θα βάλουμε το username & password (= interface LoggedInUser)-> μηδενίζονται όλα τα πεδία μετά το Submit (=> δεν φαίνονται οι τιμές τους)
  // *** --> A signal's value is always read through a getter function, which allows Angular to track where the signal is used -> Signals are getter functions - calling them reads their value => ΔΗΛΑΔΗ ΕΝ ΠΡΟΚΕΙΜΕΝΩ, ΓΡΑΦΟΝΤΑΣ ΚΑΠΟΥ ΣΤΟΝ ΚΩΔΙΚΑ this.user() ΟΥΣΙΑΣΤΙΚΑ ΓΡΑΦΟΥΜΕ ΤΗΝ Getter function ΚΑΙ ΠΑΙΡΝΟΥΜΕ ΤΗΝ ΤΙΜΗ ΤΟΥ SIGNAL***//

  // Signals, introduced in Angular 16, they are a wrapper around a value that can notify interested consumers when the value changes. Compared to observables, signals are much simpler to create and use, so they make sense for a wide range of asynchronous operations within Angular.
//   Signals can contain any value, from simple primitives to complex data structures.
// Signals may be either writable or read-only.

router: Router = inject(Router);

  constructor() {
    // login με:
    // username: chfrag@aueb.gr
    // password: 1234

    const access_token = localStorage.getItem('access_token'); //localStorage = μας το δίνει η angular -> There are essentially three ways to store information for usage in your Angular app: as variable, as local storage, or on a database. Local Storage in Angular JS allows the developers to store some data in the browser itself to access it almost instantly without any HTTP request. Local Storage in the Website allows the users to save the data in the form of key-value pairs. -> Where is localStorage stored? In Google Chrome, web storage data is saved in an SQLite file in a subfolder in the user's profile. The subfolder is located at \AppData\Local\Google\Chrome\User Data\Default\Local Storage on Windows machines and ~/Library/Application Support/Google/Chrome/Default/Local Storage on macOS.
    if(access_token) {
      const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser;
      this.user.set({ //EΔΩ ΕΙΝΑΙ Η Setter function ΤΟΥ SIGNAL, με SET we change it directly, Υπάρχει και το update to compute a new value from the previous one: this.user.update(value => value + 1);
        fullname: decodedTokenSubject.fullname,
        email: decodedTokenSubject.email
      });
    }

    //διαβάζουμε το παραπάνω signal: το EFFECT έχει πρόσβαση σε όλα τα signals
    //το βάζουμε στον constructor (υπάρχει λόγος, διάβασε παρακάτω, μετά το τέλος του effect). Στο help της angular γραφει ότι τα EFFECT δεν πολυχρησιμοποιούνται, εκτός εξαιρέσεων. μία είναι το logging όπως εδώ.
    // Signals are useful because they can notify interested consumers when they change. An EFFECT is an operation that runs whenever one or more signal values change. You can create an EFFECT with the effect function:
    // effect(() => {
    //   ...
    // });
    // Effects always execute asynchronously, during the change detection process
    effect(() => {
      if (this.user()) {//= διαβάζουμε το signal user καλώντας το σαν function!, έχει παρενθέσεις => εδώ είναι η Getter function ΤΟΥ SIGNAL
        console.log('User Logged In', this.user().fullname)
      } else {
        console.log('No user Logged In')
      }
    })
    // By default, registering a new effect with the effect() function requires an injection context (access to the inject function). The easiest way to provide this is to call effect within a component, directive, or service constructor -> με το να το βάλουμε στον constructor το κάνουμε inject στην κλάση/component/directive (είναι ένας τρόπος για dependency injection, ένας άλλος τρόπος είναι με την εντολή inject(...))
    // This means that effects created within components are destroyed when the component is destroyed. The same goes for effects within directives, services, etc.

  }
  //-τα παραπάνω είναι για το User Login -//

  //-τα παρακάτω είναι για το User Registration -//

  // *** ΟΛΕΣ OI ΠΑΡΑΚΑΤΩ FUNCTIONS ΠΑΝΕ ΣΤΟ angular-introduction-python-backend->user_blueprint.py ***//
  
  // export interface User {
  //   givenName: string;
  //   surName: string;
  //   email: string;
  //   password: string;
  // } από το ../interfaces/user'
  registerUser(user: User) {
    console.log('inside registerUser of user.service.ts: ', user)
    return this.http.post<{ msg: string }>(`${API_URL}/register`, user);
    //εδώ του στέλνουμε data, συγκεκριμένα τον user, με post
    //αυτά τα data θα περάσουν ως json στο backend -> θα πάνε στο angular-introduction-python-backend->user_blueprint.py και θα εκτελέσουν την @user.route("/register", methods=["POST"]), εκεί έχει την εντολή data = data = request.get_json() το get_json() είναι ο user εδώ
    //ΤΟ ΙΔΙΟ ΓΙΝΕΤΑΙ ΚΑΙ ΜΕ ΤΙΣ ΠΑΡΑΚΑΤΩ ΕΝΤΟΛΕΣ -> ΟΛΕΣ ΠΑΝΕ ΣΤΟ angular-introduction-python-backend->user_blueprint.py
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ msg: string }>(
      //εδώ καλεί την @user.route("/check_duplicate_email/<string:email>", methods=["GET"]) του user_blueprint.py που βρίσκεται στο angular-introduction-python-backend
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    //εδώ καλεί την @user.route("/login", methods=["POST"]) του user_blueprint.py που βρίσκεται στο angular-introduction-python-backend
    return this.http.post<{ access_token: string }>(
      `${API_URL}/login/`, 
      credentials,
    );
  };
  //-τελος της επικοινωνίας με το angular-introduction-python-backend->user_blueprint.py -//

  logoutUser() {
    this.user.set(null); // κάνουμε Null το signal
    //το signal θέλει setter
    localStorage.removeItem('access_token');
    this.router.navigate(['login']); //μπορούμε να το βάλουμε χωρίς /login γιατί θα ψάξει το όνομα και μετά θα το βάλει το angular σωστά, αυτό γίνεταιαι γιατί υπάρχουν path με πολλά / κι έτσι τα πράγματα γίνονται εύκολα
  }

}
