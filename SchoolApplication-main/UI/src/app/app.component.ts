import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  mobileQuery: MediaQueryList;
  showMenu: Boolean;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from(
  //   {length: 50},
  //   () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  // );

  private _mobileQueryListener: () => void;
  isloggedIN: boolean = false;
  userName: string;
  @ViewChild("menuSidenav") sideNave: any;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public authService: AuthService,
    private observer: BreakpointObserver,
    private router: Router,
    private accountService: AccountService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener,
    );
    this.userName = accountService.loggedInUserName;
    this.isloggedIN = accountService.isLoggedIn;
    this.showMenu = false;
  
    this.authService.isLoggedIn$.subscribe((res) => {
      if (res) {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    } else {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    }
  }

  shouldRun = true;
  ///(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  public menus = new Array();
  public submenu: any = new Array();
  navmenuclick(value: number) {
    for (let i = 0; i < 5; i++) {
      if (i != value) {
        this.menus[i] = false;
        /*Submenu Code Start*/
        this.submenu[i + '.' + 0] = false;
        this.submenu[i + '.' + 1] = false;
        /*Submenu Code Close*/
      }
    }
    if (this.menus[value] == true) {
      this.menus[value] = false;
    } else {
      this.menus[value] = true;
    }
  }

  onLogout() {
    this.authService.logout();
    this.accountService.isLoggedIn = false;
    this.router.navigate(['./login']);
  }
}

