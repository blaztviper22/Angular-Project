import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  };

  onAddBlueprint(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  };

  onIntervalFired(firednumber: number) {
      if(firednumber % 2 === 0) {
        this.evenNumbers.push(firednumber);
      } else {
        this.oddNumbers.push(firednumber);
      }
  }
}
