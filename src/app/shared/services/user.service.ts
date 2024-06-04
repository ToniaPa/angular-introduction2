import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


// *** O USER έρχεται από το user-registration component *** //

const API_URL = `${environment.apiURL}/user`; //δες apiURL -> src/environments/environment.ts

@Injectable({ //εδώ ΔΕΝ έχουμε inject() αλλά @Injectable => το παρόν μπορεί να γίνει Inject σε άλλη κλάση (έτσι θα φτιάξουμε dependency injection στην άλλη κλάση)
  providedIn: 'root', //του λέμε ότι είναι @Injectable σε όλο το app => μπορούν όλες οι κλάσεις της app μας να το κάνουν inject
})

export class UserService {
  http: HttpClient = inject(HttpClient); //εγώ είμαι ο HttpClient, εγώ ζητάω υπηρεσίες από έναν server
  //http: HttpClient του λέμε ότι η μεταβλητή μας http είναι data type HttpClient (= class)

  user = signal<LoggedInUser | null>(null) //signal =  εδώ ΟΡΙΖΟΥΜΕ ένα signal, μου το δίνει το angular framework, & του λέμε ότι θα γίνει null μετά που θα βάλουμε το username & password (= interface LoggedInUser) => έτσι μηδενίζονται όλα τα πεδία μετά το Submit (=> δεν φαίνονται οι τιμές τους)
  // *** --> A signal's value is always read through a getter function, which allows Angular to track where the signal is used -> Signals are getter functions - calling them reads their value => ΔΗΛΑΔΗ ΕΝ ΠΡΟΚΕΙΜΕΝΩ, ΓΡΑΦΟΝΤΑΣ ΚΑΠΟΥ ΣΤΟΝ ΚΩΔΙΚΑ this.user() ΟΥΣΙΑΣΤΙΚΑ ΓΡΑΦΟΥΜΕ ΤΗΝ Getter function ΚΑΙ ΠΑΙΡΝΟΥΜΕ ΤΗΝ ΤΙΜΗ ΤΟΥ SIGNAL (σημ.: η user() έχει παρενθέσεις)***//

  // Signals, introduced in Angular 16, they are a wrapper around a value that can notify interested consumers when the value changes. Compared to observables, signals are much simpler to create and use, so they make sense for a wide range of asynchronous operations within Angular.
//   Signals can contain any value, from simple primitives to complex data structures.
// Signals may be either writable or read-only.

  router: Router = inject(Router); //= dependency injection

