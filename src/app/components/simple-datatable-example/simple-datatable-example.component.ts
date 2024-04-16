import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({ //=του λέμε ότι είναι Angular Component με το configuration:
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDatatableComponent], //= εδώ είναι τα dependencies
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})

//ΤΟ ΠΑΡΟΝ ΧΡΗΣΙΜΟΠΟΙΕΙ ΤΟ Simple DataTable Component //

export class SimpleDatatableExampleComponent {
  manyperson = ManyPerson; //= τα data μου -> το ManyPerson είναι στον φάκελο shared-> interfaces -> person.ts
}
