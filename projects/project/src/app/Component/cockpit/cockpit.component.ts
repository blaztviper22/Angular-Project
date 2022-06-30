import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  serverElements = [];
  

  // newServerName = '';
  // newServerContent = '';
  // newServerName = '';
  // newServerContent = '';


  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement): void {
   this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  };

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  };
}


