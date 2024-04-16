import { Component, Inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

//από το https://material.angular.io/cdk/dialog/overview
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({ //=του λέμε ότι είναι Angular Component με το configuration:
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent, DialogModule], //το DialogModule είναι της Angular
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  //από το https://material.angular.io/cdk/dialog/overview
  constructor(public dialog: Dialog) {};

  onPersonClicked(person: EPerson) {
    // console.log('Person clicked:', person);
    // alert(this.personTemplate(person));

    //από το https://material.angular.io/components/dialog/overview
    this.dialog.open(PersonDialogComponent, {
      data: person,
    });
  }

  personTemplate(person: EPerson) { //χρησιμοποιείται στο onPersonClicked (πιο πάνω), αλλά έχει απενεργοποιηθεί
    return `
              Person Details:

              First Name: ${person.givenName}
              Last Name: ${person.surName}
              Age: ${person.age}
              Email: ${person.email}
              Education: ${person.education}
           `;
  }
}

//χειρoκίνητο component, το φτιάχνουμε εμείς
@Component({
  imports: [PersonTableComponent],
  standalone: true,
  template: `
    <app-person-table [person]="person"></app-person-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">
      Close
    </button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ],
})

class PersonDialogComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public person: EPerson,
  ) {}
}
