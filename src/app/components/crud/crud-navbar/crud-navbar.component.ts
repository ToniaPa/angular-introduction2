import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crud-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './crud-navbar.component.html',
  styleUrl: './crud-navbar.component.css'
})

/*** ΤΟ ΠΑΡΟΝ ΚΑΛΕΊΤΑΙ ΑΠΌ ΌΛΑ ΤΑ ΥΠΟΜΕΝΟΥ: crud-read-example, crud-update-example, crud-delete-example MEΣΑ ΣΤΟ import ΤΩΝ .ts 
 * KAI ΑΠΟ ΤΟ crud-dashboard.ts 
 * (όλα είανι στο app.routes.ts ΕΚΤΟΣ ΑΠΟ ΤΟ ΠΑΡΟΝ)***/

export class CrudNavbarComponent {

}
