import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { EPerson } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [ //= εδώ είναι τα dependencies του παρόντος component
    EpersonTemplateDrivenFormComponent,
    PersonTableComponent,
    SimpleDatatableComponent
  ],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})

//το angular framework δημιουργεί μία κλάση για κάθε component (που την κάνει export)
export class TemplateDrivenFormExampleComponent {
  currentPerson: EPerson; //είναι το Eperson που κάνει submit η eperson-template-driven-form-example
  persons: EPerson[] = [];
  
  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
