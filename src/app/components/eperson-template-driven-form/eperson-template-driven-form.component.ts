import { Component, EventEmitter, Output } from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/person';

// ΤΟ ΠΑΡΟΝ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ ΑΠΟ ΤΟ template-driven-form-example
// ΔΕΝ ΕΙΝΑΙ ΑΥΤΟΝΟΜΟ

@Component({ //=του λέμε ότι είναι Angular Component με το configuration:
  selector: 'app-eperson-template-driven-form',
  standalone: true,
  // τα παρακάτω είναι Material design της angular -> google it!
  //είναι έτοιμα πράγματα που τα χρησιμοποιούμε
  //στο eperson-template-driven-form.component.html είναι ό,τι είναι γραμμένο με mat-blabla δηλ ξεκινάει με mat-
  imports: [MatFormField,
            MatInputModule,
            MatSelectModule,
            MatButtonModule,
            FormsModule
  ],
  // Χρήση του `FormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να δημιουργούνται objects από τις φόρμες). => το # π.χ. #form είναι δικό της
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})


// ΤΟ ΠΑΡΟΝ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ ΑΠΟ ΤΟ template-driven-form-example
// ΔΕΝ ΕΙΝΑΙ ΑΥΤΟΝΟΜΟ

export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>(); //κάνουμε export την φόρμα με τα data που συμπληρώθηκαν 
  onSubmit(value: any) {
    console.log(value as EPerson);
    this.person.emit(value as EPerson); //δες τον παραπάνω Emitter !
   
  };
}
