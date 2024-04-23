import { Component, OnInit, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokesService } from 'src/app/shared/services/jokes.service';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css',
})

export class HttpClientExampleComponent implements OnInit { // OnInit (interface) = A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.

  jokesService = inject(JokesService); //εδώ έχουμε Dependency Injection, συγκεκριμένα κάνουμε field initialize (του jokesService) με dependency injection (JokesService = A token that represents a dependency that should be injected)
  dadJoke = '';
  chuckNorrisJoke = '';

  // Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them.
  // Calls to the inject() function outside of the class creation context will result in error => ΠΡΕΠΕΙ ΝΑ ΓΙΝΟΝΤΑΙ ΕΝΤΟΣ ΤΟΥ export class τάδε {...}. Most notably, calls to inject() are disallowed after a class instance was created, in methods => δηλ ΔΕΝ ΜΠΟΡΟΥΜΕ να κάνουμε dependency injection ENTOΣ μίας μεθόδου που έχουμε εδώ (μέσα στην κλάση)! ΟΜΩΣ μπορούμε να κάνουμε μέσα στον Constructor της κλάσης !!

  ngOnInit(): void {
    // this.jokesService.getDadJoke().subscribe((data: DadJoke) => {
    //   console.log(data.joke);
    //   this.dadJoke = data.joke;
    // });
    this.refreshDadJoke();
    // this.jokesService
    //   .getChuckNorrisJoke()
    //   .subscribe((data: ChuckNorrisJoke) => {
    //     console.log(data.value);
    //     this.chuckNorrisJoke = data.value;
    //   });
    this.refreshChuckNorrisJoke();
  }

  // Observables provide a way to subscribe to and receive notifications when new data or events are emitted (=εμπέμπω, βγάζω φωνή), enabling you to react to changes in real-time.

// The HTTP module uses observables to handle AJAX requests and responses
// The Router and Forms modules use observables to listen for and respond to user-input events (οπως εδώ με το routerLink και το FormModule κλπ)

  refreshDadJoke() {
    //στην getDadJoke είναι η HTTP get (δες src/app/shared/services/jokes.service')
    this.jokesService.getDadJoke().subscribe((data: DadJoke) => { //(data: DadJoke) = δηλώνουμε ότι τα data είναι data type: DadJoke = interface στο '../interfaces/jokes'
      console.log(data); //το βάζουμε οπωσδήποτε γιατί έτσι μονο βλέπουμε τι επιστρέφει το get από το συγκεκριμένο url -> έτσι είδαμε ότι επιστρέφει string
      this.dadJoke = data.joke; //το {{ dadJoke }} εμφανίζουμε στο http-client-example.html
    });
    // `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It defines what will be emitted (= εκμπέμπω) by an Observable, and when it be will emitted. This means
  // that calling `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often the thought.
  // * Apart from starting the execution of an Observable, this method allows you to listen for values that an Observable emits, as well as for when it completes or errors.
  }

  //πως γίνεται το παραπάνω?
  // * The  way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
  //  * This means you can provide three functions as arguments to `subscribe`, where the first function is equivalent
  //  * of a `next` method, the second of an `error` method and the third of a `complete` method. Just as in case of an Observer,
  //  * if you do not need to listen for something, you can omit a function by passing `undefined` or `null`,
  //ΔΕΣ user-login.ts (εδώ δεν χρειάζεται όλο αυτό γιατί δεν μας ενδιαφέρει )


  refreshChuckNorrisJoke() {
    this.jokesService
      .getChuckNorrisJoke() //στην getChuckNorrisJoke είναι η HTTP get (δες src/app/shared/services/jokes.service')
      .subscribe((data: ChuckNorrisJoke) => { //(data: ChuckNorrisJoke) = δηλώνουμε ότι τα data είναι data type: ChuckNorrisJoke = interface στο '../interfaces/jokes'
        console.log(data); //το βάζουμε οπωσδήποτε γιατί έτσι μονο βλέπουμε τι επιστρέφει το get από το συγκεκριμένο url -> έτσι είδαμε ότι επιστρέφει string
        this.chuckNorrisJoke = data.value; //το {{ chuckNorrisJoke }} εμφανίζουμε στο http-client-example.html
      });
  }
} 