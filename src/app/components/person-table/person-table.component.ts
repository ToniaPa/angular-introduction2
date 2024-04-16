import { Component, Input } from '@angular/core';
import { EPerson, Person } from 'src/app/shared/interfaces/person';

//  ΤΟ ΤΡΕΧΟΥΜΕ ΜΕ ng serve ΣΤΟ TERMINAL, ΟΝΤΑΣ ΣΤΟΝ ΦΑΚΕΛΟ ΤΟΥ PROJECT
// ΠΗΓΑΙΝΩ ΣΤΟΝ BROWSER: http://localhost:4200/ 

// Καθε component που φτιάχνουμε με ng generate component 
// είναι μία κλάση

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
 
// ΤΟ ΠΑΡΟΝ ΚΑΛΕΙΤΑΙ ΑΠΌ ΤΟ for-directive-component.ts //
// ΚΑΙ ΑΠΟ ΤΟ component-input-example.ts & template-driven-form-example
// (ΔΕΣ ΤΟ import ΣΤΟ @Component)
// ΔΕΝ ΚΑΛΕΙΤΑΙ ΑΠ'ΕΥΘΕΙΑΣ ΑΛΛΑ ΧΡΗΣΙΜΕΎΕΙ ΣΤΑ ΔΥΟ ΠΑΡΑΠΑΝΩ
// ΤΑ data ΔΕΝ ΕΊΝΑΙ ΕΔΩ ΑΛΛΑ ΕΊΝΑΙ ΣΤΑ ΔΥΟ ΠΑΡΑΠΑΝΩ, ΕΔΩ ΕΙΝΑΙ Η ΜΟΡΦΗ ΤΩΝ DATA

export class PersonTableComponent {

  // @Input() = Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.

  // δήλωση της μεταβλητής, εδώ δεν περνάμε data:
  @Input() person: Person | EPerson | undefined;

  //Person & EPerson είναι και τα δύο interfaces που τα έχουμε φτιάξει εμείς
  //και βρίσκονται στο person.ts, στον φάκελο shared (και αυτόν τον φτιάξαμε εμείς)

  isPerson() { //φτιάχνουμε δική μας μέθοδο
    return this.person && 'address' in this.person;
  }

  isEPerson() { //φτιάχνουμε δική μας μέθοδο
    return this.person && 'education' in this.person;
  }

  // Πως περνάμε data? -> δες app.component.ts KAI app.component.html
  //                      στο .ts έχουμε γράψει (εκεί βρίσκονται τα data): 
  // person: Person = { 
    // givenName: 'Tonia',
    // surName: 'Papadogiorgaki',
    // age: 115,
    // email: 'onetwo@aueb.gr',
    // address: "Road to nowhere"
  // }
}
