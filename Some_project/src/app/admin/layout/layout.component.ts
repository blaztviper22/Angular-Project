import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('snav') sidenav!: MatSidenav;
  sideNavDefaultOpened: boolean = true;
  showfullMenu: boolean = true;
  isExpanded: boolean = true;
  closeWidth: number = 75;
  openWidth: number = 250;
  isMobile!: boolean;
  sideNavMode!: 'push' | 'over' | 'side';
  toolBarHeight: number = 64;
  mediaWatcher!: Subscription;
  isDarkTheme: boolean = false;
  media!: MediaObserver;

  constructor() { 
  }

  ngOnInit(): void {
    this.mediaWatcher = this.media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.sideNavDefaultOpened) {
          this.sideNavDefaultOpened = false;
          this.isExpanded = false;
        }

        this.isMobile = true;
        this.showfullMenu = true;
        this.sideNavMode = 'over';
      } else {
        
        this.isMobile = false;
        this.sideNavDefaultOpened = true;
        this.sideNavMode = 'side';
      }

      if(change.mqAlias === 'xs') {
        this.toolBarHeight = 56;
      } else {
        this.toolBarHeight = 64;
      }
    })
  }

  ngAfterViewInit(): void {
    this.sidenavContainer.scrollable.elementScrolled().subscribe((a)=>{

    });
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

  onToolbarMenuToggle(): void {
    if(this.isMobile) {
      if(!this.isExpanded){
        setTimeout(()=>{
          this.sidenav.toggle();
        }, 150);
      } else {
        this.sidenav.toggle();
      }
    } else {
      if(!this.isExpanded) {
        setTimeout(()=>{
          this.showfullMenu = true;
        }, 150)
      } else {
        this.showfullMenu = false;
      }
    }
    this.isExpanded =!this.isExpanded;
  }
}
