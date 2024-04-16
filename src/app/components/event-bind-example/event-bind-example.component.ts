import { Component } from '@angular/core';

@Component({ //= του λέμε ότι είναι Angular component με το παρακάτω config:
  selector: 'app-event-bind-example',
  standalone: true,
  imports: [],
  templateUrl: './event-bind-example.component.html',
  styleUrl: './event-bind-example.component.css'
})

// Καθε component που φτιάχνουμε με ng generate component 
// είναι μία κλάση
export class EventBindExampleComponent {
  times: number = 0; // = μετρητής, εμείς τον βάζουμε

  userInput: string = ''; //= εμείς την βάζουμε την μεταβλητή αυτή

  incrementTimes() {
    this.times++;
  }

  decrementTimes() {
    this.times--;
  }

  resetTimes() {
    this.times = 0;
  }

  onUserInput(event: Event) {
    //echo -> αυτό που γράφει ο χρήστης το βάζουμε από κάτω
    const value = (event.target as HTMLInputElement).value; //event.target = returns the object στο οποίο έγινε το event
    this.userInput = value;
  }
}
