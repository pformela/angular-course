/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public genders: string[] = ['male', 'female'];
  public signupForm: FormGroup = new FormGroup({});
  public forbiddenUsernames: string[] = ['Chris', 'Anna'];

  public ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.asyncForbiddenEmails().bind(this)]
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    this.signupForm.statusChanges.subscribe((status: string) => {
      console.log(status);
    });
  }

  public onSubmit(): void {
    console.log(this.signupForm);
  }

  public onAddHobby(): void {
    const control: FormControl = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  public getControls(): FormControl[] {
    return (this.signupForm.get('hobbies') as FormArray)
      .controls as FormControl[];
  }

  public forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.includes(control.value)) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  public asyncForbiddenEmails(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Observable<ValidationErrors | null>
      | Promise<ValidationErrors | null> => {
      return new Promise((resolve: any) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({ emailIsForbidden: true });
          }

          resolve(null);
        }, 1500);
      });
    };
  }
}
