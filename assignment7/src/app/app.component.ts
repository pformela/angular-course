/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
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
  public projectForm: FormGroup = new FormGroup({});

  public ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        [this.asyncForbiddenProjectNames().bind(this)]
      ),
      projectStatus: new FormControl('Stable', [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
    });
  }

  public onSubmit(): void {
    console.log('Form submitted');

    console.log(this.projectForm);
  }

  public forbiddenProjectNames(
    control: FormControl
  ): { [s: string]: boolean } | null {
    if (control.value === 'Test') {
      return { nameIsForbidden: true };
    }

    return null;
  }

  public asyncForbiddenProjectNames(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Observable<ValidationErrors | null>
      | Promise<ValidationErrors | null> => {
      return new Promise((resolve: any) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({ nameIsForbidden: true });
          }

          resolve(null);
        }, 1500);
      });
    };
  }
}
