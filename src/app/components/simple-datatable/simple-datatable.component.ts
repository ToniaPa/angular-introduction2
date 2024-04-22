import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es'; //η lodash-es είναι βιβλιοθήκη -> την κάνουμε npm install

  // Lodash can help you write code that is more consistent, elegant, and professional. Lodash enhances code readability by introducing expressive, descriptive, and declarative functions. These functions simplify complex operations, making code easier to understand, maintain, and debug.

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})

//ΤΟ ΠΑΡΟΝ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ ΑΠΟ ΤA Simple-DataTable-Example & component-output-example & template-driven-form-example & reactive-form-example//
//ΔΕΝ ΕΙΝΑΙ ΑΥΤΟΝΟΜΟ //
// ΤΑ data ΔΕΝ ΠΕΡΝΑΝΕ ΕΔΩ ΑΛΛΑ ΣΤA simple-datatable-example.ts & component-output-example.ts &template-driven-form-example.ts & reactive-form-example.ts
// ΕΔΩ ΔΗΛΩΝΟΥΜΕ ΤΗΝ ΜΟΡΦΗ ΤΩΝ data

export class SimpleDatatableComponent {
  @Input() data: EPerson[]; // εδώ ορίζουμε property 
  @Output() personClicked = new EventEmitter<EPerson>(); //εδώ ορίζουμε custom event δηλ ένα δικό μας event που το ονομάζουμε personClicked το οποίο ενεργοποιείται στην onPersonClicked (γίνεται emit= εκπέμπεται, και μαζί του εκμπέμπονται τα data που του λέμε να έχει μαζί του, δες στο τέλος του παρόντος), το onPersonClicked εκτελείται στο διπλό κλικ μιας γραμμής του πίνακα (το διπλό κλικ event μας το δίνει ο πίνακας, ΔΕΝ είναι custom event): <tr class="align-middle" (dblclick)="onPersonClicked(row)"> (δες το html του παρόντος)
    
  //θέλω να βλεπω τα data της row σε ένα νέο μικρό παράθυρο όταν κάνω dbclick στην row του πίνακα->
  // EventEmitter = Use in components with the @Output directive to emit (εκπέμπω) custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance (εν προκειμένω στο personClicked), δες στο τέλος την onPersonClicked.

  //sorting: θέλω να πατάω στον Header της στήλης και να κάνει sort 
  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  };
  //library: lodash-es
  //φτιάχνουμε function:
  sortData(sortKey: string) { //εναλλαγή μεταξύ asc και desc:
    if (this.sortOrder[sortKey] === 'asc') { // το sortOrder είναι object, είναι πιο πάνω (εμείς το φτιάξαμε,)
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortKey).reverse(); //sortBy είναι μέθοδος της lodash, η reverse είναι μεθοδος της typescript      
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey); //sortBy είναι μέθοδος της lodash
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none'; //= init all other fields, except the one for sorting
      }
    }
  }

  sortSign(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      return '↑';
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '↓';
    } else {
      return '';
    }
  }

  // το dblclick αφορά το component-output-example μόνο
  onPersonClicked(person: EPerson) { //@Output, dbclick
    this.personClicked.emit(person); //Emits (εκπέμπω) an event containing a given value. param = the value to emit.
  }
}
