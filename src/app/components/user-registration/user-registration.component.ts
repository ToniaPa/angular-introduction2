import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  userService = inject(UserService); //= user.service.ts στον φάκελο services, εμείς το έχουμε φτιάξει

  registrationStatus: { success: boolean; message: string } = {
    success: false, //initial value
    message: 'Not attempted yet', //initial value
  };

  form = new FormGroup(
    {
      givenName: new FormControl('', Validators.required),
      surName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    },
    this.passwordConfirmValidator, //εδώ δηλώνουμε δική μας function
  );

  passwordConfirmValidator(form: FormGroup) { //εδώ περνάει όλη η φόρμα 
    //form.get χάρη στο FormGroup & η το ότι στέλνουμε τις μεταβλητές και τις λαμβάνουμε είναι χάρη στο ReactiveFormsModule
    if (form.get('password').value !== form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({ passwordMismatch: true });
      return { passwordMismatch: true }; //passwordMismatch = custom error, δικό μας error, το οποίο θέλουμε να είναι object, θέλουμε να βγάλουμε μνμ στο html, το html παίρνει το passwordMismatch 
    }
    return {}; //κενό object = είναι οκ το validation
  }

  onSubmit(value: any) {
    console.log('User Registration, form data: ', value);

    const user = this.form.value as User; //type cast, όμως δεν κάνει 1:1 δηλ 
    // αν το this.form.value εχει παραπάνω πεδία από το User θα τα βάλει και αυτά
    console.log('User Registration, user: ', user);
    delete user['confirmPassword']; //ο user δεν έχει πεδίο confirmPassword, το confirmPassword είναι της φόρμας δηλ του html => το διαγράφουμε
    console.log('User Registration, user after delete confirmPassword: ', user);

    this.userService.registerUser(user).subscribe({ //θα εκτελεστεί η registerUser(user: User) {...} του user.service.ts Η οποία στέλνει εντολή Post στο backend (δες τα σχόλια εκεί)
      //εδώ έχω πάρει την απάντηση του backend:
      next: (response) => { //= αν δεν πάρω error από το backend
        console.log("user-registration.ts (registerUser) success (step 3): ", response.msg);
        this.registrationStatus = { success: true, message: response.msg };
      },
      error: (response) => {
        const message = response.error.msg;
        console.log("user-registration.ts (registerUser) error (step 3): ", message);
        this.registrationStatus = { success: false, message };
      },
    });
  }

  registerAnotherUser() {
    this.form.reset();
    this.registrationStatus = { success: false, message: 'Not attempted yet' };
  }

  check_duplicate_email() {
    const email = this.form.get('email').value;

    this.userService.check_duplicate_email(email).subscribe({
      next: (response) => {
        console.log("user-registration.ts (check_duplicate_email) success: ", response.msg);
        this.form.get('email').setErrors(null);
      },
      error: (response) => {
        const message = response.error.msg;
        console.log("user-registration.ts (check_duplicate_email) error: ", message);
        this.form.get('email').setErrors({ duplicateEmail: true });
      },
    });
  }
}