/* eslint-disable no-console */
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public suggestedName: string = '';
  @ViewChild('f') private singupForm: NgForm = new NgForm([], []);
  public defaultQuestion: string = 'pet';
  public answer: string = '';
  public submitted: boolean = false;
  public genders: string[] = ['male', 'female'];
  /* eslint-disable */
  public user: {
    username: string;
    email: string;
    secretQuestion: string;
    answer: string;
    gender: string;
  } = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  /* eslint-enable */

  public suggestUserName(): void {
    this.suggestedName = 'Superuser';
    // in this method we have to set values for all the form fields
    // this.singupForm.setValue({
    //   userData: {
    //     username: 'Superuser',
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    // override part of the form
    this.singupForm.form.patchValue({
      userData: {
        username: 'Superuser',
      },
    });
  }

  // public onSubmit(ngForm: NgForm): void {
  //   console.log('Submitted!');
  //   console.log(ngForm);
  // }

  public onSubmit(): void {
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.questionAnswer;
    this.user.gender = this.singupForm.value.gender;

    this.submitted = true;

    this.singupForm.reset();

    // console.log(this.user);
  }

  public showFormDetails(): void {
    // console.log(this.singupForm);
  }
}
