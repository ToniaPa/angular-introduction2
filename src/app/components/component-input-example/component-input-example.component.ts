import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person'; //εμείς φτιάξαμε το Person.ts, όπως και τον φάκελο shared, και τον υποφάκελο interfaces
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({ //= ΤΟΥ ΛΕΜΕ ΟΤΙ ΕΙΝΑΙ ANGULAR COMPONENT ME TO ΠΑΡΑΚΑΤΩ CONFIGURATION:
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent], //EΔΩ ΚΑΛΟΥΜΕ ΤΟ person-table component
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})

export class ComponentInputExampleComponent {

  //τα data μας --> δες το component-input-example.html για το γιατι εμφανίζονται στην σελίδα της εφαρμογής μας
 
  //το Person το δημιουργήσαμε εμείς, είναι interface και το φτιάξαμε στον φάκελο shared (που τον δημιουργήσαμε και αυτόν)

  person0: Person = {
    givenName: 'Tonia',
    surName: "Papadogiorgaki",
    age: 155,
    email: 'onetwo@aueb.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'John',
    surName: "Doe",
    age: 75,
    email: 'doe@aueb.gr',
    address: 'New York, USA'
  };
}
