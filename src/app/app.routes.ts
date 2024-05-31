import { Routes } from '@angular/router';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
// import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestrictedContentExampleComponent } from './components/restricted-content-example/restricted-content-example.component';
import { authGuard } from './shared/guards/auth.guard';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FunForNerdsComponent } from './components/fun-for-nerds/fun-for-nerds/fun-for-nerds.component';
import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
import { CrudReadExampleComponent } from './components/crud/crud-read-example/crud-read-example.component';
import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';

export const routes: Routes = [
  {
    path: 'component-input-example',
    component: ComponentInputExampleComponent,
  },
  {
    path: 'for-directive-example',
    component: ForDirectiveExampleComponent,
  },
  { path: 'event-bind-example', component: EventBindExampleComponent },
  {
    path: 'simple-datatable-example',
    component: SimpleDatatableExampleComponent,
  },
  {
    path: 'component-output-example',
    component: ComponentOutputExampleComponent,
  },
  {
    path: 'template-driven-form-example',
    component: TemplateDrivenFormExampleComponent,
  },
  {
    path: 'reactive-form-example',
    component: ReactiveFormExampleComponent,
  },
  {
    path: 'http-client-example',
    component: HttpClientExampleComponent,
  },
  {
    path: 'user-registration-example',
    component: UserRegistrationComponent,
  },
  {
    path: 'restricted-content-example',
    component: RestrictedContentExampleComponent,
    canActivate: [authGuard], //δες auth.quard.ts στον φάκελο shared->guards
    // canActivate = An array of CanActivateFn or DI tokens used to look up CanActivate() handlers, in order to determine if the current user is allowed to activate the component. By default, any user can activate.
    // When using a function rather than DI tokens, the function can call inject to get any required dependencies. This inject call must be done in a synchronous context. -> Τι μας λέει εδώ? ότι έχουμε [] επειδή μπορούμε να βάλουμε όσους guards Θέλουμε, οι οποίοι εκτελούνται synchronously, συνεπώς για να πάει στον επόμενο πρέπει να εκτελεστεί επιτυχώς ο προηγούμενος
  },
  {
    path: 'login',
    component: UserLoginComponent,
  }, //εδώ μας κάνει redirect o authGuard (δες shared/guards/auth.guard.ts)
  {
    path: 'fun-for-nerds',
    component: FunForNerdsComponent,
  },
  {
    path: 'crud-example',
    component: CrudDashboardComponent,
    canActivate: [authGuard], //πρώτα κάνουμε login και μετά μπαίνουμε στην CRUD οθόνη (αυτή είναι η λογική της εφαρμογής)
    //δες auth.quard.ts στον φάκελο shared->guards
  },
  {
    path: 'crud-example/create',
    component: CrudCreateExampleComponent,
    canActivate: [authGuard], //πρώτα κάνουμε login και μετά μπαίνουμε στην CRUD οθόνη (αυτή είναι η λογική της εφαρμογής)
  },
  {
    path: 'crud-example/read',
    component: CrudReadExampleComponent,
    canActivate: [authGuard], //πρώτα κάνουμε login και μετά μπαίνουμε στην CRUD οθόνη (αυτή είναι η λογική της εφαρμογής)
  },
  {
    path: 'crud-example/update',
    component: CrudUpdateExampleComponent,
    canActivate: [authGuard], //πρώτα κάνουμε login και μετά μπαίνουμε στην CRUD οθόνη (αυτή είναι η λογική της εφαρμογής)
  },
  {
    path: 'crud-example/delete',
    component: CrudDeleteExampleComponent,
    canActivate: [authGuard], //πρώτα κάνουμε login και μετά μπαίνουμε στην CRUD οθόνη (αυτή θέλουμε να είναι η λογική της εφαρμογής), εδώ του λέμε ότι το συγκεκριμένο path ΔΕΝ ΕΙΝΑΙ ΑΜΕΣΑ ΔΙΑΘΕΣΙΜΟ (στον οποιοδήποτε)
    //δες auth.quard.ts στον φάκελο shared->guards
  },
  { path: '', component: WelcomeComponent },
];