  constructor() { //constructor της class UserService
    // login με:
    // username: tonia@aueb.gr, iraklis@aueb.gr, adonis@aueb.gr
    // password: 1234

    const access_token = localStorage.getItem('access_token'); //localStorage = μας το δίνει η angular -> There are essentially three ways to store information for usage in your Angular app: as variable, as local storage, or on a database. Local Storage in Angular JS allows the developers to store some data in the browser itself to access it almost instantly without any HTTP request. Local Storage in the Website allows the users to save the data in the form of key-value pairs. -> Where is localStorage stored? In Google Chrome, web storage data is saved in an SQLite file in a subfolder in the user's profile. The subfolder is located at C:\Users\papad\AppData\Local\Google\Chrome\User Data\Default\Local Storage on Windows machines 
    // C:\Users\papad\AppData\Local\Google\Chrome\User Data\Default\Cache
    // and ~/Library/Application Support/Google/Chrome/Default/Local Storage on macOS.
    if(access_token) { //= αν υπάρχει (έχει μέσα του κωδικοποιημένη την πληροφορία για το ποιος είναι ο User που έχει access)
      const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser; //.sub εδώ μέσα είναι ό,τι έχει το access_token, με τα as κάνουμε type cast
      this.user.set({ //EΔΩ ΕΙΝΑΙ Η Setter function ΤΟΥ SIGNAL (γρ. 17), με SET we change it directly, Υπάρχει και το update to compute a new value from the previous one: this.user.update(value => value + 1);
        fullname: decodedTokenSubject.fullname, //εμφανίζουμε το ονοματεπώνυμο του Logged in χρήστη στην σελίδα μας εφόσον έχει κάνει Login 
        email: decodedTokenSubject.email
      });
    }

    //διαβάζουμε το παραπάνω signal: το EFFECT έχει πρόσβαση σε όλα τα signals
    //το βάζουμε στον constructor (υπάρχει λόγος, διάβασε παρακάτω, μετά το τέλος του effect). Στο help της angular γραφει ότι τα EFFECT δεν πολυχρησιμοποιούνται, εκτός εξαιρέσεων. μία εκαίρεση είναι το logging (όπως εδώ).
    // Signals are useful because they can notify interested consumers when they change. An EFFECT is an operation that runs whenever one or more signal values change. You can create an EFFECT with the effect function:
    // effect(() => {
    //   ...
    // });
    // Effects always execute asynchronously, during the change detection process
    effect(() => { //εδώ είμαστε μέσα στον constructor 
      if (this.user()) {//= διαβάζουμε το signal user καλώντας το σαν function!, έχει παρενθέσεις => εδώ είναι η Getter function ΤΟΥ SIGNAL (δες γρ. 17)
        console.log('User Logged In: ', this.user().fullname)
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
  //***ΔΕΝ ΕΧΩ ΚΑΤΑΛΑΒΕΙ ΠΩΣ ΤΟ ΠΑΡΟΝ ΚΑΛΕΙ ΤΟ user_blueprint.py***// 
  
  // export interface User {
  //   givenName: string;
  //   surName: string;
  //   email: string;
  //   password: string;
  // } από το ../interfaces/user'
  registerUser(user: User) {
    console.log('user.service.ts (registerUser) στοιχεία του user (step 1): ', user)
    console.log(`'user.service.ts (registerUser) url (step 1): ${API_URL}/register`);
    return this.http.post<{ msg: string }>(`${API_URL}/register`, user); //κάνουμε return! για να πάρουμε το response, την απάντηση από τον server
    
    //εδώ του στέλνουμε data, συγκεκριμένα τον user, με post
    //αυτά τα data θα περάσουν ως json στο backend -> θα πάνε στο angular-introduction-python-backend->user_blueprint.py και θα εκτελέσουν την @user.route("/register", methods=["POST"]), εκεί έχει την εντολή: 
    // data = request.get_json(),
    //     το get_json() είναι ο user που του περνάμε εδώ
    //ΤΟ ΙΔΙΟ ΓΙΝΕΤΑΙ ΚΑΙ ΜΕ ΤΙΣ ΠΑΡΑΚΑΤΩ ΕΝΤΟΛΕΣ -> ΟΛΕΣ ΠΑΝΕ ΣΤΟ angular-introduction-python-backend->user_blueprint.py

    //***ΔΕΝ ΕΧΩ ΚΑΤΑΛΑΒΕΙ ΠΩΣ ΤΟ ΠΑΡΟΝ ΚΑΛΕΙ ΤΟ user_blueprint.py***// 
  }

  check_duplicate_email(email: string) {
    console.log(`check_duplicate_email url: ${API_URL}/check_duplicate_email/${email}`);
    return this.http.get<{ msg: string }>(
      //εδώ καλεί την @user.route("/check_duplicate_email/<string:email>", methods=["GET"]) του user_blueprint.py που βρίσκεται στο angular-introduction-python-backend
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    
    //***ΔΕΝ ΕΧΩ ΚΑΤΑΛΑΒΕΙ ΠΩΣ ΤΟ ΠΑΡΟΝ ΚΑΛΕΙ ΤΟ user_blueprint.py***// 

    //εδώ καλεί την @user.route("/login", methods=["POST"]) του user_blueprint.py που βρίσκεται στο angular-introduction-python-backend
    console.log(`loginUser url: ${API_URL}/login, from user.services.ts`);
    //{ access_token: string }> = είναι αυτό που επιστρέφει το post
    //αυτό το access_token στην συνέχεια το παίρνουμε στην onSubmit() της user-login.ts, μέσα στο next (στην γραμμή 40: const access_token = response.access_token;) 
    //από πού έχει έρθει το access_token? έχει έρθει από την εκτέλεση της @user.route("/login", methods=["POST"]) στο user_blueprint.py (είναι python κώδικας) => από εκεί έρχεται εδώ και από εδώ πηγαίνει στο onSubmit() της user-login.ts, μέσα στο next
    return this.http.post<{ access_token: string }>(
      `${API_URL}/login`, 
      credentials,
    );
  };
  //-τελος της επικοινωνίας με το angular-introduction-python-backend->user_blueprint.py -//

  logoutUser() {
    this.user.set(null); // κάνουμε Null το signal
    //το signal θέλει setter, ο user είναι signal
    localStorage.removeItem('access_token');
    //ο router είναι ένα servce (το δίνει η angular)
// , τα services τα κάνουμε inject6yyyyyyyy
    this.router.navigate(['login']); //μπορούμε να το βάλουμε χωρίς /login  (χωρίς το: /) γιατί θα ψάξει το όνομα και μετά θα το βάλει το angular σωστά (θα προσθέσει το /), αυτό γίνεται γιατί υπάρχουν path με πολλά / συνεχόμενα π.χ. //, αλλά έτσι τα πράγματα γίνονται εύκολα (έχει φροντίσει το angular, αυτή το κάνει αυτό)
  }

}
