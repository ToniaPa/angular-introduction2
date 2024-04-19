import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  user = signal<LoggedInUser | null>(null) //signal = μου το δίνει το angular framework, εδώ του λέμε ότι θα γίνει null μετά που θα βάλουμε το username & password -> κι έτσι δεν φαίνονται

  constructor() {
    //διαβάζουμε το παραπάνω signal:
    //το effect έχει πρόσβαση σε όλα τα signals
    effect(() => {
      if (this.user()) {//=διαβάζουμε το signal καλώντας το σαν function!
        console.log('User Logged In', this.user().fullname)
      } else {
        console.log('No user Logged In')
      }
    })

  }

  registerUser(user: User) {
    return this.http.post<{ msg: string }>(`${API_URL}/register`, user);
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ msg: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ access_token: string }>(
      `${API_URL}/login/`,
      credentials,
    );
  }
}
