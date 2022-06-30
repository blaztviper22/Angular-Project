import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iput-sample',
  templateUrl: './iput-sample.component.html',
  styleUrls: ['./iput-sample.component.scss']
})
export class IputSampleComponent implements OnInit {

  input = '';
  constructor() { }

  ngOnInit(): void {
  }
 
  onUpdateEvent(event: Event): void{
    this.input = (<HTMLInputElement>event.target).value
  }
}
