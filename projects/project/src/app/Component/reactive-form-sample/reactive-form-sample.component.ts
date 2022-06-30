import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.scss']
})
export class ReactiveFormSampleComponent implements OnInit {

  SignupForm!: FormGroup;
  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna', 'Chris'];


  constructor() { }

  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.SignupForm.valueChanges.subscribe(
    //   (value: any) => console.log(value)
    // );

    this.SignupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    this.SignupForm.setValue({
     userData: {
       'username': 'Max',
       'email': 'max@test.com',
     },
       'gender': 'male',
       'hobbies': []
    })

    this.SignupForm.patchValue({
      userData: {
        'username': 'Anna',
      },
     })
  }

  onSubmit(): void {
    console.log(this.SignupForm);
    this.SignupForm.reset();
  }

  getControls() {
    return (<FormArray>this.SignupForm.get('hobbies')).controls;
  }

  onAddHobby(){
    const controls = new FormControl(null, Validators.required);;
    this.getControls().push(controls);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else{
      return null;
    }
  }

  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=>{
        if (control.value === 'test@test.com'){
          resolve ({'emailIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500)
    });

    return promise
  }
}