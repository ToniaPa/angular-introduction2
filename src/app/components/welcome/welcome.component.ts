import { Component } from '@angular/core';

//@Component= Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({ //= το configuration της παρούσας class (= class WelcomeComponent)
  selector: 'app-welcome', //The CSS selector that identifies this component in a template and triggers its instantiation.
  standalone: true,
  imports: [], //The imports property είναι μόνο για standalone = true, specifies the standalone component's template dependencies — those directives, components, and pipes that can be used within its template. 
  templateUrl: './welcome.component.html',  //The relative path or absolute URL of a template file for an Angular component.  
  styleUrl: './welcome.component.css' //One relative paths or an absolute URL for files containing CSS stylesheet to use in this component.
})

export class WelcomeComponent {
  name='Tonia';
}
