import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component-sample',
  templateUrl: './ng-if-component-sample.component.html',
  styleUrls: ['./ng-if-component-sample.component.scss']
})
export class NgIfComponentSampleComponent implements OnInit {
 
  servername = 'testserver';
  serverCreationStatus = 'No server was created!';
  serverCreated = false
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was Created! Name is' + this.servername;
  }
}
