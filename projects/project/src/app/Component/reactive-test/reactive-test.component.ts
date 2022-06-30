import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-reactive-test',
  templateUrl: './reactive-test.component.html',
  styleUrls: ['./reactive-test.component.scss']
})
export class ReactiveTestComponent implements OnInit {

  status = ['Stable', 'Critical', 'Advance'];
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'projectname': new FormControl(
        null,
        [Validators.required,CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl('critical')
    })
  };
 
  submit() {
    console.log(this.form);
  }
}
