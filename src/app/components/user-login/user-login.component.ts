import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {

  userService = inject(UserService); //= user.service.ts στον φάκελο services, εμείς το έχουμε φτιάξει
  router = inject(Router); //= angular

  invalidLogin = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.access_token;
        localStorage.setItem('access_token', access_token); //αυτή είναι HTML εντολή δεν είναι angular -> localstorage του browser
        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser//decodedTokenSubject = ένα ονομα που το δίνουμε εμείς, jwtDecode = πρέπει να έχουμε εγκαταστήσει την npm i jwt-decode,  .sub = ό,τι κουβαλάει το access_token που μας στέλνει το backend βρίσκεται μέσα στο sub, με to as κάνουμε type cast, as unknown το κάνουμε πάντα όταν δεν ξέρουμε τι είναι
        this.userService.user.set({
          fullname: decodedTokenSubject.fullname,
          email: decodedTokenSubject.email
        })
        this.router.navigate(['restricted-content-example']); //εδώ είμαστε στην περίπτωση που ο user έχει τα σωστά credentials και άρα γίνεται logged in και το επόμενο βήμα είναι να πάει στην οθόνη του restricted-content component
      },
      error: (response) => {
        console.error('Login error', response);
        this.invalidLogin = true;
      },
    });
  }
}
