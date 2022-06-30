import { Component, OnInit } from '@angular/core';

 interface TopCard {
   imgSrc: string;
   name: string;
   description: string;
   charge: string;
 }
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orders_count = '10';
  reviews_count = '150';
  click_count = '430';
  shares_count = '43';
  items!: Array<TopCard>;


  constructor() {
    this.items = [
      {
        imgSrc: '../../../../assets/card-1.jpg',
        name: 'Understanding',
        description: 'In-depth knowledge and experience make it possible to solve problem',
        charge: 'More'
      },
      {
        imgSrc: '../../../../assets/card-2.jpg',
        name: 'Planning',
        description: 'Plan before anything. That will help to make a quality product.',
        charge: 'More'
      },
      {
        imgSrc: '../../../../assets/card-3.jpg',
        name: 'Implementing',
        description: 'Implementing quickly what we have planed. Do reviews until you satisfy',
        charge: 'More'
      }
    ]
  }

  ngOnInit(): void {
  
  }
}
