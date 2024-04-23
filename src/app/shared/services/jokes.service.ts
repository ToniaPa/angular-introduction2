import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

// Promises deal with one asynchronous event at a time, while observables handle a sequence of asynchronous events over a period of time.
// An Observable is a collection of multiple input values that get processed using array methods such as map , reduce , filter , and so on. It comes in handy when handling asynchronous operations such as making HTTP requests, user-input events, and so on.

// Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:
// - The HTTP module uses observables to handle AJAX requests and responses
// - The Router and Forms modules use observables to listen for and respond to user-input events

@Injectable({
  //= Decorator that marks a class as available to be provided and injected as a dependency => ΔΗΛ του λέμε ότι η κλάση αυτή ΜΠΟΡΕΙ ΝΑ ΓΙΝΕΙ INJECT μέσα σε κάποιο άλλη κλάση! -> ο decorator αυτός δίνεται σε μας, ενώ εσωτερικά η angular δεν ξέρω αν τον χρησιμοποιει π.χ. για την HttpClient που κάνουμε inject παρακάτω, δεν υπάρχει το @Injectable στο .ts που έχει την class HttpClient δηλ για την HttpClient δεν δηλώνει ότι είναι @Injectable
  providedIn: 'root', //= The root option registers the service in the Root Module Injector of the Module Injector tree. This will make it available to the entire application.
}) // Marking a class with @Injectable ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected.
export class JokesService {
  // Sends an `HttpRequest` and returns a stream of `HttpEvent`s.
  // * @return An `Observable` of the response, with the response body as a stream of `HttpEvent`s.
  http: HttpClient = inject(HttpClient); //class HttpClient = Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests. Each request method has multiple signatures, and the return type varies based on the signature that is called (mainly the values of observe and responseType).

  //η http που είναι HttpClient επιστρέφει observables που απ'ότι κατάλαβα είναι ένας πινακας από observables ο οποίος είναι δεμένος με το http που φτιάξαμε με τον παραπάνω τρόπο => όλα όσα επιστρέφουν οι servers που χτυπάμε με το http που φτιάξαμε (κάνοντας get, post κλπ σε link) ειναι και ένα observable που μπαίνει στο array των observables του http

  //ΠΡΟΣΟΧΗ: εδώ βάζουμε τα observable από τα get στον πίνακα των observables που έχει δεθεί με το http μας, ΟΜΩΣ δεν έχουν ενεργοποιηθεί δηλ δεν εκτελούνται -> για να εκτελεστούν και να ενεργοποιηθεί η όλη διαδικασία πρέπει να κάνουμε SUBSCRIBE => δες http-client-example.ts

  getDadJoke() {
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      //<DadJoke> = interface στο '../interfaces/jokes'
      headers: {
        Accept: 'application/json',
      },
    }); //= η get returns Observable, επιστέφει ένα Observable που μπαίνει στο array των observables (που έχει δεθεί με το http μας)
  }

  getChuckNorrisJoke() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_JOKES_API_URL, {
      //<ChuckNorrisJoke> = interface στο '../interfaces/jokes'
      headers: {
        Accept: 'application/json',
      },
    }); //= η get returns Observable, επιστέφει ένα Observable που μπαίνει στο array των observables (που έχει δεθεί με το http μας)
  }
}
//ΠΡΟΣΟΧΗ: εδώ βάζουμε τα observable από τα get στον πίνακα των observables που έχει δεθεί με το http μας, ΟΜΩΣ δεν έχουν ενεργοποιηθεί δηλ δεν εκτελούνται -> για να εκτελεστούν και να ενεργοποιηθεί η όλη διαδικασία πρέπει να κάνουμε SUBSCRIBE => δες http-client-example.ts

// Observables provide a way to subscribe to and receive notifications when new data or events are emitted, enabling you to react to changes in real-time.
