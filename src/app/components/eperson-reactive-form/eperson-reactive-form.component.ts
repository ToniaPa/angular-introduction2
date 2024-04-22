import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-eperson-reactive-form',
  standalone: true,
  imports: [
    //= εδώ είναι τα dependencies του component αυτού
    ReactiveFormsModule, //= FormGroup, FormControl
    MatFormFieldModule, //όλα τα παρακάτω είναι Material Design (της angular)
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css',
})

//***ΤΟ ΠΑΡΟΝ ΔΕΝ ΕΙΝΑΙ ΑΥΤΟΝΟΜΟ, ΚΑΛΕΊΤΑΙ ΑΠΌ ΤΗΝ reactive-form-example.component.html*/

export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>(); //εδώ του λέμε ότι ο handler του event emit ονομάζεται person => ουσιαστικά δημιουργούμε δικό μας event δηλ δημιουργούμε ένα custom event και του δίνουμε όνομα, εν προκειμένω το ονομάσαμε person, αντίστοιχο π.χ. του click, dblclick, blur κλπ
  // EventEmitter = Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.  
  //   Access the event object with the $event argument passed to the output event handler:
  // <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>

  form = new FormGroup({ //form το ονομάζουμε εμείς, θα μπορούσαμε να το πούμε vagelis -> το περνάμε στο .html του παρόντος ως: [formGroup]="form"
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [ //= array of validators επειδή έχουμε περισσότερους από έναν
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required),
  });

  onSubmit(value: any) {
    //στο click του button Submit (το click event μας το δίνει το button) του λέμε (με την παρακάτω γραμμή) να εκτελεστεί το this.person δηλ να εκτελεστεί το custom event που φτιάξαμε και που το ονομάσαμε person (δες στην αρχή) -> το person (custom event) είναι @Output
    //value as EPerson = είναι type cast που το κάνει το angular
    this.person.emit(value as EPerson); //emit = εκμπέμπω, στέλνει το person
    //το person (που είναι custom event) το λαμβάνει το reactive-form-example.html το οποίο έχει μέσα του το παρόν δηλ έχει μέσα του το:
        //   <app-eperson-reactive-form
        //   (person)="onPerson($event)"
        // ></app-eperson-reactive-form>
    // το angular δίνει το $event ώστε να κάνουμε access στα data του person (custom event) τα οποία στέλνουμε από εδώ, η onPerson εκτελείται στην reactive-form-example.ts
    //***ΤΟ ΠΑΡΟΝ ΔΕΝ ΕΙΝΑΙ ΑΥΤΟΝΟΜΟ, ΚΑΛΕΊΤΑΙ ΑΠΌ ΤΗΝ reactive-form-example.component.html*/
    this.form.reset(); //αφού το στείλει καθαρίζει τα πεδία της form
    //δες στο τέλος του eperson-reactive-form.html:
        //   <button
        //   mat-flat-button
        //   color="primary"
        //   [disabled]="form.invalid"
        //   (click)="onSubmit(form.value)"
        // >
        //   Submit
        // </button>
  }
}
