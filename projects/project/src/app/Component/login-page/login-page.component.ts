import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('f') signupForm!: NgForm;
  answer = "";
  genders = ['male', 'female'];
  defaultQuestion = "pet";

  user = {
    email: '',
    password: '',
    secretQuestion: '',
    gender: '',
    Answer: ''
  }

  submitted = false;
  Answer: any;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;
    this.Answer = this.signupForm.value.questionAnswer;

    this.signupForm.reset(); 
  }

  suggestUserName() {
    const suggestedName = 'blaztviper22@gmail.com';
    // this.signupForm.setValue({
    //   userData: {
    //     email: suggestedName,
    //     password: ''
    //   },
    //   secret: 'pet',
    //   gender: 'male',
    //   questionAnswer: ''
    // });
    this.signupForm.form.patchValue({
      userData: {
        email: suggestedName
      }
    });
  }

}
