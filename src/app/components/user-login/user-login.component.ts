import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
    // login με:
    // tonia@aueb.gr ή iraklis@aueb.gr ή adonis@aueb.gr
    // password: 1234

  userService = inject(UserService); //=  dependency injection του user.service.ts στον φάκελο services, εμείς το έχουμε φτιάξει, στην πλευρά του user.service.ts κάνουμε @Injectable(...) => δηλώνουμε την σχέση του dependency injection ΚΑΙ ΣΤΙΣ ΔΥΟ ΠΛΕΥΡΕΣ      

  router = inject(Router); //= ο Router είναι της angular

  invalidLogin = false;

  form = new FormGroup({ //= FormGroup της angular
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }); //οι Validators κάνουν έλεγχο για αυτά που του λέμε δηλ required & valid email => ΔΕΝ γράφουμε εμείς κώδικα για αυτούς τους ελέγχους -> είναι του FormControl

  onSubmit() {
    const credentials = this.form.value as Credentials; //Credentials = interface που το έχουμε φτιάξει εμείς, δες 'src/app/shared/interfaces/user'
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.access_token;
        console.log('access_token (στο onSubmit() της user-login.ts)', access_token);
        localStorage.setItem('access_token', access_token); //αυτή είναι HTML εντολή δεν είναι angular -> localstorage του browser
        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser;//decodedTokenSubject = ένα ονομα που το δίνουμε εμείς, jwtDecode = πρέπει να έχουμε εγκαταστήσει με npm i jwt-decode,  
        // .sub = ό,τι κουβαλάει το access_token που μας στέλνει το backend βρίσκεται μέσα στο sub, με to as κάνουμε type cast, as unknown το κάνουμε πάντα όταν δεν ξέρουμε τι είναι
        this.userService.user.set({
          fullname: decodedTokenSubject.fullname,
          email: decodedTokenSubject.email
        });
        this.router.navigate(['restricted-content-example']); //εδώ είμαστε στην περίπτωση που ο user έχει τα σωστά credentials και άρα γίνεται logged in και το επόμενο βήμα είναι να πάει στην οθόνη του restricted-content component (έτσι του λέμε εμείς να κάνει) δηλ όταν ο user έχει τα σωστά credentials του επιτρέπουμε να δει την restricted-content, αλλιώς δεν την βλέπει
      },
      error: (response) => {
        console.log('Login error', response);
        this.invalidLogin = true;
      },
    });
  }
}
