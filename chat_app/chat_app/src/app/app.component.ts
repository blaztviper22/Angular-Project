import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chat_app';
  public roomId!: string;
  public messageText!: string;
  public messageArray: {user: string, message: string}[] = [];

  public phone!: string;
  public currentUser!: any;
  public selectedUser!: any;

  public userList = [
    {
      id: 1,
      name: 'The swag coder',
      phone: '09351176088',
      image: 'asset/brett.jpg',
      roomId: {
        1: 'room-1',
        2: 'room-2',
        3: 'room-3'
      }
    },
    {
      id: 2,
      name: 'Mahesh Darkunde',
      phone: '09510431873',
      image: 'assets/mahesh.jpg',
      roomId: {
        1: 'room-1',
        2: 'room-4',
        3: 'room-5'
      }
    },
    {
      id: 3,
      name: 'Jame Ladion',
      phone: '09280197708',
      image: 'assets/jame.jpg',
      roomId: {
        1: 'room-2',
        2: 'room-4',
        3: 'room-6'
      }
    }
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void{
    this.chatService.getMessage().subscribe((data: {user: string, message: string})=>{
      this.messageArray.push(data);
    });

    this.currentUser = this.userList[0];
  }

  selecteUserHandler(phone: string): void {
    this.selectedUser = this.userList.find(user=> user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.selectedUser.id];
    this.messageArray = [];

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void { 
    this.chatService.joinRoom({user: username, roomId: roomId})
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      data: this.currentUser.name, 
      room: this.roomId,
      message: this.messageText
    });

    this.messageText = '';
  }
}
