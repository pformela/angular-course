import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') public form: NgForm = new NgForm([], []);
  public defaultSubscription: string = 'advanced';
  public formSubmitted: boolean = false;
  /* eslint-disable */
  public formValues: {
    email: string;
    subscription: string;
    password: string;
  } = {
    email: '',
    subscription: '',
    password: '',
  };
  /* eslint-enable */

  public onSubmit(): void {
    this.formValues.email = this.form.value.email;
    this.formValues.subscription = this.form.value.subscription;
    this.formValues.password = this.form.value.password;

    this.formSubmitted = true;
  }
}
