import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userService = inject(UserService); //o constructor θα εκτελεστεί μία μόνο φορά, μπορεί να είναι σε διάφορα σημεία το inject(UserService); ΑΛΛΑ ο constructor θα εκτελεστεί μία μόνο φορά, την πρώτη που θα βρει το inject και δεν θα έχει δημιουργηθεί, όλα τα άλλα Inject κοιτάνε το ήδη δημιουργημένο

  user = this.userService.user; //= το signal του user.service.ts

  logout() {
    this.userService.logoutUser();
  }

}
