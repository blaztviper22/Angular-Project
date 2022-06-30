import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideNavToggle.emit();
  }

  onLoggedout() {
    localStorage.removeItem('liloggedin');
    this.router.navigate(['/']);
  }

}
